"use client";

import { FormEvent, useEffect, useState } from "react";
import { Edit, Plus, Star, Trash2, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { testimonialsAPI, type Testimonial } from "@/lib/api";

type TestimonialForm = Omit<Testimonial, "_id">;
const emptyForm: TestimonialForm = { clientName: "", rating: 5, description: "" };

export default function AdminTestimonials() {
  const [testimonials, setTestimonials] = useState<Testimonial[]>([]);
  const [form, setForm] = useState<TestimonialForm>(emptyForm);
  const [editingId, setEditingId] = useState<string | null>(null);
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState("");

  const loadTestimonials = async () => {
    const result = await testimonialsAPI.getAll();
    if (result.success) setTestimonials(result.data);
  };

  useEffect(() => {
    const fetchTestimonials = async () => {
      try {
        await loadTestimonials();
      } catch {
        setError("Unable to load testimonials. Please try again.");
      } finally {
        setLoading(false);
      }
    };
    void fetchTestimonials();
  }, []);

  const openCreate = () => {
    setEditingId(null);
    setForm(emptyForm);
    setError("");
    setIsFormOpen(true);
  };

  const openEdit = (testimonial: Testimonial) => {
    setEditingId(testimonial._id);
    setForm({ clientName: testimonial.clientName, rating: testimonial.rating, description: testimonial.description });
    setError("");
    setIsFormOpen(true);
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!form.clientName.trim() || !form.description.trim() || form.rating < 1 || form.rating > 5) {
      setError("Client name, description, and a rating from 1 to 5 are required.");
      return;
    }
    setSaving(true);
    setError("");
    try {
      const result = editingId ? await testimonialsAPI.update(editingId, form) : await testimonialsAPI.create(form);
      if (!result.success) throw new Error();
      await loadTestimonials();
      setIsFormOpen(false);
    } catch {
      setError("Unable to save this testimonial. Please try again.");
    } finally {
      setSaving(false);
    }
  };

  const handleDelete = async (id: string) => {
    if (!window.confirm("Delete this testimonial?")) return;
    try {
      const result = await testimonialsAPI.remove(id);
      if (!result.success) throw new Error();
      setTestimonials((current) => current.filter((testimonial) => testimonial._id !== id));
    } catch {
      setError("Unable to delete this testimonial. Please try again.");
    }
  };

  return (
    <div className="p-6 md:p-8 space-y-6 max-w-7xl mx-auto">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-200 pb-4"><div><h1 className="text-3xl font-extrabold text-slate-900">Testimonials Management</h1><p className="mt-1 text-sm text-slate-500">Manage client reviews displayed on your homepage.</p></div><Button onClick={openCreate} className="bg-amber-500 hover:bg-amber-600 text-slate-950 font-semibold"><Plus className="mr-2" /> Add Testimonial</Button></div>
      {error && <p role="alert" className="rounded-lg bg-red-50 border border-red-200 px-4 py-3 text-sm text-red-700">{error}</p>}
      {loading ? <p className="py-12 text-center text-slate-500">Loading testimonials...</p> : testimonials.length === 0 ? <Card><CardContent className="py-14 text-center text-slate-500">No testimonials added yet.</CardContent></Card> : <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5">{testimonials.map((testimonial) => <Card key={testimonial._id} className="border-slate-200 shadow-sm"><CardHeader className="pb-2"><div className="flex items-center justify-between gap-3"><CardTitle className="text-lg text-slate-900">{testimonial.clientName}</CardTitle><div className="flex text-amber-400">{Array.from({ length: testimonial.rating }, (_, index) => <Star key={index} className="w-4 h-4 fill-amber-400" />)}</div></div></CardHeader><CardContent><p className="min-h-16 text-sm leading-relaxed text-slate-600">{testimonial.description}</p><div className="mt-5 flex gap-2"><Button variant="outline" onClick={() => openEdit(testimonial)}><Edit className="mr-1.5" /> Edit</Button><Button variant="destructive" onClick={() => handleDelete(testimonial._id)}><Trash2 className="mr-1.5" /> Delete</Button></div></CardContent></Card>)}</div>}
      {isFormOpen && <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/60 p-4"><form onSubmit={handleSubmit} className="w-full max-w-xl rounded-2xl bg-white shadow-2xl"><div className="flex items-center justify-between border-b border-slate-100 p-5"><h2 className="text-xl font-bold text-slate-800">{editingId ? "Edit Testimonial" : "Add Testimonial"}</h2><button type="button" aria-label="Close" onClick={() => setIsFormOpen(false)} className="rounded-lg p-1.5 text-slate-500 hover:bg-slate-100"><X /></button></div><div className="space-y-5 p-6"><div><Label htmlFor="client-name">Client Name</Label><Input id="client-name" value={form.clientName} onChange={(event) => setForm({ ...form, clientName: event.target.value })} className="mt-1" maxLength={100} /></div><div><Label htmlFor="rating">Rating</Label><select id="rating" value={form.rating} onChange={(event) => setForm({ ...form, rating: Number(event.target.value) })} className="mt-1 flex h-8 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-xs"><option value={5}>5 Stars</option><option value={4}>4 Stars</option><option value={3}>3 Stars</option><option value={2}>2 Stars</option><option value={1}>1 Star</option></select></div><div><Label htmlFor="testimonial-description">Description</Label><Textarea id="testimonial-description" value={form.description} onChange={(event) => setForm({ ...form, description: event.target.value })} className="mt-1 min-h-28" maxLength={1000} /></div></div><div className="flex justify-end gap-2 border-t border-slate-100 bg-slate-50 p-4"><Button type="button" variant="outline" onClick={() => setIsFormOpen(false)}>Cancel</Button><Button type="submit" disabled={saving} className="bg-amber-500 hover:bg-amber-600 text-slate-950">{saving ? "Saving..." : editingId ? "Save Changes" : "Add Testimonial"}</Button></div></form></div>}
    </div>
  );
}
