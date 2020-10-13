/*
 * @Author: heinan 
 * @Date: 2020-07-15 10:23:53 
 * @Last Modified by: HuangChao
 * @Last Modified time: 2020-09-28 10:00:29
 */
'use strict';

const Service = require('egg').Service;
const { idCreator } = require('../utils');
const { PRODUCT_DEFAULT_SORTNAME, PRODUCT_DEFAULT_SORTTYPE } = require('../config');

class ProductService extends Service {
  async type() {
    const $sql = 'SELECT * FROM `type`';
    return await this.ctx.app.mysql.query($sql)
  }
  async sort({ t_type }) {
    const $sql = t_type ? `select * from sort where t_type=${t_type * 1}` : 'SELECT * FROM sort';
    return await this.ctx.app.mysql.query($sql)
  }
  async list() {
    const $sql = `SELECT * FROM product`;
    return await this.ctx.app.mysql.query($sql)
  }
  async typeList({ t_type, s_type, pagesize, pagecount }) {
    pagesize = pagesize || 10
    pagecount = pagecount || 1
    let $sql =
      t_type ?
        s_type
          ? 'select * from product where t_type=? and s_type=?  limit ?,?'
          : 'select * from product where t_type=? limit ?,?'
        : s_type ?
          'select * from product where s_type=? limit ?,?'
          : 'select * from product limit ?,?'

    let $params = t_type ? s_type ? [t_type, s_type] : [t_type] : s_type ? [s_type] : []
    $params = $params.concat([(pagecount - 1) * pagesize, pagesize * pagecount])
    return await this.ctx.app.mysql.query($sql, $params)
  }
  async add({ pname, sales, original_price, sale_price, mode, s_type, t_type, carousel, desc }) {
    let imgarr = [
      'https://dss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=1293700903,2031650085&fm=26&gp=0.jpg',
      'https://img1.360buyimg.com/n6/jfs/t1/143779/18/3061/175039/5f0eab76E1bc8f13f/affc3a65c19d4e23.jpg',
      'https://dss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=3510060093,3714106924&fm=26&gp=0.jpg',
      'https://dss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=3651310629,4261557813&fm=26&gp=0.jpg',
      'https://dss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=1854538955,2155541042&fm=26&gp=0.jpg',
      'https://ms.bdimg.com/dsp-image/3250962582.jpg'
    ]
    let img = imgarr[Math.ceil(Math.random() * 7)]
    const pid = idCreator(pname).slice(0, 20);
    const $params = [pid, pname, img, sales, original_price, sale_price, mode, s_type, t_type, carousel, desc];
    const $sql = 'insert into product (pid,pname, imgUrl, sales, original_price, sale_price, `mode`, s_type, t_type, carousel, `desc` ) values (?,?,?,?,?,?,?,?,?,?,?)';
    return await this.ctx.app.mysql.query($sql, $params)
  }
  async typeAdd({ t_text, t_type }) {
    const $sql = `insert into type (t_text,t_type) values ('${t_text}','${t_type}')`
    return await this.ctx.app.mysql.query($sql)
  }
  async sortAdd({ s_text, t_type, s_type }) {
    const $sql = `insert into sort (s_text,t_type,s_type) values ('${s_text}',${t_type},${s_type})`
    return await this.ctx.app.mysql.query($sql)
  }
  async typeEdit({ t_text, t_type, tid }) {
    const $sql = `update type set t_type=?, t_text=? where tid=?`
    const $params = [t_type, t_text, tid]
    return await this.ctx.app.mysql.query($sql, $params)
  }
  async sortEdit({ s_text, t_type, s_type }) {
    const $sql = `update sort set t_type=?, s_text=? where s_type=?`
    const $params = [t_type, s_text, s_type]
    return await this.ctx.app.mysql.query($sql, $params)
  }
  async typeDel({ tid }) {
    const $sql1 = `select *  from type  tid=?`
    let res = await this.ctx.app.mysql.query($sql1)
    const $sql2 = `delete from sort where t_type=?`
    this.ctx.app.mysql.query($sql2, [res[0].t_type])
    const $sql = `delete from type where tid=?`
    const $params = [tid]
    return await this.ctx.app.mysql.query($sql, $params)
  }
  async sortDel({ s_type }) {
    const $sql = `delete from sort where s_type=?`
    const $params = [s_type]
    return await this.ctx.app.mysql.query($sql, $params)
  }
  async edit({ pid, pname, imgUrl, sales, original_price, sale_price, mode, s_type, t_type, carousel, desc }) {
    const $sql = 'UPDATE `mart`.`product` SET `pname`=?, `imgUrl`=?, `sales`=?, `original_price`=?, `sale_price`=?, `mode`=?, `s_type`=?, `t_type`=?, `carousel`=?, `desc`=? WHERE  `pid`=?'
    const $params = [pname, imgUrl, sales, original_price, sale_price, mode, s_type, t_type, carousel, desc, pid];
    return await this.ctx.app.mysql.query($sql, $params)
  }
  async delete({ pid }) {
    const $sql = 'DELETE FROM `mart`.`product` WHERE  `pid`=?';
    return await this.ctx.app.mysql.query($sql, [pid])
  }
  async getproductDetail({ pid }) {
    const $sql = 'select * from product where  `pid`=?';
    return await this.ctx.app.mysql.query($sql, [pid])
  }
  async searchProduct({ keyword }) {
    const $sql = `SELECT * FROM product WHERE pname LIKE '%${keyword}%'`;
    return await this.ctx.app.mysql.query($sql)
  }
}

module.exports = ProductService;
