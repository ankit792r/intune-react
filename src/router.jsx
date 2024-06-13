import { createBrowserRouter } from "react-router-dom";
import authRoute from "./pages/auth/route";
import catchAllRoute from "./pages/catchall/route";
import landingRoute from "./pages/landing/route";
import homeRoute from "./pages/home/route";
import settingRoute from "./pages/setting/route";
import profileRoute from "./pages/profile/route";

const router = createBrowserRouter([
    landingRoute,
    homeRoute,
    settingRoute,
    authRoute,
    profileRoute,
    catchAllRoute
])

export default router
