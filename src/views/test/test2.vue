<template>
  <div>
    <a-button type="primary" @click="showModal">
      切换列表
    </a-button>
    <a-modal :width="800" :visible="visible" :footer="null" @cancel="handleCancel">
      <template slot="title">
        <div class="custom-title">切换列表</div>
      </template>
      <template slot="closeIcon">
        <div class="custom-close"><a-icon type="close" /></div>
      </template>

      <div class="custom-modal-body">
        <a-row style="margin-bottom: 24px;">
          <a-col :span="24">
            <a-alert type="info" showIcon>
              <template slot="icon">
                <div style="display:flex;justify-content: center;align-items: center;">
                  <a-icon type="check-circle" theme="twoTone" two-tone-color="#52c41a" />
                </div>
              </template>
              <template slot="message">
                <span style="font-weight: bold;">当前角色：（商户）金华万慧软件开发有限公司</span>
              </template>

            </a-alert>
          </a-col>
        </a-row>
        <a-row style="margin-bottom: 24px;">
          <a-col :span="16">
            <a-input-search placeholder="请输入商户或机构名称" enter-button @search="onSearch" />
          </a-col>
        </a-row>

        <!-- <a-table :data-source="dataList" :columns="columns" row-key="key" :scroll="{ y: 300 }">
          <template v-slot:action="{ record }">
            <a @click="handleSwitch(record.key)">切换</a>
          </template>
        </a-table> -->
        <a-table :data-source="dataList" :columns="columns" row-key="key" :scroll="{ y: 300 }"
          :pagination="paginationProps">
          <template v-slot:action="{ record }">
            <a @click="handleSwitch(record.key)">切换</a>
          </template>
        </a-table>


      </div>
    </a-modal>

    <a-button @click="error1">
      Error
    </a-button>
    <a-button @click="error2">
      Error2
    </a-button>




    <a-card>
      <div style="display: flex; align-items: center; margin-bottom: 16px;">
        <a-input placeholder="请输入搜索内容" v-model="searchQuery" style="width: 300px; margin-right: 8px;" />
        <a-select v-model="selectedOption" style="width: 150px; margin-right: 8px;" placeholder="请选择类型">
          <a-select-option value="action1">操作类型1</a-select-option>
          <a-select-option value="action2">操作类型2</a-select-option>
        </a-select>
        <a-button type="primary" @click="handleSearch">搜索</a-button>


      </div>
      <a-alert message="提示信息：系统将在此处显示所有相关的操作记录信息，您可以根据需要进行筛选。" type="info" show-icon style="margin-bottom: 16px;" />
      <a-table :data-source="dataList2" :columns="columns2" row-key="key" :pagination="false" :scroll="{ y: 300 }" />
    </a-card>
  </div>
</template>
<script>
export default {
  data() {
    return {
      visible: false,
      total: 1, // 总数据条数
      paginationProps: {
        total: 1, // 这里设置分页的总数
        current: 1,
        pageSize: 10,
        showTotal: (total) => `共 ${total} 条数据`, // 自定义总数显示
      },
      columns: [
        {
          title: '角色',
          dataIndex: 'role',
          width: '100px',
        },
        {
          title: '名称',
          dataIndex: 'name',
          align: 'center',
          width: '385px',
        },
        {
          title: '创建时间',
          dataIndex: 'createdAt',
          width: '150px',
        },
        {
          title: '操作',
          width: '100px',
          scopedSlots: { customRender: 'action' },
        },
      ],
      dataList: [
        {
          key: '846307',
          role: '商户',
          name: '金华万慧软件开发有限公司',
          createdAt: '2024-03-09',
        },
      ],
      searchQuery: '',
      dataList2: [
        {
          key: '1',
          year: '2022年',
          action: '移动资产',
          time: '2024-03-09 18:52:22',
          name: '金华万慧软件开发有限公司',
        },
        {
          key: '2',
          year: '2024年',
          action: '移动资产',
          time: '2024-03-10 10:30:12',
          name: '金华万慧软件开发有限公司',
        },
      ],
      columns2: [
        {
          title: '年份',
          dataIndex: 'year',
          width: '100px',
        },
        {
          title: '操作',
          dataIndex: 'action',
          width: '200px',
        },
        {
          title: '操作时间',
          dataIndex: 'time',
          width: '200px',
        },
        {
          title: '单位名称',
          dataIndex: 'name',
          width: '300px',
        },
      ],

    };
  },
  methods: {
    showModal() {
      this.visible = true;
    },
    handleCancel() {
      this.visible = false;
    },
    handleSwitch(key) {
      console.log('切换角色:', key);
    },

    error1() {
      this.$error({
        title: '系统提示',
        content: '缺少有效授权:缺少有效授权。',
        okText: '我知道了', // 修改按钮文本
      });
    },
    error2() {
      this.$error({
        title: '系统提示',
        content: '缺少有效授权:缺少有效授权。',
        okText: '我知道了', // 修改按钮文本
      });
    },
    handleSearch() {
      console.log('搜索内容:', this.searchQuery);
      // 这里可以添加搜索逻辑
    },


  },
};
</script>

<style scoped>
.custom-title {
  font-size: 17px !important;
  font-weight: 700;
  color: rgba(0, 0, 0, .85);
  line-height: 22px;
}

.custom-close {
  color: rgb(0, 0, 0);
}
</style>
