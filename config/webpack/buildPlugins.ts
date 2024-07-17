import HtmlWebpackPlugin from 'html-webpack-plugin';
import webpack, { Configuration } from 'webpack';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import { ConfigOptions } from '../../types';
import { BundleAnalyzerPlugin } from 'webpack-bundle-analyzer'

export const buildPlugins = ({ mode, paths, analyze }: ConfigOptions): Configuration['plugins'] => {

    const isDev = mode === 'development';
    const isProd = mode === 'production';

    // common
    const htmlWebpackPlugin = new HtmlWebpackPlugin({
        template: paths.html,
    })

    const plugins: Configuration['plugins'] = [htmlWebpackPlugin];

    if(isDev) {
        plugins.push(new webpack.ProgressPlugin());
    }

    if(isProd) {
        plugins.push(new MiniCssExtractPlugin({
            filename: 'css/[name].[contenthash:8].css',
            chunkFilename: 'css/[name].[contenthash:8].css',
        }));
    }

    if(analyze) {
        plugins.push(new BundleAnalyzerPlugin());
    }

    return plugins;
}
