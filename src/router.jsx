import { createBrowserRouter } from "react-router-dom";
import authRoute from "./pages/auth/route";
import catchAllRoute from "./pages/catchall/route";
import landingRoute from "./pages/landing/route";
import homeRoute from "./pages/home/route";
import settingRoute from "./pages/setting/route";
import accountRoute from "./pages/account/route";
import requestRoute from "./pages/request/route";

const router = createBrowserRouter([
    landingRoute,
    homeRoute,
    settingRoute,
    authRoute,
    accountRoute,
    requestRoute,
    catchAllRoute
])

export default router
