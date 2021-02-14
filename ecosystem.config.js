module.exports = {
  apps : [{
    name: "app",
    script: "./server.js",
    env: {
      NODE_ENV: process.env.ENVIRONMENT || 'development',
    },
  }]
}