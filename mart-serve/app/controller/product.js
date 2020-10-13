'use strict';

const Controller = require('egg').Controller;

class ProductController extends Controller {
  /**
 * 获取商品一级列表
 */
  async type() {
    const result = await this.ctx.service.product.type();
    if (result.length) {
      this.ctx.status = 200;
      this.ctx.body = {
        code: 1,
        result,
      }
    } else {
      this.ctx.status = 406;
      this.ctx.body = {
        code: 0,
      }
    }
  }
  /**
   * 获取商品二级列表
   * @ t_type => string : 一级列表type
   */
  async sort() {
    const result = await this.ctx.service.product.sort(this.ctx.query);
    if (result.length) {
      this.ctx.status = 200;
      this.ctx.body = {
        code: 1,
        result,
      }
    } else {
      this.ctx.status = 406;
      this.ctx.body = {
        code: 0,
      }
    }
  }
  /**
   * 获取所有商品列表
   */
  async list() {
    const result = await this.ctx.service.product.list(this.ctx.request.body);
    if (result.length) {
      this.ctx.status = 200;
      this.ctx.body = {
        code: 1,
        result,
      }
    } else {
      this.ctx.status = 406;
      this.ctx.body = {
        code: 0,
      }
    }
  }
  /**
   * 通过一级列表和二级列表请求数据
   * @ t_type, number 可选 一级列表type
   * @ s_type,number  可选  二级列表type
   * @ pagesize  number= 10,
   * @ pagecount number = 1
   */
  async typeList() {
    const result = await this.ctx.service.product.typeList(this.ctx.query);
    if (result.length) {
      this.ctx.status = 200;
      this.ctx.body = {
        code: 1,
        result,
      }
    } else {
      this.ctx.body = {
        code: 0,
      }
    }
  }
  /**
   * 添加一级列表分类
   *  @ t_text,string  类型字段
   *  @ t_type number 分类类型
   */
  async typeAdd() {
    const result = await this.service.product.typeAdd(this.ctx.request.body)
    if (result.affectedRows > 0) {
      this.ctx.body = {
        code: 1,
        msg: '添加成功！',
      }
    } else {
      this.ctx.status = 406;
      this.ctx.body = {
        code: 0,
        msg: '添加失败！',
      }
    }
  }
  /**
   * 添加二级列表
   *  @ s_text,string  二级列表字段
   *  @ t_type,number  一级列表类型
   *  @ s_type number  二级列表类型
   */
  async sortAdd() {
    const result = await this.service.product.sortAdd(this.ctx.request.body)
    if (result.affectedRows > 0) {
      this.ctx.body = {
        code: 1,
        msg: '添加成功！',
      }
    } else {
      this.ctx.status = 406;
      this.ctx.body = {
        code: 0,
        msg: '添加失败！',
      }
    }
  }
  /**
   * 删除一级列表
   * @ tid string 一级列表id
   * 会导致这一级列表下的所有二级列表都被删除
   */
  async typeDel() {
    const result = await this.service.product.typeDel(this.ctx.query)
    if (result.affectedRows > 0) {
      this.ctx.body = {
        code: 1,
        msg: '删除成功！',
      }
    } else {
      this.ctx.status = 406;
      this.ctx.body = {
        code: 0,
        msg: '删除失败！',
      }
    }
  }
  /**
   * 删除二级列表
   * @ s_type number 二级列表类型
   */
  async sortDel() {
    const result = await this.service.product.sortDel(this.ctx.query)
    if (result.affectedRows > 0) {
      this.ctx.body = {
        code: 1,
        msg: '删除成功！',
      }
    } else {
      this.ctx.status = 406;
      this.ctx.body = {
        code: 0,
        msg: '删除失败！',
      }
    }
  }
  /**
   * 修改一级列表
   *  @ t_text,  string 一级列表字段
   *  @ t_type, number 一级列表类型
   *  @ tid  string  一级列表id
   */
  async typeEdit() {
    const result = await this.service.product.typeEdit(this.ctx.request.body)
    if (result.affectedRows > 0) {
      this.ctx.body = {
        code: 1,
        msg: '修改成功！',
      }
    } else {
      this.ctx.status = 406;
      this.ctx.body = {
        code: 0,
        msg: '修改失败！',
      }
    }
  }
  /**
   * 修改二级列表
   *  @ s_text,  string 二级列表字段
   *  @ t_type, number 一级列表类型
   *  @ s_type  number 二级列表类型
   */
  async sortEdit() {
    const result = await this.service.product.sortEdit(this.ctx.request.body)
    if (result.affectedRows > 0) {
      this.ctx.body = {
        code: 1,
        msg: '修改成功！',
      }
    } else {
      this.ctx.status = 406;
      this.ctx.body = {
        code: 0,
        msg: '修改失败！',
      }
    }
  }
  /**
   * 添加轮播图
   *  @ pname, string 商品名称
   *  @ sales, string 商品销量
   *  @ original_price,string 原价 
   *  @ sale_price, string 现价
   *  @ mode, string   经营模式
   *  @ s_type,number 商品二级分类 
   *  @ t_type,number 商品一级分类
   *  @ carousel,string 轮播图字符 
   *  @ desc  string 商品描述
   */
  async add() {
    const result = await this.service.product.add(this.ctx.request.body)
    if (result.affectedRows > 0) {
      this.ctx.body = {
        code: 1,
        msg: '添加成功！',
      }
    } else {
      this.ctx.status = 406;
      this.ctx.body = {
        code: 0,
        msg: '添加失败！',
      }
    }
  }
  /**
   * 获取商品详情
   * @ pid string 商品id
   */
  async getproductDetail() {
    const result = await this.service.product.getproductDetail(this.ctx.params)
    if (result.length) {
      this.ctx.status = 200;
      this.ctx.body = {
        code: 1,
        result,
      }
    } else {
      this.ctx.body = {
        code: 0,
        msg: '暂无数据'
      }
    }
  }
  /**
   * 修改数据
   * @pid, string 商品id 
   * @ pname, string 商品名称
   * @ imgUrl, string  商品图片路径
   * @ sales, string 商品销量
   * @ original_price, string  原价
   * @ sale_price, string  现价
   * @ mode,string   经营模式
   * @ s_type , string  二级分类
   * @ t_type, string 一级分类
   * @ carousel, string 商品图片
   * @ desc string  商品描述
   */
  async edit() {
    const result = await this.service.product.edit(this.ctx.request.body)
    if (result.affectedRows > 0) {
      this.ctx.body = {
        code: 1,
        msg: '更新成功！',
      }
    } else {
      this.ctx.status = 406;
      this.ctx.body = {
        code: 0,
        msg: '更新失败！',
      }
    }
  }
  /**
   * 删除商品
   * @ pid string 商品id
   */
  async del() {
    const result = await this.service.product.delete(this.ctx.query)
    if (result.affectedRows > 0) {
      this.ctx.body = {
        code: 1,
        msg: '删除成功！',
      }
    } else {
      this.ctx.status = 406;
      this.ctx.body = {
        code: 0,
        msg: '删除失败！',
      }
    }
  }
  /**
   * 搜索商品
   *  @ keyword  string 商品关键字
   */
  async searchProduct() {
    const result = await this.ctx.service.product.searchProduct(this.ctx.query);
    console.log(result)
    if (result.length) {
      this.ctx.body = {
        result,
        code: 1
      }
    } else {
      this.ctx.body = {
        msg: '暂无数据',
        code: 0
      }
    }

  }
}

module.exports = ProductController;
