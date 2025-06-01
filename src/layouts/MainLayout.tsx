import { Outlet } from "react-router-dom"
import MainSidebar from "../comps/organisms/MainSidebar"


const MainLayout = () => {
  return (
    <main className="h-screen overflow-hidden">
      <div className="flex h-full">
        <MainSidebar />
        <Outlet />
      </div>
    </main>
  )
}

export default MainLayout