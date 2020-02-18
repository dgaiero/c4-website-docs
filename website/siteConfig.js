/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

// See https://docusaurus.io/docs/site-config for all the possible
// site configuration options.

// List of projects/orgs using your project for the users page.
const users = [
];

const siteConfig = {
   title: 'C4 Docs', // Title for your website.
   tagline: 'Documentation for Central Coast Climate Collaborative',
   url: 'https://dgaiero.me', // Your website URL
   baseUrl: '/c4-website-docs/', // Base URL for your project */
   // For github.io type URLs, you would set the url and baseUrl like:
   //   url: 'https://facebook.github.io',
   //   baseUrl: '/test-site/',

   // Used for publishing and more
   projectName: 'c4-website-docs',
   organizationName: 'dgaiero',
   // For top-level user or org sites, the organization is still the same.
   // e.g., for the https://JoelMarcey.github.io site, it would be set like...
   //   organizationName: 'JoelMarcey'

   // For no header links in the top nav bar -> headerLinks: [],
   headerLinks: [
      { doc: 'getting-started', label: 'Docs' },
      { href: 'https://api.centralcoastclimate.org/dashboard', label: 'API Dashboard', external: true },
      { href: 'http://universities.centralcoastclimate.org/', label: 'C4 Query Utility', external: true },
      { href: 'https://centralcoastclimate.org', label: 'C4 Home', external: true }
   ],

   // If you have users set above, you add it here:
   //   users,

   /* path to images for header/footer */
   headerIcon: 'img/c4-logo-white.svg',
   footerIcon: 'img/c4-logo-white.svg',
   favicon: 'img/favicon.ico',

   /* Colors for website */
   colors: {
      primaryColor: '#028CB5',
      secondaryColor: '#6FC16F',
   },

   /* Custom fonts for website */
   /*
   fonts: {
     myFont: [
       "Times New Roman",
       "Serif"
     ],
     myOtherFont: [
       "-apple-system",
       "system-ui"
     ]
   },
   */

   // This copyright info is used in /core/Footer.js and blog RSS/Atom feeds.
   copyright: `Copyright © ${new Date().getFullYear()} Central Coast Climate Collaborative`,

   highlight: {
      // Highlight.js theme to use for syntax highlighting in code blocks.
      theme: 'default',
   },

   // Add custom scripts here that would be placed in <script> tags.
   scripts: ['https://buttons.github.io/buttons.js'],

   // On page navigation for the current documentation page.
   onPageNav: 'separate',
   // No .html extensions for paths.
   cleanUrl: true,
   editUrl: 'https://github.com/dgaiero/c4-website-docs/edit/master/docs/',
   scrollToTop: true,

   // Open Graph and Twitter card images.
   ogImage: 'img/undraw_online.svg',
   twitterImage: 'img/undraw_tweetstorm.svg',

   // For sites with a sizable amount of content, set collapsible to true.
   // Expand/collapse the links and subcategories under categories.
   docsSideNavCollapsible: true,

   // Show documentation's last contributor's name.
   // enableUpdateBy: true,

   // Show documentation's last update time.
   enableUpdateTime: true,

   // You may provide arbitrary config keys to be used as needed by your
   // template. For example, if you need your repo's URL...
   //   repoUrl: 'https://github.com/facebook/test-site',
};

module.exports = siteConfig;
