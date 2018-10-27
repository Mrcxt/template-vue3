const path = require("path");

module.exports = {
    // 基本路径
    baseUrl: './',
    // 输出文件目录
    outputDir: 'dist',
    // eslint-loader 
    // 是否在保存的时候检查
    lintOnSave: false,
    // compiler: false, 
    // webpack配置 
    chainWebpack: config => {
        config.resolve
            .symlinks(true)
        return config
    },
    configureWebpack: () => {},
    // vue-loader 配置项 https://vue-loader.vuejs.org/en/options.html 
    // vueLoader: {},
    // 生产环境是否生成 sourceMap 文件
    productionSourceMap: false,
    // css相关配置
    css: {
        // 是否使用css分离插件 ExtractTextPlugin
        extract: false,
        // 开启 CSS source maps?
        sourceMap: true,
        // css预设器配置项
        loaderOptions: {
            // // 给 sass-loader 传递选项
            // sass: {
            //     // @/ 是 src/ 的别名
            //     data: `@import "@/style/utils/scss";`
            // }
        },
        // 启用 CSS modules for all css / pre-processor files.
        modules: false
    },
    parallel: require('os')
        .cpus()
        .length > 1,
    // 是否启用dll 
    // dll:false, 
    // PWA 插件相关配置 
    pwa: {},
    // webpack-dev-server 相关配置
    devServer: {
        host: '0.0.0.0',
        port: 8080,
        https: false,
        hotOnly: true,
        proxy: null, // 设置代理
        before: app => {}
    },
    // 第三方插件配置
    pluginOptions: {
        // "style-resources-loader": {
        //     preProcessor: "less",
        //     patterns: [path.resolve(__dirname, "@/style/utils.less")]
        // }
    },
    //  webpack插件配置
    configureWebpack: config => {
        plugins = [];
    }
}