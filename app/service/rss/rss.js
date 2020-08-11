const Service = require('egg').Service;
const parser = require('xml2json');

class RSSService extends Service {
  async test() {
    const { service } = this;
    let options = {
      url: 'https://36kr.com/feed',
    };
    const res = await service.utils.request.getHtml(options, false);
    // console.log(res);
    // console.log(parser.toJson(res));
    return JSON.parse(parser.toJson(res));
  }
}

module.exports = RSSService;