/*
 * @Author: heinan 
 * @Date: 2020-07-15 16:34:36 
 * @Last Modified by:   heinan 
 * @Last Modified time: 2020-07-15 16:34:36 
 */
'use strict';
const fs = require('fs');
const path = require('path');
module.exports = options => {
  return async (ctx, next) => {
    if (ctx.path.indexOf('/public/spa') !== -1) {
      let indexHtml = fs.readFileSync(path.join(__dirname, '../public/spa/index.html'), 'utf-8');
      ctx.body = indexHtml;
    } else {
      await next();
    }
  }
}