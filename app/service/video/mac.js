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

  async detail(payload) {
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

    options.url += '/api.php/provide/vod/?ac=detail&ids=' + payload.id;
    let resStr = await service.utils.request.getHtml(options, false);
    let tempRes = JSON.parse(resStr);
    if (tempRes && tempRes && tempRes.list[0]) {
      tempRes = tempRes.list[0];
    } else {
      return {};
    }
    let result = {};
    result.vod_id = tempRes.vod_id;
    result.vod_name = tempRes.vod_name;
    result.type_id = tempRes.type_id;
    result.type_name = tempRes.type_name;
    if (tempRes.vod_pic) {
      result.vod_pic = baseUrl + url.parse(tempRes.vod_pic).pathname;
    } 
    result.vod_actor = tempRes.vod_actor;
    result.vod_director = tempRes.vod_director;
    result.vod_blurb = tempRes.vod_blurb;
    result.vod_remarks = tempRes.vod_remarks;
    result.vod_serial = tempRes.vod_serial;
    result.vod_area = tempRes.vod_area;
    result.vod_lang = tempRes.vod_lang;
    result.vod_year = tempRes.vod_year;
    result.vod_score = tempRes.vod_score;
    result.vod_hits = tempRes.vod_hits;
    result.vod_hits_day = tempRes.vod_hits_day;
    result.vod_hits_week = tempRes.vod_hits_week;
    result.vod_hits_month = tempRes.vod_hits_month;
    result.vod_content = tempRes.vod_content.replace(/<[^>]+>/g,"");;
    result.vod_play_from = tempRes.vod_play_from.split(payload.serverSplit);
    let videoPlayUrlMain = tempRes.vod_play_url.split(payload.urlSplit1);
    let videoPlayUrls = [];
    videoPlayUrlMain.forEach(main => {
      let videoPlayUrlList = main.split(payload.urlSplit2);
      let videoPlayMapList = [];
      videoPlayUrlList.forEach(list => {
        let videoPlayUrl = {};
        videoPlayUrl['name'] = list.split(payload.urlSplit3)[0].toString();
        videoPlayUrl['url'] = list.split(payload.urlSplit3)[1].toString();
        videoPlayMapList.push(videoPlayUrl);
      });
      videoPlayUrls.push(videoPlayMapList);
    });
    result.vod_play_url = videoPlayUrls;
    
    return result;
  }
}

module.exports = MacService;