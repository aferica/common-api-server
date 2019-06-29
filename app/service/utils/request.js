'use strict';
const Service = require('egg').Service;
const request = require('request');
const httpAgent = require('socks5-http-client/lib/Agent');
const httpsAgent = require('socks5-https-client/lib/Agent');

class RequestService extends Service {

  async post(options, proxy = true) {
    const { app, service } = this;
    if (proxy) {
      if (options.url.indexOf("https") > -1) {
        options.agentClass = httpsAgent;
        options.strictSSL = true;
      } else {
        options.agentClass = httpAgent;
      }
      options.agentOptions = {
        socksHost: app.config.porxyOptions.socksHost,
        socksPort: app.config.porxyOptions.socksPort
      };
    }
    return new Promise((resolve, reject) => {
      request.post(options, function(error, response, body) {
        if (!error && response.statusCode == 200) {
          return resolve(body);
        } else {
          return reject(error);
        }
      });
    });
  }

  async get(options, proxy = false) {
    const { app } = this;
    if (proxy) {
      if (options.url.indexOf("https") > -1) {
        options.agentClass = httpsAgent;
        options.strictSSL = true;
      } else {
        options.agentClass = httpAgent;
      }
      options.agentOptions = {
        socksHost: app.config.porxyOptions.socksHost,
        socksPort: app.config.porxyOptions.socksPort
      };
    }

    return await request(options);
  }

  // 获取代理ip
  async getProxyList() {
    const res = await this.ctx.curl('http://www.66ip.cn/mo.php?sxb=%C3%C0%B9%FA&tqsl=5&port=&export=&ktip=&sxa=&submit=%CC%E1++%C8%A1&textarea=', {
      dataType: 'text',
    });
    let result = res.data;
    const ret = result.match(/\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}:\d{1,4}/g);
    return ret;
  }
}

module.exports = RequestService;
