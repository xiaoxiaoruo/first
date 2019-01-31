const path = require("path");
const webpack = require("webpack");
const HtmlPlugin = require("html-webpack-plugin");
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const glob = require('glob');
const PurifyCSSPlugin = require('purifycss-webpack');
const entry = require("./webpack.config/webpack_entry_webpack");// 引入自己的
const CopyWebpackPlugin = require("copy-webpack-plugin");
module.exports = {
    mode: "development",// development 开发环境;produc 生产环境
    // entry: {
    //     'xx': "./src/index.js"
    // },
    entry:entry,
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "[name].js"
    },
    plugins: [//插件 用于产生模板和各项功能 配置插件
        new webpack.HotModuleReplacementPlugin(),//更新与热服务
        new HtmlPlugin({
            minify: {
                removeAttributeQuotes: true// 去掉引号 缩小体积
            },
            hash: true,// 避免js缓存
            template: "./src/test.html",// 模板
            filename: "text.html",// 起个名
        }),
        new ExtractTextPlugin("./index.css"),
        new PurifyCSSPlugin({
            // Give paths to parse for rules. These should be absolute!
            paths: glob.sync(path.join(__dirname, 'src/*.html')),
        }),
        new webpack.BannerPlugin("小小若"),
        new webpack.ProvidePlugin({
            $:"jquery"
        }),
        new CopyWebpackPlugin([{
            from:__dirname + "/src/public",
            to:"./public"
        }])
    ],
    module: {// 定义规则 在这处理 配置loader
        rules: [
            {
                test: /\.css$/, // 匹配以.css结尾的文件
                // use:["style-loader","css-loader"]
                use: ExtractTextPlugin.extract({// 分离css文件
                    fallback: "style-loader",
                    use: [{// css3 前缀
                        loader: "css-loader",
                        options: { importLoaders: 1 }
                    }, "postcss-loader"]
                })
            },
            {
                test: /\.(jpg|png|gif)$/,
                use: [{
                    loader: "url-loader",
                    options: {
                        limit: 500,// 限制 小于500B 会打包成Base64的格式
                        outputPath: "img/"
                    }
                }]
            },
            {
                test: /\.html$/i,// i 忽略大小写
                loader: "html-withimg-loader"
            },
            {
                test: /\.scss$/,
                // use:["style-loader","css-loader","sass-loader"]// 从后往前执行 打包到js中 sass是Css scss是Css的扩展名
                use: ExtractTextPlugin.extract({// 打包到css中
                    fallback: "style-loader",
                    use: ["css-loader", "sass-loader"]
                })
            },
            {
                test:/\.js$/,
                use:[{
                    loader:"babel-loader",
                    options:{
                        presets:["@babel/preset-env"]
                    }
                }],
                exclude:/node_modules/
            }
        ]
    },
    devServer: {
        contentBase: path.resolve(__dirname, "dist"),//地址
        host: "localhost",//127.0.0.1
        // compress: true,// 压缩
        port: 8081,// 端口号
        hot: true,// 热更新
        open: true// 自动打开
    }
}