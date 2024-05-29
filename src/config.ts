const config = {
  appStore: {
    baseUrl: "https://rss.applemarketingtools.com",
    api: {
      free: "/api/v2/us/apps/top-free/10/apps.json",
      paid: "/api/v2/us/apps/top-paid/25/apps.json",
    },
  },
  darkMode: process.env.APP_STORE_DARK_MODE === "true" ? true : false,
};
export default config;
