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
    }
  };

  return {
    ...config,
    ...userConfig,
  };
};
