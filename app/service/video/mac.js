'use strict';
const Service = require('egg').Service;
const cheerio = require('cheerio');
const url = require('url');

class MacService extends Service {

  async home(payload) {
    const baseUrl = decodeURIComponent(payload.baseUrl);
    const { service } = this;
    let options = {
      url: baseUrl,
      rejectUnauthorized: false,
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/74.0.3729.169 Safari/537.36'
      }
    };
    if(payload.needRederer) {
      let referer = payload.customReferer || '';
      if (referer == '') {
        referer = url.parse(referer).protocol + '://' + url.parse(referer).host
      }
      options.headers.referer = referer
    }
    const res = await service.utils.request.getHtml(options, false);
    let result = {};
    if (res) {
      const $ = cheerio.load(res);
      if (payload.swiperCss) {
        let ids = '';
        const mianCss = payload.swiperCss.split('->')[0];
        const hrefCss = payload.swiperCss.split('->')[1];
        $(mianCss).each(function (idx, element) {
          const $item = $(element);
          const href = $item.find(hrefCss.split('&&')[0]).attr(hrefCss.split('&&')[1]);
          const id = href.replace(/[^0-9]/ig,"");
          ids += ',' + id;
        });
        options.url += '/api.php/provide/vod/?ac=detail&ids=' + ids.substring(1);
        let swiperStr = await service.utils.request.getHtml(options, false);
        const swiper = JSON.parse(swiperStr).list.map(e => {
          const jsonObject = {};
          jsonObject.vod_id = e.vod_id;
          jsonObject.vod_name = e.vod_name;
          jsonObject.vod_score = e.vod_score;
          jsonObject.vod_class = e.vod_class;
          jsonObject.vod_area = e.vod_area;
          jsonObject.vod_lang = e.vod_lang;
          jsonObject.vod_remarks = e.vod_remarks;
          jsonObject.vod_pic = baseUrl + url.parse(e.vod_pic).pathname;
          jsonObject.vod_pic_slide = baseUrl + '/' + e.vod_pic_slide;
          if (!e.vod_pic_slide) {
            jsonObject.vod_pic_slide = jsonObject.vod_pic;
          }
          return jsonObject;
        });
        result.swiper = swiper;
      }
    }
    return result;
  }
}

module.exports = MacService;