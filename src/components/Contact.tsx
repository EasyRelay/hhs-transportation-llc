import { useEffect, useRef, useState } from 'react';
import { MapPin, Clock, Star, Send } from 'lucide-react';

const Contact = () => {
  const contactRef = useRef<HTMLDivElement>(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-in');
          }
        });
      },
      { threshold: 0.1 }
    );

    if (contactRef.current) {
      const elements = contactRef.current.querySelectorAll('.fade-in-element');
      elements.forEach((element) => observer.observe(element));
    }

    return () => observer.disconnect();
  }, []);


  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('sending');

    try {
      // remove empty fields
      const filteredData = Object.fromEntries(
        Object.entries(formData).filter(([_, value]) => value.trim() !== "")
      );

      // objectni string ko‘rinishga o‘tkazamiz
      const data = Object.entries(filteredData)
        .map(([key, value]) => {
          const capitalizedKey = key.charAt(0).toUpperCase() + key.slice(1);
          return `${capitalizedKey}: ${value}`;
        })
        .join("\n");

      const res = await fetch('https://eo3kcbwp74d1fdp.m.pipedream.net', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ text: data }),
      });

      if (!res.ok) throw new Error('Network response was not ok');

      setStatus('success');
      setFormData({
        name: '',
        email: '',
        phone: '',
        message: ''
      });
    } catch (err) {
      console.error(err);
      setStatus('error');
    }

    setTimeout(() => {
      setStatus('idle');
    }, 3000);
  };

  return (
    <section id="contact" ref={contactRef} className="py-20 bg-gradient-to-br from-[#f8f9fa] to-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-20 left-10 w-40 h-40 bg-[#00c2e7]/10 rounded-full blur-2xl"></div>
      <div className="absolute bottom-20 right-10 w-32 h-32 bg-[#ff7a64]/15 rounded-full blur-xl"></div>

      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-gray-800 mb-6 fade-in-element opacity-0" style={{ fontFamily: 'Nunito' }}>
            Get In <span className="text-[#00c2e7]">Touch</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed fade-in-element opacity-0" style={{ fontFamily: 'Inter' }}>
            Ready to streamline your logistics? Contact us today for a customized transportation solution that fits your business needs.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Form */}
          <div className="fade-in-element opacity-0">
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h3 className="text-3xl font-bold text-gray-800 mb-6" style={{ fontFamily: 'Nunito' }}>
                How Can We Help?
              </h3>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2" style={{ fontFamily: 'Inter' }}>
                    Full Name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#00c2e7] transition-all"
                    placeholder="Your full name"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2" style={{ fontFamily: 'Inter' }}>
                    Email Address *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#00c2e7] transition-all"
                    placeholder="your@email.com"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2" style={{ fontFamily: 'Inter' }}>
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#00c2e7] transition-all"
                    placeholder="(555) 123-4567"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2" style={{ fontFamily: 'Inter' }}>
                    Message *
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#00c2e7] transition-all resize-none"
                    placeholder="Tell us about your transportation needs..."
                    required
                  />
                </div>
                <button
                  type="submit"
                  disabled={status === 'sending'}
                  className="w-full bg-blue-700 hover:bg-blue-600  text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105 flex items-center justify-center space-x-2 disabled:opacity-50"
                >
                  <Send className="h-5 w-5" />
                  <span>
                    {status === 'sending'
                      ? 'Sending...'
                      : status === 'success'
                        ? 'Sent!'
                        : 'Send Quote Request'}
                  </span>
                </button>
                {status === 'success' && (
                  <p className="text-green-600 font-medium text-center">
                    ✅ Your message has been sent successfully!
                  </p>
                )}

                {status === 'error' && (
                  <p className="text-red-600 font-medium text-center">
                    ❌ Something went wrong. Please try again.
                  </p>
                )}
              </form>
            </div>
          </div>

          {/* Contact Info & Features */}
          <div className='flex justify-center max-w-6xl mx-auto'>
            <div className="fade-in-element opacity-0 items-center space-y-8">
              <div className="bg-white rounded-2xl p-8 shadow-lg">
                <h3 className="text-3xl font-bold text-gray-800 mb-6" style={{ fontFamily: 'Nunito' }}>
                  Why Choose Us?
                </h3>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <div className="w-10 h-10 bg-[#00c2e7]/10 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                      <Clock size={20} className="text-[#00c2e7]" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800 mb-1" style={{ fontFamily: 'Inter' }}>24/7 Availability</h4>
                      <p className="text-gray-600 text-sm" style={{ fontFamily: 'Inter' }}>Round-the-clock support and service</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="w-10 h-10 bg-[#ff7a64]/10 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                      <Star size={20} className="text-[#ff7a64]" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800 mb-1" style={{ fontFamily: 'Inter' }}>Premium Service</h4>
                      <p className="text-gray-600 text-sm" style={{ fontFamily: 'Inter' }}>White-glove treatment for every shipment</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="w-10 h-10 bg-[#00c2e7]/10 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                      <MapPin size={20} className="text-[#00c2e7]" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800 mb-1" style={{ fontFamily: 'Inter' }}>Nationwide Coverage</h4>
                      <p className="text-gray-600 text-sm" style={{ fontFamily: 'Inter' }}>Coast-to-coast transportation network</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Quick Contact */}
              <div className="bg-gradient-to-r from-[#00c2e7] to-[#ff7a64] rounded-2xl p-8 text-white">
                <h3 className="text-2xl font-bold mb-4" style={{ fontFamily: 'Nunito' }}>
                  Need Immediate Assistance?
                </h3>
                <p className="mb-6 opacity-90" style={{ fontFamily: 'Inter' }}>
                  Call us directly for urgent transportation needs
                </p>
                <div className="space-y-3">
                  <div className="text-lg font-semibold">Primary: (567) 666-4390</div>
                  <div className="text-lg font-semibold">Main: (567) 970-3540</div>
                  <div className="text-sm opacity-90">freightfusion77@gmail.com</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;