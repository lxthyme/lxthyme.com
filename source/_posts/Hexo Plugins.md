---
layout: post
title: Hexo Plugins
date: 2017-07-31 16:47
updated: 2017-08-01 12:43
comments: true
tags:
	- 未分类
---

1. TODO

    1. [Marked]()
    1. [Unicode](https://en.wikipedia.org/wiki/Checkbox#Unicode)
    1. [Use a Unicode Text Trick to Make Lists with Checkboxes](https://www.howtogeek.com/howto/28947/use-a-unicode-text-trick-to-make-lists-with-checkboxes/)
    
1. LateX

    1. `npm install hexo-math --save`
    
    1. `yilia` 主题中的配置
        在`_config.yml` 中配置: `mathjax: false`
        
1. Diagram

    1. `npm install hexo-diagram --save`
        依赖:
            1. `npm install phantomjs -g`
            1. `npm install phantom --web-security=no --save`
            
            
    1. 可能出现的问题
        1. `npm WARN deprecated phantom@0.7.2: v1 is no longer maintained, please upgrade to v2.0+ as soon possible.`
            解决办法: 安装最新版phantomjs
            `npm install phantomjs -g`
        1. `phantom stdout: NETWORK_ERR: XMLHttpRequest Exception 101: A network error occurred in synchronous requests.`
            可以通过关闭web-security解决[2]。将node_modules/hexo-diagram/generators/factory/phantom.js部分代码修改为：
            ```js
            options = { 'web-security': 'no' };
            return function (type, code, output, callback) {
               phantom.create({parameters: options}, function (ph) {
            ```
1. 参考:

    1. [Hexo支持Flowchart](http://www.luohanjie.com/2016-03-22/hexo-support-flowchart.html)
    
    1. [Add support of Phantom 2.0.0 #345](https://github.com/amir20/phantomjs-node/issues/345)

1. 备注

```js
/** LaxeX 使用方式:
* 1. 行内: $.......$
* 2. 单行: $$.....$$
*/
"hexo-math": "^3.0.3",
/** Diagram
*
*/
npm install hexo-diagram --save

"hexo-diagram": "0.0.10",

"node-gyp": "^3.6.2",
"node-waf": "^1.0.0",
"phantom": "4.0.5",
"shoe": "0.0.11",
"sockjs-client": "1.1.4"
```
    


