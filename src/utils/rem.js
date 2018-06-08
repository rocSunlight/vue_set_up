(function (doc, win) {
  let rem = function () {
    if (/Android|webOS|iPhone|iPod|BlackBerry/i.test(navigator.userAgent)) {
        //计算rem
        var scale = 1 / devicePixelRatio;
        doc.documentElement.style.fontSize = doc.documentElement.clientWidth / 10 + 'px';
        doc.querySelector('meta[name="viewport"]').setAttribute('content','width=device-width,initial-scale=' + scale + ', maximum-scale=' + scale + ', minimum-scale=' + scale + ', user-scalable=no');
        doc.documentElement.style.fontSize = document.documentElement.clientWidth / 10 + 'px';
    } else {
        var scale = 1
        doc.documentElement.style.fontSize = 75 + 'px';
        doc.documentElement.setAttribute('id', 'divId');
        doc.querySelector('meta[name="viewport"]').setAttribute('content','width=device-width,initial-scale=' + scale + ', maximum-scale=' + scale + ', minimum-scale=' + scale + ', user-scalable=no');
    }

  };

  rem();

  // 浏览器发生变化的时候调用
  let resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize';
  win.addEventListener(resizeEvt, rem, false);

})(document, window);

