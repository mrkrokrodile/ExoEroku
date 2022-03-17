module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '97eb1c8c718119416331b989048c2f40'),
  },
});
