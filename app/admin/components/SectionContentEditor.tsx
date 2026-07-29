"use client";

import { useEffect, useState } from "react";
import { Save } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { sectionContentAPI, type SectionContent } from "@/lib/api";

const defaults: Record<"testimonials" | "partners", SectionContent> = {
  testimonials: { label: "Testimonials", heading: "What Our Clients Say", description: "Feedback from companies that trust our dispatch team." },
  partners: { label: "Our Partners", heading: "Companies We Work With", description: "Trusted partnerships built around reliable service and long-term growth." },
};

export default function SectionContentEditor({ sectionKey }: { sectionKey: "testimonials" | "partners" }) {
  const [form, setForm] = useState<SectionContent>(defaults[sectionKey]);
  const [saving, setSaving] = useState(false);
  const [message, setMessage] = useState("");

  useEffect(() => { sectionContentAPI.get(sectionKey).then((result) => { if (result.success) setForm(result.data); }).catch(() => setMessage("Unable to load section header.")); }, [sectionKey]);

  const save = async () => {
    setSaving(true);
    setMessage("");
    try {
      const result = await sectionContentAPI.update(sectionKey, form);
      if (!result.success) throw new Error();
      setForm(result.data);
      setMessage("Section header saved.");
    } catch {
      setMessage("Unable to save section header.");
    } finally { setSaving(false); }
  };

  return <Card className="border-slate-200 bg-slate-50 shadow-sm"><CardHeader className="pb-2"><CardTitle className="text-lg text-slate-900">Section Header Content</CardTitle><p className="text-sm text-slate-500">Edit the static label, heading, and description shown above your cards.</p></CardHeader><CardContent className="grid gap-4"><div><Label htmlFor={`${sectionKey}-label`}>Section Label</Label><Input id={`${sectionKey}-label`} value={form.label} onChange={(event) => setForm({ ...form, label: event.target.value })} className="mt-1 bg-white" /></div><div><Label htmlFor={`${sectionKey}-heading`}>Section Heading</Label><Input id={`${sectionKey}-heading`} value={form.heading} onChange={(event) => setForm({ ...form, heading: event.target.value })} className="mt-1 bg-white" /></div><div><Label htmlFor={`${sectionKey}-description`}>Section Description</Label><Textarea id={`${sectionKey}-description`} value={form.description} onChange={(event) => setForm({ ...form, description: event.target.value })} className="mt-1 min-h-20 bg-white" /></div>{message && <p className="text-sm text-slate-600">{message}</p>}<Button onClick={save} disabled={saving} className="w-fit bg-amber-500 font-semibold text-slate-950 hover:bg-amber-600"><Save className="mr-2" />{saving ? "Saving..." : "Save Header Content"}</Button></CardContent></Card>;
}
