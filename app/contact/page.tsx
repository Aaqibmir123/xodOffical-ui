"use client";

import { FormEvent, useState, type ReactNode } from "react";
import { CheckCircle2, Clock, Mail, MapPin, Phone, Send, Sparkles } from "lucide-react";
import { contactAPI } from "@/lib/api";
import ScrollReveal from "@/components/ScrollReveal";

const emptyForm = { name: "", email: "", phone: "", address: "", message: "" };

export default function Contact() {
  const [form, setForm] = useState(emptyForm);
  const [status, setStatus] = useState<{ type: "success" | "error"; message: string } | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsSubmitting(true);
    setStatus(null);
    try {
      const result = await contactAPI.submit(form);
      if (!result.success) throw new Error(result.message);
      setForm(emptyForm);
      setStatus({ type: "success", message: result.message || "Your message has been sent successfully." });
    } catch (error) {
      setStatus({ type: "error", message: error instanceof Error && error.message ? error.message : "Unable to send your message. Please try again." });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-zinc-50">
      <section className="relative overflow-hidden bg-zinc-950 py-20 text-white">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_20%,rgba(245,158,11,.22),transparent_30%),radial-gradient(circle_at_85%_80%,rgba(245,158,11,.12),transparent_28%)]" />
        <div className="relative mx-auto max-w-7xl px-4 text-center md:px-12">
          <p className="mb-3 inline-flex items-center gap-2 rounded-full border border-amber-400/30 bg-amber-400/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.2em] text-amber-300"><Sparkles className="w-3.5 h-3.5" /> We are here to help</p>
          <h1 className="text-4xl font-black tracking-tight md:text-6xl">Let&apos;s Start a <span className="text-amber-400">Conversation</span></h1>
          <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-zinc-300 md:text-lg">Tell us what your business needs. Our dispatch specialists are ready to support you around the clock.</p>
        </div>
      </section>

      <section id="contact" className="relative py-16 md:py-24">
        <div className="pointer-events-none absolute inset-x-0 top-0 h-48 bg-gradient-to-b from-amber-50 to-transparent" />
        <div className="relative mx-auto max-w-7xl px-4 md:px-12">
          <div className="grid items-start gap-8 lg:grid-cols-[1.03fr_.97fr] xl:gap-14">
            <ScrollReveal direction="left">
              <div className="overflow-hidden rounded-3xl border border-zinc-200 bg-white shadow-2xl shadow-zinc-900/10">
                <div className="relative overflow-hidden bg-zinc-950 px-6 py-7 md:px-8">
                  <div className="absolute right-0 top-0 h-32 w-32 rounded-full bg-amber-400/20 blur-2xl" />
                  <p className="relative text-xs font-bold uppercase tracking-[0.2em] text-amber-400">Send an inquiry</p>
                  <h2 className="relative mt-2 text-2xl font-black text-white md:text-3xl">How can we help you?</h2>
                  <p className="relative mt-2 text-sm text-zinc-300">Complete the form and our team will contact you shortly.</p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-5 p-6 md:p-8">
                  {status && <p role="alert" className={`flex items-center gap-2 rounded-xl border px-4 py-3 text-sm font-medium ${status.type === "success" ? "border-green-200 bg-green-50 text-green-700" : "border-red-200 bg-red-50 text-red-700"}`}>{status.type === "success" && <CheckCircle2 className="w-4 h-4" />}{status.message}</p>}
                  <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                    <FormField id="name" label="Full Name" value={form.name} onChange={(value) => setForm({ ...form, name: value })} placeholder="Your full name" required />
                    <FormField id="email" label="Email Address" type="email" value={form.email} onChange={(value) => setForm({ ...form, email: value })} placeholder="you@example.com" required />
                    <FormField id="phone" label="Phone Number" type="tel" value={form.phone} onChange={(value) => setForm({ ...form, phone: value })} placeholder="Your phone number" required />
                    <FormField id="address" label="Address" value={form.address} onChange={(value) => setForm({ ...form, address: value })} placeholder="City, Province (optional)" />
                  </div>
                  <div>
                    <label htmlFor="message" className="mb-2 block text-sm font-bold text-zinc-800">Tell us about your requirement <span className="font-normal text-zinc-400">*</span></label>
                    <textarea id="message" value={form.message} onChange={(event) => setForm({ ...form, message: event.target.value })} rows={5} maxLength={2000} required placeholder="How can our dispatch team help you?" className="w-full resize-none rounded-xl border border-zinc-200 bg-zinc-50 px-4 py-3.5 text-sm text-zinc-900 outline-none transition placeholder:text-zinc-400 focus:border-amber-500 focus:bg-white focus:ring-4 focus:ring-amber-500/10" />
                  </div>
                  <button type="submit" disabled={isSubmitting} className="group flex w-full items-center justify-center gap-2 rounded-xl bg-amber-500 px-5 py-4 text-sm font-extrabold text-zinc-950 shadow-lg shadow-amber-500/20 transition hover:-translate-y-0.5 hover:bg-amber-400 disabled:cursor-not-allowed disabled:opacity-60"><Send className="w-4 h-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />{isSubmitting ? "Sending your message..." : "Send Message"}</button>
                  <p className="text-center text-xs text-zinc-400">Your information is used only to respond to your inquiry.</p>
                </form>
              </div>
            </ScrollReveal>

            <ScrollReveal direction="right" delay={140} className="space-y-7">
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.2em] text-amber-600">Direct contact</p>
                <h2 className="mt-2 text-3xl font-black text-zinc-950 md:text-4xl">Visit or reach our office</h2>
                <p className="mt-3 max-w-xl text-sm leading-relaxed text-zinc-600">Choose the easiest way to reach our team. We&apos;re available 24/7 for dispatch support.</p>
              </div>
              <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                <InfoCard icon={<MapPin className="w-5 h-5" />} title="Office Address">100 Consilium Pl, Suite 200<br />Scarborough, ON M1H 3E3</InfoCard>
                <InfoCard icon={<Phone className="w-5 h-5" />} title="Call Us"><a href="tel:+17501216555" className="hover:text-amber-700">+1 (750) 121-6555</a></InfoCard>
                <InfoCard icon={<Mail className="w-5 h-5" />} title="Email Us"><a href="mailto:xcdgoc@gmail.com" className="hover:text-amber-700">xcdgoc@gmail.com</a></InfoCard>
                <InfoCard icon={<Clock className="w-5 h-5" />} title="Working Hours">24/7 Dispatch Support</InfoCard>
              </div>
              <div className="overflow-hidden rounded-3xl border border-zinc-200 bg-white p-2 shadow-xl shadow-zinc-900/10">
                <div className="mb-3 flex items-center justify-between px-3 pt-2"><div><p className="text-sm font-extrabold text-zinc-900">Find us on the map</p><p className="text-xs text-zinc-500">Scarborough, Ontario</p></div><MapPin className="w-5 h-5 text-amber-500" /></div>
                <div className="h-72 overflow-hidden rounded-2xl md:h-80"><iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2880.530297493224!2d-79.2515!3d43.7852!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89d4d024018e2f0f%3A0x5a6a5a5a5a5a5a5a!2s100%20Consilium%20Pl%2C%20Scarborough%2C%20ON%20M1H%203E3!5e0!3m2!1sen!2sca!4v1700000000000!5m2!1sen!2sca" width="100%" height="100%" style={{ border: 0 }} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" title="XCDGOC Office Location" /></div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>
    </div>
  );
}

function FormField({ id, label, type = "text", value, onChange, placeholder, required = false }: { id: string; label: string; type?: string; value: string; onChange: (value: string) => void; placeholder: string; required?: boolean }) {
  return <div><label htmlFor={id} className="mb-2 block text-sm font-bold text-zinc-800">{label}{required && <span className="font-normal text-zinc-400"> *</span>}</label><input id={id} type={type} value={value} onChange={(event) => onChange(event.target.value)} placeholder={placeholder} required={required} className="w-full rounded-xl border border-zinc-200 bg-zinc-50 px-4 py-3.5 text-sm text-zinc-900 outline-none transition placeholder:text-zinc-400 focus:border-amber-500 focus:bg-white focus:ring-4 focus:ring-amber-500/10" /></div>;
}

function InfoCard({ icon, title, children }: { icon: ReactNode; title: string; children: ReactNode }) {
  return <div className="group rounded-2xl border border-zinc-200 bg-white p-4 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-amber-300 hover:shadow-lg"><div className="flex items-start gap-3"><div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-amber-50 text-amber-600 transition group-hover:bg-amber-500 group-hover:text-zinc-950">{icon}</div><div className="min-w-0"><h3 className="text-sm font-extrabold text-zinc-900">{title}</h3><div className="mt-1 text-xs leading-relaxed text-zinc-600">{children}</div></div></div></div>;
}
