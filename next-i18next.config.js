/** @type {import('next-i18next').UserConfig} */
module.exports = {
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'vi'],
  },
  localePath: path.resolve('./public/locales')
}