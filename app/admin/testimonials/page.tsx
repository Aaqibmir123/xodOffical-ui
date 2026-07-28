"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function AdminTestimonials() {
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold text-white">Testimonials</h1>
      <Card className="bg-white/10 backdrop-blur-md border-white/20">
        <CardHeader>
          <CardTitle className="text-white">Testimonials Management</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-gray-300">Testimonials page content will be added here.</p>
        </CardContent>
      </Card>
    </div>
  );
}