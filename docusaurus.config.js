// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");
const fs = require("fs");

const typeDocOptions = {
  excludeExternals: true,
  excludePrivate: true,
  excludeProtected: true,
  excludeInternal: true,
  gitRevision: "main",
  plugin: ["typedoc-plugin-mdn-links"],
};

const packageFolders = fs
  .readdirSync("./packages", {
    encoding: "utf8",
    withFileTypes: true,
  })
  .filter((d) => d.isDirectory());

const typeDocPlugins = packageFolders.map((d) => {
  const folder = d.name;
  const fullFolder = `./packages/${folder}`;

  const package = require(`${fullFolder}/package.json`);

  /** @type {import('@docusaurus/types').PluginConfig} */
  const config = [
    "docusaurus-plugin-typedoc",

    // Plugin / TypeDoc options
    /** @type {Partial<import('docusaurus-plugin-typedoc/dist/types').PluginOptions>} */
    ({
      ...typeDocOptions,
      id: `api-${folder}`,
      out: `api/${folder}`,
      entryPoints: [`${fullFolder}/src`],
      tsconfig: `${fullFolder}/tsconfig.json`,
      sidebar: {
        indexLabel: `Exports (v${package.version})`,
        categoryLabel: package.name,
        position: null,
      },
      // gitRevision: `v${package.version}`,
    }),
  ];

  return config;
});

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "WPPConnect",
  tagline: "Automatize o seu WhatsApp",
  url: "https://wppconnect-team.github.io/",
  baseUrl: "/",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  favicon: "img/favicon.ico",
  organizationName: "wppconnect-team", // Usually your GitHub org/user name.
  projectName: "wppconnect", // Usually your repo name.

  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          editUrl:
            "https://github.com/wppconnect-team/wppconnect-team.github.io/tree/main/",
        },
        blog: {
          showReadingTime: true,
          editUrl:
            "https://github.com/wppconnect-team/wppconnect-team.github.io/tree/main/",
        },
        gtag: {
          trackingID: "G-X2JJJ2ZZG8",
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      }),
    ],
    [
      "redocusaurus",
      {
        // Plugin Options for loading OpenAPI files
        specs: [
          {
            spec: "https://raw.githubusercontent.com/wppconnect-team/wppconnect-server/main/src/swagger.json",
            route: "/swagger/wppconnect-server",
          },
        ],
        // Theme Options for modifying how redoc renders them
        theme: {
          // Change with your site colors
          primaryColor: "#2e8555",
        },
      },
    ],
  ],

  themes: [
    [
      require.resolve("@easyops-cn/docusaurus-search-local"),
      {
        // ... Your options.
        // `hashed` is recommended as long-term-cache of index file is possible.
        hashed: true,
        // For Docs using Chinese, The `language` is recommended to set to:
        // ```
        // language: ["en", "zh"],
        // ```
        // When applying `zh` in language, please install `nodejieba` in your project.
      },
    ],
  ],

  plugins: [
    [
      "@docusaurus/plugin-pwa",
      {
        debug: true,
        offlineModeActivationStrategies: [
          "appInstalled",
          "standalone",
          "queryString",
        ],
        pwaHead: [
          {
            tagName: "link",
            rel: "icon",
            href: "/img/logo192.png",
          },
          {
            tagName: "link",
            rel: "manifest",
            href: "/manifest.json", // your PWA manifest
          },
          {
            tagName: "meta",
            name: "theme-color",
            content: "#fff",
          },
        ],
      },
    ],
    ...typeDocPlugins,
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      announcementBar: {
        id: "support_us", // Increment on change
        content:
          '⭐️ If you like WPPConnect, give it a star on <a target="_blank" rel="noopener noreferrer" href="https://github.com/wppconnect-team/wppconnect">GitHub</a>',
        backgroundColor: "#fafbfc",
        textColor: "#091E42",
      },
      navbar: {
        title: "WPPConnect",
        logo: {
          alt: "WPPconnect Logo",
          src: "img/logo192.png",
        },
        items: [
          {
            type: "doc",
            docId: "tutorial/intro",
            position: "left",
            label: "Tutorial",
          },
          {
            type: "doc",
            docId: "api/index",
            position: "left",
            label: "API",
          },
          {
            label: "Swagger",
            position: "left",
            to: "/swagger/wppconnect-server",
          },
          { to: "/blog", label: "Blog", position: "left" },
          {
            href: "https://discord.gg/JU5JGGKGNG",
            label: "Discord",
            position: "right",
          },
          {
            href: "https://github.com/wppconnect-team",
            position: "right",
            className: "header-github-link",
            "aria-label": "GitHub repository",
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
                to: "/docs/tutorial/intro",
              },
            ],
          },
          {
            title: "Community",
            items: [
              {
                label: "Apoia.se",
                href: "https://apoia.se/wppconnect",
              },
              {
                label: "Discord",
                href: "https://discord.gg/JU5JGGKGNG",
              },
              {
                label: "YouTube",
                href: "https://www.youtube.com/c/wppconnect",
              },
            ],
          },
          {
            title: "More",
            items: [
              {
                label: "Blog",
                to: "/blog",
              },
              {
                label: "GitHub",
                href: "https://github.com/wppconnect-team",
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} WPPConnect Team. Built with Docusaurus.`,
      },
      prism: {
        additionalLanguages: ["javascript", "json"],
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
