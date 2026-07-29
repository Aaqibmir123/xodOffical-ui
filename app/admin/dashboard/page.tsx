"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { ArrowUpRight, Building2, Mail, MessageSquareText, Plus, Quote, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { contactAPI, partnersAPI, testimonialsAPI, type ContactMessage } from "@/lib/api";

interface DashboardData {
  contacts: ContactMessage[];
  partnerCount: number;
  testimonialCount: number;
}

const formatDate = (date: string) => new Intl.DateTimeFormat("en-CA", { dateStyle: "medium" }).format(new Date(date));

export default function AdminDashboard() {
  const router = useRouter();
  const [dashboard, setDashboard] = useState<DashboardData>({ contacts: [], partnerCount: 0, testimonialCount: 0 });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [adminName, setAdminName] = useState("Admin");

  useEffect(() => {
    const loadDashboard = async () => {
      const token = localStorage.getItem("token");
      const userData = localStorage.getItem("user");
      if (!token || !userData) {
        router.replace("/login");
        return;
      }

      try {
        const user = JSON.parse(userData) as { email?: string };
        setAdminName(user.email?.split("@")[0] || "Admin");
        const [contactsResult, partnersResult, testimonialsResult] = await Promise.all([
          contactAPI.getAll(),
          partnersAPI.getAll(),
          testimonialsAPI.getAll(),
        ]);

        if (!contactsResult.success || !partnersResult.success || !testimonialsResult.success) {
          throw new Error();
        }

        setDashboard({
          contacts: contactsResult.data,
          partnerCount: partnersResult.data.length,
          testimonialCount: testimonialsResult.data.length,
        });
      } catch {
        setError("Unable to load dashboard data. Please refresh or sign in again.");
      } finally {
        setLoading(false);
      }
    };

    void loadDashboard();
  }, [router]);

  const newContactCount = dashboard.contacts.filter((contact) => contact.status === "new").length;
  const stats = [
    { label: "Contact inquiries", value: dashboard.contacts.length, detail: `${newContactCount} new message${newContactCount === 1 ? "" : "s"}`, icon: Mail, color: "bg-amber-500", href: "/admin/contact" },
    { label: "Testimonials", value: dashboard.testimonialCount, detail: "Published client reviews", icon: Quote, color: "bg-violet-600", href: "/admin/testimonials" },
    { label: "Partners", value: dashboard.partnerCount, detail: "Active partner companies", icon: Building2, color: "bg-cyan-600", href: "/admin/partners" },
  ];

  return (
    <div className="min-h-full bg-slate-50 p-6 md:p-8">
      <div className="mx-auto max-w-7xl space-y-7">
        <div className="relative overflow-hidden rounded-3xl bg-slate-950 px-6 py-8 text-white shadow-xl md:px-9">
          <div className="absolute -right-16 -top-20 h-64 w-64 rounded-full bg-amber-400/20 blur-3xl" />
          <div className="absolute right-24 bottom-0 h-40 w-40 rounded-full bg-cyan-500/10 blur-3xl" />
          <div className="relative flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
            <div><p className="text-xs font-bold uppercase tracking-[0.2em] text-amber-400">Admin overview</p><h1 className="mt-2 text-3xl font-black tracking-tight md:text-4xl">Welcome back, {adminName}</h1><p className="mt-2 max-w-xl text-sm leading-relaxed text-slate-300">Track your website activity, new messages, and public content in one place.</p></div>
            <Link href="/admin/contact"><Button className="bg-amber-500 font-bold text-slate-950 hover:bg-amber-400"><Mail className="mr-2" /> View messages</Button></Link>
          </div>
        </div>

        {error && <p role="alert" className="rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700">{error}</p>}

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-3">
          {stats.map((stat) => <Link key={stat.label} href={stat.href} className="group"><Card className="border-slate-200 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:border-slate-300 hover:shadow-lg"><CardContent className="p-5"><div className="flex items-start justify-between"><div className={`flex h-11 w-11 items-center justify-center rounded-xl text-white ${stat.color}`}><stat.icon className="w-5 h-5" /></div><ArrowUpRight className="w-4 h-4 text-slate-400 transition group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-slate-900" /></div><p className="mt-5 text-3xl font-black tracking-tight text-slate-950">{loading ? "—" : stat.value}</p><h2 className="mt-1 text-sm font-extrabold text-slate-800">{stat.label}</h2><p className="mt-1 text-xs text-slate-500">{loading ? "Loading data..." : stat.detail}</p></CardContent></Card></Link>)}
        </div>

        <div className="grid grid-cols-1 gap-6 xl:grid-cols-[1.5fr_.85fr]">
          <Card className="border-slate-200 bg-white shadow-sm"><CardContent className="p-6"><div className="flex items-center justify-between gap-4"><div><p className="text-xs font-bold uppercase tracking-[0.18em] text-amber-600">Inbox</p><h2 className="mt-1 text-xl font-black text-slate-950">Recent contact messages</h2></div><Link href="/admin/contact" className="text-sm font-bold text-amber-700 hover:text-amber-600">View all</Link></div><div className="mt-5 space-y-3">{loading ? <p className="py-8 text-center text-sm text-slate-500">Loading messages...</p> : dashboard.contacts.slice(0, 4).map((contact) => <div key={contact._id} className="flex flex-col gap-3 rounded-xl border border-slate-100 bg-slate-50 p-4 sm:flex-row sm:items-center sm:justify-between"><div className="min-w-0"><div className="flex items-center gap-2"><p className="truncate text-sm font-extrabold text-slate-900">{contact.name}</p><span className={`rounded-full px-2 py-0.5 text-[10px] font-bold uppercase ${contact.status === "new" ? "bg-amber-100 text-amber-800" : "bg-emerald-100 text-emerald-700"}`}>{contact.status}</span></div><p className="mt-1 truncate text-xs text-slate-600">{contact.message}</p></div><p className="shrink-0 text-xs text-slate-400">{formatDate(contact.createdAt)}</p></div>)}{!loading && dashboard.contacts.length === 0 && <p className="py-8 text-center text-sm text-slate-500">No contact messages yet.</p>}</div></CardContent></Card>
          <Card className="border-slate-200 bg-white shadow-sm"><CardContent className="p-6"><p className="text-xs font-bold uppercase tracking-[0.18em] text-amber-600">Quick actions</p><h2 className="mt-1 text-xl font-black text-slate-950">Manage content</h2><div className="mt-5 space-y-3"><Link href="/admin/testimonials" className="flex items-center justify-between rounded-xl border border-slate-200 p-4 transition hover:border-violet-300 hover:bg-violet-50"><span className="flex items-center gap-3 text-sm font-bold text-slate-800"><Quote className="w-4 h-4 text-violet-600" /> Add testimonial</span><Plus className="w-4 h-4 text-slate-400" /></Link><Link href="/admin/partners" className="flex items-center justify-between rounded-xl border border-slate-200 p-4 transition hover:border-cyan-300 hover:bg-cyan-50"><span className="flex items-center gap-3 text-sm font-bold text-slate-800"><Users className="w-4 h-4 text-cyan-600" /> Add partner</span><Plus className="w-4 h-4 text-slate-400" /></Link><Link href="/admin/contact" className="flex items-center justify-between rounded-xl border border-slate-200 p-4 transition hover:border-amber-300 hover:bg-amber-50"><span className="flex items-center gap-3 text-sm font-bold text-slate-800"><MessageSquareText className="w-4 h-4 text-amber-600" /> Review inquiries</span><ArrowUpRight className="w-4 h-4 text-slate-400" /></Link></div></CardContent></Card>
        </div>
      </div>
    </div>
  );
}
