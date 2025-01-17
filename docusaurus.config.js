// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "Papers",
  tagline: "Publication, Tutorial, and Blog",
  url: "https://kecci.github.io",
  baseUrl: "/papers/",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  favicon: "img/logo.jpg",

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: "kecci", // Usually your GitHub org/user name.
  projectName: "papers", // Usually your repo name.

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },

  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            "https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/",
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            "https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/",
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: "Kecci",
        logo: {
          alt: "My Site Logo",
          src: "img/logo.jpg",
        },
        items: [
          {
            type: "doc",
            docId: "index",
            position: "right",
            label: "Tutorial",
          },
          {
            to: "/showcase",
            label: "Showcase",
            position: "right",
          },
          {
            to: "/blog",
            label: "Blog",
            position: "right",
          },
          {
            href: "https://kecci.github.io",
            label: "Portfolio",
            position: "right",
          },
        ],
      },
      footer: {
        style: "dark",
        links: [
          {
            title: "Docs",
            items: [
              {
                label: "Tutorial",
                to: "/docs",
              },
              {
                label: "Showcase",
                to: "/showcase",
              },
              {
                label: "Blog",
                to: "/blog",
              },
            ],
          },
          {
            title: "Community",
            items: [
              {
                label: "Discord",
                href: "https://discord.gg/847qJHGS",
              },
              {
                label: "Linkedin",
                href: "https://linkedin.com/in/abyan-juang-kecci",
              },
              {
                label: "Instagram",
                href: "https://www.instagram.com/keccikun",
              },
              {
                label: "Stack Overflow",
                href: "https://stackoverflow.com/users/8281610/abyan-juang-kecci",
              },
            ],
          },
          {
            title: "More",
            items: [
              {
                label: "GitHub",
                href: "https://github.com/kecci/papers",
              },
              {
                label: "Go Packages",
                href: "https://pkg.go.dev/search?q=kecci",
              },
              {
                label: "SekolahKoding.com",
                href: "https://sekolahkoding.com/user/keccikun",
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Kecci Papers, Inc. Built with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
