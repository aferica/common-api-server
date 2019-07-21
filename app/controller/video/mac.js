'use strict';

const Controller = require('egg').Controller;

class VideoController extends Controller {

  /**
   * @api {get} /common/video/mac/index MAC系列视频源信息
   */
  async index() {
    const { ctx } = this;
    const res = {
      "source": [
        {
          "baseUrl": "https://www.qtmovie.com",
          "title": "晴天影视",
          "type": [
            { "name": "电影",
              "id": "1",
              "minor": [
                { "name": "全部", "id": "1,6,7,8,9,10,11,12,20,21,22,23,24,25,26,27,28,29,30,31,32,33" },
                { "name": "动作", "id": "6" },
                { "name": "喜剧", "id": "7" },
                { "name": "爱情", "id": "8" },
                { "name": "科幻", "id": "9" },
                { "name": "恐怖", "id": "10" },
                { "name": "剧情", "id": "11" },
                { "name": "战争", "id": "12" },
                { "name": "惊悚", "id": "20" },
                { "name": "悬疑", "id": "21" },
                { "name": "犯罪", "id": "22" },
                { "name": "奇幻", "id": "23" },
                { "name": "冒险", "id": "24" },
                { "name": "动画", "id": "25" },
                { "name": "武侠", "id": "26" },
                { "name": "枪战", "id": "27" },
                { "name": "纪录", "id": "28" },
                { "name": "经典", "id": "29" },
                { "name": "青春", "id": "30" },
                { "name": "文艺", "id": "31" },
                { "name": "古装", "id": "32" },
                { "name": "历史", "id": "33" }
              ]
            },
            { "name": "电视剧",
              "id": "2",
              "minor": [
                { "name": "全部", "id": "2,13,14,15,16,41,42,43,44,45,46" },
                { "name": "内地剧", "id": "13" },
                { "name": "港剧", "id": "14" },
                { "name": "台剧", "id": "15" },
                { "name": "日剧", "id": "16" },
                { "name": "韩剧", "id": "41" },
                { "name": "美剧", "id": "42" },
                { "name": "英剧", "id": "43" },
                { "name": "泰剧", "id": "44" },
                { "name": "新加坡", "id": "45" },
                { "name": "其它剧", "id": "46" }
              ]
            },
            { "name": "综艺",
              "id": "3",
              "minor": [
                { "name": "全部", "id": "3" }
              ]
            },
            { "name": "动漫",
              "id": "4",
              "minor": [
                { "name": "全部", "id": "4" }
              ]
            }
          ]
        },
        {
          "baseUrl": "http://fpx6.cn",
          "title": "墨语影视",
          "type": [
            { "name": "电影",
              "id": "1",
              "minor": [
                { "name": "全部", "id": "1,6,7,8,9,10,11,12" },
                { "name": "动作片", "id": "6" },
                { "name": "喜剧片", "id": "7" },
                { "name": "爱情片", "id": "8" },
                { "name": "科幻片", "id": "9" },
                { "name": "恐怖片", "id": "10" },
                { "name": "剧情片", "id": "11" },
                { "name": "战争片", "id": "12" }
              ]
            },
            { "name": "电视剧",
              "id": "2",
              "minor": [
                { "name": "全部", "id": "2,13,14,15,16" },
                { "name": "国产剧", "id": "13" },
                { "name": "港台剧", "id": "14" },
                { "name": "日韩剧", "id": "15" },
                { "name": "欧美剧", "id": "16" }
              ]
            },
            { "name": "福利",
              "id": "3",
              "minor": [
                { "name": "全部", "id": "3" }
              ]
            },
            { "name": "动漫",
              "id": "4",
              "minor": [
                { "name": "全部", "id": "4" }
              ]
            }
          ]
        },
        {
          "baseUrl": "http://www.qingqingyy.com",
          "title": "轻轻影院",
          "type": [
            { "name": "电影",
              "id": "1",
              "minor": [
                { "name": "全部", "id": "1,6,7,8,9,10,11,12" },
                { "name": "动作片", "id": "6" },
                { "name": "喜剧片", "id": "7" },
                { "name": "爱情片", "id": "8" },
                { "name": "科幻片", "id": "9" },
                { "name": "恐怖片", "id": "10" },
                { "name": "剧情片", "id": "11" },
                { "name": "战争片", "id": "12" }
              ]
            },
            { "name": "电视剧",
              "id": "2",
              "minor": [
                { "name": "全部", "id": "2,13,14,15,16" },
                { "name": "国产剧", "id": "13" },
                { "name": "港台剧", "id": "14" },
                { "name": "日韩剧", "id": "15" },
                { "name": "欧美剧", "id": "16" }
              ]
            },
            { "name": "综艺",
              "id": "3",
              "minor": [
                { "name": "全部", "id": "3" }
              ]
            },
            { "name": "动漫",
              "id": "4",
              "minor": [
                { "name": "全部", "id": "4" }
              ]
            }
          ]
        },
        {
          "baseUrl": "http://www.xindyy.cn",
          "title": "迪迪影视",
          "type": [
            { "name": "电影",
              "id": "1",
              "minor": [
                { "name": "全部", "id": "1,6,7,8,9,10,11,12" },
                { "name": "动作片", "id": "6" },
                { "name": "喜剧片", "id": "7" },
                { "name": "爱情片", "id": "8" },
                { "name": "科幻片", "id": "9" },
                { "name": "恐怖片", "id": "10" },
                { "name": "剧情片", "id": "11" },
                { "name": "战争片", "id": "12" }
              ]
            },
            { "name": "电视剧",
              "id": "2",
              "minor": [
                { "name": "全部", "id": "2,13,14,15,16" },
                { "name": "国产剧", "id": "13" },
                { "name": "港台剧", "id": "14" },
                { "name": "日韩剧", "id": "15" },
                { "name": "欧美剧", "id": "16" }
              ]
            },
            { "name": "综艺",
              "id": "3",
              "minor": [
                { "name": "全部", "id": "3" }
              ]
            },
            { "name": "动漫",
              "id": "4",
              "minor": [
                { "name": "全部", "id": "4" }
              ]
            }
          ]
        },
        {
          "baseUrl": "http://www.2n65.cn",
          "title": "VIPKU",
          "type": [
            { "name": "电影",
              "id": "1",
              "minor": [
                { "name": "全部", "id": "1,6,7,8,9,10,11,12" },
                { "name": "动作片", "id": "6" },
                { "name": "喜剧片", "id": "7" },
                { "name": "爱情片", "id": "8" },
                { "name": "科幻片", "id": "9" },
                { "name": "恐怖片", "id": "10" },
                { "name": "剧情片", "id": "11" },
                { "name": "战争片", "id": "12" }
              ]
            },
            { "name": "电视剧",
              "id": "2",
              "minor": [
                { "name": "全部", "id": "2,13,14,15,16" },
                { "name": "国产剧", "id": "13" },
                { "name": "港台剧", "id": "14" },
                { "name": "日韩剧", "id": "15" },
                { "name": "欧美剧", "id": "16" }
              ]
            },
            { "name": "综艺",
              "id": "3",
              "minor": [
                { "name": "全部", "id": "3" }
              ]
            },
            { "name": "动漫",
              "id": "4",
              "minor": [
                { "name": "全部", "id": "4" }
              ]
            }
          ]
        },
        {
          "baseUrl": "http://www.yunkej.cn",
          "title": "云客影视",
          "type": [
            { "name": "电影",
              "id": "1",
              "minor": [
                { "name": "全部", "id": "1,6,7,8,9,10,11,12" },
                { "name": "动作片", "id": "6" },
                { "name": "喜剧片", "id": "7" },
                { "name": "爱情片", "id": "8" },
                { "name": "科幻片", "id": "9" },
                { "name": "恐怖片", "id": "10" },
                { "name": "剧情片", "id": "11" },
                { "name": "战争片", "id": "12" }
              ]
            },
            { "name": "电视剧",
              "id": "2",
              "minor": [
                { "name": "全部", "id": "2,13,14,15,16" },
                { "name": "国产剧", "id": "13" },
                { "name": "港台剧", "id": "14" },
                { "name": "日韩剧", "id": "15" },
                { "name": "欧美剧", "id": "16" }
              ]
            },
            { "name": "综艺",
              "id": "3",
              "minor": [
                { "name": "全部", "id": "3" }
              ]
            },
            { "name": "动漫",
              "id": "4",
              "minor": [
                { "name": "全部", "id": "4" }
              ]
            }
          ]
        },
        {
          "baseUrl": "http://www.binbin95.com",
          "title": "彬彬影院",
          "type": [
            { "name": "电影",
              "id": "1",
              "minor": [
                { "name": "全部", "id": "1,6,7,8,9,10,11,12" },
                { "name": "动作片", "id": "6" },
                { "name": "喜剧片", "id": "7" },
                { "name": "爱情片", "id": "8" },
                { "name": "科幻片", "id": "9" },
                { "name": "恐怖片", "id": "10" },
                { "name": "剧情片", "id": "11" },
                { "name": "战争片", "id": "12" }
              ]
            },
            { "name": "电视剧",
              "id": "2",
              "minor": [
                { "name": "全部", "id": "2,13,14,15,16" },
                { "name": "国产剧", "id": "13" },
                { "name": "港台剧", "id": "14" },
                { "name": "日韩剧", "id": "15" },
                { "name": "欧美剧", "id": "16" }
              ]
            },
            { "name": "综艺",
              "id": "3",
              "minor": [
                { "name": "全部", "id": "3" }
              ]
            },
            { "name": "动漫",
              "id": "4",
              "minor": [
                { "name": "全部", "id": "4" }
              ]
            }
          ]
        },
        {
          "baseUrl": "http://kan.eeeul.com",
          "title": "会源影视",
          "type": [
            { "name": "电影",
              "id": "1",
              "minor": [
                { "name": "全部", "id": "1,6,7,8,9,10,11,12" },
                { "name": "动作片", "id": "6" },
                { "name": "喜剧片", "id": "7" },
                { "name": "爱情片", "id": "8" },
                { "name": "科幻片", "id": "9" },
                { "name": "恐怖片", "id": "10" },
                { "name": "剧情片", "id": "11" },
                { "name": "战争片", "id": "12" }
              ]
            },
            { "name": "电视剧",
              "id": "2",
              "minor": [
                { "name": "全部", "id": "2,13,14,15,16" },
                { "name": "国产剧", "id": "13" },
                { "name": "港台剧", "id": "14" },
                { "name": "日韩剧", "id": "15" },
                { "name": "欧美剧", "id": "16" }
              ]
            },
            { "name": "综艺",
              "id": "3",
              "minor": [
                { "name": "全部", "id": "3" }
              ]
            },
            { "name": "动漫",
              "id": "4",
              "minor": [
                { "name": "全部", "id": "4" }
              ]
            }
          ]
        },
        {
          "baseUrl": "https://m.jlszyy.cc",
          "title": "达达兔",
          "type": [
            { "name": "电影",
              "id": "1",
              "minor": [
                { "name": "全部", "id": "1,6,7,8,9,10,11,12" },
                { "name": "动作片", "id": "6" },
                { "name": "喜剧片", "id": "7" },
                { "name": "爱情片", "id": "8" },
                { "name": "科幻片", "id": "9" },
                { "name": "恐怖片", "id": "10" },
                { "name": "剧情片", "id": "11" },
                { "name": "战争片", "id": "12" }
              ]
            },
            { "name": "电视剧",
              "id": "2",
              "minor": [
                { "name": "全部", "id": "2,13,14,15,16" },
                { "name": "国产剧", "id": "13" },
                { "name": "港台剧", "id": "14" },
                { "name": "日韩剧", "id": "15" },
                { "name": "欧美剧", "id": "16" }
              ]
            },
            { "name": "综艺",
              "id": "3",
              "minor": [
                { "name": "全部", "id": "3" }
              ]
            },
            { "name": "动漫",
              "id": "4",
              "minor": [
                { "name": "全部", "id": "4" }
              ]
            }
          ]
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
   * @api {get} /common/video/mac/home MAC系列视频网站首页信息
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
    if (!payload.swiperCss) {
      payload.swiperCss = '.fed-swip-slide->.fed-list-pics&&href';
    }
    // 调用 Service 进行业务处理
    const res = await service.video.mac.home(payload)
    // 设置响应内容和响应状态码
    ctx.helper.success({ctx, res})
  }

  /**
   * @api {get} /common/video/mac/home MAC系列视频网站首页信息
   * @apiVersion 1.0.0
   * @apiName 视频网站首页信息
   * @apiGroup Video
   * 
   * @apiParam {string} needReferer 是否需要Referer，如果是需要，默认为 baseUrl的域名
   * @apiParam {string} customReferer 自定义Referer
   * @apiParam {string} needProxy 是否需要代理
   * 
   * @apiParam {string} serverSplit 播放服务器分隔符，默认$$$
   * @apiParam {string} urlSplit1  播放地址第一级分隔符，默认$$$
   * @apiParam {string} urlSplit2  播放地址第二级分隔符，默认#
   * @apiParam {string} urlSplit3  播放地址第三级分隔符，默认$
   */
  async detail () {
    const { ctx, service } = this;
    const payload = ctx.query;
    if (!payload.serverSplit) {
      payload.serverSplit = '$$$';
    }
    if (!payload.urlSplit1) {
      payload.urlSplit1 = '$$$';
    }
    if (!payload.urlSplit2) {
      payload.urlSplit2 = '#';
    }
    if (!payload.urlSplit3) {
      payload.urlSplit3 = '$';
    }
    // 调用 Service 进行业务处理
    const res = await service.video.mac.detail(payload)
    // 设置响应内容和响应状态码
    ctx.helper.success({ctx, res})
  }
}

module.exports = VideoController;