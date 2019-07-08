'use strict';

const Controller = require('egg').Controller;

class VideoController extends Controller {
  /**
   * @api {get} /common/video/index 视频源信息
   */
  async index() {
    const { ctx } = this;
    const res = {
      "source": [
        {
          "baseUrl": "https://www.qtmovie.com",
          "title": "晴天影视",
        },
        {
          "baseUrl": "http://fpx6.cn",
          "title": "墨语影视",
        },
        {
          "baseUrl": "http://www.qingqingyy.com",
          "title": "轻轻影院",
        },
        {
          "baseUrl": "http://www.xindyy.cn",
          "title": "迪迪影视",
        },
        {
          "baseUrl": "http://www.2n65.cn",
          "title": "VIPKU",
        },
        {
          "baseUrl": "http://www.yunkej.cn",
          "title": "云客影视",
        },
        {
          "baseUrl": "http://www.binbin95.com",
          "title": "彬彬影院",
        },
        {
          "baseUrl": "http://kan.eeeul.com",
          "title": "会源影视",
        },
        {
          "baseUrl": "https://m.jlszyy.cc",
          "title": "达达兔",
        },
      ],
      "list": {
        "mainUrl": "/api.php/provide/vod/?ac=list",
        "type": "t",
        "page": "pg",
        "searchKey": "wd",
        "hours": "h"
      },
      "detail": {
        "mainUrl": "/api.php/provide/vod/?ac=detail",
        "ids": "ids",
        "type": "t",
        "page": "pg",
        "hours": "h"
      }
    };
    ctx.helper.success({ctx, res})
  }

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