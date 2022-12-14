export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: "BerandaToko",
    htmlAttrs: {
      lang: "en",
    },
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", content: "" },
      { name: "format-detection", content: "telephone=no" },
    ],
    link: [
      { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
      { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
    ],
  },

  ssr: true,

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ["~assets/styles/app.css"],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [{ src: "~/plugins/filter" }],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: ["@nuxtjs/dotenv"],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/bootstrap
    "bootstrap-vue/nuxt",
    "@nuxtjs/axios",
    '@nuxtjs/auth'
  ],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},

  axios: {
    proxy: true,
    // host: 'localhost',
    prefix: "/api/",
    headers: {
      //optional
      Accept: "application/json",
      "Content-Type": "application/json",
      "X-API-KEY": "JATIS-BAKUL",
    },
  },

  proxy: {
    "/api/": {
      target: process.env.URL_API_PATH,
      pathRewrite: { "^/api": "" },
    },
  },

};
