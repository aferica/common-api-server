'use strict';
const Service = require('egg').Service;
const request = require('request');

class RequestService extends Service {

  async get(options, ip = '') {
    if(ip != '') {
      options.host = ip.split(':')[0];
      options.port = ip.split(':')[1];
    }
    console.log(options);
    return new Promise((resolve, reject) => {
      request(options, function(error, response, body) {
        // console.log(error);
        if (!error && response.statusCode == 200) {
          return resolve(body);
        } else {
          return reject(error);
        }
      });
    });
  }
}

module.exports = RequestService;
