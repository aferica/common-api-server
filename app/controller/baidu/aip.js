const Controller = require('egg').Controller;

class AIPController extends Controller {
  /**
   * @api {post} /common/baidu/aip/general 百度图像识别--通用接口
   * @apiVersion 1.0.0
   * @apiName 百度图像识别--通用接口
   * @apiGroup 百度图像识别
   * 
   * @apiParam {file} image 需要识别的图片
   */
  async general() {
    const { ctx, service } = this;
    let image;
    if (ctx.request.body.url) {
      const res = await ctx.curl(ctx.request.body.url);
      image = res.data.toString('base64');
    } else {
      const stream = await ctx.getFileStream();
      image = await service.baidu.aip.stream2Base64(stream);
    }
    
    const res = await service.baidu.aip.general(image);
    ctx.helper.success({ ctx, res });
  }

  async plant() {
    const { ctx, service } = this;
    let image;
    if (ctx.request.body.url) {
      const res = await ctx.curl(ctx.request.body.url);
      image = res.data.toString('base64');
    } else {
      const stream = await ctx.getFileStream();
      image = await service.baidu.aip.stream2Base64(stream);
    }
    const res = await service.baidu.aip.plant(image);
    ctx.helper.success({ ctx, res });
  }

  async animal() {
    const { ctx, service } = this;
    let image;
    if (ctx.request.body.url) {
      const res = await ctx.curl(ctx.request.body.url);
      image = res.data.toString('base64');
    } else {
      const stream = await ctx.getFileStream();
      image = await service.baidu.aip.stream2Base64(stream);
    }
    const res = await service.baidu.aip.animal(image);
    ctx.helper.success({ ctx, res });
  }

  async logo() {
    const { ctx, service } = this;
    let image;
    if (ctx.request.body.url) {
      const res = await ctx.curl(ctx.request.body.url);
      image = res.data.toString('base64');
    } else {
      const stream = await ctx.getFileStream();
      image = await service.baidu.aip.stream2Base64(stream);
    }
    const res = await service.baidu.aip.logo(image);
    ctx.helper.success({ ctx, res });
  }

  async car() {
    const { ctx, service } = this;
    let image;
    if (ctx.request.body.url) {
      const res = await ctx.curl(ctx.request.body.url);
      image = res.data.toString('base64');
    } else {
      const stream = await ctx.getFileStream();
      image = await service.baidu.aip.stream2Base64(stream);
    }
    const res = await service.baidu.aip.car(image);
    ctx.helper.success({ ctx, res });
  }

  async dish() {
    const { ctx, service } = this;
    let image;
    if (ctx.request.body.url) {
      const res = await ctx.curl(ctx.request.body.url);
      image = res.data.toString('base64');
    } else {
      const stream = await ctx.getFileStream();
      image = await service.baidu.aip.stream2Base64(stream);
    }
    const res = await service.baidu.aip.dish(image);
    ctx.helper.success({ ctx, res });
  }
};

module.exports = AIPController;
