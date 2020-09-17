'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  router.get('/', controller.home.index);
  // 用户管理
  router.post('/user/login', controller.user.login);
  router.post('/user/registry', controller.user.registry);
  router.get('/user/getUserByToken', controller.user.getUserByToken);
  router.get('/user/getUserInfo', controller.user.getUserInfo);
  router.post('/user/upload', controller.user.upload);
  router.get('/user/avatarList', controller.user.avatarList)
  // TODO
  /*router.post('/user/forgotPwd', controller.user.forgotPwd);
  router.post('/user/modifyPwd', controller.user.modifyPwd);
  router.post('/user/modifyEmail', controller.user.modifyEmail);
  router.post('/user/modifyMible', controller.user.modifyMible);
  router.post('/user/modifyGraph', controller.user.modifyGraph);
  router.post('/user/modifyNickname', controller.user.modifyNickname);*/

  //用户鉴权
  router.post('/identity/add', controller.user.addIdentity)
  router.post('/identity/list', controller.user.identityList)
  router.get('/getUserIdentityById', controller.user.identiry)

  // 轮播图管理
  router.post('/carousel/add', controller.carousel.add);
  router.put('/carousel/edit', controller.carousel.edit);
  router.delete('/carousel/del', controller.carousel.del);
  router.get('/carousel/list', controller.carousel.list);

  // 商品管理
  router.get('/getTypeList', controller.product.type);
  router.get('/getSortList', controller.product.sort);
  router.get('/product/list', controller.product.list);
  router.post('/product/add', controller.product.add);
  router.post('/product/edit', controller.product.edit);
  router.delete('/product/del', controller.product.del);
  router.get('/product/:pid', controller.product.detail);
  router.get('/product/searchByType', controller.product.searchByType);

  // 评论
  router.get('/comment/list', controller.comment.list);
  router.post('/comment/add', controller.comment.add);
  router.delete('/comment/del', controller.comment.del);

  // 地址管理
  router.post('/address/add', controller.address.add);
  router.post('/address/edit', controller.address.edit);
  router.delete('/address/del', controller.address.del);
  router.get('/address/list', controller.address.list);

  // 订单管理
  router.post('/order/add', controller.order.add);
  router.get('/order/list', controller.order.list);
  router.get('/order/list/:oid', controller.order.detail)
  router.put('/order/updateStatus', controller.order.updateStatus)
  // router.post('/order/shopcar', controller.order.shopcar);

  // 搜索
  // router.post('/search', controller.search.search);
  // 根据加入购物车商品，随机推荐热门搜索关键字
  // router.post('/search/hot', controller.search.hot);
  // router.post('/search/history', controller.search.history);
};
