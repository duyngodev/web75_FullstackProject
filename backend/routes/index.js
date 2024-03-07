import { userRouter } from "./user.route.js";
import { cartRouter } from "./cart.route.js";
import { productRouter } from "./product.route.js";
import { paymentRouter } from "./payment.route.js";
import { validToken } from "../middlewares/validToken.middleware.js";
import { requireUser } from "../middlewares/requireUser.middleware.js";
// const router = express.Router();

const routes = [
  {
    path: "/user",
    router: userRouter,
  },
  {
    path: "/cart",
    router: cartRouter,
  },
  {
    path: "/product",
    router: productRouter,
  },
  {
    path: "/payment",
    router: paymentRouter,
  },
  /* {
    path: "/private",
    router: defaultRouter,
  }, */
];

function routeFactory(app) {
  routes.map((route) => {
    if ((route.path = "/user")) {
      app.use(route.path, route.router); //public route
    }
    if ((route.path = "/cart")) {
      app.use(route.path, requireUser, route.router); //private route
    }
    if ((route.path == "/product")) {
      app.use(route.path, route.router);
    }
    if ((route.path == "/payment")) {
      app.use(route.path, route.router);
    }
  });
}

export { routeFactory };
