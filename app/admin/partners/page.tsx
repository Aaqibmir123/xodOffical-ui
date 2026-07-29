"use client";

import { ChangeEvent, FormEvent, useEffect, useState } from "react";
import { Edit, ImagePlus, Plus, Trash2, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { partnersAPI, type Partner } from "@/lib/api";

type PartnerForm = Omit<Partner, "_id">;
const emptyForm: PartnerForm = { name: "", image: "", description: "" };

export default function AdminPartners() {
  const [partners, setPartners] = useState<Partner[]>([]);
  const [form, setForm] = useState<PartnerForm>(emptyForm);
  const [editingId, setEditingId] = useState<string | null>(null);
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState("");

  const loadPartners = async () => {
    try {
      const result = await partnersAPI.getAll();
      if (result.success) setPartners(result.data);
    } catch {
      setError("Unable to load partners. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    const fetchPartners = async () => {
      try {
        const result = await partnersAPI.getAll();
        if (result.success) setPartners(result.data);
      } catch {
        setError("Unable to load partners. Please try again.");
      } finally {
        setLoading(false);
      }
    };

    void fetchPartners();
  }, []);

  const openCreate = () => {
    setEditingId(null);
    setForm(emptyForm);
    setError("");
    setIsFormOpen(true);
  };

  const openEdit = (partner: Partner) => {
    setEditingId(partner._id);
    setForm({ name: partner.name, image: partner.image, description: partner.description });
    setError("");
    setIsFormOpen(true);
  };

  const handleImageChange = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;
    if (!file.type.startsWith("image/")) {
      setError("Please choose a valid image file.");
      return;
    }
    if (file.size > 5 * 1024 * 1024) {
      setError("Please choose an image smaller than 5 MB.");
      return;
    }
    const reader = new FileReader();
    reader.onload = () => setForm((current) => ({ ...current, image: String(reader.result) }));
    reader.readAsDataURL(file);
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!form.name.trim() || !form.description.trim() || !form.image) {
      setError("Partner name, photo, and company description are required.");
      return;
    }
    setSaving(true);
    setError("");
    try {
      const result = editingId ? await partnersAPI.update(editingId, form) : await partnersAPI.create(form);
      if (!result.success) throw new Error();
      await loadPartners();
      setIsFormOpen(false);
    } catch {
      setError("Unable to save this partner. Please try again.");
    } finally {
      setSaving(false);
    }
  };

  const handleDelete = async (id: string) => {
    if (!window.confirm("Delete this partner?")) return;
    try {
      const result = await partnersAPI.remove(id);
      if (!result.success) throw new Error();
      setPartners((current) => current.filter((partner) => partner._id !== id));
    } catch {
      setError("Unable to delete this partner. Please try again.");
    }
  };

  return (
    <div className="p-6 md:p-8 space-y-6 max-w-7xl mx-auto">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-200 pb-4">
        <div><h1 className="text-3xl font-extrabold text-slate-900">Partners Management</h1><p className="mt-1 text-sm text-slate-500">Add partner companies with a logo and description.</p></div>
        <Button onClick={openCreate} className="bg-amber-500 hover:bg-amber-600 text-slate-950 font-semibold"><Plus className="mr-2" /> Add Partner</Button>
      </div>

      {error && <p role="alert" className="rounded-lg bg-red-50 border border-red-200 px-4 py-3 text-sm text-red-700">{error}</p>}

      {loading ? <p className="py-12 text-center text-slate-500">Loading partners...</p> : partners.length === 0 ? <Card><CardContent className="py-14 text-center text-slate-500">No partners added yet. Add your first partner to show it on the homepage.</CardContent></Card> : <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5">
        {partners.map((partner) => <Card key={partner._id} className="overflow-hidden border-slate-200 shadow-sm"><img src={partner.image} alt={`${partner.name} logo`} className="h-40 w-full object-contain bg-slate-50 p-5" /><CardHeader className="pb-2"><CardTitle className="text-lg text-slate-900">{partner.name}</CardTitle></CardHeader><CardContent><p className="min-h-12 text-sm leading-relaxed text-slate-600">{partner.description}</p><div className="mt-5 flex gap-2"><Button variant="outline" onClick={() => openEdit(partner)}><Edit className="mr-1.5" /> Edit</Button><Button variant="destructive" onClick={() => handleDelete(partner._id)}><Trash2 className="mr-1.5" /> Delete</Button></div></CardContent></Card>)}
      </div>}

      {isFormOpen && <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/60 p-4"><form onSubmit={handleSubmit} className="w-full max-w-xl rounded-2xl bg-white shadow-2xl"><div className="flex items-center justify-between border-b border-slate-100 p-5"><h2 className="text-xl font-bold text-slate-800">{editingId ? "Edit Partner" : "Add Partner"}</h2><button type="button" aria-label="Close" onClick={() => setIsFormOpen(false)} className="rounded-lg p-1.5 text-slate-500 hover:bg-slate-100"><X /></button></div><div className="space-y-5 p-6"><div><Label htmlFor="partner-name">Partner Name</Label><Input id="partner-name" value={form.name} onChange={(event) => setForm({ ...form, name: event.target.value })} className="mt-1" maxLength={100} /></div><div><Label htmlFor="partner-image">Partner Photo / Logo</Label><Input id="partner-image" type="file" accept="image/*" onChange={handleImageChange} className="mt-1" />{form.image ? <img src={form.image} alt="Selected partner logo" className="mt-3 h-28 w-full rounded-lg border border-slate-200 object-contain p-2" /> : <div className="mt-3 flex h-28 items-center justify-center rounded-lg border border-dashed border-slate-300 text-sm text-slate-400"><ImagePlus className="mr-2" /> Upload an image</div>}</div><div><Label htmlFor="partner-description">Company Description</Label><Textarea id="partner-description" value={form.description} onChange={(event) => setForm({ ...form, description: event.target.value })} className="mt-1 min-h-28" maxLength={1000} /></div></div><div className="flex justify-end gap-2 border-t border-slate-100 bg-slate-50 p-4"><Button type="button" variant="outline" onClick={() => setIsFormOpen(false)}>Cancel</Button><Button type="submit" disabled={saving} className="bg-amber-500 hover:bg-amber-600 text-slate-950">{saving ? "Saving..." : editingId ? "Save Changes" : "Add Partner"}</Button></div></form></div>}
    </div>
  );
}
