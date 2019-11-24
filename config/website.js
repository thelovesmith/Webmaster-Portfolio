const tailwind = require('../tailwind');

module.exports = {
  pathPrefix: '/', // Prefix for all links. If you deploy your site to example.com/portfolio your pathPrefix should be "/portfolio"

  siteTitle: 'Avery-Dante Hinds', // Navigation and Site Title
  siteTitleAlt: 'Avery-Dante', // Alternative Site title for SEO
  siteUrl:  'https://averydante.com', // Domain of your site. No trailing slash!
  siteLanguage: 'en', // Language Tag on <html> element
  siteLogo: '/logos/logo-1024.png', // Used for SEO and manifest
  siteDescription: 'Full-Stack Developer Who Turns Ideas Into Reality',

  // siteFBAppID: '123456789', // Facebook App ID - Optional
  // userTwitter: '', // Twitter Username
  // ogSiteName: '', // Facebook Site Name
  ogLanguage: 'en_US', // Facebook Language

  // Manifest and Progress color
  themeColor: tailwind.colors.orange,
  backgroundColor: tailwind.colors.blue,
};
