module.exports = {
  port: process.env.PORT || 8080,
  server: {
    baseDir: "src",
    routes: {
      "/node_modules": "node_modules"
    }
  }
}