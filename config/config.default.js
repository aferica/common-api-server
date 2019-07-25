/* eslint valid-jsdoc: "off" */

'use strict';

/**
 * @param {Egg.EggAppInfo} appInfo app info
 */
module.exports = appInfo => {
  /**
   * built-in config
   * @type {Egg.EggAppConfig}
   **/
  const config = exports = {};

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1558425256714_7598';

  // add your middleware config here
  config.middleware = [];
  // csrf禁用
  config.security = {
    csrf: {
      enable: false,
    }
  };

  // add your user config here
  const userConfig = {
    myAppName: 'apiServer',

    jwt: {
      secret: 'JWTTOKEN', // jwt加密密钥，自定义
      enable: true,
      match: '/api' // 路径匹配，以/api开头的请求需要验证
    },
    // 可以修改启动端口  默认7001
    cluster: {
      listen: {
        port: 7001,
        hostname: '0.0.0.0',
      },
    },

    redis: {
      client: {
        port: 6379,          // Redis port
        host: '127.0.0.1',   // Redis host
        password: '',
        db: 0,
      }
    },
    baiduSecret: {
      appId: '16307962',
      apiKey: 'TYG1OShdB8A0CUw2MrMhU6IR',
      secretKey: 'P4HLLpfme2wLHDpxKeD3PwEBTrM0ES0l'
    },
    weapp: {
      appId: 'wx79e1700ff218a66d',
      appSecret: 'df1677c10333ffab9bfacf289b4fec79',
    },
    mysql: {
      // database configuration
      client: {
        // host
        host: '127.0.0.1',
        // port
        port: '3306',
        // username
        user: 'root',
        // password
        password: '123456',
        // database
        database: 'common',    
      }
    },
    porxyOptions: {
      httpUrl: 'http://127.0.0.1:1080',
      socksHost: '127.0.0.1',
      socksPort: 1080
    },

    swagger2: {
      // enable: false, // disable swagger , default true
      base: {
        schemes: [
          'http',
        ],
        host: '127.0.0.1:7001',
        basePath: '/',
        consumes: [
          'application/json',
          'multipart/form-data',
        ],
        produces: [
          'application/json',
          'multipart/form-data',
        ],
        info: {
          description: '这是本项目API接口的说明文档',
          version: '1.0.0',
          title: 'Common Api Server',
          contact: {
            email: 'afericaking@gmail.com',
          }
        },
        tags: [
          {
            name: '工具类',
            description: '工具类接口，包括地址转发',
          },
          {
            name: '百度图像识别',
            description: '百度图像识别',
          },
        ],
        definitions: {
          result: {
            type: 'object',
            properties: {
              code: {
                type: 'integer',
                description: '请求状态码，0代表成功'
              },
              data: {
                type: 'object'
              },
              msg: {
                type: 'string',
                description: '请求结果信息'
              }
            }
          }
        },
        securityDefinitions:{
        // security definitions
        }
      },
    },
    alinode: {
      enable: false
    }
  };

  return {
    ...config,
    ...userConfig,
  };
};
