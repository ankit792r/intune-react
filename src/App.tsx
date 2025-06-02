import "./index.css"
import { Route, Routes } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import AuthLayout from "./layouts/AuthLayout";
import ChatPage from "./comps/templates/ChatPage";
import SettingsPage from "./comps/templates/SettingsPage";
import AuthPage from "./comps/templates/AuthPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<h1>Home</h1>} />
      <Route element={<MainLayout />}>
        <Route index path="/chat" element={<ChatPage/>} />
        <Route path="/status" element={<h1>Status</h1>} />
        <Route path="/settings" element={<SettingsPage />} />
      </Route>
      <Route path="/auth" element={<AuthLayout />}>
        <Route index element={<AuthPage />} />
      </Route>
      <Route path="*" element={<h1>Not found</h1>} />
    </Routes>
  )
}

export default App
