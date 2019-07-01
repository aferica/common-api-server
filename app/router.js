'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller, swagger } = app;
  router.get('/', controller.home.index);

  router.get('/api/weapp/check/:code', controller.user.weapp.check)

  router.post('/common/baidu/aip/general', controller.baidu.aip.general);
  swagger.post('/common/baidu/aip/general', {
    tags: [
      '百度图像识别',
    ],
    summary: '百度图像识别--通用接口',
    description: '该接口可以识别各种图像，但结果不够精确',
    consumes: 
    - 'multipart/form-data',
    parameters: [
      {
        in: 'formData',
        name: 'image',
        description: '需要识别的图片',
        required: true,
        type: 'file'
      },
    ],
    responses: {
      200: {
        description: '请求成功',
        schema: {
          $ref: "#/definitions/result"
        }
      },
    },
  });
  router.post('/common/baidu/aip/plant', controller.baidu.aip.plant);
  router.post('/common/baidu/aip/animal', controller.baidu.aip.animal);
  router.post('/common/baidu/aip/logo', controller.baidu.aip.logo);
  router.post('/common/baidu/aip/car', controller.baidu.aip.car);
  router.post('/common/baidu/aip/dish', controller.baidu.aip.dish);

  router.get('/common/utils/proxy/get', controller.utils.proxy.getProxyList);
  router.get('/common/utils/tuiguang', controller.utils.tuiguang.tuiguang);

  router.get('/common/util/redirect', controller.redirect.index);
  swagger.get('/common/util/redirect', {
    tags: [
      '工具类',
    ],
    summary: '地址转链',
    description: '可以转链资源，以解决防盗链之类的问题',
    parameters: [
      {
        in: 'query',
        name: 'url',
        description: '需要转链地址，需要URL编码',
        required: true,
        type: 'string'
      },
      {
        in: 'query',
        name: 'needReferer',
        description: '是否需要添加referer，如果需要，传入一个不为空的任意值即可，如1、true',
        required: false,
        type: 'string'
      },
      {
        in: 'query',
        name: 'customReferer',
        description: '自定义referer',
        required: false,
        type: 'string'
      },
    ],
    responses: {
      200: {
        description: '请求成功'
      },
    },
  });

  router.get('/common/util/redirect/proxy', controller.redirect.getNeedProxy);
  swagger.get('/common/util/redirect/proxy', {
    tags: [
      '工具类',
    ],
    summary: '地址转链--使用代理，科学访问',
    description: '可以转链资源，以解决防盗链之类的问题（科学上网资源）',
    parameters: [
      {
        in: 'query',
        name: 'url',
        description: '需要转链地址，需要URL编码',
        required: true,
        type: 'string'
      },
      {
        in: 'query',
        name: 'needReferer',
        description: '是否需要添加referer，如果需要，传入一个不为空的任意值即可，如1、true',
        required: false,
        type: 'string'
      },
      {
        in: 'query',
        name: 'customReferer',
        description: '自定义referer',
        required: false,
        type: 'string'
      },
    ],
    responses: {
      200: {
        description: '请求成功'
      },
    },
  });
};
