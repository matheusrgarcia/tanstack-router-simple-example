import {
  createRootRoute,
  createRoute,
  createRouter,
} from "@tanstack/react-router";
import { AboutPage } from "./pages/about";
import { HomePage } from "./pages/home";
import { RootLayout } from "./shared/components/layout";

const rootRoute = createRootRoute({
  component: RootLayout,
});

const homeRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/",
  component: HomePage,
});

const aboutRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "about",
  component: AboutPage,
});

const routeTree = rootRoute.addChildren([homeRoute, aboutRoute]);

export const router = createRouter({
  routeTree,
});

declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router;
  }
}