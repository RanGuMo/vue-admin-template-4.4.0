import request from '@/utils/request'



export default {
  // 获取用户列表
  getUserList(SearchModel) {
    return request({
      url: '/user/list',
      method: 'get',
      params: {
        pageNo: SearchModel.pageNo,
        pageSize: SearchModel.pageSize,
        username: SearchModel.username,
        phone: SearchModel.phone,
      }
    })
  },
  // 新增用户
  addUser(user) {
    return request({
      url: '/user',
      method: 'post',
      data: user
    })
  },
  // 修改用户
  updateUser(user) {
    return request({
      url: '/user',
      method: 'put',
      data: user
    })
  },
  // 判断用户是新增还是修改
  saveUser(user) {
    if (user.id === null || user.id === undefined) {
      return this.addUser(user)
    } else {
      return this.updateUser(user)
    }
  },

  // 根据用户id 获取用户信息
  getUserById(id) {
    return request({
      // url: '/user'+id,
      url: `/user/${id}`,
      method: 'get',

    })
  },
  //  删除用户
  deleteUserById(id) {
    return request({
      url: `/user/${id}`,
      method: 'delete',

    })
  },

  
}
