<template>
  <div>
    <!-- 用户管理 -->
    <!-- 搜索栏 -->
    <el-card id="search">
      <el-row>
        <el-col :span="20">
          <el-input
            v-model="searchModel.username"
            placeholder="用户名"
            clearable
          ></el-input>
          <el-input
            v-model="searchModel.phone"
            placeholder="电话"
            clearable
          ></el-input>
          <el-button
            type="primary"
            round
            icon="el-icon-search"
            @click="getUserList"
            >查询</el-button
          ></el-col
        >
        <el-col :span="4" align="right">
          <el-button
            @click="openEditUI(null)"
            type="primary"
            icon="el-icon-plus"
            circle
          ></el-button
        ></el-col>
      </el-row>
    </el-card>

    <!-- 结果列表 -->
    <el-card>
      <el-table :data="userList" stripe style="width: 100%">
        <!-- <el-table-column type="index" label="#" width="80"> </el-table-column> -->
        <el-table-column label="#" width="80">
          <!-- 分页序号处理 -->
          <template slot-scope="scope">
            {{
              (searchModel.pageNo - 1) * searchModel.pageSize + scope.$index + 1
            }}
          </template>
        </el-table-column>
        <el-table-column
          prop="id"
          label="用户ID"
          width="80"
          align="center"
        ></el-table-column>
        <el-table-column prop="id" label="用户头像" width="100" align="center">
          <template slot-scope="scope">
            <el-image
              style="width: 50px; height: 50px"
              :src="scope.row.avatar"
              fit="cover"
            ></el-image>
          </template>
        </el-table-column>
        <el-table-column
          prop="username"
          label="用户名"
          width="180"
          align="center"
        ></el-table-column>
        <el-table-column
          prop="phone"
          label="电话"
          width="180"
          align="center"
        ></el-table-column>
        <el-table-column
          prop="status"
          label="用户状态"
          width="180"
          align="center"
        >
          <template slot-scope="scope">
            <el-tag v-if="scope.row.status === 1">正常</el-tag>
            <el-tag v-else type="danger">禁用</el-tag>
          </template>
        </el-table-column>
        <el-table-column
          prop="email"
          label="电子邮箱"
          align="center"
        ></el-table-column>
        <el-table-column label="操作" width="180" align="center">
          <template slot-scope="scope">
            <el-button
              type="primary"
              @click="openEditUI(scope.row.id)"
              icon="el-icon-edit"
              circle
            ></el-button>
            <el-button
              @click="deleteUser(scope.row)"
              type="danger"
              icon="el-icon-delete"
              circle
            ></el-button>
          </template>
        </el-table-column>
      </el-table>
    </el-card>

    <!-- 分页组件 -->
    <el-pagination
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :current-page="searchModel.pageNo"
      :page-sizes="[5, 10, 15, 30]"
      :page-size="searchModel.pageSize"
      layout="total, sizes, prev, pager, next, jumper"
      :total="total"
    >
    </el-pagination>

    <!-- 用户信息编辑对话框 -->
    <el-dialog
      @close="clearForm"
      :title="title"
      :visible.sync="dialogFormVisible"
    >
      <el-form :model="userForm" ref="userFormRef" :rules="rules">
        <el-form-item
          label="用户头像"
          prop="avatar"
          :label-width="formLabelWidth"
        >
          <el-upload

            class="avatar-uploader"
            action="https://jsonplaceholder.typicode.com/posts/"
            :show-file-list="false"
            :on-success="handleAvatarSuccess"
            :before-upload="beforeAvatarUpload"
            :on-error="handleAvatarError"
             accept="image/gif,image/jpeg"
          >
            <img v-if="userForm.avatar" :src="userForm.avatar" class="avatar" />
            <i v-else class="el-icon-plus avatar-uploader-icon"></i>
          </el-upload>
        </el-form-item>
        <el-form-item
          label="用户名"
          prop="username"
          :label-width="formLabelWidth"
        >
          <el-input v-model="userForm.username" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item
          v-if="userForm.id == null || userForm.id == undefined"
          label="登录密码"
          prop="password"
          :label-width="formLabelWidth"
        >
          <el-input
            type="password"
            v-model="userForm.password"
            autocomplete="off"
          ></el-input>
        </el-form-item>
        <el-form-item label="联系电话" :label-width="formLabelWidth">
          <el-input v-model="userForm.phone" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="用户状态" :label-width="formLabelWidth">
          <el-switch
            v-model="userForm.status"
            :active-value="1"
            :inactive-value="0"
          >
          </el-switch>
        </el-form-item>

        <el-form-item label="用户角色" :label-width="formLabelWidth">
          <el-checkbox-group
            style="width: 85%"
            v-model="userForm.roleIdList"
            :max="2"
          >
            <el-checkbox
              v-for="role in roleList"
              :label="role.roleId"
              :key="role.roleId"
              >{{ role.roleDesc }}</el-checkbox
            >
          </el-checkbox-group>
        </el-form-item>

        <el-form-item
          label="电子邮箱"
          prop="email"
          :label-width="formLabelWidth"
        >
          <el-input v-model="userForm.email" autocomplete="off"></el-input>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisible = false">取 消</el-button>
        <el-button type="primary" @click="saveUser">确 定</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
import userApi from "@/api/userManage";
import roleApi from "@/api/roleManage";
export default {
  data() {
    var checkEmail = (rule, value, callback) => {
      var reg = /^([a-zA-Z\d][\w-]{2,})@(\w{2,})\.([a-z]{2,})(\.[a-z]{2,})?$/;
      if (!reg.test(value)) {
        return callback(new Error("邮箱格式有误"));
      }
      callback(); //重要！！！！！！！！！！
    };

    return {
      imageUrl: '', //用户头像
      roleList: [], //角色列表
      formLabelWidth: "130px", //表单label宽度
      userForm: {
        roleIdList: [], //用户角色
      }, //用户表单
      dialogFormVisible: false, //用户信息编辑对话框是否显示
      title: "", //对话框标题
      total: 0, //总记录数
      searchModel: {
        //查询条件
        pageNo: 1,
        pageSize: 10,
      },
      userList: [], //用户列表
      rules: {
        //表单验证规则
        username: [
          { required: true, message: "请输入用户名", trigger: "blur" },
          {
            min: 3,
            max: 50,
            message: "长度在 3 到 50 个字符",
            trigger: "blur",
          },
        ],
        password: [
          { required: true, message: "请输入初始登录密码", trigger: "blur" },
          {
            min: 3,
            max: 16,
            message: "长度在 3 到 16 个字符",
            trigger: "blur",
          },
        ],
        email: [
          { required: true, message: "请输入电子邮箱", trigger: "blur" },
          { validator: checkEmail, trigger: "blur" },
        ],
      },
    };
  },
  methods: {
    handleAvatarError(err, file, fileList) {
      this.$message.error("上传头像图片失败!");
    },
    handleAvatarSuccess(res, file) {
      this.userForm.avatar = URL.createObjectURL(file.raw);
    },
    beforeAvatarUpload(file) {
      const isJPG = file.type === "image/jpeg";
      const isLt2M = file.size / 1024 / 1024 < 2;

      if (!isJPG) {
        this.$message.error("上传头像图片只能是 JPG 格式!");
      }
      if (!isLt2M) {
        this.$message.error("上传头像图片大小不能超过 2MB!");
      }
      return isJPG && isLt2M;
    },

    handleSizeChange(val) {
      // console.log(`每页 ${val} 条`);
      this.searchModel.pageSize = val;
      this.getUserList();
    },
    handleCurrentChange(val) {
      // console.log(`当前页: ${val}`);
      this.searchModel.pageNo = val;
      this.getUserList();
    },
    async getUserList() {
      let res = await userApi.getUserList(this.searchModel);
      //  console.log(res);
      if (res.code === 20000) {
        this.userList = res.data.rows;
        this.total = res.data.total;
      }
    },
    async openEditUI(id) {
      if (id == null) {
        this.title = "新增用户";
      } else {
        this.title = "修改用户";
        // 根据id查询用户信息
        let res = await userApi.getUserById(id);
        // console.log(res, "根据id查询用户信息");
        if (res.code === 20000) {
          this.userForm = res.data;
        }
      }
      this.dialogFormVisible = true;
    },
    clearForm() {
      this.userForm = {
        roleIdList: [],
      }; //清空表单数据
      this.$refs["userFormRef"].clearValidate(); //清空表单验证规则
      // this.$refs.userFormRef.clearValidate();
    },
    saveUser() {
      // 触发表单验证
      this.$refs.userFormRef.validate(async (valid) => {
        if (valid) {
          // 提交请求给后台
          let res = await userApi.saveUser(this.userForm);
          if (res.code === 20000) {
            // 成功的提示
            this.$message({
              message: res.message,
              type: "success",
            });
            // 关闭对话框
            this.dialogFormVisible = false;
            // 刷新表格
            this.getUserList();
          }
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },
    deleteUser(user) {
      this.$confirm(`您确认删除用户 ${user.username} ?`, "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning",
      })
        .then(() => {
          userApi.deleteUserById(user.id).then((res) => {
            this.$message({
              type: "success",
              message: res.message,
            });
            this.getUserList();
          });
        })
        .catch(() => {
          this.$message({
            type: "info",
            message: "已取消删除",
          });
        });
    },
    async getAllRoleList() {
      let res = await roleApi.getAllRoleList();
      console.log(res);
      if (res.code === 20000) {
        this.roleList = res.data;
      }
    },
  },
  mounted() {
    this.getUserList();
    this.getAllRoleList();
  },
};
</script>

<style lang="scss" scoped>
#search .el-input {
  width: 200px;
  margin-right: 10px;
}
.el-dialog .el-input {
  width: 85%;
}


// 用户头像样式
 ::v-deep .avatar-uploader .el-upload  {
  border: 1px dashed #d9d9d9;
  border-radius: 6px;
  cursor: pointer;
  position: relative;
  overflow: hidden;
}
.avatar-uploader .el-upload:hover {
  border-color: #409eff;
}
.avatar-uploader-icon {
  font-size: 28px;
  color: #8c939d;
  width: 178px;
  height: 178px;
  line-height: 178px;
  text-align: center;
}
.avatar {
  width: 178px;
  height: 178px;
  display: block;
}
</style>
