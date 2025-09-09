import { useEffect, useRef } from 'react';
import { Award, Phone, Mail, Fan as Fax } from 'lucide-react';

const About = () => {
  const aboutRef = useRef<HTMLDivElement>(null);

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

    if (aboutRef.current) {
      const elements = aboutRef.current.querySelectorAll('.fade-in-element');
      elements.forEach((element) => observer.observe(element));
    }

    return () => observer.disconnect();
  }, []);

  const metrics = [
    { label: "Years of Experience", value: "5+", color: "#00c2e7" },
    { label: "Miles Driven", value: "1M+", color: "#ff7a64" },
    { label: "Happy Clients", value: "500+", color: "#00c2e7" },
    { label: "On-Time Delivery", value: "99%", color: "#ff7a64" }
  ];

  const contactInfo = [
    { icon: Phone, label: "Primary", value: "(567) 666-4390", color: "#00c2e7" },
    { icon: Phone, label: "Main Office", value: "(567) 970-3540", color: "#ff7a64" },
    { icon: Fax, label: "Fax", value: "(567) 686-0191", color: "#00c2e7" },
    { icon: Mail, label: "Email", value: "freightfusion77@gmail.com", color: "#ff7a64" }
  ];

  return (
    <section id="about" ref={aboutRef} className="py-20 bg-white relative overflow-hidden">
      {/* Background Elements */}
      <svg className="absolute inset-0 w-full h-full opacity-20" xmlns="http://www.w3.org/2000/svg">
        <path d="M0,200 Q400,100 800,250" stroke="#00c2e7" strokeWidth="1" fill="none" opacity="0.3"/>
        <path d="M200,400 Q600,300 900,450" stroke="#ff7a64" strokeWidth="1" fill="none" opacity="0.3"/>
      </svg>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-gray-800 mb-6 fade-in-element opacity-0" style={{ fontFamily: 'Nunito' }}>
            Why Choose <span className="text-[#00c2e7]">HSS Transportation</span>?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed fade-in-element opacity-0" style={{ fontFamily: 'Inter' }}>
            We're not just another logistics company. We're your strategic partner in moving your business forward with modern solutions and exceptional service.
          </p>
        </div>

        {/* Metrics Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
          {metrics.map((metric, index) => (
            <div 
              key={index}
              className="fade-in-element opacity-0 text-center bg-[#f8f9fa] rounded-2xl p-8 transform hover:scale-105 transition-all duration-300"
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div 
                className="text-4xl font-bold mb-2"
                style={{ color: metric.color, fontFamily: 'Nunito' }}
              >
                {metric.value}
              </div>
              <div className="text-gray-600 font-medium" style={{ fontFamily: 'Inter' }}>
                {metric.label}
              </div>
            </div>
          ))}
        </div>

        {/* Company Info & Contact */}
        <div className="grid md:grid-cols-2 gap-12">
          <div className="fade-in-element opacity-0">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-[#00c2e7]/10 rounded-full flex items-center justify-center mr-4">
                <Award size={24} className="text-[#00c2e7]" />
              </div>
              <h3 className="text-3xl font-bold text-gray-800" style={{ fontFamily: 'Nunito' }}>
                Company Information
              </h3>
            </div>
            <div className="space-y-4">
              <div className="bg-[#f8f9fa] rounded-xl p-6">
                <div className="grid grid-cols-2 gap-4 text-center">
                  <div>
                    <div className="text-lg font-bold text-[#00c2e7]" style={{ fontFamily: 'Nunito' }}>USDOT</div>
                    <div className="text-gray-700 font-medium">3426974</div>
                  </div>
                  <div>
                    <div className="text-lg font-bold text-[#ff7a64]" style={{ fontFamily: 'Nunito' }}>MC Number</div>
                    <div className="text-gray-700 font-medium">1111300</div>
                  </div>
                </div>
              </div>
              <p className="text-gray-600 leading-relaxed" style={{ fontFamily: 'Inter' }}>
                HSS Transportation LLC is a fully licensed and bonded transportation company committed to delivering exceptional logistics solutions across the United States. Our modern approach combines traditional reliability with innovative technology.
              </p>
            </div>
          </div>

          <div className="fade-in-element opacity-0">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-[#ff7a64]/10 rounded-full flex items-center justify-center mr-4">
                <Phone size={24} className="text-[#ff7a64]" />
              </div>
              <h3 className="text-3xl font-bold text-gray-800" style={{ fontFamily: 'Nunito' }}>
                Contact Information
              </h3>
            </div>
            <div className="space-y-4">
              {contactInfo.map((contact, index) => {
                const IconComponent = contact.icon;
                return (
                  <div 
                    key={index}
                    className="flex items-center p-4 bg-[#f8f9fa] rounded-xl hover:shadow-md transition-shadow"
                  >
                    <div 
                      className="w-10 h-10 rounded-full flex items-center justify-center mr-4"
                      style={{ backgroundColor: `${contact.color}15` }}
                    >
                      <IconComponent size={18} style={{ color: contact.color }} />
                    </div>
                    <div>
                      <div className="font-semibold text-gray-800" style={{ fontFamily: 'Inter' }}>
                        {contact.label}
                      </div>
                      <div className="text-gray-600" style={{ fontFamily: 'Inter' }}>
                        {contact.value}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;