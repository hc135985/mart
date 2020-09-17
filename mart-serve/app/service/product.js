/*
 * @Author: heinan 
 * @Date: 2020-07-15 10:23:53 
 * @Last Modified by: heinan
 * @Last Modified time: 2020-07-16 15:26:45
 */
'use strict';

const Service = require('egg').Service;
const { idCreator } = require('../utils');
const { PRODUCT_DEFAULT_SORTNAME, PRODUCT_DEFAULT_SORTTYPE } = require('../config');

class ProductService extends Service {
  async type() {
    const $sql = 'SELECT t_text,t_type FROM type`type`';
    return await this.ctx.app.mysql.query($sql)
  }
  async sort({ t_type }) {
    const $sql = t_type === undefined ? `SELECT sort.s_type,sort.t_type,sort.s_text FROM type,sort WHERE sort.t_type=type.t_type AND type.t_type=${t_type}` : 'select * from `sort`';
    return await this.ctx.app.mysql.query($sql)
  }
  async list(query) {
    query = {
      sortname: PRODUCT_DEFAULT_SORTNAME,
      sorttype: PRODUCT_DEFAULT_SORTTYPE,
      ...query,
    }
    const $sql = query.s_type !== undefined ?
      `SELECT * FROM product,sort WHERE  sort.s_type=product.s_type AND product.s_type=${query.s_type} ` :
      `SELECT * FROM product WHERE  product.t_type=${query.t_type} order by ${query.sortname} ${query.sorttype}`;
    return await this.ctx.app.mysql.query($sql)
  }
  async add({ pname, imgUrl, sales, original_price, sale_price, mode, s_type, t_type, carousel, desc }) {
    const pid = idCreator(pname);
    const $params = [pid, pname, imgUrl, sales, original_price, sale_price, mode, s_type, t_type, carousel, desc];
    const $sql = 'insert into product (pid,pname, imgUrl, sales, original_price, sale_price, `mode`, s_type, t_type, carousel, `desc` ) values (?,?,?,?,?,?,?,?,?,?,?)';
    return await this.ctx.app.mysql.query($sql, $params)
  }
  async edit({ pid, pname, imgUrl, sales, original_price, sale_price, mode, s_type, t_type, carousel, desc, cid }) {
    // const $sql = 'update product set pname=?, imgUrl=?,pname=?, sales=?,original_price=?, sale_price=?,mode=?, s_type=?,t_type=?, carousel=?,`desc`=? cid=? where pid=?';
    const $sql = 'UPDATE `mart`.`product` SET `pname`=?, `imgUrl`=?, `sales`=?, `original_price`=?, `sale_price`=?, `mode`=?, `s_type`=?, `t_type`=?, `cid`=?, `carousel`=?, `desc`=? WHERE  `pid`=?'
    const $params = [pname, imgUrl, sales, original_price, sale_price, mode, s_type, t_type, cid, carousel, desc, pid];
    return await this.ctx.app.mysql.query($sql, $params)
  }
  async delete({ pid }) {
    const $sql = 'DELETE FROM `mart`.`product` WHERE  `pid`=?';
    return await this.ctx.app.mysql.query($sql, [pid])
  }
  async searchByType({ keyword, s_type }) {
    const $sql = `SELECT * FROM product WHERE pname LIKE '%${keyword}%' AND s_type=${s_type}`;
    return await this.ctx.app.mysql.query($sql)
  }
  async detail({ pid }) {
    const $sql = 'select * from product where pid=?';
    return await this.ctx.app.mysql.query($sql, [pid])
  }
}

module.exports = ProductService;
