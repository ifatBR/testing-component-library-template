const path = require('path')
const pathToInlineSvg = path.resolve(__dirname, '../src/assets/icons/')
module.exports = async ({ config }) => {
    config.module.rules = [
        ...config.module.rules.map(rule => {
          if (/svg/.test(rule.test)) {
            // Silence the Storybook loaders for SVG files
            return { ...rule, exclude: /\.svg$/i }
          }
      
          return rule
        }),
        // Add your custom SVG loader
        {
          test: /\.svg$/i,
          use: ['@svgr/webpack']
        }
      ]

    return config;
}