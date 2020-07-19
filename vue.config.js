const path = require('path');

function resolve(dir) {
    return path.join(__dirname, dir);
}

module.exports = {
    productionSourceMap: false, // 默认是true
    pluginOptions: {
        lintStyleOnBuild: true,
        stylelint: {
            fix: true, // boolean (default: true)
            // files: '', // string | [string] (default: ['src/**/*.{vue,htm,html,css,sss,less,scss}'])
        },
    },
    chainWebpack: (config) => {
        config.resolve.alias.set('#', resolve('public')); // alias
        config.resolve.alias.set('vue$', 'vue/dist/vue.js'); // fix layer user error
        config.optimization.splitChunks({
            chunks: 'all',
            cacheGroups: {
                libs: {
                    name: 'chunk-libs',
                    test: /[\\/]node_modules[\\/]/,
                    priority: 10,
                    chunks: 'initial', // 只打包初始时依赖的第三方
                },
                elementUI: {
                    name: 'chunk-elementUI', // 单独将 elementUI 拆包
                    priority: 20, // 权重要大于 libs 和 app 不然会被打包进 libs 或者 app
                    test: /[\\/]node_modules[\\/]_?element-ui(.*)/,
                },
            },
        });
    },
    css: {
        loaderOptions: {
            sass: {
                prependData: `
        @import "@/plugins/gloable.scss";
            `,
            },
        },
    },
    // FIXME 配置跨域代理 生产环境无效
    devServer: {
        open: true,
        host: 'localhost',
        port: 8080,
        https: false,
    // proxy: {
    //   '/': {
    //     target: 'http://localhost:8083',
    //     // ws: true,
    //     changOrigin: true,
    //   },
    // },
    },
};
