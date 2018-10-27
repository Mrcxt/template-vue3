const config = {
    presets: [
        '@vue/app'
    ],
    plugins: []
}

if (process.env.NODE_ENV !== 'development') {
    config.plugins.push('transform-remove-console') // 去除console
}

module.exports = config