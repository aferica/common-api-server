'use strict';
const Service = require('egg').Service;

class TuiguangService extends Service {
  // 多次访问
  async tuiguang(url) {
    const { ctx, service } = this;
    const ips = await service.utils.proxy.getProxyList();
    let options = {
      url: url
    }
    let res = await service.utils.request.get(options, ips[0]);
    return res;
  }
}

module.exports = TuiguangService;
