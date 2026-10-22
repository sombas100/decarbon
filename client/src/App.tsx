import { BrowserRouter, Routes, Route } from "react-router";
import { Navigate } from "react-router";

import EngineerLayout from "./layout/EngineerLayout";

import Dashboard from "./pages/engineer/Dashboard";
import Purchases from "./pages/engineer/Purchases";
import Notifications from "./pages/engineer/Notifications";
import Resources from "./pages/engineer/Resources";
import Community from "./pages/public/Community";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/engineer" replace />} />
        <Route path="/engineer" element={<EngineerLayout />}>
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
