import { buildWebpack } from './config/webpack/buildWebpack';
import { WebpackConfiguration } from 'webpack-cli';
import path from 'path';
import { Env } from './types';

export default (env: Env) => {

    const config: WebpackConfiguration = buildWebpack({
        port: env.port || 3000,
        mode: env.mode || 'development',
        paths: {
            html: path.resolve(__dirname, 'public', 'index.html'),
            output: path.resolve(__dirname, 'bundle'),
            entry: path.resolve(__dirname, 'src', 'index.tsx'),
            src: path.resolve(__dirname, 'src'),
        }
    });

    return config;
}
