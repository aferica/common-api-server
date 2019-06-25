'use strict';
const url = require('url');
const Controller = require('egg').Controller;

class RedirectController extends Controller {
  async index() {
    const { ctx } = this;
    const requestUrl = decodeURIComponent(ctx.query.url);
    const needRederer = ctx.query.needRederer;
    let referer = ctx.query.customReferer || '';
    let headers = {
      'user-agent': '	Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/72.0.3626.121 Safari/537.36'
    }
    if(needRederer) {
      if (referer == '') {
        referer = url.parse(referer).protocol + '://' + url.parse(referer).host
      }
      headers.referer = referer
    }
    const result = await ctx.curl(requestUrl, {
      streaming: true,
      method: 'get',
      headers: headers
    });
    ctx.set(result.headers);
    // result.res 是一个 stream
    ctx.body = result.res;
    ctx.status = result.status;
  }
}

module.exports = RedirectController;