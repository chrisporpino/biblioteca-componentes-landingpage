const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => (m && m.default) || m


exports.components = {
  "component---readme-md": hot(preferDefault(require("D:\\full-stack-web-development\\agencia-audax\\landingpage-biblioteca-componentes\\README.md"))),
  "component---src-components-button-mdx": hot(preferDefault(require("D:\\full-stack-web-development\\agencia-audax\\landingpage-biblioteca-componentes\\src\\components\\Button.mdx"))),
  "component---src-components-heading-mdx": hot(preferDefault(require("D:\\full-stack-web-development\\agencia-audax\\landingpage-biblioteca-componentes\\src\\components\\Heading.mdx"))),
  "component---src-components-paragraph-mdx": hot(preferDefault(require("D:\\full-stack-web-development\\agencia-audax\\landingpage-biblioteca-componentes\\src\\components\\Paragraph.mdx"))),
  "component---src-pages-404-js": hot(preferDefault(require("D:\\full-stack-web-development\\agencia-audax\\landingpage-biblioteca-componentes\\.docz\\src\\pages\\404.js")))
}

