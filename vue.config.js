module.exports = {
  // css相关配置
  css: {
    extract: true, // 是否使用css分离插件 ExtractTextPlugin
    sourceMap: false, // 开启 CSS source maps
    loaderOptions: {
      scss: {
        prependData: '@import "./src/styles/main.scss";'
      }
    },
    requireModuleExtension: true // 启用 CSS modules for all css / pre-processor files.
  }
}
