module.exports = {

  // publicPath: '/h5_admlicenseman/',
  outputDir: "h5_citylivable",
  publicPath: '/h5_citylivable',
  lintOnSave: false,
  devServer: {
    proxy: {
      '/apis': {
        target: 'http://58.210.88.98:10080/citylivable',
        // target: 'http://thirdapps.ksecard.cn:12503/citylivable',
        // 允许跨域
        changeOrigin: true,
        ws: true,
        pathRewrite: {
          '^/apis': ''
        },
        onProxyRes(proxyRes) {
          let oldCookie = proxyRes.headers['set-cookie'];
          if (oldCookie == null || oldCookie.length === 0) {
            delete proxyRes.headers['set-cookie'];
            return;
          }
          let oldCookieItems = oldCookie[0].split(';');
          let newCookie = '';
          for (let i = 0; i < oldCookieItems.length; ++i) {
            if (newCookie.length > 0)
              newCookie += ';';
            if (oldCookieItems[i].indexOf('Path=') >= 0)
              newCookie += 'Path=/';
            else
              newCookie += oldCookieItems[i];
          }
          proxyRes.headers['set-cookie'] = [newCookie];
        }
      }
    }
  },
};
