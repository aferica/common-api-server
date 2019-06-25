'use strict';
const Controller = require('egg').Controller;

class ProxyController extends Controller {
  
  async getProxyList() {
    const { ctx, service } = this;
    const res = await service.utils.proxy.getProxyList();
    ctx.helper.success({ ctx, res });
  }
}

module.exports = ProxyController;
