/*
 * @Author: heinan 
 * @Date: 2020-07-15 16:51:55 
 * @Last Modified by: heinan
 * @Last Modified time: 2020-07-15 17:19:01
 */
'use strict';
const { ROUTER_WHITE_LIST } = require('../app/config');

module.exports = appInfo => {
  const config = exports = {
    keys: appInfo.name + '_1594687965874_2972',
    whiteList: ROUTER_WHITE_LIST,
    security: {
      csrf: {
        enable: false,
      },
    },
    validate: {
      convert: false,
    },
    multipart: {
      mode: 'file',
    },
    mysql: {
      client: {
        host: '127.0.0.1',
        port: '3306',
        user: 'root',
        password: '12344321',
        database: 'mart',
      },
      app: true,
      agent: false,
    },
  };
  config.middleware = ['oauth', 'gzip'];
  return {
    ...config,
  };
};
