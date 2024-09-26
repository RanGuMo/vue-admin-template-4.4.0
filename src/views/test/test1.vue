<template>
  <div>
    <div class="home">
      <a-row style="margin-left: -8px; margin-right: -8px">
        <a-col :span="18" style="padding-left: 8px; padding-right: 8px">
          <a-row class="one-card-left">
            <div class="card card-one">
              <div class="header-one">
                <div class="ant-image">
                  <img class="ant-image-img" src="https://res.crestv.com/cip/img/statistic.png"
                    style="height: 18px; margin-right: 5px; width: 18px" />
                </div>
                <div>当日汇总</div>
              </div>

              <p>
                <span class="icon-circle one-icon-1">
                </span>
                纸票开票数： 0 张
              </p>
              <p>
                <span class="icon-circle one-icon-2">
                </span>电票开票数： 0 张
              </p>
              <p>
                <span class="icon-circle one-icon-3">
                </span>开票总金额： 0元
              </p>
            </div>
            <div class="card card-two">
              <div class="header-one">
                <div class="ant-image">
                  <img class="ant-image-img" src="https://res.crestv.com/cip/img/statistic.png"
                    style="height: 18px; margin-right: 5px; width: 18px" />
                </div>
                <div>当月汇总</div>
              </div>


              <p>
                <span class="icon-circle one-icon-1">
                </span>纸票开票数： 0 张
              </p>
              <p>
                <span class="icon-circle one-icon-2"></span>
                电票开票数： 3 张
              </p>
              <p>
                <span class="icon-circle one-icon-3">
                </span>开票总金额： 99.01元
              </p>
            </div>
            <div class="card card-third">

              <div class="header-one">
                <div class="ant-image">
                  <img class="ant-image-img" src="https://res.crestv.com/cip/img/statistic.png"
                    style="height: 18px; margin-right: 5px; width: 18px" />
                </div>
                <div>
                  上月汇总
                </div>
              </div>

              <p>
                <span class="icon-circle one-icon-1"></span>纸票开票数： 0 张
              </p>
              <p>
                <span class="icon-circle one-icon-2"></span>电票开票数：0 张
              </p>
              <p>
                <span class="icon-circle one-icon-3"></span>开票总金额： 0元
              </p>
            </div>

          </a-row>
          <a-row class="two-card-left">
            <a-col :span="24">
              <div class="header-two">
                <span class="header-two-left">
                  <span class="icon-safe">
                    <a-icon type="safety-certificate" theme="filled" />
                  </span>
                  数电账号认证
                </span>
                <div>
                  <span class="header-two-right">总授信额度：5000000元，剩余授信额度：4999900.99元</span>
                </div>
              </div>
              <div>

                <a-table style="border:1px solid #E8E8E8" :columns="columns" :data-source="data" :pagination="false" :scroll="{ y: 210 }">
                  <div style="text-align: center" slot="needsVerification" slot-scope="text">
                    <span :style="{ color: text ? 'rgb(255, 0, 0)' : '' }">
                      {{ text ? '是' : '否' }}
                    </span>
                  </div>
                  <div style="text-align: center" slot="actions" slot-scope="text">
                    <div class="ant-space ant-space-horizontal ant-space-align-center">
                      <div class="ant-space-item" style="margin-right: 8px">
                        <a style="text-decoration: underline">数电登录&amp;认证</a>
                      </div>
                      <div class="ant-space-item">
                        <a style="text-decoration: underline">登录电局</a>
                      </div>
                    </div>
                  </div>
                </a-table>
              </div>
            </a-col>
          </a-row>
          <a-row class="third-card-left">
            <a-col :span="24">
              <div class="header-third">
                <span class="header-third-left">
                  <span class="icon-user">
                    <a-icon type="user" />
                  </span>
                  小规模纳税人
                </span>
                <a-button type="primary" icon="profile">
                  汇总统计
                </a-button>

              </div>
              <a-table style="border:1px solid #E8E8E8" :columns="columns2" :data-source="data2" :pagination="false"
                :scroll="{ y: 210 }">
                <template slot="monthlyInvoice" slot-scope="text">
                  <span style="color: rgb(69, 178, 86)">{{ text }}</span>
                </template>
                <template slot="quarterlyInvoice" slot-scope="text">
                  <span style="color: rgb(69, 178, 86)">{{ text }}</span>
                </template>
                <template slot="twelveMonthsInvoice" slot-scope="text">
                  <span style="color: rgb(69, 178, 86)">{{ text }}</span>
                </template>
                <template v-slot:actions>
                  <a style="text-decoration: underline">预警设置</a>
                </template>
              </a-table>

            </a-col>
          </a-row>

        </a-col>
        <a-col :span="6" style="padding-left: 8px; padding-right: 8px">
          <a-row class="one-card-right">
            <div class="header">
              <a-icon type="user" class="header-icon-user" />

              <div class="header-content">
                <div style="font-size: 16px; margin-bottom: 5px">
                  <div title="刘黎明" style="float: left">刘黎明</div>
                  <a-icon type="sync" class="header-content-icon" />
                </div>
                <div style="font-size: 16px">
                  商户：默认门店&nbsp;&nbsp;&nbsp;&nbsp;
                  <a-tooltip placement="top">
                    <template slot="title">
                      <span>切换门店</span>
                    </template>
                    <a-icon type="swap" style="cursor: pointer" @click="dialogVisible = true" />
                  </a-tooltip>
                </div>
              </div>
            </div>
            <div class="footer">
              <span>金华万慧软件开发有限公司</span><br />
              <span>91330701MA2M37T86L</span>
            </div>
          </a-row>

          <a-row class="two-card-right">
            <a-col :span="24" style="padding: 10px">
              <div style="margin-bottom: 20px">
                <span class="header">
                  <a-icon type="info-circle" theme="filled" class="header-icon" />
                  数电授权信息
                </span>
                <div style="margin-bottom: 7px">
                  <span class="content content-1"></span>授权状态：<span style="color: red">已到期</span>
                </div>
                <div style="margin-bottom: 7px">
                  <span class="content content-2"></span>授权类型：<span>[试用]数电-试用版</span>
                </div>
                <div>
                  <span class="content content-3"></span>到期时间：<span>2024-04-08</span>
                </div>
              </div>
            </a-col>

          </a-row>

          <a-row class="third-card-right">
            <a-col :span="24">
              <div class="header">
                <div class="header-title">
                  开票订单
                </div>
                <a-button type="primary" icon="search" class="header-btn">
                  发票查询
                </a-button>
                <a-button type="primary" icon="file-done" class="header-btn">
                  发票开具
                </a-button>
              </div>

              <a-radio-group default-value="a" button-style="solid" class="radio-group-wrap">
                <a-radio-button value="a" class="item">
                  今天
                </a-radio-button>
                <a-radio-button value="b" class="item">
                  昨天
                </a-radio-button>
                <a-radio-button value="c" class="item">
                  近七天
                </a-radio-button>
              </a-radio-group>

              <div>
                <div style="display: flex">
                  <div filename="alreadyiss.png" size="30" class="ant-image">
                    <img class="ant-image-img" src="https://res.crestv.com/cip/img/alreadyiss.png"
                      style="height: 30px; margin-right: 0px; width: 30px" />
                  </div>
                  <div class="center-text">
                    <span style="margin-left: 10px">已开已交付</span>
                    <a style="text-decoration: underline">0</a>
                  </div>
                </div>
                <div style="display: flex; margin-top: 20px">
                  <div filename="issing.png" size="30" class="ant-image">
                    <img class="ant-image-img" src="https://res.crestv.com/cip/img/issing.png"
                      style="height: 30px; margin-right: 0px; width: 30px" />
                  </div>
                  <div class="center-text">
                    <span style="margin-left: 10px">开具中</span>
                    <a style="color: orange; text-decoration: underline">0</a>
                  </div>
                </div>
                <div style="display: flex; margin-top: 20px">
                  <div filename="isserr.png" size="30" class="ant-image">
                    <img class="ant-image-img" src="https://res.crestv.com/cip/img/isserr.png"
                      style="height: 30px; margin-right: 0px; width: 30px" />
                  </div>
                  <div class="center-text">
                    <span style="margin-left: 10px"> 开具异常</span>
                    <a style="color: red; text-decoration: underline">0</a>
                  </div>
                </div>
              </div>
            </a-col>
          </a-row>

        </a-col>
      </a-row>
    </div>

    <!-- 切换门店弹窗 -->
    <a-modal title="切换门店" :visible="dialogVisible" :width="300" :footer="null"
      style="color:rgba(0,0,0,.85);font-weight:500" @cancel="handleClose">
      <span>门店：</span>
      <a-select :default-value="switchShop" style="width: 210px" @change="handleChange">
        <a-select-option v-for="item in options" :key="item.value" :value="item.value">
          {{ item.label }}
        </a-select-option>
      </a-select>
    </a-modal>
  </div>
</template>

<script>
const columns = [
  { title: '电局账号', dataIndex: 'account', width: '40px' },
  { title: '开票人', dataIndex: 'invoicePerson', width: '30px' },
  { title: '电局身份', dataIndex: 'identity', width: '35px' },
  { title: '末次登录时间', dataIndex: 'lastLoginDate', width: '45px' },
  { title: '登录状态', dataIndex: 'loginStatus', width: '35px' },
  { title: '末次人脸核验时间', dataIndex: 'lastFaceVerificationDate', width: '50px' },
  {
    title: '是否需要核验', dataIndex: 'needsVerification', align: 'center', width: '35px',
    scopedSlots: { customRender: 'needsVerification' }
  },
  {
    title: '操作', dataIndex: 'actions', align: 'center', width: '60px',
    scopedSlots: { customRender: 'actions' }
  }
];

const data = [
  {
    account: '131****4756',
    invoicePerson: '刘黎明',
    identity: '法定代表人',
    lastLoginDate: '2024-09-09 14:24:16',
    loginStatus: '已登录',
    lastFaceVerificationDate: '2024-03-10 01:33:42',
    needsVerification: true
  },
];

const columns2 = [
  {
    title: '月开票金额',
    dataIndex: 'monthlyInvoice',
    key: 'monthlyInvoice',
    scopedSlots: { customRender: 'monthlyInvoice' },

  },
  {
    title: '季度开票金额',
    dataIndex: 'quarterlyInvoice',
    key: 'quarterlyInvoice',
    scopedSlots: { customRender: 'quarterlyInvoice' },

  },
  {
    title: '连续十二个月开票金额',
    dataIndex: 'twelveMonthsInvoice',
    key: 'twelveMonthsInvoice',
    scopedSlots: { customRender: 'twelveMonthsInvoice' },


  },
  {
    title: '月/季/12个月预警金额',
    dataIndex: 'warningAmount',
    key: 'warningAmount',
    width: '328px'
  },
  {
    title: '操作',
    key: 'actions',
    scopedSlots: { customRender: 'actions' },
    width: '120px',
  },
];

const data2 = [
  {
    key: '1',
    monthlyInvoice: '99.01元',
    quarterlyInvoice: '99.01元',
    twelveMonthsInvoice: '11980.2元',
    warningAmount: '100,000元/250,000元/4,500,000元',
  },
  // 可以添加更多的数据行
];

export default {
  data() {
    return {
      data,
      columns,
      data2,
      columns2,
      dialogVisible: false, // 切换门店弹窗
      switchShop: "1",
      options: [
        {
          value: "1",
          label: "默认门店",
        },
        {
          value: "2",
          label: "双皮奶",
        },
        {
          value: "3",
          label: "蚵仔煎",
        },
      ],
    };
  },
  methods: {

    handleClose() {// 弹窗门店关闭事件
      this.dialogVisible = false;
    },
    handleLoginAuth(item) {// 处理数电登录和认证
      console.log(`登录认证: ${item.account}`);
    },
    handleLogin(item) {// 处理登录电局
      console.log(`登录电局: ${item.account}`);
    }
  }
};
</script>

<style lang="scss" scoped>
.home {
  background: rgb(246, 246, 246);
  border-radius: 5px;
  padding: 10px;

  .one-card-left {
    background: rgb(255, 255, 255);
    display: flex;
    border-radius: 5px;
    justify-content: space-around;
    padding: 5px;

    .card {
      height: 150px;
      padding: 5px 10px;
      border-radius: 5px;
      width: 32%;

      .header-one {
        display: flex;
        align-items: center;
        font-size: 16px;
        font-weight: bold;
        margin-bottom: 16px;

        .ant-image {}
      }

      .icon-circle {
        display: inline-block;
        width: 8px;
        height: 8px;
        border-radius: 50%;
      }

      .one-icon-1 {
        background-color: rgb(90, 135, 231);
        margin-right: 5px;
      }

      .one-icon-2 {
        background-color: rgb(222, 147, 94);
        margin-right: 5px;
      }

      .one-icon-3 {
        background-color: rgb(91, 177, 156);
        margin-right: 5px;
      }

    }

    .card-one {
      border: 1px solid rgb(204, 204, 204);
    }

    .card-two {
      border: 1px solid rgb(204, 204, 204);
    }

    .card-third {
      border: 1px solid orange;
    }
  }

  .two-card-left {
    background: rgb(255, 255, 255);
    border-radius: 5px;
    margin-top: 20px;
    padding: 10px;
    height: 300px;

    .header-two {
      display: flex;
      justify-content: space-between;
      margin-bottom: 10px;

      .header-two-left {
        font-size: 16px;
        font-weight: bold;
        color: #000;
        display: flex;
        align-items: center;

        .icon-safe {
          margin-right: 5px;
        }
      }

      .header-two-right {
        font-size: 16px;
        font-weight: bold;
        color: rgb(24, 144, 255);
      }
    }
  }

  .third-card-left {
    background: rgb(255, 255, 255);
    border-radius: 5px;
    margin-top: 20px;
    padding: 10px;
    height: 280px;

    .header-third {
      display: flex;
      justify-content: space-between;
      margin-bottom: 10px;

      .header-third-left {
        font-size: 16px;
        font-weight: bold;
        color: #000;
        display: flex;
        align-items: center;

        .icon-user {
          margin-right: 5px;
          color: #000;
        }
      }
    }
  }

  .one-card-right {
    height: 160px;
    padding: 5px 10px;
    border-radius: 5px;
    background-color: rgb(177, 140, 239);

    .header {
      display: flex;
      margin-top: 20px;
      margin-left: 10px;

      .header-icon-user {
        font-size: 36px;
        color: white;
      }

      .header-content {
        flex: 1 1 0%;
        margin-left: 20px;
        position: relative;
        top: -15px;
        display: flex;
        flex-direction: column;
        color: rgb(255, 255, 255);
        justify-content: space-between;

        .header-content-icon {
          font-size: 20px;
          color: rgb(255, 255, 255);
          cursor: pointer;
          float: right;
        }
      }
    }

    .footer {
      margin-left: 20px;
      font-size: 16px;
      color: #fff;
    }
  }

  .two-card-right {
    background: rgb(255, 255, 255);
    border-radius: 5px;
    margin-top: 20px;
    height: 300px;

    .header {
      display: block;
      font-size: 16px;
      font-weight: bold;
      margin-bottom: 20px;
      color: #000;

      .header-icon {
        margin-right: 5px;
      }
    }

    .content {
      display: inline-block;
      width: 8px;
      height: 8px;
      border-radius: 50%;
      margin-right: 5px;
    }

    .content-1 {
      background-color: rgb(85, 136, 249);

    }

    .content-2 {
      background-color: rgb(222, 147, 94);

    }

    .content-3 {
      background-color: rgb(91, 177, 156);


    }
  }

  .third-card-right {
    background: rgb(255, 255, 255);
    border-radius: 5px;
    margin-top: 20px;
    height: 280px;
    padding: 10px;

    .header {
      display: flex;
      justify-content: space-around;

      .header-title {
        display: flex;
        align-items: center;
        justify-content: center;
        font-weight: bold;
        font-size: 16px;
        color: #000;
      }

      .header-btn {
        flex: 1 1 0%;
        margin-right: 15px;
        margin-left: 15px;
        width: 80px;
        display: flex;
        justify-content: center;
        align-items: center;
      }
    }

    .radio-group-wrap {
      width: 100%;
      display: flex;
      margin: 10px 0px;

      .item {
        // flex: 1 1 0%; 意味着：
        // 该元素可以放大以填充剩余空间（flex-grow: 1）。
        // 该元素也可以缩小以适应容器（flex-shrink: 1）。
        // 初始占用空间为零（flex-basis: 0%）。
        flex: 1 1 0%;
        display: flex;
        justify-content: center;
        align-items: center;
      }
    }

    .center-text {
      flex: 1 1 0%;
      display: flex;
      justify-content: space-between;
      align-items: center;
      font-weight: bold;
    }
  }
}
</style>
