'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  router.get('/a', app.jsonp(), controller.home.a);//jsonp请求方式
  // 用户管理

  router.post('/user/login', controller.user.login);
  router.post('/user/modileLogin', controller.user.modileLogin);

  router.get('/user/verifyCode', controller.user.verifyCode);
  router.post('/user/registry', controller.user.registry);

  router.get('/user/getUserByToken', controller.user.getUserByToken);
  router.get('/user/getUserPermissions', controller.user.getUserPermissions);
  router.get('/user/getUserInfo', controller.user.getUserInfo);

  router.post('/user/upload', controller.user.upload);
  router.put('/user/updataUserInfo', controller.user.updataUserInfo);

  router.get('/user/historyAvatar', controller.user.historyAvatar);
  router.put('/user/cutAvatar', controller.user.cutAvatar);
  //手机找回密码
  router.put('/user/modifyPwdByMobile', controller.user.modifyPwdByMobile);
  //发送邮箱验证码
  router.get('/user/SendMailVerifyCode', controller.user.SendMailVerifyCode);
  router.put('/user/modifyPwdByEmail', controller.user.modifyPwdByEmail);
  // TODO
  // router.post('/user/forgotPwd', controller.user.forgotPwd);
  // router.post('/user/modifyPwd', controller.user.modifyPwd);
  // router.post('/user/modifyEmail', controller.user.modifyEmail);
  // router.post('/user/modifyMible', controller.user.modifyMible);
  // router.post('/user/modifyGraph', controller.user.modifyGraph);
  // router.post('/user/modifyNickname', controller.user.modifyNickname);

  //用户鉴权
  router.post('/identity/add', controller.user.addIdentiry)
  router.post('/identity/list', controller.user.identiryList)


  // 轮播图管理
  router.post('/carousel/add', controller.carousel.add);
  router.put('/carousel/edit', controller.carousel.edit);
  router.delete('/carousel/del', controller.carousel.del);
  router.get('/carousel/list', controller.carousel.list);
  router.get('/carousel/all', controller.carousel.all);

  // 商品管理
  router.get('/getTypeList', controller.product.type);//
  router.get('/getSortList', controller.product.sort);//
  router.get('/product/sea', controller.product.searchProduct);
  router.get('/product/list', controller.product.list);
  router.get('/product/typeList', controller.product.typeList);
  router.post('/product/add', controller.product.add);

  router.post('/product/edit', controller.product.edit);
  router.delete('/product/del', controller.product.del);
  router.get('/product/:pid', controller.product.getproductDetail);

  router.post('/product/type/add', controller.product.typeAdd);
  router.put('/product/type/edit', controller.product.typeEdit);
  router.delete('/product/type/del', controller.product.typeDel);
  router.post('/product/sort/add', controller.product.sortAdd);
  router.put('/product/sort/edit', controller.product.sortEdit);
  router.delete('/product/sort/del', controller.product.sortDel);


  // 评论
  router.get('/comment/list', controller.comment.list);
  router.get('/comment/all', controller.comment.allList);
  router.post('/comment/add', controller.comment.add);
  router.delete('/comment/del', controller.comment.del);
  // 地址管理
  router.post('/address/add', controller.address.add);
  router.put('/address/edit', controller.address.edit);
  router.delete('/address/del', controller.address.del);
  router.get('/address/list', controller.address.list);
  router.get('/address/all', controller.address.allList);


  // 订单管理
  router.post('/order/add', controller.order.add);
  router.get('/order/list', controller.order.list);
  router.get('/order/all', controller.order.allList);
  router.get('/order/list/:oid', controller.order.detail)
  router.put('/order/updateStatus', controller.order.edit)
  router.delete('/order/del', controller.order.del)
  // router.post('/order/shopcar', controller.order.shopcar);

  // 搜索
  // router.post('/search', controller.search.search);
  // 根据加入购物车商品，随机推荐热门搜索关键字
  // router.post('/search/hot', controller.search.hot);
  // router.post('/search/history', controller.search.history);


};
