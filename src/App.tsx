import "./index.css"
import { Route, Routes } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import AuthLayout from "./layouts/AuthLayout";
import ChatPage from "./comps/templates/ChatPage";
import SettingsPage from "./comps/templates/SettingsPage";
import AuthPage from "./comps/templates/AuthPage";
import ProfileEditSection from "./comps/organisms/ProfileEditSection";
import AccountEditSection from "./comps/organisms/AccountEditSection";
import NotificationsEditSection from "./comps/organisms/NotificationsEditSection";
import FriendsPage from "./comps/templates/FriendsPage";
import FriendsListSection from "./comps/organisms/FriendsListSection";

function App() {
  return (
    <Routes>
      <Route path="/"  element={<MainLayout />}>
        <Route index element={<ChatPage />} />
        <Route path="/status" element={<h1>Status</h1>} />
        <Route path="/settings" element={<SettingsPage />}>
          <Route index path="" element={<ProfileEditSection />} />
          <Route path="profile" element={<ProfileEditSection />} />
          <Route path="account" element={<AccountEditSection />} />
          <Route path="notifications" element={<NotificationsEditSection />} />
        </Route>
        <Route path="/friends" element={<FriendsPage />}>
          <Route index path=":friendType" element={<FriendsListSection />} />
        </Route>
      </Route>
      <Route path="/auth" element={<AuthLayout />}>
        <Route index element={<AuthPage />} />
      </Route>
      <Route path="*" element={<h1>Not found</h1>} />
    </Routes>
  )
}

export default App
