import { Configuration } from 'webpack';
import { ConfigOptions } from '../../types';

export const buildResolver = ({ paths }: ConfigOptions): Configuration['resolve'] => {
    const { src } = paths;

    return {
        extensions: ['.ts', '.tsx', '.js'],
        // todo how does this work? (aliases) (tsconfig)
        alias: {
            '@': src,
        }
    }
}
