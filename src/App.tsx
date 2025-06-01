import "./index.css"
import { Route, Routes } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import AuthLayout from "./layouts/AuthLayout";
import LoginPage from "./comps/templates/LoginPage";
import RegisterPage from "./comps/templates/RegisterPage";
import ChatPage from "./comps/templates/ChatPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<h1>Home</h1>} />
      <Route element={<MainLayout />}>
        <Route index path="/chat" element={<ChatPage/>} />
        <Route path="/status" element={<h1>Status</h1>} />
      </Route>
      <Route path="/auth" element={<AuthLayout />}>
        <Route index element={<LoginPage />} />
        <Route path="register" element={<RegisterPage />} />
      </Route>
      <Route path="*" element={<h1>Not found</h1>} />
    </Routes>
  )
}

export default App
