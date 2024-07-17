export type Mode = 'development' | 'production';

export interface Env {
    mode: Mode;
    port: number;
}

export interface ConfigPaths {
    entry: string;
    html: string;
    output: string;
    src: string;
}

export type ConfigModes = Mode;

export interface ConfigOptions {
    port: number;
    paths: ConfigPaths;
    mode: ConfigModes;
    analyze?: boolean;
}
