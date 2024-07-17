import { ConfigOptions } from '../../types';

export const buildOutput = (options: ConfigOptions) => {
    const { paths } = options;
    return {
        path: paths.output,
        filename: "[name].[contenthash].js",
        clean: true,
    }
}
