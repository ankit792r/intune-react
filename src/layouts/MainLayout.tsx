import { Outlet, useNavigate } from "react-router-dom"
import MainSidebar from "../comps/organisms/MainSidebar"
import { useAppSelector } from "../state/hooks"
import { useEffect } from "react"


const MainLayout = () => {
  const navigate = useNavigate()
  const userLoggedIn = useAppSelector(state => state.userReducer.isLoggedIn)

  useEffect(() => {
    if (!userLoggedIn) navigate("/auth")
  }, [navigate, userLoggedIn])

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