'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller, swagger } = app;
  router.get('/', controller.home.index);

  router.get('/api/weapp/check/:code', controller.user.weapp.check)

  router.get('/common/video/home', controller.video.video.home)
  router.get('/common/video/index', controller.video.mac.index)
  router.get('/common/video/mac/home', controller.video.mac.home)
  router.get('/common/video/mac/detail', controller.video.mac.detail)

  router.post('/common/baidu/aip/general', controller.baidu.aip.general);
  router.post('/common/baidu/aip/plant', controller.baidu.aip.plant);
  router.post('/common/baidu/aip/animal', controller.baidu.aip.animal);
  router.post('/common/baidu/aip/logo', controller.baidu.aip.logo);
  router.post('/common/baidu/aip/car', controller.baidu.aip.car);
  router.post('/common/baidu/aip/dish', controller.baidu.aip.dish);

  router.get('/common/utils/proxy/get', controller.utils.proxy.getProxyList);
  router.get('/common/utils/tuiguang', controller.utils.tuiguang.tuiguang);

  router.get('/common/util/redirect', controller.redirect.index);

  router.get('/common/util/redirect/proxy', controller.redirect.getNeedProxy);

  router.get('/common/rss/test', controller.rss.rss.test);
};
