module.exports = {
    plugins: [
      require('postcss-nested'),
      require('postcss-px-to-viewport')({
        unitToConvert: 'px',
        viewportWidth: 375,
        unitPrecision: 3,
        propList: ['*'],
        viewportUnit: 'vw',
        fontViewportUnit: 'vw',
        minPixelValue: 1,
        mediaQuery: false,
        replace: true,
        landscape: false,
        landscapeUnit: 'vw',
        landscapeWidth: 568
      })
    ]
  }