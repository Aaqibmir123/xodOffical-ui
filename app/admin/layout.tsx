import { ReactNode } from "react";
import AdminSidebar from "./components/AdminSidebar";

export default function AdminLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
<div className="min-h-screen bg-white">
      <AdminSidebar />
      <main className="lg:pl-64 p-6 bg-white min-h-screen">
        {children}
      </main>
    </div>
  );
}
