"use client";
import { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  CheckCircle2,
  Edit,
  X,
  Save,
  Upload,
  Image as ImageIcon,
  Sparkles,
} from "lucide-react";
import { aboutAPI } from "@/lib/api";

interface AboutData {
  about_tagline: string;
  company_title: string;
  company_subtitle: string;
  main_heading: string;
  description: string;
  features_list: string[];
  section_image_url: string;
  section_image_alt: string;
}

const initialAboutData: AboutData = {
  about_tagline: "About Us",
  company_title: "XCDGOC PVT LTD",
  company_subtitle: "Extreme Canada Dispatch Group Of Companies",
  main_heading: "Complete Dispatch Solutions – Amazon & Non Amazon",
  description:
    "We are Canada's leading and most trusted dispatch service provider, proudly serving across Canada and USA for the last 08 years. Our expert team provides complete dispatch solutions for all types of loads, ensuring maximum miles, higher rates, and long-term success for our clients.",
  features_list: [
    "Round the clock dispatch support",
    "Professional & experienced team",
    "Transparent communication",
    "Best rates & dedicated service",
  ],
  section_image_url: "/images/canada-truck.jpg",
  section_image_alt: "Canadian Flag and Semi Truck",
};

export default function AdminAbout() {
  const [aboutData, setAboutData] = useState<AboutData>(initialAboutData);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState<AboutData>(initialAboutData);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);

  useEffect(() => {
    const fetchAboutData = async () => {
      try {
        const result = await aboutAPI.get();
        if (result.success) {
          setAboutData(result.data);
          setFormData(result.data);
        }
      } catch (error) {
        console.error("Error fetching about data:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchAboutData();
  }, []);

  const handleEdit = () => {
    setFormData(aboutData);
    setIsModalOpen(true);
  };

  const handleSave = async () => {
    setSaving(true);
    try {
      const result = await aboutAPI.update(formData);
      if (result.success) {
        setAboutData(result.data);
        setIsModalOpen(false);
      }
    } catch (error) {
      console.error("Error saving about data:", error);
    } finally {
      setSaving(false);
    }
  };

  const handleFeatureChange = (index: number, value: string) => {
    const newFeatures = [...formData.features_list];
    newFeatures[index] = value;
    setFormData({ ...formData, features_list: newFeatures });
  };

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        setFormData({
          ...formData,
          section_image_url: event.target?.result as string,
        });
      };
      reader.readAsDataURL(file);
    }
  };

  if (loading) {
    return (
      <div className="p-6 md:p-8 space-y-6 max-w-7xl mx-auto">
        <div className="flex items-center justify-center h-64">
          <div className="text-gray-500">Loading...</div>
        </div>
      </div>
    );
  }

  return (
    // Added p-6 md:p-8 space to fix sidebar overlap / sticking issue
    <div className="p-6 md:p-8 space-y-6 max-w-7xl mx-auto">
      {/* Header Section */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-4 border-b border-gray-200">
        <div>
          <h1 className="text-3xl font-extrabold text-gray-900 tracking-tight">
            About Us Management
          </h1>
          <p className="text-sm text-gray-500 mt-1">
            Manage and preview your homepage "About Us" section content.
          </p>
        </div>
        <Button
          onClick={handleEdit}
          className="bg-amber-500 hover:bg-amber-600 text-slate-950 font-semibold shadow-sm transition-all"
        >
          <Edit className="w-4 h-4 mr-2" />
          Edit Content
        </Button>
      </div>

      {/* Main Preview Card */}
      <Card className="bg-white border border-gray-200/80 shadow-sm rounded-xl overflow-hidden">
        <CardHeader className="bg-slate-50/50 border-b border-gray-100 py-4 px-6">
          <CardTitle className="text-base font-semibold text-slate-700 flex items-center gap-2">
            <Sparkles className="w-4 h-4 text-amber-500" /> Live Section Preview
          </CardTitle>
        </CardHeader>

        <CardContent className="p-6 md:p-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Left Column: Image Preview (5 cols) */}
            <div className="lg:col-span-5 space-y-2">
              <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider block">
                Image Display
              </span>
              <div className="relative rounded-2xl overflow-hidden border border-slate-200/80 bg-slate-100 aspect-[16/10] shadow-inner group">
                {aboutData.section_image_url ? (
                  <img
                    src={aboutData.section_image_url}
                    alt={aboutData.section_image_alt}
                    className="w-full h-full object-cover object-center transform group-hover:scale-105 transition-transform duration-500"
                  />
                ) : (
                  <div className="w-full h-full flex flex-col items-center justify-center text-slate-400">
                    <ImageIcon className="w-10 h-10 mb-2 stroke-1" />
                    <span className="text-xs">No Image Loaded</span>
                  </div>
                )}
              </div>
              <p className="text-[11px] text-slate-400 italic text-right">
                Alt: {aboutData.section_image_alt}
              </p>
            </div>

            {/* Right Column: Structured Preview (7 cols) */}
            <div className="lg:col-span-7 space-y-6">
              {/* Tagline & Titles */}
              <div className="space-y-1">
                <span className="text-amber-600 font-bold text-xs uppercase tracking-widest block">
                  {aboutData.about_tagline}
                </span>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight leading-tight">
                  {aboutData.company_title}
                </h2>
                <p className="text-amber-700 font-medium italic text-sm sm:text-base">
                  {aboutData.company_subtitle}
                </p>
              </div>

              {/* Main Heading & Description */}
              <div className="space-y-2 pt-2 border-t border-slate-100">
                <h3 className="text-lg font-bold text-slate-800">
                  {aboutData.main_heading}
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  {aboutData.description}
                </p>
              </div>

              {/* Features List */}
              <div className="pt-2">
                <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider block mb-3">
                  Key Highlights
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {aboutData.features_list.map((feature, index) => (
                    <div
                      key={index}
                      className="flex items-center gap-2.5 p-2 rounded-lg bg-amber-50/50 border border-amber-100/60 text-slate-700 text-xs sm:text-sm font-medium"
                    >
                      <CheckCircle2 className="w-4 h-4 text-amber-500 shrink-0" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-slate-900/60 backdrop-blur-xs z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl max-w-3xl w-full max-h-[90vh] flex flex-col shadow-2xl border border-slate-100">
            <div className="p-5 border-b border-slate-100 flex items-center justify-between bg-slate-50/50 rounded-t-2xl">
              <h2 className="text-xl font-bold text-slate-800">
                Edit About Us Section
              </h2>
              <button
                onClick={() => setIsModalOpen(false)}
                className="p-1.5 hover:bg-slate-200/60 rounded-lg text-slate-500 hover:text-slate-700 transition"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="p-6 flex-1 overflow-y-auto space-y-5">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <Label className="text-xs font-medium text-slate-700">
                    Tagline
                  </Label>
                  <Input
                    value={formData.about_tagline}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        about_tagline: e.target.value,
                      })
                    }
                    className="mt-1"
                  />
                </div>

                <div>
                  <Label className="text-xs font-medium text-slate-700">
                    Company Title
                  </Label>
                  <Input
                    value={formData.company_title}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        company_title: e.target.value,
                      })
                    }
                    className="mt-1"
                  />
                </div>

                <div className="md:col-span-2">
                  <Label className="text-xs font-medium text-slate-700">
                    Company Subtitle
                  </Label>
                  <Input
                    value={formData.company_subtitle}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        company_subtitle: e.target.value,
                      })
                    }
                    className="mt-1"
                  />
                </div>

                <div className="md:col-span-2">
                  <Label className="text-xs font-medium text-slate-700">
                    Main Heading
                  </Label>
                  <Input
                    value={formData.main_heading}
                    onChange={(e) =>
                      setFormData({ ...formData, main_heading: e.target.value })
                    }
                    className="mt-1"
                  />
                </div>

                <div className="md:col-span-2">
                  <Label className="text-xs font-medium text-slate-700">
                    Description
                  </Label>
                  <Textarea
                    value={formData.description}
                    onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) =>
                      setFormData({ ...formData, description: e.target.value })
                    }
                    className="min-h-[100px] mt-1"
                  />
                </div>

                <div>
                  <Label className="text-xs font-medium text-slate-700">
                    Image Alt Text
                  </Label>
                  <Input
                    value={formData.section_image_alt}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        section_image_alt: e.target.value,
                      })
                    }
                    className="mt-1"
                  />
                </div>

                <div className="md:col-span-2">
                  <Label className="text-xs font-medium text-slate-700">
                    Image Upload
                  </Label>
                  <div className="flex items-start gap-3 mt-1">
                    <div className="flex-1">
                      <Input
                        type="file"
                        accept="image/*"
                        onChange={handleImageUpload}
                        className="hidden"
                        id="image-upload"
                      />
                      <label
                        htmlFor="image-upload"
                        className="flex items-center justify-center gap-2 px-3 py-2 bg-slate-100 hover:bg-slate-200 text-slate-700 font-medium text-xs rounded-md cursor-pointer border border-slate-300 transition"
                      >
                        <Upload className="w-3.5 h-3.5" /> Choose Image
                      </label>
                    </div>
                    {formData.section_image_url && (
                      <div className="w-20 h-20 rounded-lg overflow-hidden border border-slate-300">
                        <img
                          src={formData.section_image_url}
                          alt="Preview"
                          className="w-full h-full object-cover"
                        />
                      </div>
                    )}
                  </div>
                </div>
              </div>

              {/* Features Section */}
              <div className="pt-3 border-t border-slate-100">
                <Label className="text-xs font-medium text-slate-700 block mb-2">
                  Features List
                </Label>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-2.5">
                  {formData.features_list.map((feature, index) => (
                    <Input
                      key={index}
                      value={feature}
                      onChange={(e) =>
                        handleFeatureChange(index, e.target.value)
                      }
                      placeholder={`Feature ${index + 1}`}
                    />
                  ))}
                </div>
              </div>
            </div>

            <div className="p-4 border-t border-slate-100 bg-slate-50/50 rounded-b-2xl flex justify-end gap-2">
              <Button variant="outline" onClick={() => setIsModalOpen(false)}>
                Cancel
              </Button>
              <Button
                onClick={handleSave}
                disabled={saving}
                className="bg-amber-500 hover:bg-amber-600 text-slate-950 font-semibold"
              >
                <Save className="w-4 h-4 mr-1.5" /> {saving ? "Saving..." : "Save Changes"}
              </Button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}