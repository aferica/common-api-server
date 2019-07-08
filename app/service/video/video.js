'use strict';
const Service = require('egg').Service;
const cheerio = require('cheerio');

class VideoService extends Service {
  // 获取主页信息
  async home(payload) {
    const { service } = this;
    const options = {
      url: decodeURIComponent(payload.baseUrl),
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

    const res = await service.utils.request.getHtml(options, payload.needProxy ? true : false);
    let result = {};
    if (res) {
      const $ = cheerio.load(res);
      if (payload.swiperCss) {
        let swiper = [];
        const mianCss = payload.swiperCss.split('->')[0];
        const infoCss = payload.swiperCss.split('->')[1];
        $(mianCss).each(function (idx, element) {
          const $item = $(element);
          const nameCss = infoCss.split(';')[0];
          const coverCss = infoCss.split(';')[1];
          const hrefCss = infoCss.split(';')[2];
          const name = $item.find(nameCss).text();
          if (!name) {
            return true;
          }
          console.log(coverCss.split('&&')[0] + coverCss.split('&&')[1])
          const cover = $item.find(coverCss.split('&&')[0]).css();
          const href = $item.find(hrefCss.split('&&')[0]).attr(hrefCss.split('&&')[1]);
          swiper.push({
            index: idx,
            name: name,
            cover: cover,
            href: href
          })
        });
        result.swiper = swiper;
      }
    }
    return result;
  }
}

module.exports = VideoService;