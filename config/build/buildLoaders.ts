import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import { RuleSetRule} from 'webpack';

export function buildLoaders(): RuleSetRule[] {

    const cssLoader = {
        test: /\.s[ac]ss$/i,
        use: [
          // Creates `style` nodes from JS strings
            MiniCssExtractPlugin.loader,
          // Translates CSS into CommonJS
            "css-loader",
          // Compiles Sass to CSS
            "sass-loader",
        ],
    }

    const typescriptLoader = {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
    }

    // the sequence of plugins is important!
    return [
        typescriptLoader,
        cssLoader
    ]
}