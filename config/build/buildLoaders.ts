import { RuleSetRule} from 'webpack';

export function buildLoaders(): RuleSetRule[] {

    const typescriptLoader = {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
    }

    // the sequence of plugins is important!
    return [
        typescriptLoader
    ]
}