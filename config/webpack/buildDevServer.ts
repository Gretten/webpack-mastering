import { ConfigOptions } from '../../types';

export const buildDevServer = (options: ConfigOptions) => {
    const { port } = options;

    return {
        port,
        open: true,
        // todo what is this?
        historyApiFallback: true,
    }
}
