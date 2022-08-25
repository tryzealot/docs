// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const isDev = process.env.NODE_ENV === 'development';

const isDeployPreview = !!process.env.NETLIFY && process.env.CONTEXT === 'deploy-preview';

// Netlify branch deploy like "docusaurus-v2"
const isBranchDeploy = !!process.env.NETLIFY && process.env.CONTEXT === 'branch-deploy';

// This probably only makes sense for the alpha/beta/rc phase, temporary
function getNextVersionName() {
  return 'Next';
}

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Zealot',
  tagline: 'Self-hosted Beta App Distribution for Android, iOS and macOS apps.',
  url: 'https://zealot.ews.im',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/zealot.png',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'tryzealot', // Usually your GitHub org/user name.
  projectName: 'docs', // Usually your repo name.

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'zh-Hans'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl: 'https://github.com/tryzealot/docs/tree/main/',
          lastVersion: isDev || isDeployPreview || isBranchDeploy ? 'current' : undefined,
          versions: {
            current: {
              label: `${getNextVersionName()} 🚧`,
            },
          },
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
        sitemap: {
          changefreq: 'weekly',
          priority: 0.5,
          ignorePatterns: ['/tags/**'],
          filename: 'sitemap.xml',
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: 'Zealot',
        logo: {
          alt: 'Zealot Logo',
          src: 'img/zealot.png',
        },
        items: [
          {
            type: 'doc',
            docId: 'self-hosted/index',
            label: 'Self Hosted',
            position: 'left',
          },
          {
            type: 'doc',
            docId: 'developer-guide/index',
            position: 'left',
            label: 'Developer Guide',
          },
          {
            type: 'doc',
            docId: 'user-guide/index',
            position: 'left',
            label: 'User Guide',
          },
          // {
          //   type: 'doc',
          //   docId: 'user-guide/changelog',
          //   position: 'left',
          //   label: 'Changelog',
          // },
          {
            type: 'docsVersionDropdown',
            position: 'right',
            dropdownActiveClassDisabled: true,
            dropdownItemsAfter: [
              {
                type: 'html',
                value: '<hr class="dropdown-separator">',
              },
              {
                href: 'https://tryzealot.github.io/docs-legacy',
                label: 'Legacy docs',
              }
            ],
          },
          {
            type: 'localeDropdown',
            position: 'right',
          },
          {
            href: 'https://github.com/tryzealot/zealot',
            label: 'GitHub',
            position: 'right',
          },

        ],
      },
      // footer: {
      //   style: 'dark',
      //   links: [
      //     {
      //       title: 'Community',
      //       items: [
      //         {
      //           label: 'Github Discussions',
      //           href: 'https://github.com/tryzealot/zealot/discussions',
      //         },
      //         {
      //           label: 'Telegram',
      //           href: 'https://t.me/+wnEWjKGcXllkMGQ9',
      //         },
      //       ],
      //     },
      //     {
      //       title: 'More',
      //       items: [
      //         {
      //           label: 'GitHub',
      //           href: 'https://github.com/tryzealot/zealot',
      //         },
      //       ],
      //     },
      //   ],
      //   copyright: `Copyright © ${new Date().getFullYear()} Zealot, Inc. Built with Docusaurus.`,
      // },
      prism: {
        additionalLanguages: ['kotlin', 'java', 'swift', 'groovy', 'ruby', 'nginx'],
        magicComments: [
          {
            className: 'theme-code-block-highlighted-line',
            line: 'highlight-next-line',
            block: {
              start: 'highlight-start',
              end: 'highlight-end'
            },
          },
          {
            className: 'code-block-error-line',
            line: 'This will error',
          },
        ],
        theme: require('prism-react-renderer/themes/dracula'),
      },
      // announcementBar: {
      //   id: 'announcementBar-2',
      //   backgroundColor: 'var(--ifm-color-primary)',
      //   textColor: 'var(--ifm-heading-color)',
      //   content: `⭐️ If you like Zealot, give it a star on <a target="_blank" rel="noopener noreferrer" href="https://github.com/tryzealot/zealot">GitHub</a>`,
      //   isCloseable: false
      // },
    }),
};

module.exports = config;
