/**
 * 美孚小浮层(20131128)
 **/

!function($) {
	// 时间判断
	var date = new Date(),
			getMonth = date.getMonth(),
			getDate = date.getDate();

	if(getMonth == 1 && (getDate ==19 || getDate ==21 || getDate == 28)){
		$.extend({
			cookie:function(name, value, options){//cookie
				if (typeof value != 'undefined') {
					options = options || {};
					if (value === null) {
						value = '';
						options.expires = -1;
					}
					var expires = '';
					if (options.expires && (typeof options.expires == 'number' || options.expires.toUTCString)) {
						var date;
						if (typeof options.expires == 'number') {
							date = new Date();
							date.setTime(date.getTime() + (options.expires * 24 * 60 * 60 * 1000));
						} else {
							date = options.expires;
						}
						expires = '; expires=' + date.toUTCString();
					}
					var path = options.path ? '; path=' + options.path : '';
					var domain = options.domain ? '; domain=' + options.domain : '';
					var secure = options.secure ? '; secure' : '';
					document.cookie = [name, '=', encodeURIComponent(value), expires, path, domain, secure].join('');
				} else {
					var cookieValue = null;
					if (document.cookie && document.cookie != '') {
						var cookies = document.cookie.split(';');
						for (var i = 0; i < cookies.length; i++) {
							var cookie = $.trim(cookies[i]);
							if (cookie.substring(0, name.length + 1) == (name + '=')) {
								cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
								break;
							}
						}
					}
					return cookieValue;
				}
			}
		});
		var smallCenterSkin = {
			//默认参数
			defaults: {
				"skinCookie":{"name":"smallCenterSkin1","num":"3"},
				"centerSkin": {"src": "http://nba.hupu.com/d/file/p/2014-02-12/cc246d60281daf2c8d3f0bccd3018d61.swf", "width": 300, "height": 250}
			},
			init: function(arr){
				var that = this;
				that.defaults = $.extend(true, {}, that.defaults, arr || {});//合并参数
				// 判断一天显示几次的cookie
				var cookieName = that.defaults.skinCookie.name;
				
				if($.cookie(cookieName) * 1 > that.defaults.skinCookie.num - 1 && that.defaults.skinCookie.num != ""){
					return false;
				}
				if( $.cookie(cookieName) ){
					$.cookie(cookieName,$.cookie(cookieName) * 1 + 1,{expires:1});
				}else{
					$.cookie(cookieName,1,{expires:1});
				}
				
				
				that.showPop();
				that.autoHide();
				that.bindFn();
			},
			bindFn: function(){
				var that = this;
				$(".skin-smallCenter .skin-btn-close").click(function(){
					that.hide();
				})
				
			},
			autoHide: function(){
				var that = this;
				var T_skin = setTimeout(function(){
					clearTimeout(T_skin);
					that.hide();
				},8000)
			},
			hide: function(){
				$(".skin-smallCenter").remove();
			},
			showPop: function(){
				var that = this;
				//var top = ($(".nba-ad980-60").length ? '65px' : '0');
				
				var tpl =  '<style type="text/css">\
							.skin-smallCenter{position:absolute;top:0;left:392px;z-index:2;}\
							.skin-btn-close,.hp-wrap .skin-btn-close:hover{display:block;position:absolute;top:5px;right:5px;width:15px;height:15px;overflow:hidden;background:url(http://i1.hoopchina.com.cn/u/1311/28/981/5365981/c413226ebig.png) no-repeat center center;}\
							</style>\
							<div class="skin-smallCenter">\
								<a href="javascript:" title="关闭" class="skin-btn-close"></a>\
								'+ that.createFlashDOM(that.defaults.centerSkin) +'\
							</div>';
							
				$(".hp-wrap").prepend(tpl).css({
					"position" : "relative"
				});
			
			},
			// 创建flash
			createFlashDOM: function(data){
				var str =   '<object classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" codebase="http://download.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=7,0,19,0" width="'+ data.width +'" height="' + data.height + '">\
								<param name="movie" value="' + data.src + '" />\
								<param name="quality" value="high" />\
								<param value="never" name="AllowScriptAccess">\
								<param value="opaque" name="wmode">\
								<param name="wmode" value="transparent" />\
								<embed src="' + data.src + '" quality="high" pluginspage="http://www.macromedia.com/go/getflashplayer" type="application/x-shockwave-flash" wmode="transparent" width="'+ data.width +'" height="' + data.height + '"></embed>\
							</object>';
				return str;
			}
		}
		smallCenterSkin.init();
	}
}(jQuery);