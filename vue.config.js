const publicPath = process.env.NODE_ENV === 'production' ? '/curriculum-vitae/' : '/'
module.exports = {
  transpileDependencies: [
    'vuetify',
  ],
  publicPath: publicPath
}
