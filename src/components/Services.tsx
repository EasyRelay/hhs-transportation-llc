import { useEffect, useRef } from 'react';
import { Truck, Package, Globe, Clock, Shield, Users } from 'lucide-react';

const Services = () => {
  const servicesRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry, index) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              entry.target.classList.add('animate-fade-in-up');
            }, index * 100);
          }
        });
      },
      { threshold: 0.1 }
    );

    if (servicesRef.current) {
      const cards = servicesRef.current.querySelectorAll('.service-card');
      cards.forEach((card) => observer.observe(card));
    }

    return () => observer.disconnect();
  }, []);

  const services = [
    {
      icon: Truck,
      title: "Long Haul Transportation",
      description: "Efficient cross-country freight delivery with real-time tracking and communication.",
      color: "#00c2e7"
    },
    {
      icon: Package,
      title: "Specialized Cargo",
      description: "Expert handling of oversized, fragile, and temperature-controlled shipments.",
      color: "#ff7a64"
    },
    {
      icon: Globe,
      title: "Logistics Network",
      description: "Comprehensive supply chain solutions connecting businesses nationwide.",
      color: "#00c2e7"
    },
    {
      icon: Clock,
      title: "Time-Critical Delivery",
      description: "Express shipping services for urgent and time-sensitive freight.",
      color: "#ff7a64"
    },
    {
      icon: Shield,
      title: "Secure Transport",
      description: "Fully insured and bonded transportation with complete cargo protection.",
      color: "#00c2e7"
    },
    {
      icon: Users,
      title: "Customer Support",
      description: "Dedicated support team available 24/7 for all your transportation needs.",
      color: "#ff7a64"
    }
  ];

  return (
    <section id="services" ref={servicesRef} className="py-20 bg-[#f8f9fa] relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-10 right-10 w-64 h-64 bg-[#00c2e7]/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-10 left-10 w-48 h-48 bg-[#ff7a64]/5 rounded-full blur-2xl"></div>
      
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-gray-800 mb-6" style={{ fontFamily: 'Nunito' }}>
            Our <span className="text-[#00c2e7]">Services</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed" style={{ fontFamily: 'Inter' }}>
            Comprehensive transportation and logistics solutions designed to move your business forward with efficiency and reliability.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <div 
                key={index}
                className="service-card bg-white rounded-2xl p-8 shadow-sm hover:shadow-lg transition-all duration-300 transform hover:-translate-y-2 opacity-0"
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div 
                  className="w-16 h-16 rounded-full flex items-center justify-center mb-6 transition-transform hover:scale-110"
                  style={{ backgroundColor: `${service.color}15` }}
                >
                  <IconComponent size={32} style={{ color: service.color }} />
                </div>
                <h3 className="text-2xl font-bold text-gray-800 mb-4" style={{ fontFamily: 'Nunito' }}>
                  {service.title}
                </h3>
                <p className="text-gray-600 leading-relaxed" style={{ fontFamily: 'Inter' }}>
                  {service.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;