import request from '@/utils/request'

export default {
  // 获取角色列表
  getRoleList(SearchModel) {
    return request({
      url: '/role/list',
      method: 'get',
      params: {
        pageNo: SearchModel.pageNo,
        pageSize: SearchModel.pageSize,
        roleName: SearchModel.roleName,

      }
    })
  },
  // 新增角色
  addRole(role) {
    return request({
      url: '/role',
      method: 'post',
      data: role
    })
  },
  // 修改角色
  updateRole(role) {
    return request({
      url: '/role',
      method: 'put',
      data: role
    })
  },
  // 判断角色是新增还是修改
  saveRole(role) {
    if (role.roleId === null || role.roleId === undefined) {
      return this.addRole(role)
    } else {
      return this.updateRole(role)
    }
  },

  // 根据角色id 获取角色信息
  getRoleById(id) {
    return request({
      url: `/role/${id}`,
      method: 'get',

    })
  },
  //  删除角色
  deleteRoleById(id) {
    return request({
      url: `/role/${id}`,
      method: 'delete',

    })
  },

   // 获取所有的角色名称
   getAllRoleList() {
    return request({
      url: '/role/all',
      method: 'get'
    })
  },
}
