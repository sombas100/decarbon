import { useState } from "react";
import { Outlet } from "react-router";
import { Toaster } from "sonner";

import Sidebar from "./Sidebar";
import Header from "./Header";

export default function AppLayout() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="min-h-screen bg-cloud">
      <Sidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />

      <div className="min-w-0 lg:pl-20">
        <Header onMenuClick={() => setSidebarOpen(true)} />

        <main className="mx-auto max-w-7xl p-5 lg:p-8">
          <Outlet />
        </main>
      </div>
      <Toaster position="top-right" richColors closeButton duration={4000} />
    </div>
  );
}
