import express from "express";
import { defaultRouter } from "./default.route.js";

// const router = express.Router();

const routes = [
  {
    path: "/user",
    router: defaultRouter,
  },
  /* {
    path: "/data",
    router: defaultRouter,
  },
  {
    path: "/admin",
    router: defaultRouter,
  },
  {
    path: "/private",
    router: defaultRouter,
  }, */
];

function routeFactory(app) {
  routes.map((route) => {
    if ((route.path = "/user")) {
      app.use(route.path, route.router); //no need to authen for stranger
    }
    // if (route.path = "/admin") app.use(route.path, validation-authen-middleware, validation-author-middleware , app.router);
    // if (route.path = "/private") app.use(route.path, validation-authen-middleware, validation-author-middleware , app.router);
    // if (route.path = "/data") app.use(route.path  , app.router); ----------------------------------------------------------------Check Authentication when necessary
  });
}

export { routeFactory };
