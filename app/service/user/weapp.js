'use strict';
const Service = require('egg').Service;

class WeappService extends Service {
  async check(code) {
    const { ctx, app } = this;

    const sessionDataString = await ctx.curl('https://api.weixin.qq.com/sns/jscode2session', {
      dataType: 'text',
      method: 'GET',
      data: {
        grant_type: 'authorization_code',
        js_code: code,
        secret: app.config.weapp.appSecret,
        appid: app.config.weapp.appId,
      }
    });
    // console.log(sessionDataString.data);
    const sessionData = JSON.parse(sessionDataString.data);
    
    if (!sessionData.openid) {
      ctx.throw(-1, '登录失败')
    }
    let result;
    const res = await app.mysql.get('user', { open_id: sessionData.openid});
    if (res) {
      delete res.password
      res.token = await ctx.helper.createToken(ctx, res);
      result = {
        code: 0,
        res: res,
        msg: '请求成功'
      }
    } else {
      result = {
        code: 101,
        res: {
          openid: sessionData.openid,
          token: await ctx.helper.createToken(ctx, { openid: sessionData.openid })
        },
        msg: '尚未注册'
      }
    }

    return result;
  }
}

module.exports = WeappService;
