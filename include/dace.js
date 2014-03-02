var __dace = (function() {
    var ms = 0, c = {
        channel: [
            [1, 'www', 'Web_CH_www'],
            [2, 'nba', 'Web_CH_nba'],
            [3, 'soccer', 'Web_CH_fb'],
            [4, 'racing', 'Web_CH_f1'],
            [5, 'wan', 'Web_CH_wan'],
            [6, 'voice', 'Web_CH_v'],
            [7, 'zy', 'Web_SNS_zy'],
            [8, 'bbs', 'Web_SNS_bbs'],
            [9, 'my', 'Web_SNS_bbs'],
            [10, 'tu', 'Web_SNS_tu'],
            [11, 'v', 'Web_MV_v'],
            [12, 'photo', 'Web_MV_pht'],
            [13, 'g', 'Web_MV_live'],
            [14, 'zb', 'Web_BIZ_zb'],
            [15, 'shihuo', 'Web_BIZ_sh'],
            [16, 'run', 'Web_CH_oths'],
            [17, 'tennis', 'Web_CH_oths'],
            [18, 'taiqiu', 'Web_CH_oths'],
            [19, 'ymq', 'Web_CH_oths'],
            [20, 'nfl', 'Web_CH_oths'],
            [21, 'xgame', 'Web_CH_oths'],
            [22, 'youxi', 'Web_EC_game'],
            [23, 'sglj', 'Web_EC_game'],
            [24, 'gzq', 'Web_EC_game'],
            [25, 'bayu', 'Web_EC_game'],
            [26, 'zsg', 'Web_EC_game'],
            [27, 'wssg', 'Web_EC_game'],
            [28, 'jfzy', 'Web_EC_game'],
            [29, 'hjcs', 'Web_EC_game'],
            [30, 'sjsg', 'Web_EC_game'],
            [31, 'sglzz', 'Web_EC_game'],
            [32, 'lyhm', 'Web_EC_game'],
            [33, 'rxlq', 'Web_EC_game'],
            [34, 'dxz', 'Web_EC_game'],
            [35, 'tj', 'Web_EC_game'],
            [36, 'wxqmx', 'Web_EC_game'],
            [37, 'szlq', 'Web_EC_game'],
            [38, 'zqtx2', 'Web_EC_game'],
            [39, 'fswd', 'Web_EC_game'],
            [40, 'rxqq2', 'Web_EC_game'],
            [41, 'sgyy', 'Web_EC_game'],
            [42, 'rxhzw', 'Web_EC_game'],
            [43, 'mjcs', 'Web_EC_game'],
            [44, 'gjzq', 'Web_EC_game'],
            [45, 'ogzq', 'Web_EC_game'],
            [46, 'sg2', 'Web_EC_game'],
            [47, 'mhfx', 'Web_EC_game'],
            [48, 'shhx', 'Web_EC_game'],
            [49, 'lqcq', 'Web_EC_game'],
            [50, 'zwjs', 'Web_EC_game'],
            [51, 'qs', 'Web_EC_game'],
            [52, 'hzw', 'Web_EC_game'],
            [53, 'yqdx', 'Web_EC_game'],
            [54, 'tssg', 'Web_EC_game'],
            [55, 'yxwz', 'Web_EC_game'],
            [56, 'long', 'Web_EC_game'],
            [57, 'sxd', 'Web_EC_game'],
            [58, 'rxqq', 'Web_EC_game'],
            [59, 'sgs', 'Web_EC_game'],
            [60, 'hysj', 'Web_EC_game'],
            [61, 'sssg', 'Web_EC_game'],
            [62, 'gdzj', 'Web_EC_game'],
            [63, 'wly', 'Web_EC_game'],
            [64, 'sh', 'Web_EC_game'],
            [65, 'xjsj', 'Web_EC_game'],
            [66, 'wlzw', 'Web_EC_game'],
            [67, 'hhzw', 'Web_EC_game'],
            [68, 'haodan', 'Web_EC_game'],
            [69, 'mhlq', 'Web_EC_game'],
            [70, 'sjcq', 'Web_EC_game'],
            [71, 'xl', 'Web_EC_game'],
            [72, 'poker', 'Web_EC_game'],
            [73, 'fr2', 'Web_EC_game'],
            [74, 'sl11', 'Web_EC_game'],
            [75, 'fswd', 'Web_EC_game'],
            [76, 'gamely', 'Web_EC_game'],
            [77, 'dgl', 'Web_EC_game'],
            [78, 'qjlq', 'Web_EC_game'],
            [79, 'gamepay', 'Web_EC_game'],
            [80, 'caipiao', 'Web_BIZ_cp'],
            [81, 'voice_shihuo', 'Web_BIZ_sh'],
            [82, 'xd2', 'Web_EC_game'],
            [83, 'nslm', 'Web_EC_game'],
            [84, 'zc', 'Web_EC_game'],
            [85, 'jhfy', 'Web_EC_game'],
            [86, 'dgl', 'Web_EC_game'],
            [87, 'cba', 'Web_CH_cba'],
            [88, 'mma', 'Web_CH_oths'],
            [89, 'marketing', 'Web_CH_pub'],
            [90, 'mobile', 'Web_CH_pub'],
            [91, 'jjsg', 'Web_EC_game'],
            [92, 'ly', 'Web_EC_game'],
            [93, 'passport', 'PF_FDT_pspt'],
            [94, 'nikebbn', 'Web_EC_mini'],
            [95, 'carnival2013', 'Web_EC_mini'],
            [96, 'allstar2013', 'Web_EC_mini'],
            [97, 'dongguan', 'Web_EC_mini'],
            [98, 'wcba', 'Web_EC_mini'],
            [99, 'zhongjia', 'Web_EC_mini'],
            [100, 'nbl', 'Web_EC_mini'],
            [101, 'letv', 'Web_MV_v'],
            [102, 'datacaipiao', 'Web_BIZ_cp'],
            [103, 'trendcaipiao', 'Web_BIZ_cp'],
            [104, 'wy', 'Web_EC_game'],
            [105, 'tcym', 'Web_EC_game'],
            [106, 'mklq', 'Web_EC_game'],
            [107, 'qj', 'Web_EC_game'],
            [108, 'mzl', 'Web_EC_game'],
            [109, 'ttlq', 'Web_EC_game'],
            [110, 'zlmx', 'Web_EC_game']
        ]
    }, version = '1.0.9',
            daceVidCookieKey = '_dacevid', daceVidCookieKey2 = '_dacevid2', daceVidCookieKey3 = '_dacevid3', daceVisitCookieKey = '__dacevst', domain = '.hupu.com', pageLoadTime = 0, isSend = false, domainUrl = 'http://cc.dace.hupu.com', engine = ['www.google.com.hk', 'www.google.com', 'www.baidu.com',
                'www.so.com', 'www.sogou.com', 'www.soso.com', 'cn.bing.com', 'glb.uc.cn', 'so.360.cn',
                'www.youdao.com', 'search.cn.yahoo.com', 'www.jike.com', 'pad.easou.com', 'www.zhongsou.com',
                'image.baidu.com', 'images.baidu.com', 'm.baidu.com', 'images.google.com',
                'images.google.com.hk'
            ], __daceBacks = ['bk1', 'bk2', 'bk3'], queue = [];

    /**
     * 判断浏览器类型和版本
     * @name hp.browser
     *
     */
    var _userAgent = navigator.userAgent.toLowerCase();
    var browser = {
        version: (_userAgent.match(/.+(?:rv|it|ra|ie)[\/: ]([\d.]+)/) || [])[1],
        chrome: /chrome/.test(_userAgent),
        safari: /webkit/.test(_userAgent),
        opera: /opera/.test(_userAgent),
        msie: /msie/.test(_userAgent) && !/opera/.test(_userAgent),
        mozilla: /mozilla/.test(_userAgent) && !/(compatible|webkit)/.test(_userAgent),
        mobile: /Mobile/i.test(_userAgent),
        ios: /\(i[^;]+;( U;)? CPU.+Mac OS X/i.test(_userAgent),
        iphone: /iphone/i.test(_userAgent),
        ipad: /ipad/i.test(_userAgent),
        android: /android/i.test(_userAgent) || /Linux/i.test(_userAgent)
    };


    var CookieUtil = {
        /**
         * 获取cookie的值,不对值进行解码
         * @name hp.cookie.getRaw
         * @param {string}   key       目标参数
         */
        getRaw: function(key) {
            if (CookieUtil._isValidKey(key)) {
                var reg = new RegExp("(^| )" + key + "=([^;]*)(;|\x24)"),
                        result = reg.exec(document.cookie);
                if (result) {
                    return result[2] || null;
                }
            }
            return null;
        },
        /**
         * 获取cookie的值,用decodeURIComponent进行解码
         * @name hp.cookie.get
         * @param {string}   key      目标参数
         */
        get: function(key) {
            var value = CookieUtil.getRaw(key);
            if ('string' == typeof value) {
                value = decodeURIComponent(value);
                return value;
            }
            return null;
        },
        /**
         * 设置cookie的值,不对值进行解码
         * @name hp.cookie.setRaw
         * @param {string}    key           目标参数
         * @param {string}    value         设置参数值
         */
        setRaw: function(key, value, options) {

            if (!CookieUtil._isValidKey(key)) {
                return;
            }

            options = options || {};
            //options.path = options.path || "/"; // meizz 20100402 设定一个初始值，方便后续的操作
            //berg 20100409 去掉，因为用户希望默认的path是当前路径，这样和浏览器对cookie的定义也是一致的

            // 计算cookie过期时间
            var expires = options.expires;
            if ('number' == typeof options.expires) {
                expires = new Date();
                expires.setTime(expires.getTime() + options.expires);
            }

            document.cookie =
                    key + "=" + value
                    + (options.path ? "; path=" + options.path : "")
                    + (expires ? "; expires=" + expires.toGMTString() : "")
                    + (options.domain ? "; domain=" + options.domain : "")
                    + (options.secure ? "; secure" : '');
        },
        /**
         * 设置cookie的值,用decodeURIComponent进行解码
         * @name hp.cookie.set
         * @param {string}    key           目标参数
         * @param {string}    value         设置参数值
         */
        set: function(key, value, options) {
            CookieUtil.setRaw(key, encodeURIComponent(value), options);
        },
        /**
         * 删除cookie的值
         * @name hp.cookie.remove
         * @param {string}    key           目标参数
         */
        remove: function(key, options) {
            options = options || {};
            options.expires = new Date(0);
            CookieUtil.setRaw(key, '', options);
        },
        _isValidKey: function(key) {
            return (new RegExp("^[^\\x00-\\x20\\x7f\\(\\)<>@,;:\\\\\\\"\\[\\]\\?=\\{\\}\\/\\u0080-\\uffff]+\x24")).test(key);
        }
    }

    function He(a, b) {
        return a.onload = b
    }

    /**
     * 删除目标字符串两端的空白字符
     * @name hp.trim
     * @param {string}   source   目标参数
     */
    trim = function(source) {
        var trimer = new RegExp('(^[\\s\\t\\xa0\\u3000]+)|([\\u3000\\xa0\\s\\t]+\x24)', 'g');
        return source.replace(trimer, '');
    };
    //验证url是否有效
    var isUrl = function(value) {
        return /^(https?|s?ftp):\/\/(((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:)*@)?(((\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5]))|((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?)(:\d*)?)(\/((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)+(\/(([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)*)*)?)?(\?((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|[\uE000-\uF8FF]|\/|\?)*)?(#((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|\/|\?)*)?$/i.test(value);
    }

//生成用户唯一标识
    var S4 = function() {
        return (((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1);
    }, newGuid = function() {
        return (S4() + S4() + "." + S4() + "." + S4() + "." + S4() + "." + S4() + S4() + S4());
    }
//标识本次来访用户，行为完成后过期
    var getActionId = function() {
        return (S4() + S4() + "." + S4() + S4());
    }, actionId = getActionId();
    //生成unix timestamp
    var unixTimestamp = function(type) {
        var d = new Date();
        return type == false ? d.getTime() : Math.round(d.getTime() / 1000);
    }, btime = unixTimestamp(false);
    //分析cookie的值
    var pd = function(a) {
        var b = [], c = document.cookie['split'](';');
        a = RegExp("^\\s*" + a + "=\\s*(.*?)\\s*$");
        for (var d = 0; d < c['length']; d++) {
            var e = c[d]['match'](a);
            e && b['push'](e[1]);
        }
        return b;
    }

    //jsonp方式生成vid3
    var saveVid3Cookie = function() {
        //供jsonp服务的url地址（不管是什么类型的地址，最终生成的返回值都是一段javascript代码）
        //其实参数都是前端和后台程序员规定的，前端传过去，后端判断获取即可。
        var date = new Date();
        var url = "http://cc.dace.hupu.com/dacevid?callback=_DACE_GetVid&q=" + date.getTime() + Math.random() * 1000000;
        // 创建script标签，设置其属性
        var script = document.createElement('script');
        script.setAttribute('src', url);
        // 把script标签加入head，此时调用开始
        document.getElementsByTagName('head')[0].appendChild(script);
    }

    window._DACE_GetVid = function(vid, newUser) {
        if (vid) {
            //vid3
            //todo...
            var patt = /hupu\.com/i;
            if (!patt.exec(window.location.host)) {
                //当前域设置vid3(Session 生存期)
                var pattern = /shihuo/i;
                if (pattern.exec(window.location.host))
                    var domain = '.shihuo.cn';
                CookieUtil.setRaw(daceVidCookieKey3, vid, {
                    'domain': domain,
                    'path': '/'
                });
            }
            var con = new init('a');
            if (newUser && con.getSiteId() != 'Web_EC_game') {
                con.sendEvent('newUser');
            }
            if (queue) {
                for (var i = 0, l = queue.length; i < l; i++) {
                    var uri = con.generateUrl(queue[i][0], queue[i][1], queue[i][2]);
                    con.sendImage(uri);
                    //if (action == 'i')
                    isSend = true;
                }
            }
        }
    };

    /**
     * 更新访问次数过期时间，持续30分钟算一次访问
     * @return {[type]} [description]
     */
    var saveVisitsToCookie = function() {
        var vst = getActionId();
        var dacevst = CookieUtil.getRaw(daceVisitCookieKey);
        var d = new Date(), millisec = d.getTime();
        d.setUTCMinutes(d.getUTCMinutes() + 30);
        //d.setSeconds(d.getSeconds()+60);
        var expires = d.getTime();
        if (dacevst) {
            //document.title = expires +'|' + millisec;
            if (expires <= millisec) {
                CookieUtil.remove(daceVisitCookieKey);
            } else {
                //var newVst = dacevst[0].split('|')[0];
                CookieUtil.remove(daceVisitCookieKey);
                vst = dacevst.split('|')[0];
            }
        }
        //将shihuo.cn和hupu.com的vst分开处理
        var pattern = /shihuo/i;
        if (pattern.exec(window.location.host))
            var domain = '.shihuo.cn';
        else
            var domain = '.hupu.com';
        CookieUtil.setRaw(daceVisitCookieKey, (vst + '|' + expires), {
            'expires': (30 * 60 * 1000),
            'domain': domain,
            'path': '/'
        });
        //document.cookie = daceVisitCookieKey+'='+()+';max-age='+(60)+'; domain='+domain;
        return vst;
    }

//删除无效cookie _daceid
    var delCookie = function() {
        var date = new Date(0);
        //将date设置为过去的时间
        //date.setTime(date.getTime()-10000);
        //将userId这个cookie删除
        //document.cookie = "_daceid=''; max-age=" + date.toGMTString() + "; domain=" + domain + ';path=/';
        CookieUtil.remove('_daceid');
    }

//计算页面加载时间
    var pageLoadTimeFun = function() {
        var at = new Date().getTime();
        var ms = at - btime;
        return ms;
    }



//事件处理

    var _win = window, _doc = document;
    var EventUtil = {
        /**
         * DOM就绪时执行的函数
         * @name hp.ready
         * @param {object} func
         */
        ready: function(func) {
            var _readyList = [];
            _readyList.push(func);
            if (browser.msie) {
                EventUtil.removeHandler(_doc, "readystatechange", _DOMContentLoaded);
                EventUtil.addHandler(_doc, "readystatechange", _DOMContentLoaded);
            } else {
                EventUtil.addHandler(_win, "DOMContentLoaded", _DOMContentLoaded);
            }
            ;
            function _DOMContentLoaded() {
                if (browser.msie) {
                    if (_doc.readyState === "complete" || _doc.readyState === "interactive") {
                        EventUtil.removeHandler(_doc, "readystatechange", _DOMContentLoaded);
                        _startReady();
                    }
                } else {
                    EventUtil.removeHandler(_win, "DOMContentLoaded", _DOMContentLoaded);
                    _startReady();
                }
                ;
            }

            function _startReady() {
                for (var i = 0, len = _readyList.length; i < len; i++) {
                    setTimeout(_readyList[i], 25);
                }
                ;
            }
            ;
        },
        addHandler: function(elem, type, handler) {
            var guid = 1;
            if (window.addEventListener) {
                elem.addEventListener(type, handler, false);
                return;
            }
            if (!guid)
                handler.guid = guid++;
            if (!elem.events)
                elem.events = {};
            var handlers = elem.events[type];
            if (!handlers) {
                handlers = elem.events[type] = {};
                if (elem["on" + type]) {
                    handlers[0] = elem["on" + type];
                }
            }
            handlers[handler.guid] = handler;
            elem["on" + type] = _handleEvent;
            /**
             * 执行事件
             * @param {Object} event
             */
            function _handleEvent(event) {
                var event = event || window.event;
                var handles = this.events[event.type];
                for (var i in handles) {
                    handles[i].call(this, event);
                }
            }
        },
        /**
         * @description 事件绑定，兼容各浏览器
         * @param target 事件触发对象 
         * @param type   事件
         * @param func   事件处理函数
         */
        addHandlerCompatibility: function(target, type, func) {
            if (target.addEventListener)    //非ie 和ie9
                target.addEventListener(type, func, false);
            else if (target.attachEvent)   //ie6到ie8
                target.attachEvent("on" + type, func);
            else
                target["on" + type] = func; //ie5
        },
        getEvent: function(event) {
            return event ? event : window.event;
        },
        getTarget: function(event) {
            return event.target || event.srcElement;
        },
        removeHandler: function(element, type, handler) {
            if (element.removeEventListener) {
                element.removeEventListener(type, handler, false);
            } else if (element.detachEvent) {
                element.detachEvent("on" + type, handler);
            } else {
                element["on" + type] = null;
            }
        },
        stopPropagation: function(event) {
            if (event.stopPropagation) {
                event.stopPropagation();
            } else {
                event.cancelBubble = true;
            }
        }
    };
    var in_array = function(needle, haystack, argStrict) {

        var key = '',
                strict = !!argStrict;
        if (strict) {
            for (key in haystack) {
                if (haystack[key] === needle) {
                    return true;
                }
            }
        } else {
            for (key in haystack) {
                if (haystack[key] == needle) {
                    return true;
                }
            }
        }

        return false;
    };
    var mkaUtil = {
        res: [0, 0, 0],
        keys: new Array(),
        prepaste: false,
        isctrlv: false,
        mf: false,
        doFocus: function(e) {
            var e = e || window.event;
            var obj = e.target || e.srcElement; //获取事件源
            var t = obj.type || obj.getAttribute('type'); //获取事件源类型
            if (t == "text" || t == "password") {
                mkaUtil.keys = new Array();
                mkaUtil.prepaste = mkaUtil.mf ? true : false;
                mkaUtil.isctrlv = false;
                mkaUtil.mf = false;
            }
        },
        doKey: function(e) {
            var currKey = 0, e = e || window.event;
            currKey = e.keyCode || e.which || e.charCode; //支持IE、FF
            var keyName = String.fromCharCode(currKey);
            var obj = e.target || e.srcElement; //获取事件源
            var t = obj.type || obj.getAttribute('type'); //获取事件源类型  
            if (t == "text" || t == "password") {
                if (currKey) {
                    mkaUtil.keys.push(keyName);
                }
                if (e.ctrlKey && currKey == 86) {
                    //todo... 1
                    mkaUtil.isctrlv = true;
                    if (this.name == "username") {
                        mkaUtil.res[0] = 1;
                    }
                    if (this.name == "password") {
                        mkaUtil.res[1] = 1;
                    }
                    if (this.name == "password2") {
                        mkaUtil.res[2] = 1;
                    }
                }
            }
        },
        doMouse: function(e) {
            var e = e || window.event;
            var obj = e.target || e.srcElement; //获取事件源
            var t = obj.type || obj.getAttribute('type'); //获取事件源类型
            if (t == "text" || t == "password") {
                if (e.button == 2 && mkaUtil.keys.length == 0) {
                    mkaUtil.prepaste = true;
                }
                if (e.button == 2 && mkaUtil.keys.length != 0 && !this.value) {
                    mkaUtil.mf = true;
                }
                if (e.button == 2 && mkaUtil.keys.length == 0 && !this.value) {
                    mkaUtil.mf = true;
                }
            }
        },
        doPaste: function(e) {
            if (mkaUtil.prepaste && !mkaUtil.isctrlv) {
                //todo... 2
                if (this.name == "username") {
                    mkaUtil.res[0] = 2;
                }
                if (this.name == "password") {
                    mkaUtil.res[1] = 2;
                }
                if (this.name == "password2") {
                    mkaUtil.res[2] = 2;
                }
            }
        }
    };
    function mkListener() {
        var objs = document.getElementById("reg").getElementsByTagName("input");
        if (objs) {
            for (obj in objs) {
                objs[obj].onkeydown = mkaUtil.doKey;
                objs[obj].onmousedown = mkaUtil.doMouse;
                objs[obj].onpaste = mkaUtil.doPaste;
                objs[obj].onfocus = mkaUtil.doFocus;
            }
        }
    }
    ;
    if (window.location.host == "gamely.hupu.com" && window.location.href.search(/tuiguang/) !== -1) {
        mkListener();
    }

//初始化数据，生成用户标识，保存cookie
    /*
     * @param siteId 网站id
     * @param btime  进入网站时间
     */
    function init(siteId) {

        var o = o || {};
        //发送函数
        o.sendImage = function(uri) {
            var host = domainUrl + '/_dace.gif?';
            var d = new Image(1, 1);
            d.src = host + uri;
            He(d, function() {
                He(d, '');
            });
        };
        //设置网站id
        o.siteId = siteId;
        o.getSiteId = function() {

            var config = {};
            for (var a = 0, b = c.channel.length; a < b; a++) {
                config[c.channel[a][1]] = c.channel[a][2];
            }

            //取得域名称
            var domain = window.location.host.split('.')[0];
            //新声识货、合作乐视、彩票做特殊处理
            //http://voice.hupu.com/shihuo....
            //hupu.hz.letv.com...
            //data.caipiao.hupu.com、trend.caipiao.hupu.com...
            domain = o.getDefinitionSiteId(domain, 'voice');
            return config[domain] == undefined ? 'ukn' : config[domain];
        }

//计算自定义sid
        o.getDefinitionSiteId = function(domain, str) {
            if (domain == str) {
                var uri = window.location.pathname;
                var reg = new RegExp("^/(shihuo)/?[a-zA-z0-9-.]*$"),
                        result = reg.exec(uri);
                if (result) {
                    domain = domain + '_' + result[1];
                }
            }

            var url = window.location.host;
            if (url.indexOf("hupu.hz.letv.com") != -1) {
                domain = "letv";
            }

            if (url.indexOf("shihuo.cn") != -1) {
                domain = "shihuo";
            }

            var reg = new RegExp("^([a-zA-Z0-9_]+)\.caipiao\.hupu\.com");
            var result = reg.exec(url);
            if (result) {
                domain = result[1] + "caipiao";
            }

            return domain;
        }

//本次访问标识，保存cookie 1小时过期
        o.theOneActId = function() {
            var actIdFromCookie = pd('_daceactid');
            if (actIdFromCookie.length > 0) {
                return actIdFromCookie;
            } else {
                var actId = getActionId();
                //                document.cookie = '_daceactid=' + actId + ';max-age=' + (60 * 60 * 24 * 365) + ';path=/';
                CookieUtil.setRaw('_daceactid', actId, {
                    'expires': (60 * 60 * 24 * 365 * 1000),
                    'domain': domain,
                    'path': '/'
                });
                return actId;
            }
        }

//获取visitorid，
        /**
         * //根据key获取cookie的值
         * @param k cookie中的key
         * @param fun 获取cookie函数
         */
        o.getKeyByCookie = function(k, fun) {
            var inCookie = CookieUtil.getRaw(k);
            //用户标识不存在，则重新生成保存到cookie
            return (inCookie) ? inCookie : fun();
        };
        //获取配置信息，屏幕，语言，色位等
        o.getWindowInfo = function() {
            var a = {}, b = window['navigator'], c = window.screen;
            //屏幕宽高
            a.crs = c ? c.width + "x" + c.height : "-";
            //色位
            a.ccd = c ? c.colorDepth + "-bit" : "-";
            //语言
            a.cbl = (b && (b.language || b.browserLanguage) || "-")['toLowerCase']();
            //字符类型
            //a.characterSet = document.characterSet || document.charset || "-";
            //java支持
            a.cjv = b && b.javaEnabled() ? 1 : 0;
            //cookie支持
            a.cck = b && b.cookieEnabled ? 1 : 0;
            //检测flash
            var hasPlugin = function(name) {
                name = name.toLowerCase();
                for (var i = 0; i < navigator.plugins.length; i++) {
                    if (navigator.plugins[i].name.toLowerCase().indexOf(name) > -1) {
                        return true;
                    }
                }
                return false;
            }, hasIEPlugin = function(name) {
                try {
                    new ActiveXObject(name);
                    return true;
                } catch (ex) {
                    return false;
                }
            }, hasFlash = function() {
                var result = hasPlugin("Flash");
                if (!result) {
                    result = hasIEPlugin("ShockwaveFlash.ShockwaveFlash");
                }
                return result;
            };
            a.cfl = hasFlash() ? 1 : 0;
            a.v = version;
            return a;
        }

//refer,外链类型--内链or外链、referer 名称、referer url、搜索引擎关键词
        o.getReferer = function() {
            var a = a || {};
            var referrer = document.referrer;
            //var referrer = 'http://www.baidu.com/s?wd=%E8%99%8E%E6%89%91%E5%9B%BE%E7%89%87&rsv_bp=0&ch=&tn=baidu&bar=&rsv_spt=3&ie=utf-8&rsv_sug3=8&rsv_sug=0&rsv_sug1=7&rsv_sug4=232&inputT=3360';
            var rf_domain = referrer ? referrer.split('/')[2] : '';
            if (!referrer) {
            } else if (rf_domain.indexOf('hupu.com') > 0) {
                a.rtp = 'il';
                a.rnm = '';
                a.rurl = referrer;
                a.rkw = '';
            } else {
//分析referrer中的域名
//var rf_domain = referrer.split('/')[2];
                if (rf_domain) {
                    function getUrlParams(paramsName) {
                        var sUrl = document.referrer;
                        //var sReg = "(?:\\?|&){1}"+paramsName+"=([^&|/]*)";
                        var sReg = paramsName + "=([^&|\/]*)";
                        var re = new RegExp(sReg, "gi");
                        re.exec(sUrl);
                        var value = RegExp.$1;
                        if (value) {
                            return value;
                        }
                        return '';
                    }

//分析搜索各个引擎关键字
                    function parseKeywords(domain) {

                        if (!domain) {
                            return false;
                        }
                        var searchTerms = '';
                        if (domain.indexOf('baidu.com') >= 0) {
                            var wd = getUrlParams('wd');
                            var kw = getUrlParams('kw');
                            var word = getUrlParams('word');
                            var wap_w = getUrlParams('w');
                            if (trim(wd)) {
                                return wd;
                            } else if (trim(kw)) {
                                return kw;
                            } else if (trim(word)) {
                                return word;
                            } else if (trim(wap_w)) {
                                return wap_w;
                            } else {
                                return searchTerms;
                            }
                        } else if (domain.indexOf('so.360.cn') >= 0 || domain.indexOf('pad.easou.com') >= 0 || domain.indexOf('jike.com') >= 0 || domain.indexOf('yahoo.com') >= 0 || domain.indexOf('youdao.com') >= 0 || domain.indexOf('bing.com') >= 0 || domain.indexOf('google') >= 0 || domain.indexOf('www.so.com') >= 0) {

                            searchTerms = trim(getUrlParams('q'));
                        } else if (domain.indexOf('sogou.com') >= 0) {

                            searchTerms = trim(getUrlParams('query'));
                        } else if (domain.indexOf('zhongsou.com') >= 0 || domain.indexOf('www.soso.com') >= 0) {

                            searchTerms = trim(getUrlParams('w'));
                        } else if (domain.indexOf('uc.cn') >= 0) {

                            searchTerms = trim(getUrlParams('keyword'));
                        }

                        if (domain.indexOf('baidu.com') < 0 && !searchTerms) {
                            return 'ukn';
                        }
                        return searchTerms;
                    }


                    for (var i = 0; i < engine.length; i++) {

                        if (rf_domain == engine[i] || rf_domain.indexOf('google') >= 0) {
                            var keywords = parseKeywords(rf_domain);
                            a.rtp = 'ol';
                            a.rnm = '';
                            a.rurl = rf_domain;
                            if (rf_domain == 'm.baidu.com') {
                                a.rkw = '';
                                a.mrkw = keywords;
                            } else {
                                a.rkw = keywords;
                                a.mrkw = keywords;
                            }

                            break;
                        } else {
                            a.rtp = 'ol';
                            a.rnm = '';
                            a.rurl = rf_domain;
                            a.rkw = '';
                        }
                    }
                }
            }
            return a;
        }


//获取备用信息
        o.getBack = function() {
            return __daceBacks;
        }

//生成请求链接
        /*
         * @param click_xy  事件触发坐标
         * @param action    用户操作状态  i<进入> c<click> l<leave>
         */
        o.generateUrl = function(action, click_xy, click_link) {
            var vid = CookieUtil.getRaw(daceVidCookieKey3);
            if (vid) {
                return this._generateUrl(action, click_xy, click_link);
            } else {
                if (action == 'l')
                    return this._generateUrl(action, click_xy, click_link);
                queue.push([action, click_xy, click_link]);
                return false;
            }
        }

        o._generateUrl = function(action, click_xy, click_link) {
            var a = {};
            //当用户进入页面的时候去除vid并保存到全局变量中，防止用户删除或者禁用cookie导致的错误
            if (action == 'i') {
                a.vid = CookieUtil.getRaw(daceVidCookieKey3);
                window._dace_Vid = a.vid;
            } else {
                a.vid = _dace_Vid;
            }
            //a.url = document.location.href;
            a.sid = o.getSiteId();
            //a.action_id = o.theOneActId();
            a.aid = actionId ? actionId : getActionId();
            a.vst = saveVisitsToCookie();
            //检查用户是否登录
            var ua = document.cookie.match(new RegExp("(^| )ua=([^;]*)(;|$)")), data;
            var gm = document.getElementById('g_m');
            a.lgn = (ua && ua[2]) ? (gm ? gm.getAttribute('iuid') : 1) : 0;
            a.act = action ? action : 'i';
            //精确到毫秒
            //a.vtm = unixTimestamp(false);
            a.cxy = click_xy ? click_xy : '';
            a.clk = click_link ? click_link : '';
            if (a.act == 'l') {
                if (pageLoadTime) {
                    a.plt = pageLoadTime;
                } else {
                    a.plt = 0 - pageLoadTimeFun();
                }
            } else {
                a.plt = 0;
            }
//a.plt = (a.act == 'l') ? pageLoadtime : 0;

            var uriArray = [];
            for (var p in a) {
                uriArray.push(p + '=' + encodeURIComponent(a[p]));
            }

//config
            var winInfo = o.getWindowInfo();
            for (var i in winInfo) {
                uriArray.push(i + "=" + winInfo[i]);
            }

//referrer
            var referrer = o.getReferer();
            if (typeof (referrer) == "object") {
                for (var r in referrer) {
                    uriArray.push(r + "=" + ((r != 'rkw') ? encodeURIComponent(referrer[r]) : referrer[r]));
                }
            } else {
                uriArray.push('rtp=');
                uriArray.push('rnm=');
                uriArray.push('rurl=');
                uriArray.push('rkw=');
            }

            var host = window.location.host;
            var href = window.location.href;
            var back = o.getBack();
            if (back instanceof Array && back.length > 0) {
                for (var i = 0, len = back.length; i < len; i++) {
                    if (back[i] == 'bk1' && host == 'gamely.hupu.com') {
                        uriArray.push(back[i] + "=" + pd('wg_qq_login'));
                    } else if (back[i] == 'bk2' && host == 'nba.hupu.com') {
                        uriArray.push(back[i] + "=" + pd('daceSkin'));
                    } else if (back[i] == 'bk3' && host == 'gamely.hupu.com' && href.search(/tuiguang/) !== -1 && a.act == 'l') {
                        if (document.getElementById("username").value && document.getElementById("password").value && document.getElementById("password2").value) {
                            var res = mkaUtil.res;
                            var result = res.join();
                        } else {
                            var result = "";
                        }
                        uriArray.push(back[i] + "=" + result);
                    } else if (back[i] == 'bk3' && host == 'gamepay.hupu.com') {
                        uriArray.push(back[i] + "=" + pd('wgpay_isdef'));
                    } else if (back[i] == 'bk1' && href == 'http://zb.hupu.com/') {
                        uriArray.push(back[i] + "=" + pd('zb_center_2013121013'));
                    } else if (back[i] == 'bk1' && href == 'http://soccer.hupu.com/') {
                        uriArray.push(back[i] + "=" + pd('soccer_index_2013121315'));
                    } else {
                        uriArray.push(back[i] + "=" + '');
                    }
                }
            }
//Js采集论坛fid
            if (host === 'bbs.hupu.com') {
                var head_link = document.getElementsByTagName('head')[0].getElementsByTagName('link');
                var head_link_len = head_link.length;
                for (var i = 0; i < head_link_len; i++) {
                    if (head_link[i].attributes['rel'].nodeValue === 'alternate') {
                        if (head_link[i].href.indexOf('?fid=') > 0) {
                            var bbs_fid = head_link[i].href.match(/\d+/g).join();
                            uriArray.push("bbs=" + bbs_fid);
                        }
                    }
                }
            }


//JS采集代码需要记录试玩账号的信息
            uriArray.push("tru=" + pd('wg_trial_user'));

            //频道视图
            var type__daceDateNameOfChannel = typeof __daceDataNameOfChannel;
            if (type__daceDateNameOfChannel != 'undefined') {
                uriArray.push('chv=' + __daceDataNameOfChannel);
            } else {
                uriArray.push('chv=' + '');
            }

            var uri = uriArray.join('&');
            return uri;
        }

//进入页面发送请求
        o.requestFun = function() {
            pd('_daceid').length > 0 ? delCookie() : '';
            var uri = o.generateUrl('i', '', '');
            if (uri)
                o.sendImage(uri);
            isSend = true;
        }

//操作发送请求
        o.clickRequestFun = function() {
            EventUtil.ready(function() {
                var list = document.body, target = null;
                EventUtil.addHandler(list, "mousedown", function(event) {
                    var e = EventUtil.getEvent(event);
                    var target = EventUtil.getTarget(e);
                    var nodeName = target.nodeName.toLowerCase();
                    while ('a' != nodeName && 'body' != nodeName) {
                        //EventUtil.stopPropagation(e);
                        target = target.parentElement;
                        if (!target) {
                            break;
                        }
                        nodeName = target.nodeName.toLowerCase();
                    }
                    if (target != undefined && target) {
                        var a = target.nodeName.toLowerCase();
                        var link = target.href;
                        //判断是否是链接，是发送请求
                        if (a === 'a' && link != undefined) {
                            var scrollX = document.documentElement.scrollLeft || document.body.scrollLeft;
                            var scrollY = document.documentElement.scrollTop || document.body.scrollTop;
                            var x = e.pageX || e.clientX + scrollX;
                            var y = e.pageY || e.clientY + scrollY;
                            var xy = x + ',' + y;
                            var uri = o.generateUrl('c', xy, link);
                            if (uri)
                                o.sendImage(uri);
                        }
                    }
                });
            });
        },
                o.fcc = 0;
        o.firstClickRequestFun = function(event) {
            var xy = event.clientX + ',' + event.clientY;
            var href = window.location.href;
            var host = window.location.host;
            if (host == 'gamely.hupu.com' && href.search(/tuiguang/) !== -1) {
                if (o.fcc < 1) {
                    var uri = o.generateUrl('fc', xy, '');
                    if (uri)
                        o.sendImage(uri);
                }
                o.fcc++;
            }
        },
                o.secondClickRequestFun = function(event) {
                    var xy = event.clientX + ',' + event.clientY;
                    var href = window.location.href;
                    var host = window.location.host;
                    if (host == 'gamely.hupu.com' && href.search(/tuiguang/) !== -1) {
                        var uri = o.generateUrl('sc', xy, '');
                        if (uri)
                            o.sendImage(uri);
                    }
                },
                //关闭页面发送请求
                o.leaveRequestFun = function() {
                    var ev = browser.msie ? 'beforeunload' : 'unload';
                    EventUtil.addHandler(window, ev, function() {
                        var uri = o.generateUrl('l', '', '');
                        if (uri)
                            o.sendImage(uri);
                        if (!isSend) {
                            o.requestFun();
                        }
                    })
                },
                o.sendEvent = function(eid) {
                    if (eid) {
                        var vid = CookieUtil.getRaw(daceVidCookieKey3);
                        var aid = actionId ? actionId : getActionId();
                        var vst = saveVisitsToCookie();
                        var ua = document.cookie.match(new RegExp("(^| )ua=([^;]*)(;|$)"));
                        var gm = document.getElementById('g_m');
                        var lgn = (ua && ua[2]) ? (gm ? gm.getAttribute('iuid') : 1) : 0;
                        var date = new Date();
                        var uri = 'et=rd_e_custom&eid=' + eid + '&vid=' + vid + '&aid=' + aid + '&lgn=' + lgn + '&vst=' + vst + '&kcache=' + date.getTime() + Math.random() * 1000000;
                        o.sendImage(uri);
                    } else {
                        return false;
                    }
                }
        return o;
    }

//生成cookie
//取得基本信息
    var $ = function() {
        var o = o || {};
        if (!CookieUtil.getRaw(daceVidCookieKey3)) {
            saveVid3Cookie();
        }
        o.getTracker = function(a) {
            //判断用户是否为第一次进入
            //todo...
            var i = new init(a);
            EventUtil.addHandlerCompatibility(window, "load", function() {
                pageLoadTime = pageLoadTimeFun();
            });
            i.requestFun();
            i.clickRequestFun();
            i.leaveRequestFun();
            return i;
        }
        return o;
    }

    var _dace = new $;
    return _dace.getTracker(1);
})(window);