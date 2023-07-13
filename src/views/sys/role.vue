<template>
  <div>
    <!-- 角色管理 -->
    <!-- 搜索栏 -->
    <el-card id="search">
      <el-row>
        <el-col :span="20">
          <el-input
            v-model="searchModel.roleName"
            placeholder="角色名称"
            clearable
          ></el-input>

          <el-button
            type="primary"
            round
            icon="el-icon-search"
            @click="getRoleList"
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
      <el-table :data="roleList" stripe style="width: 100%">
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
          prop="roleId"
          label="角色ID"
          width="200" align="center"
        ></el-table-column>
        <el-table-column
          prop="roleName"
          label="角色名称"
          width="260" align="center"
        ></el-table-column>

        <el-table-column prop="roleDesc" label="角色描述" align="center"></el-table-column>
        <el-table-column label="操作" width="180" align="center">
          <template slot-scope="scope">
            <el-button
              type="primary"
              @click="openEditUI(scope.row.roleId)"
              icon="el-icon-edit"
              circle
            ></el-button>
            <el-button
              @click="deleteRole(scope.row)"
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

    <!-- 角色信息编辑对话框 -->
    <el-dialog
      @close="clearForm"
      :title="title"
      :visible.sync="dialogFormVisible"
    >
      <el-form :model="roleForm" ref="roleFormRef" :rules="rules">
        <el-form-item
          label="角色名称"
          prop="roleName"
          :label-width="formLabelWidth"
        >
          <el-input v-model="roleForm.roleName" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item
          label="角色描述"
          prop="roleDesc"
          :label-width="formLabelWidth"
        >
          <el-input v-model="roleForm.roleDesc" autocomplete="off"></el-input>
        </el-form-item>

        <el-form-item
          label="权限设置"
          prop="menuIdList"
          :label-width="formLabelWidth"
        >
          <!-- default-expand-all 默认全部展开   show-checkbox 显示checkbox-->
          <el-tree
            :data="menuList"
            :props="menuProps"
            show-checkbox
            default-expand-all
            style="width: 85%"
            node-key="menuId"
            ref="menuRef"
          ></el-tree>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisible = false">取 消</el-button>
        <el-button type="primary" @click="saveRole">确 定</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
import roleApi from "@/api/roleManage";
import menuApi from "@/api/menuManage";
export default {
  data() {
    return {
      menuList: [],
      menuProps: {
        children: "children",
        label: "title",
      },

      formLabelWidth: "130px",
      roleForm: {},
      dialogFormVisible: false,
      title: "",
      total: 0,
      searchModel: {
        pageNo: 1,
        pageSize: 10,
      },
      roleList: [],
      rules: {
        roleName: [
          { required: true, message: "请输入角色名称", trigger: "blur" },
          {
            min: 2,
            max: 15,
            message: "长度在 2 到 15 个字符",
            trigger: "blur",
          },
        ],
        roleDesc: [
          { required: true, message: "请输入角色描述", trigger: "blur" },
          {
            min: 3,
            max: 18,
            message: "长度在 3 到 18 个字符",
            trigger: "blur",
          },
        ],
      },
    };
  },
  methods: {
    async getAllMenu() {
      let res = await menuApi.getAllMenu();
      if (res.code === 20000) {
        this.menuList = res.data;
      }
    },
    handleSizeChange(val) {
      // console.log(`每页 ${val} 条`);
      this.searchModel.pageSize = val;
      this.getRoleList();
    },
    handleCurrentChange(val) {
      // console.log(`当前页: ${val}`);
      this.searchModel.pageNo = val;
      this.getRoleList();
    },
    async getRoleList() {
      let res = await roleApi.getRoleList(this.searchModel);
      //  console.log(res);
      if (res.code === 20000) {
        this.roleList = res.data.rows;
        this.total = res.data.total;
      }
    },
    async openEditUI(id) {
      if (id == null) {
        this.title = "新增角色";
      } else {
        this.title = "修改角色";
        // 根据id查询角色信息
        let res = await roleApi.getRoleById(id);
        // console.log(res, "根据id查询角色信息");
        if (res.code === 20000) {
          this.roleForm = res.data;
          this.$nextTick(() => {
            this.$refs.menuRef.setCheckedKeys(res.data.menuIdList); //设置树形菜单选中状态
          });
        }
      }
      this.dialogFormVisible = true;
    },
    clearForm() {
      this.roleForm = {}; //清空表单数据
      this.$refs["roleFormRef"].clearValidate(); //清空表单验证规则
      // this.$refs.roleFormRef.clearValidate();
      this.$refs.menuRef.setCheckedKeys([]); //清空树形菜单选中状态
    },
    saveRole() {
      // 触发表单验证
      this.$refs.roleFormRef.validate(async (valid) => {
        if (valid) {
          let checkedKeys = this.$refs.menuRef.getCheckedKeys(); // 选中的节点
          let halfCheckedKeys = this.$refs.menuRef.getHalfCheckedKeys(); // 半选中的节点
          this.roleForm.menuIdList = checkedKeys.concat(halfCheckedKeys);
          // 提交请求给后台
          let res = await roleApi.saveRole(this.roleForm);
          if (res.code === 20000) {
            // 成功的提示
            this.$message({
              message: res.message,
              type: "success",
            });
            // 关闭对话框
            this.dialogFormVisible = false;
            // 刷新表格
            this.getRoleList();
          }
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },
    deleteRole(role) {
      this.$confirm(`您确认删除角色 ${role.roleName} ?`, "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning",
      })
        .then(() => {
          roleApi.deleteRoleById(role.roleId).then((res) => {
            this.$message({
              type: "success",
              message: res.message,
            });
            this.getRoleList();
          });
        })
        .catch(() => {
          this.$message({
            type: "info",
            message: "已取消删除",
          });
        });
    },
  },
  mounted() {
    this.getRoleList();
    this.getAllMenu();
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
</style>
