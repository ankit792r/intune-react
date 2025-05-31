import { Outlet } from "react-router-dom"


const MainLayout = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-zinc-900 to-black flex items-center justify-center p-4">
      <Outlet />
    </div>
  )
}

export default MainLayout