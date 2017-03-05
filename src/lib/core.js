/*
 * @Author: puxiao.wh 
 * @Date: 2017-03-05 13:23:58 
 * @Last Modified by:   puxiao.wh 
 * @Last Modified time: 2017-03-05 13:23:58 
 */

var app = function() {}

app.init = function(options = {}) {
    var { width = '640', isDebug = true } = options
    var setFontSize = function () {
        // 获取window 宽度,动态计算
        var _self = this;
        _self.width = width;   //psd750px宽度 ,default
        _self.fontSize = 100;//字体大小
        _self.widthProportion = function () {
            var p = ((document.body && document.documentElement.clientWidth || document.getElementsByTagName("html")[0].offsetWidth ) / _self.width );
            var px1 = (p * _self.fontSize).toFixed(4);
            px1 = px1 > 100 ? 100 : px1;
            px1 = px1 < 0.08 ? 0.08 : px1;
            return px1;
        };
        if(isDebug) {
            console.log("html fontSize: ",_self.widthProportion());
        }
        document.getElementsByTagName("html")[0].setAttribute("style", "font-size:" + _self.widthProportion() + "px; !important");
    }.bind(window);

    // init 初始化
    setFontSize();
    //手机改变状态时也执行该方法
    var _evt = 'onorientationchange' in window ? 'orientationchange' : 'resize';
    var _timer = null;
    //android,win系列
    window.addEventListener(_evt, function () {
        clearTimeout(_timer);
        _timer = setTimeout(setFontSize, 300);
    }, false);
    //ios系列
    window.addEventListener("pageshow", function(e) {
        if (e.persisted) {
            clearTimeout(_timer);
            _timer = setTimeout(setFontSize, 300);
        }
    }, false);
}

module.exports = app;