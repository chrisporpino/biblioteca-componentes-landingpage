// prefer default export if available
const preferDefault = m => (m && m.default) || m

exports.components = {
  "component---readme-md": () => import("./../../../../README.md" /* webpackChunkName: "component---readme-md" */),
  "component---src-components-button-mdx": () => import("./../../../../src/components/Button.mdx" /* webpackChunkName: "component---src-components-button-mdx" */),
  "component---src-components-heading-mdx": () => import("./../../../../src/components/Heading.mdx" /* webpackChunkName: "component---src-components-heading-mdx" */),
  "component---src-components-paragraph-mdx": () => import("./../../../../src/components/Paragraph.mdx" /* webpackChunkName: "component---src-components-paragraph-mdx" */),
  "component---src-pages-404-js": () => import("./../../../src/pages/404.js" /* webpackChunkName: "component---src-pages-404-js" */)
}

