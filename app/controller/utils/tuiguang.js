'use strict';
const Controller = require('egg').Controller;

class TuiGuangController extends Controller {
  
  async tuiguang() {
    const { ctx, service } = this;
    const url = ctx.query.url;
    if (url) {
      const res = await service.utils.tuiguang.tuiguang(url);
      ctx.helper.success({ ctx, res });
    } else {
      ctx.helper.successOtherWithoutData({ ctx, code: 1, msg: '请传出地址'})
    }
  }
}

module.exports = TuiGuangController;
