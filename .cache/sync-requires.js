const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => m && m.default || m


exports.components = {
  "component---src-pages-index-js": hot(preferDefault(require("C:\\Maja\\gatsbyNews\\src\\pages\\index.js"))),
  "component---src-templates-blog-post-js": hot(preferDefault(require("C:\\Maja\\gatsbyNews\\src\\templates\\blog-post.js"))),
  "component---cache-dev-404-page-js": hot(preferDefault(require("C:\\Maja\\gatsbyNews\\.cache\\dev-404-page.js"))),
  "component---src-pages-404-js": hot(preferDefault(require("C:\\Maja\\gatsbyNews\\src\\pages\\404.js"))),
  "component---src-pages-about-js": hot(preferDefault(require("C:\\Maja\\gatsbyNews\\src\\pages\\about.js"))),
  "component---src-pages-galerija-js": hot(preferDefault(require("C:\\Maja\\gatsbyNews\\src\\pages\\galerija.js"))),
  "component---src-pages-homepage-js": hot(preferDefault(require("C:\\Maja\\gatsbyNews\\src\\pages\\homepage.js"))),
  "component---src-pages-kontakt-js": hot(preferDefault(require("C:\\Maja\\gatsbyNews\\src\\pages\\kontakt.js"))),
  "component---src-pages-operativa-js": hot(preferDefault(require("C:\\Maja\\gatsbyNews\\src\\pages\\operativa.js"))),
  "component---src-pages-page-2-js": hot(preferDefault(require("C:\\Maja\\gatsbyNews\\src\\pages\\page-2.js"))),
  "component---src-pages-povezave-js": hot(preferDefault(require("C:\\Maja\\gatsbyNews\\src\\pages\\povezave.js"))),
  "component---src-pages-pozarninacrt-js": hot(preferDefault(require("C:\\Maja\\gatsbyNews\\src\\pages\\pozarninacrt.js"))),
  "component---src-pages-voznipark-js": hot(preferDefault(require("C:\\Maja\\gatsbyNews\\src\\pages\\voznipark.js"))),
  "component---src-pages-zgodovina-js": hot(preferDefault(require("C:\\Maja\\gatsbyNews\\src\\pages\\zgodovina.js")))
}

