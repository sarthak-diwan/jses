const webpack = require("webpack");

module.exports = function override(config) {
    const fallback = config.resolve.fallback || {};
    Object.assign(fallback, {
        crypto: require.resolve("crypto-browserify"),
        stream: require.resolve("stream-browserify"),
        constants: require.resolve("constants-browserify"),
        buffer: require.resolve("buffer"),
        process: require.resolve("process/browser.js"),
        assert: require.resolve("assert"),
        util: require.resolve("util"),
        vm: require.resolve("vm-browserify"),
    });
    config.resolve.fallback = fallback;
    config.plugins = (config.plugins || []).concat([
        new webpack.ProvidePlugin({
            process: "process/browser.js",
            Buffer: ["buffer", "Buffer"],
        }),
    ]);
    return config;
};
