<template>
  <div>
    <div
      style="background: rgb(246, 246, 246); border-radius: 5px; padding: 10px"
    >
      <div class="ant-row" style="margin-left: -8px; margin-right: -8px">
        <div
          class="ant-col ant-col-18"
          style="padding-left: 8px; padding-right: 8px"
        >
          <div
            style="
              background: rgb(255, 255, 255);
              display: flex;
              border-radius: 5px;
              justify-content: space-around;
              padding: 5px;
            "
          >
            <div
              style="
                height: 150px;
                padding: 5px 10px;
                border-radius: 5px;
                border: 1px solid rgb(204, 204, 204);
                width: 32%;
              "
            >
              <div
                style="
                  display: flex;
                  align-items: center;
                  font-size: 16px;
                  font-weight: bold;
                "
              >
                <div filename="statistic.png" margin="5" class="ant-image">
                  <img
                    class="ant-image-img"
                    src="https://res.crestv.com/cip/img/statistic.png"
                    style="height: 18px; margin-right: 5px; width: 18px"
                  />
                </div>
                <div>当日汇总</div>
              </div>
              <p style="font-size: 16px"></p>

              <p>
                <span
                  style="
                    display: inline-block;
                    width: 8px;
                    height: 8px;
                    border-radius: 50%;
                    background-color: rgb(90, 135, 231);
                    margin-right: 5px;
                  "
                >
                </span>
                纸票开票数： 0 张
              </p>
              <p>
                <span
                  style="
                    display: inline-block;
                    width: 8px;
                    height: 8px;
                    border-radius: 50%;
                    background-color: rgb(222, 147, 94);
                    margin-right: 5px;
                  "
                >
                </span
                >电票开票数： 0 张
              </p>
              <p>
                <span
                  style="
                    display: inline-block;
                    width: 8px;
                    height: 8px;
                    border-radius: 50%;
                    background-color: rgb(91, 177, 156);
                    margin-right: 5px;
                  "
                >
                </span
                >开票总金额： 0元
              </p>
            </div>
            <div
              style="
                height: 150px;
                padding: 5px 10px;
                border-radius: 5px;
                border: 1px solid rgb(152, 226, 188);
                width: 32%;
              "
            >
              <div
                style="
                  display: flex;
                  align-items: center;
                  font-size: 16px;
                  font-weight: bold;
                "
              >
                <div filename="statistic.png" margin="5" class="ant-image">
                  <img
                    class="ant-image-img"
                    src="https://res.crestv.com/cip/img/statistic.png"
                    style="height: 18px; margin-right: 5px; width: 18px"
                  />
                </div>
                <div>当月汇总</div>
              </div>
              <p style="font-size: 16px"></p>

              <p>
                <span
                  style="
                    display: inline-block;
                    width: 8px;
                    height: 8px;
                    border-radius: 50%;
                    background-color: rgb(90, 135, 231);
                    margin-right: 5px;
                  "
                >
                </span
                >纸票开票数： 0 张
              </p>
              <p>
                <span
                  style="
                    display: inline-block;
                    width: 8px;
                    height: 8px;
                    border-radius: 50%;
                    background-color: rgb(222, 147, 94);
                    margin-right: 5px;
                  "
                ></span>
                电票开票数： 3 张
              </p>
              <p>
                <span
                  style="
                    display: inline-block;
                    width: 8px;
                    height: 8px;
                    border-radius: 50%;
                    background-color: rgb(91, 177, 156);
                    margin-right: 5px;
                  "
                >
                </span
                >开票总金额： 99.01元
              </p>
            </div>
            <div
              style="
                height: 150px;
                padding: 5px 10px;
                border-radius: 5px;
                border: 1px solid orange;
                width: 32%;
              "
            >

<div style="display: flex; align-items: center;font-size: 16px; font-weight: bold">
                <div filename="statistic.png" margin="5" class="ant-image">
                  <img
                    class="ant-image-img"
                    src="https://res.crestv.com/cip/img/statistic.png"
                    style="height: 18px; margin-right: 5px; width: 18px"
                  />
                </div>
               <div>
                 上月汇总
               </div>
              </div>
              <p style="font-size: 16px;"></p>


              <p>
                <span
                  style="
                    display: inline-block;
                    width: 8px;
                    height: 8px;
                    border-radius: 50%;
                    background-color: rgb(90, 135, 231);
                    margin-right: 5px;
                  "
                ></span
                >纸票开票数： 0 张
              </p>
              <p>
                <span
                  style="
                    display: inline-block;
                    width: 8px;
                    height: 8px;
                    border-radius: 50%;
                    background-color: rgb(222, 147, 94);
                    margin-right: 5px;
                  "
                ></span
                >电票开票数：0 张
              </p>
              <p>
                <span
                  style="
                    display: inline-block;
                    width: 8px;
                    height: 8px;
                    border-radius: 50%;
                    background-color: rgb(91, 177, 156);
                    margin-right: 5px;
                  "
                ></span
                >开票总金额： 0元
              </p>
            </div>
          </div>
          <div
            class="ant-row"
            style="
              background: rgb(255, 255, 255);
              border-radius: 5px;
              margin-top: 20px;
              padding: 10px;
              height: 300px;
            "
          >
            <div class="ant-col ant-col-24">
              <div
                style="
                  display: flex;
                  justify-content: space-between;
                  margin-bottom: 10px;
                "
              >
                <span style="font-size: 16px; font-weight: bold"
                  ><span
                    role="img"
                    aria-label="safety-certificate"
                    class="anticon anticon-safety-certificate"
                    style="margin-right: 5px"
                    ><svg
                      viewBox="64 64 896 896"
                      focusable="false"
                      data-icon="safety-certificate"
                      width="1em"
                      height="1em"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        d="M866.9 169.9L527.1 54.1C523 52.7 517.5 52 512 52s-11 .7-15.1 2.1L157.1 169.9c-8.3 2.8-15.1 12.4-15.1 21.2v482.4c0 8.8 5.7 20.4 12.6 25.9L499.3 968c3.5 2.7 8 4.1 12.6 4.1s9.2-1.4 12.6-4.1l344.7-268.6c6.9-5.4 12.6-17 12.6-25.9V191.1c.2-8.8-6.6-18.3-14.9-21.2zM694.5 340.7L481.9 633.4a16.1 16.1 0 01-26 0l-126.4-174c-3.8-5.3 0-12.7 6.5-12.7h55.2c5.1 0 10 2.5 13 6.6l64.7 89 150.9-207.8c3-4.1 7.8-6.6 13-6.6H688c6.5.1 10.3 7.5 6.5 12.8z"
                      ></path></svg></span
                  >数电账号认证</span
                >
                <div>
                  <span
                    style="
                      font-size: 16px;
                      font-weight: bold;
                      color: rgb(24, 144, 255);
                    "
                    >总授信额度：5000000元，剩余授信额度：4999900.99元</span
                  >
                </div>
              </div>
              <div>
                <div class="ant-table-wrapper">
                  <div class="ant-spin-nested-loading">
                    <div class="ant-spin-container">
                      <div
                        class="ant-table ant-table-small ant-table-fixed-header"
                      >
                        <div class="ant-table-container">
                          <div
                            class="ant-table-header"
                            style="overflow: hidden"
                          >
                            <table style="table-layout: fixed">
                              <colgroup>
                                <col
                                  style="width: 110.825px; min-width: 110.825px"
                                />
                                <col
                                  style="width: 83.125px; min-width: 83.125px"
                                />
                                <col
                                  style="width: 96.975px; min-width: 96.975px"
                                />
                                <col
                                  style="width: 124.688px; min-width: 124.688px"
                                />
                                <col
                                  style="width: 96.975px; min-width: 96.975px"
                                />
                                <col
                                  style="width: 138.538px; min-width: 138.538px"
                                />
                                <col
                                  style="width: 96.975px; min-width: 96.975px"
                                />
                                <col
                                  style="width: 166.3px; min-width: 166.3px"
                                />
                                <col style="width: 17px; min-width: 17px" />
                              </colgroup>
                              <thead class="ant-table-thead">
                                <tr>
                                  <th class="ant-table-cell">电局账号</th>
                                  <th class="ant-table-cell">开票人</th>
                                  <th class="ant-table-cell">电局身份</th>
                                  <th class="ant-table-cell">末次登录时间</th>
                                  <th class="ant-table-cell">登录状态</th>
                                  <th class="ant-table-cell">
                                    末次人脸核验时间
                                  </th>
                                  <th
                                    class="ant-table-cell"
                                    style="text-align: center"
                                  >
                                    是否需要核验
                                  </th>
                                  <th
                                    class="ant-table-cell"
                                    style="text-align: center"
                                  >
                                    操作
                                  </th>
                                  <th
                                    class="ant-table-cell ant-table-cell-scrollbar"
                                  ></th>
                                </tr>
                              </thead>
                            </table>
                          </div>
                          <div
                            class="ant-table-body"
                            style="overflow-y: scroll; max-height: 210px"
                          >
                            <table style="table-layout: fixed">
                              <colgroup>
                                <col style="width: 40px; min-width: 40px" />
                                <col style="width: 30px; min-width: 30px" />
                                <col style="width: 35px; min-width: 35px" />
                                <col style="width: 45px; min-width: 45px" />
                                <col style="width: 35px; min-width: 35px" />
                                <col style="width: 50px; min-width: 50px" />
                                <col style="width: 35px; min-width: 35px" />
                                <col style="width: 60px; min-width: 60px" />
                              </colgroup>
                              <tbody class="ant-table-tbody">
                                <tr
                                  aria-hidden="true"
                                  class="ant-table-measure-row"
                                  style="height: 0px; font-size: 0px"
                                >
                                  <td
                                    style="
                                      padding: 0px;
                                      border: 0px;
                                      height: 0px;
                                    "
                                  >
                                    <div style="height: 0px; overflow: hidden">
                                      &nbsp;
                                    </div>
                                  </td>
                                  <td
                                    style="
                                      padding: 0px;
                                      border: 0px;
                                      height: 0px;
                                    "
                                  >
                                    <div style="height: 0px; overflow: hidden">
                                      &nbsp;
                                    </div>
                                  </td>
                                  <td
                                    style="
                                      padding: 0px;
                                      border: 0px;
                                      height: 0px;
                                    "
                                  >
                                    <div style="height: 0px; overflow: hidden">
                                      &nbsp;
                                    </div>
                                  </td>
                                  <td
                                    style="
                                      padding: 0px;
                                      border: 0px;
                                      height: 0px;
                                    "
                                  >
                                    <div style="height: 0px; overflow: hidden">
                                      &nbsp;
                                    </div>
                                  </td>
                                  <td
                                    style="
                                      padding: 0px;
                                      border: 0px;
                                      height: 0px;
                                    "
                                  >
                                    <div style="height: 0px; overflow: hidden">
                                      &nbsp;
                                    </div>
                                  </td>
                                  <td
                                    style="
                                      padding: 0px;
                                      border: 0px;
                                      height: 0px;
                                    "
                                  >
                                    <div style="height: 0px; overflow: hidden">
                                      &nbsp;
                                    </div>
                                  </td>
                                  <td
                                    style="
                                      padding: 0px;
                                      border: 0px;
                                      height: 0px;
                                    "
                                  >
                                    <div style="height: 0px; overflow: hidden">
                                      &nbsp;
                                    </div>
                                  </td>
                                  <td
                                    style="
                                      padding: 0px;
                                      border: 0px;
                                      height: 0px;
                                    "
                                  >
                                    <div style="height: 0px; overflow: hidden">
                                      &nbsp;
                                    </div>
                                  </td>
                                </tr>
                                <tr
                                  data-row-key="0"
                                  class="ant-table-row ant-table-row-level-0"
                                >
                                  <td class="ant-table-cell">131****4756</td>
                                  <td class="ant-table-cell">刘黎明</td>
                                  <td class="ant-table-cell">法定代表人</td>
                                  <td class="ant-table-cell">
                                    <span>2024-09-09</span><br />14:24:16
                                  </td>
                                  <td class="ant-table-cell">
                                    <span style="color: rgb(69, 178, 86)"
                                      >已登录</span
                                    >
                                  </td>
                                  <td class="ant-table-cell">
                                    <span>2024-03-10</span><br />01:33:42
                                  </td>
                                  <td
                                    class="ant-table-cell"
                                    style="text-align: center"
                                  >
                                    <span style="color: rgb(255, 0, 0)"
                                      >是</span
                                    >
                                  </td>
                                  <td
                                    class="ant-table-cell"
                                    style="text-align: center"
                                  >
                                    <div
                                      class="ant-space ant-space-horizontal ant-space-align-center"
                                    >
                                      <div
                                        class="ant-space-item"
                                        style="margin-right: 8px"
                                      >
                                        <a style="text-decoration: underline"
                                          >数电登录&amp;认证</a
                                        >
                                      </div>
                                      <div class="ant-space-item">
                                        <a style="text-decoration: underline"
                                          >登录电局</a
                                        >
                                      </div>
                                    </div>
                                  </td>
                                </tr>
                              </tbody>
                            </table>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            class="ant-row"
            style="
              background: rgb(255, 255, 255);
              border-radius: 5px;
              margin-top: 20px;
              padding: 10px;
              height: 280px;
            "
          >
            <div class="ant-col ant-col-24">
              <div
                style="
                  display: flex;
                  justify-content: space-between;
                  margin-bottom: 10px;
                "
              >
                <span style="font-size: 16px; font-weight: bold"
                  ><span
                    role="img"
                    aria-label="user"
                    class="anticon anticon-user"
                    style="margin-right: 5px"
                    ><svg
                      viewBox="64 64 896 896"
                      focusable="false"
                      data-icon="user"
                      width="1em"
                      height="1em"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        d="M858.5 763.6a374 374 0 00-80.6-119.5 375.63 375.63 0 00-119.5-80.6c-.4-.2-.8-.3-1.2-.5C719.5 518 760 444.7 760 362c0-137-111-248-248-248S264 225 264 362c0 82.7 40.5 156 102.8 201.1-.4.2-.8.3-1.2.5-44.8 18.9-85 46-119.5 80.6a375.63 375.63 0 00-80.6 119.5A371.7 371.7 0 00136 901.8a8 8 0 008 8.2h60c4.4 0 7.9-3.5 8-7.8 2-77.2 33-149.5 87.8-204.3 56.7-56.7 132-87.9 212.2-87.9s155.5 31.2 212.2 87.9C779 752.7 810 825 812 902.2c.1 4.4 3.6 7.8 8 7.8h60a8 8 0 008-8.2c-1-47.8-10.9-94.3-29.5-138.2zM512 534c-45.9 0-89.1-17.9-121.6-50.4S340 407.9 340 362c0-45.9 17.9-89.1 50.4-121.6S466.1 190 512 190s89.1 17.9 121.6 50.4S684 316.1 684 362c0 45.9-17.9 89.1-50.4 121.6S557.9 534 512 534z"
                      ></path></svg></span
                  >小规模纳税人</span
                ><button type="button" class="ant-btn ant-btn-primary">
                  <span
                    role="img"
                    aria-label="profile"
                    class="anticon anticon-profile"
                    ><svg
                      viewBox="64 64 896 896"
                      focusable="false"
                      data-icon="profile"
                      width="1em"
                      height="1em"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        d="M880 112H144c-17.7 0-32 14.3-32 32v736c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V144c0-17.7-14.3-32-32-32zm-40 728H184V184h656v656zM492 400h184c4.4 0 8-3.6 8-8v-48c0-4.4-3.6-8-8-8H492c-4.4 0-8 3.6-8 8v48c0 4.4 3.6 8 8 8zm0 144h184c4.4 0 8-3.6 8-8v-48c0-4.4-3.6-8-8-8H492c-4.4 0-8 3.6-8 8v48c0 4.4 3.6 8 8 8zm0 144h184c4.4 0 8-3.6 8-8v-48c0-4.4-3.6-8-8-8H492c-4.4 0-8 3.6-8 8v48c0 4.4 3.6 8 8 8zM340 368a40 40 0 1080 0 40 40 0 10-80 0zm0 144a40 40 0 1080 0 40 40 0 10-80 0zm0 144a40 40 0 1080 0 40 40 0 10-80 0z"
                      ></path></svg></span
                  ><span>汇总统计</span>
                </button>
              </div>
              <div class="ant-table-wrapper">
                <div class="ant-spin-nested-loading">
                  <div class="ant-spin-container">
                    <div class="ant-table ant-table-small">
                      <div class="ant-table-container">
                        <div class="ant-table-content">
                          <table style="table-layout: auto">
                            <colgroup></colgroup>
                            <thead class="ant-table-thead">
                              <tr>
                                <th class="ant-table-cell">月开票金额</th>
                                <th class="ant-table-cell">季度开票金额</th>
                                <th class="ant-table-cell">
                                  连续十二个月开票金额
                                </th>
                                <th class="ant-table-cell">
                                  月/季/12个月预警金额
                                </th>
                                <th class="ant-table-cell">操作</th>
                              </tr>
                            </thead>
                            <tbody class="ant-table-tbody">
                              <tr
                                data-row-key="99.01"
                                class="ant-table-row ant-table-row-level-0"
                              >
                                <td class="ant-table-cell">
                                  <span style="color: rgb(69, 178, 86)"
                                    >99.01元</span
                                  >
                                </td>
                                <td class="ant-table-cell">
                                  <span style="color: rgb(69, 178, 86)"
                                    >99.01元</span
                                  >
                                </td>
                                <td class="ant-table-cell">
                                  <span style="color: rgb(69, 178, 86)"
                                    >11980.2元</span
                                  >
                                </td>
                                <td class="ant-table-cell">
                                  100,000元/250,000元/4,500,000元
                                </td>
                                <td class="ant-table-cell">
                                  <a style="text-decoration: underline"
                                    >预警设置</a
                                  >
                                </td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          class="ant-col ant-col-6"
          style="padding-left: 8px; padding-right: 8px"
        >
          <div
            style="
              height: 160px;
              padding: 5px 10px;
              border-radius: 5px;
              background-color: rgb(177, 140, 239);
            "
          >
            <div style="display: flex; margin-top: 20px; margin-left: 10px">
              <span
                role="img"
                aria-label="user"
                class="anticon anticon-user"
                style="font-size: 36px; color: white"
                ><svg
                  viewBox="64 64 896 896"
                  focusable="false"
                  data-icon="user"
                  width="1em"
                  height="1em"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path
                    d="M858.5 763.6a374 374 0 00-80.6-119.5 375.63 375.63 0 00-119.5-80.6c-.4-.2-.8-.3-1.2-.5C719.5 518 760 444.7 760 362c0-137-111-248-248-248S264 225 264 362c0 82.7 40.5 156 102.8 201.1-.4.2-.8.3-1.2.5-44.8 18.9-85 46-119.5 80.6a375.63 375.63 0 00-80.6 119.5A371.7 371.7 0 00136 901.8a8 8 0 008 8.2h60c4.4 0 7.9-3.5 8-7.8 2-77.2 33-149.5 87.8-204.3 56.7-56.7 132-87.9 212.2-87.9s155.5 31.2 212.2 87.9C779 752.7 810 825 812 902.2c.1 4.4 3.6 7.8 8 7.8h60a8 8 0 008-8.2c-1-47.8-10.9-94.3-29.5-138.2zM512 534c-45.9 0-89.1-17.9-121.6-50.4S340 407.9 340 362c0-45.9 17.9-89.1 50.4-121.6S466.1 190 512 190s89.1 17.9 121.6 50.4S684 316.1 684 362c0 45.9-17.9 89.1-50.4 121.6S557.9 534 512 534z"
                  ></path></svg
              ></span>
              <div
                style="
                  flex: 1 1 0%;
                  margin-left: 20px;
                  position: relative;
                  top: -15px;
                  display: flex;
                  flex-direction: column;
                  color: rgb(255, 255, 255);
                  justify-content: space-between;
                "
              >
                <div style="font-size: 16px; margin-bottom: 5px">
                  <div title="刘黎明" style="float: left">刘黎明</div>
                  <span
                    role="img"
                    aria-label="sync"
                    tabindex="-1"
                    class="anticon anticon-sync"
                    style="
                      font-size: 20px;
                      color: rgb(255, 255, 255);
                      cursor: pointer;
                      float: right;
                    "
                    ><svg
                      viewBox="64 64 896 896"
                      focusable="false"
                      data-icon="sync"
                      width="1em"
                      height="1em"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        d="M168 504.2c1-43.7 10-86.1 26.9-126 17.3-41 42.1-77.7 73.7-109.4S337 212.3 378 195c42.4-17.9 87.4-27 133.9-27s91.5 9.1 133.8 27A341.5 341.5 0 01755 268.8c9.9 9.9 19.2 20.4 27.8 31.4l-60.2 47a8 8 0 003 14.1l175.7 43c5 1.2 9.9-2.6 9.9-7.7l.8-180.9c0-6.7-7.7-10.5-12.9-6.3l-56.4 44.1C765.8 155.1 646.2 92 511.8 92 282.7 92 96.3 275.6 92 503.8a8 8 0 008 8.2h60c4.4 0 7.9-3.5 8-7.8zm756 7.8h-60c-4.4 0-7.9 3.5-8 7.8-1 43.7-10 86.1-26.9 126-17.3 41-42.1 77.8-73.7 109.4A342.45 342.45 0 01512.1 856a342.24 342.24 0 01-243.2-100.8c-9.9-9.9-19.2-20.4-27.8-31.4l60.2-47a8 8 0 00-3-14.1l-175.7-43c-5-1.2-9.9 2.6-9.9 7.7l-.7 181c0 6.7 7.7 10.5 12.9 6.3l56.4-44.1C258.2 868.9 377.8 932 512.2 932c229.2 0 415.5-183.7 419.8-411.8a8 8 0 00-8-8.2z"
                      ></path></svg
                  ></span>
                </div>
                <div style="font-size: 16px">
                  商户：默认门店&nbsp;&nbsp;&nbsp;&nbsp;<span
                    role="img"
                    aria-label="swap"
                    tabindex="-1"
                    class="anticon anticon-swap"
                    style="cursor: pointer"
                    ><svg
                      viewBox="64 64 896 896"
                      focusable="false"
                      data-icon="swap"
                      width="1em"
                      height="1em"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        d="M847.9 592H152c-4.4 0-8 3.6-8 8v60c0 4.4 3.6 8 8 8h605.2L612.9 851c-4.1 5.2-.4 13 6.3 13h72.5c4.9 0 9.5-2.2 12.6-6.1l168.8-214.1c16.5-21 1.6-51.8-25.2-51.8zM872 356H266.8l144.3-183c4.1-5.2.4-13-6.3-13h-72.5c-4.9 0-9.5 2.2-12.6 6.1L150.9 380.2c-16.5 21-1.6 51.8 25.1 51.8h696c4.4 0 8-3.6 8-8v-60c0-4.4-3.6-8-8-8z"
                      ></path></svg
                  ></span>
                </div>
              </div>
            </div>
            <div style="margin-left: 20px; font-size: 16px">
              <span style="color: white">金华万慧软件开发有限公司</span
              ><br /><span style="color: white">91330701MA2M37T86L</span>
            </div>
          </div>
          <div
            class="ant-row"
            style="
              background: rgb(255, 255, 255);
              border-radius: 5px;
              margin-top: 20px;
              height: 300px;
            "
          >
            <div class="ant-col ant-col-24" style="padding: 10px">
              <div style="margin-bottom: 20px">
                <span
                  style="
                    display: block;
                    font-size: 16px;
                    font-weight: bold;
                    margin-bottom: 20px;
                  "
                  ><span
                    role="img"
                    aria-label="info-circle"
                    class="anticon anticon-info-circle"
                    style="margin-right: 5px"
                    ><svg
                      viewBox="64 64 896 896"
                      focusable="false"
                      data-icon="info-circle"
                      width="1em"
                      height="1em"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm32 664c0 4.4-3.6 8-8 8h-48c-4.4 0-8-3.6-8-8V456c0-4.4 3.6-8 8-8h48c4.4 0 8 3.6 8 8v272zm-32-344a48.01 48.01 0 010-96 48.01 48.01 0 010 96z"
                      ></path></svg></span
                  >数电授权信息</span
                >
                <div style="margin-bottom: 7px">
                  <span
                    style="
                      display: inline-block;
                      width: 8px;
                      height: 8px;
                      border-radius: 50%;
                      background-color: rgb(85, 136, 249);
                      margin-right: 5px;
                    "
                  ></span
                  >授权状态：<span style="color: red">已到期</span>
                </div>
                <div style="margin-bottom: 7px">
                  <span
                    style="
                      display: inline-block;
                      width: 8px;
                      height: 8px;
                      border-radius: 50%;
                      background-color: rgb(222, 147, 94);
                      margin-right: 5px;
                    "
                  ></span
                  >授权类型：<span>[试用]数电-试用版</span>
                </div>
                <div>
                  <span
                    style="
                      display: inline-block;
                      width: 8px;
                      height: 8px;
                      border-radius: 50%;
                      background-color: rgb(91, 177, 156);
                      margin-right: 5px;
                    "
                  ></span
                  >到期时间：<span>2024-04-08</span>
                </div>
              </div>
            </div>
          </div>
          <div
            class="ant-row"
            style="
              background: rgb(255, 255, 255);
              border-radius: 5px;
              margin-top: 20px;
              height: 280px;
              padding: 10px;
            "
          >
            <div class="ant-col ant-col-24">
              <div style="display: flex; justify-content: space-around">
                <div
                  style="
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    font-weight: bold;
                    font-size: 16px;
                  "
                >
                  开票订单
                </div>
                <button
                  type="button"
                  class="ant-btn ant-btn-primary"
                  style="
                    flex: 1 1 0%;
                    margin-right: 15px;
                    margin-left: 15px;
                    width: 80px;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                  "
                >
                  <span
                    role="img"
                    aria-label="search"
                    class="anticon anticon-search"
                    ><svg
                      viewBox="64 64 896 896"
                      focusable="false"
                      data-icon="search"
                      width="1em"
                      height="1em"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        d="M909.6 854.5L649.9 594.8C690.2 542.7 712 479 712 412c0-80.2-31.3-155.4-87.9-212.1-56.6-56.7-132-87.9-212.1-87.9s-155.5 31.3-212.1 87.9C143.2 256.5 112 331.8 112 412c0 80.1 31.3 155.5 87.9 212.1C256.5 680.8 331.8 712 412 712c67 0 130.6-21.8 182.7-62l259.7 259.6a8.2 8.2 0 0011.6 0l43.6-43.5a8.2 8.2 0 000-11.6zM570.4 570.4C528 612.7 471.8 636 412 636s-116-23.3-158.4-65.6C211.3 528 188 471.8 188 412s23.3-116.1 65.6-158.4C296 211.3 352.2 188 412 188s116.1 23.2 158.4 65.6S636 352.2 636 412s-23.3 116.1-65.6 158.4z"
                      ></path></svg></span
                  ><span>发票查询</span></button
                ><button
                  type="button"
                  class="ant-btn ant-btn-primary"
                  style="
                    flex: 1 1 0%;
                    width: 80px;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                  "
                >
                  <span
                    role="img"
                    aria-label="file-done"
                    class="anticon anticon-file-done"
                    ><svg
                      viewBox="64 64 896 896"
                      focusable="false"
                      data-icon="file-done"
                      width="1em"
                      height="1em"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        d="M688 312v-48c0-4.4-3.6-8-8-8H296c-4.4 0-8 3.6-8 8v48c0 4.4 3.6 8 8 8h384c4.4 0 8-3.6 8-8zm-392 88c-4.4 0-8 3.6-8 8v48c0 4.4 3.6 8 8 8h184c4.4 0 8-3.6 8-8v-48c0-4.4-3.6-8-8-8H296zm376 116c-119.3 0-216 96.7-216 216s96.7 216 216 216 216-96.7 216-216-96.7-216-216-216zm107.5 323.5C750.8 868.2 712.6 884 672 884s-78.8-15.8-107.5-44.5C535.8 810.8 520 772.6 520 732s15.8-78.8 44.5-107.5C593.2 595.8 631.4 580 672 580s78.8 15.8 107.5 44.5C808.2 653.2 824 691.4 824 732s-15.8 78.8-44.5 107.5zM761 656h-44.3c-2.6 0-5 1.2-6.5 3.3l-63.5 87.8-23.1-31.9a7.92 7.92 0 00-6.5-3.3H573c-6.5 0-10.3 7.4-6.5 12.7l73.8 102.1c3.2 4.4 9.7 4.4 12.9 0l114.2-158c3.9-5.3.1-12.7-6.4-12.7zM440 852H208V148h560v344c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8V108c0-17.7-14.3-32-32-32H168c-17.7 0-32 14.3-32 32v784c0 17.7 14.3 32 32 32h272c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8z"
                      ></path></svg></span
                  ><span>发票开具</span>
                </button>
              </div>
              <div
                class="ant-radio-group ant-radio-group-solid ant-radio-group-default time_change"
                style="width: 100%; display: flex; margin: 10px 0px"
              >
                <label
                  class="ant-radio-button-wrapper ant-radio-button-wrapper-checked"
                  style="
                    flex: 1 1 0%;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                  "
                  ><span class="ant-radio-button ant-radio-button-checked"
                    ><input
                      type="radio"
                      class="ant-radio-button-input"
                      value="1"
                      checked="" /><span
                      class="ant-radio-button-inner"
                    ></span></span
                  ><span>今天</span></label
                ><label
                  class="ant-radio-button-wrapper"
                  style="
                    flex: 1 1 0%;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                  "
                  ><span class="ant-radio-button"
                    ><input
                      type="radio"
                      class="ant-radio-button-input"
                      value="2" /><span
                      class="ant-radio-button-inner"
                    ></span></span
                  ><span>昨天</span></label
                ><label
                  class="ant-radio-button-wrapper"
                  style="
                    flex: 1 1 0%;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                  "
                  ><span class="ant-radio-button"
                    ><input
                      type="radio"
                      class="ant-radio-button-input"
                      value="3" /><span
                      class="ant-radio-button-inner"
                    ></span></span
                  ><span>近七天</span></label
                >
              </div>
              <div>
                <div style="display: flex">
                  <div filename="alreadyiss.png" size="30" class="ant-image">
                    <img
                      class="ant-image-img"
                      src="https://res.crestv.com/cip/img/alreadyiss.png"
                      style="height: 30px; margin-right: 0px; width: 30px"
                    />
                  </div>
                  <div
                    style="
                      flex: 1 1 0%;
                      display: flex;
                      justify-content: space-between;
                      align-items: center;
                      font-weight: bold;
                    "
                  >
                    <span style="margin-left: 10px">已开已交付</span
                    ><a style="text-decoration: underline">0</a>
                  </div>
                </div>
                <div style="display: flex; margin-top: 20px">
                  <div filename="issing.png" size="30" class="ant-image">
                    <img
                      class="ant-image-img"
                      src="https://res.crestv.com/cip/img/issing.png"
                      style="height: 30px; margin-right: 0px; width: 30px"
                    />
                  </div>
                  <div
                    style="
                      flex: 1 1 0%;
                      display: flex;
                      justify-content: space-between;
                      align-items: center;
                      font-weight: bold;
                    "
                  >
                    <span style="margin-left: 10px">开具中</span>
                    <a style="color: orange; text-decoration: underline">0</a>
                  </div>
                </div>
                <div style="display: flex; margin-top: 20px">
                  <div filename="isserr.png" size="30" class="ant-image">
                    <img
                      class="ant-image-img"
                      src="https://res.crestv.com/cip/img/isserr.png"
                      style="height: 30px; margin-right: 0px; width: 30px"
                    />
                  </div>
                  <div
                    style="
                      flex: 1 1 0%;
                      display: flex;
                      justify-content: space-between;
                      align-items: center;
                      font-weight: bold;
                    "
                  >
                    <span style="margin-left: 10px"> 开具异常</span>
                    <a style="color: red; text-decoration: underline">0</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="ant-row ant-row-no-wrap" style="width: 100%">
        <div class="ant-col ant-col-24 ant-col-xxl-24"></div>
      </div>
      <div class="mask" style="display: none"></div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped></style>
