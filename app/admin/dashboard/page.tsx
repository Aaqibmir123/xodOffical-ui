"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { LogOut, User, Mail, Shield } from "lucide-react";

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

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    router.push("/login");
  };

  const user = typeof window !== "undefined" ? JSON.parse(localStorage.getItem("user") || "{}") : {};

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-indigo-900 flex items-center justify-center p-4">
      <Card className="w-full max-w-md bg-white/10 backdrop-blur-md shadow-2xl rounded-3xl border border-white/20">
        <CardHeader>
          <CardTitle className="text-3xl font-bold text-center text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-600">
            Admin Dashboard
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="space-y-4">
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
          </div>
          
          <Button
            onClick={handleLogout}
            className="w-full py-3 bg-gradient-to-r from-red-500 to-pink-600 hover:from-red-600 hover:to-pink-700 rounded-xl shadow-lg text-lg font-semibold"
          >
            <LogOut className="w-5 h-5 mr-2" />
            Sign Out
          </Button>
        </CardContent>
      </Card>
    </div>
  );
}