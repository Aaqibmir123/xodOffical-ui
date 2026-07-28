"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { User, Mail, Shield } from "lucide-react";

export default function AdminDashboard() {
  const router = useRouter();

  useEffect(() => {
    // Check if user is logged in
    const token = localStorage.getItem("token");
    const user = localStorage.getItem("user");
    
    if (!token || !user) {
      router.push("/login");
    }
  }, [router]);

  const user = typeof window !== "undefined" ? JSON.parse(localStorage.getItem("user") || "{}") : {};

  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold text-white">Dashboard</h1>
      <Card className="bg-white/10 backdrop-blur-md border-white/20">
        <CardHeader>
          <CardTitle className="text-white">Welcome, Admin</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex items-center space-x-3 p-3 bg-white/10 rounded-lg">
            <User className="h-5 w-5 text-cyan-400" />
            <span className="text-white">ID: {user.id}</span>
          </div>
          <div className="flex items-center space-x-3 p-3 bg-white/10 rounded-lg">
            <Mail className="h-5 w-5 text-cyan-400" />
            <span className="text-white">{user.email}</span>
          </div>
          <div className="flex items-center space-x-3 p-3 bg-white/10 rounded-lg">
            <Shield className="h-5 w-5 text-cyan-400" />
            <span className="text-white capitalize">Role: {user.role}</span>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
