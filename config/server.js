module.exports = ({ env }) => ({
  host: env('HOST', '0.0.0.0'),
  port: env.int('PORT', 1337),
  app: {
    keys: env.array('APP_KEYS'),
  },
  url: env('PUBLIC_URL', 'https://strapi.orientation-maroc.com'),
  allowedHosts: env.array('ALLOWED_HOSTS', ['strapi.orientation-maroc.com']),
  webhooks: {
    populateRelations: env.bool('WEBHOOKS_POPULATE_RELATIONS', false),
  },
});
