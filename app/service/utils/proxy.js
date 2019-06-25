'use strict';
const Service = require('egg').Service;

class ProxyService extends Service {
  // 获取代理ip
  async getProxyList() {
    let shell = 'python ./utils/proxy.py';
    let result = await this.service.utils.shell.getShellResult(shell);
    console.log(result);
    const ret = result.match(/\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}:\d{1,4}/g);
    console.log(ret);
    return ret;
  }
}

module.exports = ProxyService;
