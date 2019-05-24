const Service = require('egg').Service;
const awaitReadStream = require('await-stream-ready').read;
const AipImageClassifyClient = require('baidu-aip-sdk').imageClassify;
const APP_ID = "16307962";
const API_KEY = "TYG1OShdB8A0CUw2MrMhU6IR";
const SECRET_KEY = "P4HLLpfme2wLHDpxKeD3PwEBTrM0ES0l";
const client = new AipImageClassifyClient(
  APP_ID, API_KEY, SECRET_KEY
);

class AIPService extends Service {
  async general(image) {
    const result = await client.advancedGeneral(image, { baike_num: 5 });
    return result;
  }

  async plant(image) {
    const result = await client.plantDetect(image, { baike_num: 5 });
    return result;
  }

  async animal(image) {
    const result = await client.animalDetect(image, { baike_num: 5 });
    return result;
  }

  async logo(image) {
    const result = await client.logoSearch(image, { baike_num: 5 });
    return result;
  }

  async car(image) {
    const result = await client.carDetect(image, { baike_num: 5 });
    return result;
  }
  
  async dish(image) {
    const result = await client.dishDetect(image, { baike_num: 5 });
    return result;
  }

  async stream2Base64(stream) {
    let responseData = [];//存储文件流
    stream.on('data', function( chunk ) {
      responseData.push(chunk);
    });
    await awaitReadStream(stream);
    return Buffer.concat(responseData).toString('base64');
  }
}

module.exports = AIPService;