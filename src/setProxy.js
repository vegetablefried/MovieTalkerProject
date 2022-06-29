const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = function (app) {
  app.use(
    createProxyMiddleware("/movie", {
      target: "http:movietalker.tk",
      changeOrigin: true,
    })
  );
  // app.use(
  //   createProxyMiddleware("/api", {
  //     target: "http://localhost:3000",
  //     changeOrigin: true,
  //   })
  // );
  // app.use(
  //   createProxyMiddleware("/odd", {
  //     target: "movietalker.myvnc.com:9000",
  //     changeOrigin: true,
  //   })
  // );
};
