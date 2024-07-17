import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import { ModuleOptions } from 'webpack';
import { ConfigOptions } from '../../types';

export const buildModules = (options: ConfigOptions): ModuleOptions['rules'] => {
    const isDev = options.mode === 'development';

    const cssLoaderWithOptions = {
        loader: 'css-loader',
        options: {
            modules: {
                localIdentName: isDev ? '[local]--[hash:base64:8]' : '[hash:base64:5]',
            }
        }
    }

    const svgrLoader = {
        test: /\.svg$/,
        use: {
            loader: '@svgr/webpack',
            options: {
                icon: true,
            }
        }
    };
    const imagesLoader = { test: /\.(png|jpg|jpeg|gif)$/i, type: 'asset/resource' };
    const tsLoader = { test: /\.tsx?/, use: 'ts-loader', exclude: /node_modules/ };
    const cssLoader = { test: /\.scss/, use: [
            isDev ? 'style-loader' : MiniCssExtractPlugin.loader,
            cssLoaderWithOptions,
            'sass-loader'
        ]
    };

    return [tsLoader, cssLoader, imagesLoader, svgrLoader]
}
