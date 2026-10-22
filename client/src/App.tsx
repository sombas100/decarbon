import { BrowserRouter, Routes, Route } from "react-router";

import AppLayout from "./components/layout/AppLayout";

import Dashboard from "./pages/Dashboard";
import Purchases from "./pages/Purchases";
import Notifications from "./pages/Notifications";
import Resources from "./pages/Resources";
import Community from "./pages/Community";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<AppLayout />}>
          <Route index element={<Dashboard />} />
          <Route path="purchases" element={<Purchases />} />
          <Route path="notifications" element={<Notifications />} />
          <Route path="resources" element={<Resources />} />
          <Route path="community" element={<Community />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
