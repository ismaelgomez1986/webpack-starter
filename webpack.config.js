const HtmlWebPack = require('html-webpack-plugin');
const MiniCssExtract = require('mini-css-extract-plugin');
const CopyPlugin = require("copy-webpack-plugin");


module.exports = {
    mode: 'development',

    output: {
        clean: true //esto limpia el html anterior.
    },

    module: {
        rules: [
            {
                test: /\.html$/i, //también puede ser test: /\.html$/i, expresion regular, el "$" sirve para que busque todos los archivos html, la "i" al final es para que sea insensible a las mayusculas y minusculas, "html" es la extensión a buscar, cuando la encuentre se le dará la siguiente inistrucción:
                loader: 'html-loader',
                options: {
                    sources: false, // ayuda a hacer procesos automaticos por nosotros, por ej: cuando se mueve un atributo o cuando se mueve un archivo, lo hace el cambio de las referencias de manera automatica.
                }

            },
            {
                test: /\.css$/i,
                exclude: /styles.css$/,
                use: ['style-loader', 'css-loader']
            },
            {
                test: /styles.css$/,
                use: [MiniCssExtract.loader, 'css-loader']
            },
            {
                test: /\.(png|jpe?g|gif)$/i,
                loader: 'file-loader',
            },
        ]
    },

    optimization: {},

    plugins: [
        new HtmlWebPack({
            title: 'Mi webpack App',
            template: './src/index.html',
            filename: './index.html'

        }),

        new MiniCssExtract({
            filename: '[name].css',
            ignoreOrder: false
        }),

        new CopyPlugin({
            patterns: [
                { from: "src/assets", to: "assets/" },
            ]
        })

    ]
}