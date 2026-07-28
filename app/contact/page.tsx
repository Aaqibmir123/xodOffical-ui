import { MapPin, Phone, Mail, Clock, Send } from "lucide-react";

export default function Contact() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#141414] to-[#0f0f0f] text-white py-20">
        <div className="max-w-7xl mx-auto px-4 md:px-12">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Contact <span className="text-amber-500">Us</span>
            </h1>
            <p className="text-zinc-400 text-lg md:text-xl max-w-3xl mx-auto">
              Get in touch with our team for all your dispatch service needs. We're here to help 24/7.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            
            {/* Contact Form */}
            <div className="bg-zinc-50 rounded-2xl p-8 shadow-lg">
              <h2 className="text-2xl md:text-3xl font-bold text-[#141414] mb-6">
                Send us a Message
              </h2>
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-zinc-700 mb-2">
                      Full Name
                    </label>
                    <input
                      type="text"
                      placeholder="Enter your name"
                      className="w-full px-4 py-3 border border-zinc-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent outline-none transition"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-zinc-700 mb-2">
                      Email Address
                    </label>
                    <input
                      type="email"
                      placeholder="Enter your email"
                      className="w-full px-4 py-3 border border-zinc-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent outline-none transition"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-zinc-700 mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      placeholder="Enter your phone"
                      className="w-full px-4 py-3 border border-zinc-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent outline-none transition"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-zinc-700 mb-2">
                      Address
                    </label>
                    <input
                      type="text"
                      placeholder="Enter your address"
                      className="w-full px-4 py-3 border border-zinc-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent outline-none transition"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-zinc-700 mb-2">
                    Message
                  </label>
                  <textarea
                    rows={5}
                    placeholder="How can we help you?"
                    className="w-full px-4 py-3 border border-zinc-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent outline-none transition resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-amber-500 text-black font-semibold py-4 rounded-lg hover:bg-amber-400 transition flex items-center justify-center gap-2"
                >
                  <Send className="w-5 h-5" />
                  <span>Send Message</span>
                </button>
              </form>
            </div>

            {/* Contact Info & Map */}
            <div className="space-y-8">
              {/* Contact Information */}
              <div>
                <h2 className="text-2xl md:text-3xl font-bold text-[#141414] mb-6">
                  Our Office
                </h2>
                
                {/* Responsive Grid for Cards: 1 Col for Mobile, 2 Cols for Desktop */}
                <div className="grid grid-cols-1 xl:grid-cols-2 gap-4">
                  <div className="flex items-start gap-4 p-4 bg-zinc-50 rounded-xl border border-zinc-100">
                    <div className="w-12 h-12 bg-amber-500/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-6 h-6 text-amber-500" />
                    </div>
                    <div>
                      <h3 className="font-bold text-[#141414] mb-1">Address</h3>
                      <p className="text-zinc-600 text-sm">
                        100 Consilium Pl, Suite 200<br />
                        Scarborough, ON M1H 3E3<br />
                        Canada
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 p-4 bg-zinc-50 rounded-xl border border-zinc-100">
                    <div className="w-12 h-12 bg-amber-500/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Phone className="w-6 h-6 text-amber-500" />
                    </div>
                    <div>
                      <h3 className="font-bold text-[#141414] mb-1">Phone</h3>
                      <p className="text-zinc-600 text-sm">+1 (750) 121-6555</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 p-4 bg-zinc-50 rounded-xl border border-zinc-100">
                    <div className="w-12 h-12 bg-amber-500/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Mail className="w-6 h-6 text-amber-500" />
                    </div>
                    <div>
                      <h3 className="font-bold text-[#141414] mb-1">Email</h3>
                      <p className="text-zinc-600 text-sm">xcdgoc@gmail.com</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 p-4 bg-zinc-50 rounded-xl border border-zinc-100">
                    <div className="w-12 h-12 bg-amber-500/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Clock className="w-6 h-6 text-amber-500" />
                    </div>
                    <div>
                      <h3 className="font-bold text-[#141414] mb-1">Business Hours</h3>
                      <p className="text-zinc-600 text-sm">24/7 Round the Clock Support</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Map */}
              <div>
                <h2 className="text-2xl md:text-3xl font-bold text-[#141414] mb-6">
                  Find Us on Map
                </h2>
                <div className="rounded-2xl overflow-hidden shadow-lg h-80">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2880.530297493224!2d-79.2515!3d43.7852!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89d4d024018e2f0f%3A0x5a6a5a5a5a5a5a5a!2s100%20Consilium%20Pl%2C%20Scarborough%2C%20ON%20M1H%203E3!5e0!3m2!1sen!2sca!4v1700000000000!5m2!1sen!2sca"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="XCDGOC Office Location"
                  />
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}
