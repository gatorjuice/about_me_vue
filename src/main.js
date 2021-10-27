import { createApp } from "vue";
import * as Sentry from "@sentry/vue";
import { Integrations } from "@sentry/tracing";
import App from "./App.vue";
import router from "./router";

if (process.env.NODE_ENV === "production") {
  Sentry.init({
    App,
    dsn: process.env.VUE_APP_SENTRY_DSN,
    integrations: [
      new Integrations.BrowserTracing({
        routingInstrumentation: Sentry.vueRouterInstrumentation(router),
        tracingOrigins: [
          "localhost",
          "about-me-frontend-vue.herokuapp.com/",
          /^\//,
        ],
      }),
    ],
    // Set tracesSampleRate to 1.0 to capture 100%
    // of transactions for performance monitoring.
    // We recommend adjusting this value in production
    tracesSampleRate: 1.0,
  });
}

createApp(App).use(router).mount("#app");
