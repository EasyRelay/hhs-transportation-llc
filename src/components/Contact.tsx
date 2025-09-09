import { useEffect, useRef } from 'react';
import { MapPin, Clock, Star } from 'lucide-react';

const Contact = () => {
  const contactRef = useRef<HTMLDivElement>(null);
  // const [formData, setFormData] = useState({
  //   name: '',
  //   email: '',
  //   phone: '',
  //   message: ''
  // });

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

  // const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
  //   setFormData({
  //     ...formData,
  //     [e.target.name]: e.target.value
  //   });
  // };

  // const handleSubmit = (e: React.FormEvent) => {
  //   e.preventDefault();
  //   // Handle form submission here
  //   console.log('Form submitted:', formData);
  // };

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
          {/* <div className="fade-in-element opacity-0">
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h3 className="text-3xl font-bold text-gray-800 mb-6" style={{ fontFamily: 'Nunito' }}>
                Request a Quote
              </h3>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2" style={{ fontFamily: 'Inter' }}>
                    Full Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#00c2e7] transition-all"
                    placeholder="Your full name"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2" style={{ fontFamily: 'Inter' }}>
                    Email Address
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
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
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#00c2e7] transition-all"
                    placeholder="(555) 123-4567"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2" style={{ fontFamily: 'Inter' }}>
                    Message
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows={4}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#00c2e7] transition-all resize-none"
                    placeholder="Tell us about your transportation needs..."
                    required
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-[#00c2e7] text-white px-6 py-4 rounded-lg font-semibold text-lg hover:bg-[#00c2e7]/90 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center justify-center"
                >
                  Send Message
                  <Send size={20} className="ml-2" />
                </button>
              </form>
            </div>
          </div> */}

          {/* Contact Info & Features */}
          {/* <div className="fade-in-element opacity-0 space-y-8"> */}
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
          {/* </div> */}
        </div>
      </div>
    </section>
  );
};

export default Contact;