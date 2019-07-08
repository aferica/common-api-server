'use strict';

const Controller = require('egg').Controller;

class VideoController extends Controller {

  /**
   * @api {get} /common/video/home 视频网站首页信息
   * @apiVersion 1.0.0
   * @apiName 视频网站首页信息
   * @apiGroup Video
   * 
   * @apiParam {string} needReferer 是否需要Referer，如果是需要，默认为 baseUrl的域名
   * @apiParam {string} customReferer 自定义Referer
   * @apiParam {string} needProxy 是否需要代理
   * 
   * @apiParam {string} baseUrl 视频网站地址,最好使用URL编码一次
   * @apiParam {string} swiperCss  推荐css选择器
   * @apiParam {string} newCss  最新视频css选择器
   * @apiParam {string} hotCss  热门视频css选择器
   * @apiParam {string} movieCss  热门视频css选择器
   * @apiParam {string} tvCss  热门视频css选择器
   * @apiParam {string} cateCss  热门视频css选择器
   * @apiParam {string} majorCss 主要分类
   * @apiParam {string} minorCss 次要分类
   */
  async home() {
    const { ctx, service } = this
    // 组装参数
    const payload = ctx.query
    // 调用 Service 进行业务处理
    const res = await service.video.video.home(payload)
    // 设置响应内容和响应状态码
    ctx.helper.success({ctx, res})
  }
}

module.exports = VideoController;