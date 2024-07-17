import path from 'path';
import { buildOutput } from './buildOutput';
import { buildPlugins } from './buildPlugins';
import { buildModules } from './buildModules';
import { buildResolver } from './buildResolver';
import { buildDevServer } from './buildDevServer';
import { WebpackConfiguration } from 'webpack-cli';
import { ConfigOptions } from '../../types';

export const buildWebpack = (options: ConfigOptions): WebpackConfiguration => {
    const { mode, paths } = options;
    const isDev = mode === 'development';

    return {
        entry: paths.entry,
        output: buildOutput(options),
        mode: mode || 'development',
        plugins: buildPlugins(options),
        module: {
            rules: buildModules(options),
        },
        resolve: buildResolver(options),
        devServer: isDev ? buildDevServer(options) : undefined,
        // so what is source map?
        devtool: isDev ? 'inline-source-map' : false,
    };

}
