define({ "api": [
  {
    "type": "get",
    "url": "/common/video/index",
    "title": "视频源信息",
    "version": "0.0.0",
    "filename": "app/controller/video/video.js",
    "group": "D__develop_node_egg_common_api_server_app_controller_video_video_js",
    "groupTitle": "D__develop_node_egg_common_api_server_app_controller_video_video_js",
    "name": "GetCommonVideoIndex"
  },
  {
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "optional": false,
            "field": "varname1",
            "description": "<p>No type.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "varname2",
            "description": "<p>With type.</p>"
          }
        ]
      }
    },
    "type": "",
    "url": "",
    "version": "0.0.0",
    "filename": "app/public/apidoc/main.js",
    "group": "D__develop_node_egg_common_api_server_app_public_apidoc_main_js",
    "groupTitle": "D__develop_node_egg_common_api_server_app_public_apidoc_main_js",
    "name": ""
  },
  {
    "type": "get",
    "url": "/common/video/home",
    "title": "视频网站首页信息",
    "version": "1.0.0",
    "name": "________",
    "group": "__",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "needReferer",
            "description": "<p>是否需要Referer，如果是需要，默认为 baseUrl的域名</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "customReferer",
            "description": "<p>自定义Referer</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "needProxy",
            "description": "<p>是否需要代理</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "baseUrl",
            "description": "<p>视频网站地址,最好使用URL编码一次</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "swiperCss",
            "description": "<p>推荐css选择器</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "newCss",
            "description": "<p>最新视频css选择器</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "hotCss",
            "description": "<p>热门视频css选择器</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "movieCss",
            "description": "<p>热门视频css选择器</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "tvCss",
            "description": "<p>热门视频css选择器</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "cateCss",
            "description": "<p>热门视频css选择器</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "majorCss",
            "description": "<p>主要分类</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "minorCss",
            "description": "<p>次要分类</p>"
          }
        ]
      }
    },
    "filename": "app/controller/video/video.js",
    "groupTitle": "__"
  },
  {
    "type": "post",
    "url": "/common/baidu/aip/general",
    "title": "百度图像识别--通用接口",
    "version": "1.0.0",
    "name": "____________",
    "group": "______",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "file",
            "optional": false,
            "field": "image",
            "description": "<p>需要识别的图片</p>"
          }
        ]
      }
    },
    "filename": "app/controller/baidu/aip.js",
    "groupTitle": "______"
  }
] });
