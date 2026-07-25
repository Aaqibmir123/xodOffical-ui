import { Card, CardContent } from "@/components/ui/card";
import { Truck, MapPin, Layers, ShoppingCart, ShieldAlert, CheckCircle2 } from "lucide-react";

const services = [
  {
    title: "Amazon Relay Load Board",
    desc: "Expert handling of Amazon Relay load board to get you consistent & high paying loads.",
    icon: Truck,
  },
    {
    title: "Non Amazon Dispatch",
    desc: "Complete dispatch solutions for all non-Amazon loads and brokers.",
    icon: ShieldAlert,
  },
  {
    title: "Load Link",
    desc: "Maximize your earnings with our LoadLink dispatch services and rate negotiation.",
    icon: MapPin,
  },
  {
    title: "Bison Transport Dispatch",
    desc: "Professional dispatch solutions for Bison loads across Canada & USA.",
    icon: Layers,
  },
  {
    title: "Walmart Dispatch",
    desc: "Dedicated Walmart dispatch services for steady freight & growth.",
    icon: ShoppingCart,
  },

  {
    title: "Complete Dispatch Solutions",
    desc: "End-to-end dispatch management and support tailored to your business.",
    icon: CheckCircle2,
  },
];

export default function Services() {
  return (
    <section className="py-20 bg-zinc-50 text-zinc-900">
      <div className="max-w-7xl mx-auto px-4 md:px-12 text-center">
        <p className="text-amber-600 font-semibold tracking-widest text-sm uppercase mb-2">What We Offer</p>
        <h2 className="text-3xl md:text-4xl font-extrabold uppercase mb-12">
          Our Complete Dispatch Services & Solutions
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((item, index) => {
            const IconComponent = item.icon;
            return (
              <Card key={index} className="border border-zinc-200 shadow-sm hover:shadow-md transition bg-white text-left p-6 flex flex-col justify-between">
                <CardContent className="p-0">
                  <div className="w-12 h-12 rounded-lg bg-amber-50 border border-amber-100 flex items-center justify-center text-amber-600 mb-6">
                    <IconComponent className="w-6 h-6" />
                  </div>
                  <h3 className="font-bold text-xl mb-3">{item.title}</h3>
                  <p className="text-zinc-600 text-sm leading-relaxed">{item.desc}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}