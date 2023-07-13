import request from '@/utils/request'

export default {
  // 获取菜单列表
  getAllMenu() {
    return request({
      url: '/menu/list',
      method: 'get',

    })
  },

}
