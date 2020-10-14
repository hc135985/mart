/*
 * @Author: heinan 
 * @Date: 2020-07-15 16:02:49 
 * @Last Modified by: HuangChao
 * @Last Modified time: 2020-10-13 17:10:34
 */
'use strict';
const { checkWhiteList, verifyToken } = require('../utils');
const { JWT_KEYGEN } = require('../config');

module.exports = function () {
  return async function oauth(ctx, next) {
    let userInfo;
    // 验证超级白名单
    if (checkWhiteList(ctx.path, ctx.method, ctx.app.config.whiteList)) {
      await next();
      return;
    }
    //如果是images的目录跳过
    if (ctx.path.startsWith('/upload')||ctx.path.startsWith('/public')) {
      await next();
      return;
    }
    // 获取请求头的token
    const Authorization = unescape(ctx.get('authorization'));
    if (Authorization === null || Authorization === '') {
      ctx.status = 401;
      ctx.body = { msg: '没有权限信息', code: 0 }
      return;
    }
    // 校验token
    try {
      userInfo = await verifyToken(Authorization, JWT_KEYGEN);
    } catch (err) {
      ctx.status = 401;
      ctx.body = { msg: '权限信息可能被篡改', code: 0 }
      return;
    }
    const { signTime } = userInfo;
    const nowTime = new Date().getTime();
    const time = (nowTime - signTime) / 1000 / 60 / 60;
    if (time >= 5) {
      ctx.status = 401;
      ctx.body = { msg: '权限信息过期', code: 0 }
      return;
    }
    // 把用户信息存入ctx.token中
    ctx.token = userInfo;
    await next();
  };
};
