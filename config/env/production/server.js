
module.exports = ({ env }) => ({
    proxy: true,
    url: env('http://www.manoj.com'), // Sets the public URL of the application.
    app: { 
      keys: env.array('APP_KEYS')
    },
});