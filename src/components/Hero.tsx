import { useEffect, useRef } from 'react';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    window.scrollTo(0,0);
  })

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

    if (heroRef.current) {
      observer.observe(heroRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-gray-900 to-gray-700">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 overflow-hidden">
        <img 
          src="https://media.wired.com/photos/5b9c3d5e7d9d332cf364ad66/3:2/w_2560%2Cc_limit/AV-Trucks-187479297.jpg" 
          alt="Truck transportation" 
          className="absolute inset-0 w-full h-full object-cover" 
        />
        <div className="absolute inset-0 bg-black/50"></div>
      </div>

      <div ref={heroRef} className="container mx-auto px-6 text-center relative z-10">
        <div className="max-w-4xl mx-auto opacity-0 transform translate-y-10" style={{ animation: 'fadeInUp 1s ease-out 0.5s forwards' }}>

          {/* Company Name */}
          <h1 className="text-5xl md:text-6xl font-bold text-blue-600 mb-4">
            HSS
          </h1>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            TRANSPORTATION LLC
          </h1>

          {/* Tagline */}
          <p className="text-xl md:text-2xl text-gray-200 mb-12 mx-auto max-w-2xl leading-relaxed bg-black/30 backdrop-blur-sm py-4 px-6 rounded-xl">
            Modern logistics solutions that connect your business to the world with efficiency, reliability, and innovation.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
            <button className="group bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-8 py-4 rounded-full font-semibold text-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center">
              Get Started
              <ArrowRight size={20} className="ml-2 group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="border-2 border-white text-white bg-transparent px-8 py-4 rounded-full font-semibold text-lg hover:bg-white hover:text-gray-900 transition-all duration-300 transform hover:scale-105">
              Learn More
            </button>
          </div>

          {/* Info Cards */}
          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div className="bg-white/10 backdrop-blur-md rounded-xl p-5 shadow-lg hover:shadow-xl transition-all duration-300 border border-white/20">
              <div className="text-xl font-bold text-cyan-400 mb-2">USDOT</div>
              <div className="text-lg text-white font-semibold">3426974</div>
            </div>
            <div className="bg-white/10 backdrop-blur-md rounded-xl p-5 shadow-lg hover:shadow-xl transition-all duration-300 border border-white/20">
              <div className="text-xl font-bold text-cyan-400 mb-2">MC</div>
              <div className="text-lg text-white font-semibold">1111300</div>
            </div>
            <div className="bg-white/10 backdrop-blur-md rounded-xl p-5 shadow-lg hover:shadow-xl transition-all duration-300 border border-white/20">
              <div className="text-xl font-bold text-cyan-400 mb-2">24/7</div>
              <div className="text-lg text-white font-semibold">Service</div>
            </div>
            <div className="bg-white/10 backdrop-blur-md rounded-xl p-5 shadow-lg hover:shadow-xl transition-all duration-300 border border-white/20">
              <div className="text-xl font-bold text-cyan-400 mb-2">Licensed</div>
              <div className="text-lg text-white font-semibold">& Insured</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;