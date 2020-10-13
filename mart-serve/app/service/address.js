/*
 * @Author: heinan 
 * @Date: 2020-07-16 11:33:19 
 * @Last Modified by: HuangChao
 * @Last Modified time: 2020-10-13 17:09:51
 */
'use strict';

const Service = require('egg').Service;
const { idCreator } = require('../utils');

class AddressService extends Service {
  async add({ uid, auser, mobile, province, city, county, street }, cllback) {
    const aid = idCreator(uid).slice(0, 20);
    cllback(aid)
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
    console.log(auser, mobile, province, city, county, street, aid)
    const $params = [auser, mobile, province, city, county, street, aid];
    return await this.ctx.app.mysql.query($sql, $params)
  }
  async list({ uid, aid }) {
    const $sql = aid ? 'select * from `address` where uid=?  and aid=?' : 'select * from `address` where uid=?';
    const $params = aid ? [uid, aid] : [uid]
    return await this.ctx.app.mysql.query($sql, $params)
  }
  async allList() {
    const $sql = 'select * from `address` ';
    return await this.ctx.app.mysql.query($sql)
  }

}

module.exports = AddressService;