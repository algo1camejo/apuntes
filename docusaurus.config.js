// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Apuntes',
  tagline: 'Algoritmos y Programación I - FIUBA',
  url: 'https://apuntes.algoritmos7540mendez.com.ar',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/tron.svg',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'algo1camejo', // Usually your GitHub org/user name.
  projectName: 'apuntes', // Usually your repo name.

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'es',
    locales: ['es'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          routeBasePath: '/',
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/algo1camejo/apuntes',
        },
        blog: false,
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: 'Algoritmos y Programación I - Camejo',
        logo: {
          alt: 'Logo',
          src: 'img/tron.svg',
        },
      },
      footer: {
        copyright: `Copyright © ${new Date().getFullYear()} Algo1Camejo. Built with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
        additionalLanguages: ["java", "nasm", "pascal"]
      },
      colorMode: {
      	respectPrefersColorScheme: true,
      }
    }),

    plugins: [
    	[
    	  require.resolve("@cmfcmf/docusaurus-search-local"),
    	  {
    	  	indexBlog: false
    	  }
    	]
    ]
};

module.exports = config;
