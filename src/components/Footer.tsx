import { Link } from 'react-router-dom';
import { Truck, Phone, Mail } from 'lucide-react';

const Footer = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer id="policies" className="bg-gray-900 text-white py-16">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="md:col-span-2">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-[#00c2e7]/20 rounded-full flex items-center justify-center mr-4">
                <Truck size={24} className="text-[#00c2e7]" />
              </div>
              <div>
                <div className="text-2xl font-bold" style={{ fontFamily: 'Nunito' }}>HSS TRANSPORTATION</div>
                <div className="text-[#00c2e7] font-semibold">LLC</div>
              </div>
            </div>
            <p className="text-gray-400 mb-6 leading-relaxed" style={{ fontFamily: 'Inter' }}>
              Modern logistics solutions connecting your business to the world with efficiency, reliability, and innovation. Licensed and bonded for your peace of mind.
            </p>
            <div className="flex space-x-4">
              <div className="flex items-center text-sm text-gray-400">
                <span className="font-semibold text-[#00c2e7] mr-2">USDOT:</span> 3426974
              </div>
              <div className="flex items-center text-sm text-gray-400">
                <span className="font-semibold text-[#ff7a64] mr-2">MC:</span> 1111300
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-6 text-[#00c2e7]" style={{ fontFamily: 'Nunito' }}>
              Quick Links
            </h3>
            <ul className="space-y-3">
              <li>
                <button
                  onClick={() => scrollToSection('home')}
                  className="text-gray-400 hover:text-white transition-colors"
                  style={{ fontFamily: 'Inter' }}
                >
                  Home
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('services')}
                  className="text-gray-400 hover:text-white transition-colors"
                  style={{ fontFamily: 'Inter' }}
                >
                  Services
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('about')}
                  className="text-gray-400 hover:text-white transition-colors"
                  style={{ fontFamily: 'Inter' }}
                >
                  About
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('contact')}
                  className="text-gray-400 hover:text-white transition-colors"
                  style={{ fontFamily: 'Inter' }}
                >
                  Contact
                </button>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-bold mb-6 text-[#ff7a64]" style={{ fontFamily: 'Nunito' }}>
              Contact Info
            </h3>
            <ul className="space-y-4">
              <li className="flex items-center">
                <Phone size={16} className="text-[#00c2e7] mr-3" />
                <div className="text-sm">
                  <div className="text-gray-300">(567) 666-4390</div>
                  <div className="text-gray-500 text-xs">Primary</div>
                </div>
              </li>
              <li className="flex items-center">
                <Phone size={16} className="text-[#ff7a64] mr-3" />
                <div className="text-sm">
                  <div className="text-gray-300">(567) 970-3540</div>
                  <div className="text-gray-500 text-xs">Main Office</div>
                </div>
              </li>
              <li className="flex items-center">
                <Mail size={16} className="text-[#00c2e7] mr-3" />
                <div className="text-sm text-gray-300">freightfusion77@gmail.com</div>
              </li>
            </ul>
          </div>
        </div>

        {/* Policies Section */}
        {/* <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="mb-8">
            <h3 className="text-2xl font-bold mb-6" style={{ fontFamily: 'Nunito' }}>
              Company <span className="text-[#00c2e7]">Policies</span>
            </h3>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-gray-800 rounded-lg p-6">
                <h4 className="font-bold text-[#00c2e7] mb-3" style={{ fontFamily: 'Nunito' }}>Safety Policy</h4>
                <p className="text-gray-400 text-sm" style={{ fontFamily: 'Inter' }}>
                  We maintain the highest safety standards with regular equipment inspections, driver training, and DOT compliance.
                </p>
              </div>
              <div className="bg-gray-800 rounded-lg p-6">
                <h4 className="font-bold text-[#ff7a64] mb-3" style={{ fontFamily: 'Nunito' }}>Insurance Coverage</h4>
                <p className="text-gray-400 text-sm" style={{ fontFamily: 'Inter' }}>
                  Comprehensive cargo and liability insurance ensures your shipments are fully protected throughout transit.
                </p>
              </div>
              <div className="bg-gray-800 rounded-lg p-6">
                <h4 className="font-bold text-[#00c2e7] mb-3" style={{ fontFamily: 'Nunito' }}>Terms of Service</h4>
                <p className="text-gray-400 text-sm" style={{ fontFamily: 'Inter' }}>
                  Clear, transparent terms ensure smooth business relationships and protected interests for all parties.
                </p>
              </div>
            </div>
          </div>
        </div> */}

        <div className="border-t border-gray-800 pt-8 text-center">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className=''>
              <p className="text-gray-500" style={{ fontFamily: 'Inter' }}>
                © 2025 HSS Transportation LLC. All rights reserved. Licensed and bonded transportation services.
              </p>
              <p className='text-gray-500'>Created by <Link to="" className='hover:text-blue-500'>Easy IT</Link></p>
            </div>
            <div className="flex space-x-6 text-sm">
              <Link
                to="/privacy-policy"
                className="text-gray-400 hover:text-[#00c2e7] transition-colors"
                style={{ fontFamily: 'Inter' }}
              >
                Privacy Policy
              </Link>
              <Link
                to="/cookie-policy"
                className="text-gray-400 hover:text-[#00c2e7] transition-colors"
                style={{ fontFamily: 'Inter' }}
              >
                Cookie Policy
              </Link>
              <Link
                to="/terms-of-service"
                className="text-gray-400 hover:text-[#00c2e7] transition-colors"
                style={{ fontFamily: 'Inter' }}
              >
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;