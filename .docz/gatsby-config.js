const { mergeWith } = require('docz-utils')
const fs = require('fs-extra')

let custom = {}
const hasGatsbyConfig = fs.existsSync('./gatsby-config.custom.js')

if (hasGatsbyConfig) {
  try {
    custom = require('./gatsby-config.custom')
  } catch (err) {
    console.error(
      `Failed to load your gatsby-config.js file : `,
      JSON.stringify(err),
    )
  }
}

const config = {
  pathPrefix: '/',

  siteMetadata: {
    title: 'Landingpage Biblioteca Componentes',
    description: 'My awesome app using docz',
  },
  plugins: [
    {
      resolve: 'gatsby-theme-docz',
      options: {
        themeConfig: {},
        src: './',
        gatsbyRoot: null,
        themesDir: 'src',
        mdxExtensions: ['.md', '.mdx'],
        docgenConfig: {},
        menu: [],
        mdPlugins: [],
        hastPlugins: [],
        ignore: [],
        typescript: false,
        ts: false,
        propsParser: true,
        'props-parser': true,
        debug: false,
        native: false,
        openBrowser: null,
        o: null,
        open: null,
        'open-browser': null,
        root:
          'D:\\full-stack-web-development\\agencia-audax\\landingpage-biblioteca-componentes\\.docz',
        base: '/biblioteca-componentes-landingpage',
        source: './',
        'gatsby-root': null,
        files: '**/*.{md,markdown,mdx}',
        public: '/public',
        dest: '.docz/dist',
        d: '.docz/dist',
        editBranch: 'master',
        eb: 'master',
        'edit-branch': 'master',
        config: '',
        title: 'Landingpage Biblioteca Componentes',
        description: 'My awesome app using docz',
        host: 'localhost',
        port: 3000,
        p: 3000,
        separator: '-',
        paths: {
          root:
            'D:\\full-stack-web-development\\agencia-audax\\landingpage-biblioteca-componentes',
          templates:
            'D:\\full-stack-web-development\\agencia-audax\\landingpage-biblioteca-componentes\\node_modules\\docz-core\\dist\\templates',
          docz:
            'D:\\full-stack-web-development\\agencia-audax\\landingpage-biblioteca-componentes\\.docz',
          cache:
            'D:\\full-stack-web-development\\agencia-audax\\landingpage-biblioteca-componentes\\.docz\\.cache',
          app:
            'D:\\full-stack-web-development\\agencia-audax\\landingpage-biblioteca-componentes\\.docz\\app',
          appPackageJson:
            'D:\\full-stack-web-development\\agencia-audax\\landingpage-biblioteca-componentes\\package.json',
          appTsConfig:
            'D:\\full-stack-web-development\\agencia-audax\\landingpage-biblioteca-componentes\\tsconfig.json',
          gatsbyConfig:
            'D:\\full-stack-web-development\\agencia-audax\\landingpage-biblioteca-componentes\\gatsby-config.js',
          gatsbyBrowser:
            'D:\\full-stack-web-development\\agencia-audax\\landingpage-biblioteca-componentes\\gatsby-browser.js',
          gatsbyNode:
            'D:\\full-stack-web-development\\agencia-audax\\landingpage-biblioteca-componentes\\gatsby-node.js',
          gatsbySSR:
            'D:\\full-stack-web-development\\agencia-audax\\landingpage-biblioteca-componentes\\gatsby-ssr.js',
          importsJs:
            'D:\\full-stack-web-development\\agencia-audax\\landingpage-biblioteca-componentes\\.docz\\app\\imports.js',
          rootJs:
            'D:\\full-stack-web-development\\agencia-audax\\landingpage-biblioteca-componentes\\.docz\\app\\root.jsx',
          indexJs:
            'D:\\full-stack-web-development\\agencia-audax\\landingpage-biblioteca-componentes\\.docz\\app\\index.jsx',
          indexHtml:
            'D:\\full-stack-web-development\\agencia-audax\\landingpage-biblioteca-componentes\\.docz\\app\\index.html',
          db:
            'D:\\full-stack-web-development\\agencia-audax\\landingpage-biblioteca-componentes\\.docz\\app\\db.json',
        },
      },
    },
  ],
}

const merge = mergeWith((objValue, srcValue) => {
  if (Array.isArray(objValue)) {
    return objValue.concat(srcValue)
  }
})

module.exports = merge(config, custom)
