module.exports = ({ env }) => ({
  email: {
    provider: "sendgrid",
    providerOptions: {
      apiKey: env("SENDGRID_API_KEY"),
    },
    settings: {
      defaultFrom: "trandinhtu.dev@gmail.com",
      defaultReplyTo: "trandinhtu.dev@gmail.com",
      testAddress: "trandinhtu.ktv@gmail.com",
    },
  },
});
