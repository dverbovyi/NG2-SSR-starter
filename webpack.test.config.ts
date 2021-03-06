import { root } from './webpack.config';

const path = require('path');

/**
 * Webpack Plugins
 */
const ProvidePlugin = require('webpack/lib/ProvidePlugin');
const DefinePlugin = require('webpack/lib/DefinePlugin');
const LoaderOptionsPlugin = require('webpack/lib/LoaderOptionsPlugin');
const ContextReplacementPlugin = require('webpack/lib/ContextReplacementPlugin');

let ENV = process.env.ENV = process.env.NODE_ENV = 'test';

/**
 * Webpack Constants
 */

/**
 * Webpack configuration
 *
 * See: http://webpack.github.io/docs/configuration.html#cli
 */
export const TestWebpackConfig = {
    /**
     * Source map for Karma from the help of karma-sourcemap-loader &  karma-webpack
     *
     * Do not change, leave as is or it wont work.
     * See: https://github.com/webpack/karma-webpack#source-maps
     */
    devtool: 'inline-source-map',

    /**
     * Options affecting the resolving of modules.
     *
     * See: http://webpack.github.io/docs/configuration.html#resolve
     */
    resolve: {

        /**
         * An array of extensions that should be used to resolve modules.
         *
         * See: http://webpack.github.io/docs/configuration.html#resolve-extensions
         */
        extensions: ['.ts', '.js'],

        /**
         * Make sure root is src
         */
        modules: [path.resolve(__dirname, 'src'), 'node_modules']

    },

    /**
     * Options affecting the normal modules.
     *
     * See: http://webpack.github.io/docs/configuration.html#module
     */
    module: {

        rules: [

            /**
             * Source map loader support for *.js files
             * Extracts SourceMaps for source files that as added as sourceMappingURL comment.
             *
             * See: https://github.com/webpack/source-map-loader
             */
            {
                enforce: 'pre',
                test: /\.js$/,
                loader: 'source-map-loader',
                exclude: [
                    // these packages have problems with their sourcemaps
                    root('node_modules/rxjs'),
                    root('node_modules/@angular')
                ]
            },

            /**
             * Typescript loader support for .ts and Angular 2 async routes via .async.ts
             *
             * See: https://github.com/s-panferov/awesome-typescript-loader
             */
            {
                test: /\.ts$/,
                loader: 'awesome-typescript-loader',
                query: {
                    sourceMap: true,
                    compilerOptions: {
                        removeComments: true
                    }
                },
                exclude: [/\.e2e\.ts$/]
            },

            {
                test: /\.ts$/,
                loader: 'angular2-template-loader',
                query: {
                    sourceMap: true,
                    compilerOptions: {
                        removeComments: true,

                    }
                },
                exclude: [/\.e2e\.ts$/]
            },

            /**
             * Raw loader support for *.css files
             * Returns file content as string
             *
             * See: https://github.com/webpack/raw-loader
             */
            {
                test: /\.css$/,
                loaders: ['raw-loader'],
                exclude: [root('src/index.html')]
            },

            {
                test: /\.scss$/,
                exclude: /node_modules/,
                loaders: ['raw-loader', 'sass-loader']
            },

            /**
             * Raw loader support for *.html
             * Returns file content as string
             *
             * See: https://github.com/webpack/raw-loader
             */
            {
                test: /\.html$/,
                loader: 'raw-loader',
                exclude: [root('src/index.html')]
            },

            /**
             * Instruments JS files with Istanbul for subsequent code coverage reporting.
             * Instrument only testing sources.
             *
             * See: https://github.com/deepsweet/istanbul-instrumenter-loader
             */
            {
                enforce: 'post',
                test: /\.(js|ts)$/,
                loader: 'istanbul-instrumenter-loader',
                include: root('src'),
                exclude: [
                    /\.(e2e|spec)\.ts$/,
                    /node_modules/
                ]
            }

        ]
    },

    /**
     * Add additional plugins to the compiler.
     *
     * See: http://webpack.github.io/docs/configuration.html#plugins
     */
    plugins: [

        /**
         * Plugin: DefinePlugin
         * Description: Define free variables.
         * Useful for having development builds with debug logging or adding global constants.
         *
         * Environment helpers
         *
         * See: https://webpack.github.io/docs/list-of-plugins.html#defineplugin
         */
        // NOTE: when adding more properties make sure you include them in custom-typings.d.ts
        new DefinePlugin({
            'ENV': JSON.stringify(ENV),
            'process.env': {
                'ENV': JSON.stringify(ENV),
                'NODE_ENV': JSON.stringify(ENV)
            }
        }),

        /**
         * Plugin: ContextReplacementPlugin
         * Description: Provides context to Angular's use of System.import
         *
         * See: https://webpack.github.io/docs/list-of-plugins.html#contextreplacementplugin
         * See: https://github.com/angular/angular/issues/11580
         */
        new ContextReplacementPlugin(
            // The (\\|\/) piece accounts for path separators in *nix and Windows
            /angular(\\|\/)core(\\|\/)(esm(\\|\/)src|src)(\\|\/)linker/,
            root('src') // location of your src
        ),

        /**
        * Plugin LoaderOptionsPlugin (experimental)
        *
        * See: https://gist.github.com/sokra/27b24881210b56bbaff7
        */
        new LoaderOptionsPlugin({
            debug: true,
            options: {}
        }),

    ],

    /**
     * Include polyfills or mocks for various node stuff
     * Description: Node configuration
     *
     * See: https://webpack.github.io/docs/configuration.html#node
     */
    node: {
        global: true,
        process: false,
        crypto: 'empty',
        module: false,
        clearImmediate: false,
        setImmediate: false
    }
}