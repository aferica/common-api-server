const Controller = require('egg').Controller;

class RSSController extends Controller {
  async test() {
    const { ctx, service } = this;
    // 调用 Service 进行业务处理
    const res = await service.rss.rss.test();
    // 设置响应内容和响应状态码
    ctx.helper.success({ctx, res});
  }
};

module.exports = RSSController;