/*
 * @Author: heinan 
 * @Date: 2020-07-16 11:33:19 
 * @Last Modified by: heinan
 * @Last Modified time: 2020-07-16 11:51:16
 */
'use strict';

const Service = require('egg').Service;
const { idCreator } = require('../utils');

class AddressService extends Service {
  async add({ uid, auser, mobile, province, city, county, street }) {
    const aid = idCreator(uid);
    const $params = [aid, uid, auser, mobile, province, city, county, street];
    const $sql = 'insert into address (aid,uid, auser, mobile, province, city, county, street) values (?,?,?,?,?,?,?,?)';
    return await this.ctx.app.mysql.query($sql, $params)
  }
  async del({ aid }) {
    const $sql = 'delete from address where aid=?';
    const $params = [aid];
    return await this.ctx.app.mysql.query($sql, $params)
  }
  async edit({ auser, mobile, province, city, county, street, aid }) {
    const $sql = 'update address set auser=?, mobile=?, province=?,city=?,county=?,street=? where aid=?';
    const $params = [auser, mobile, province, city, county, street, aid];
    return await this.ctx.app.mysql.query($sql, $params)
  }
  async list({ uid }) {
    const $sql = 'select * from `address` where uid=?';
    return await this.ctx.app.mysql.query($sql, [uid])
  }
}

module.exports = AddressService;