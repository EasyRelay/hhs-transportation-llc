import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white backdrop-blur-md shadow-sm' : 'bg-transparent'
      }`}>
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex gap-5 items-center text-2xl font-bold text-gray-800" style={{ fontFamily: 'Nunito' }}>
            <img src="/images/glass2-logo.png" alt="hhs-logo" className='w-20 h-18 rounded-sm' />
            <div className={`${isScrolled ? "": "text-white"}`}>
              TRANSPORTATION
              <div className="text-sm font-medium text-[#00c2e7] -mt-1">LLC</div>
            </div>
          </Link>

          {/* Desktop Menu */}
          {isHomePage ? (
            <div className="hidden md:flex items-center space-x-8">
              <button
                onClick={() => scrollToSection('home')}
                className={`${ isScrolled ? 'text-gray-700' : "text-white"} hover:text-[#00c2e7] transition-colors font-medium`}
              >
                Home
              </button>
              <button
                onClick={() => scrollToSection('services')}
                className={`${ isScrolled ? 'text-gray-700' : "text-white"} hover:text-[#00c2e7] transition-colors font-medium`}
              >
                Services
              </button>
              <button
                onClick={() => scrollToSection('about')}
                className={`${ isScrolled ? 'text-gray-700' : "text-white"} hover:text-[#00c2e7] transition-colors font-medium`}
              >
                About
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className={`${ isScrolled ? 'text-gray-700' : "text-white"} hover:text-[#00c2e7] transition-colors font-medium`}
              >
                Contact
              </button>
              <button
                onClick={() => scrollToSection('policies')}
                className={`${ isScrolled ? 'text-gray-700' : "text-white"} hover:text-[#00c2e7] transition-colors font-medium`}
              >
                Policies
              </button>
            </div>
          ) : (
            <div className="hidden md:flex items-center space-x-8">
              <Link
                to="/"
                className="text-gray-700 hover:text-[#00c2e7] transition-colors font-medium"
              >
                Back to Home
              </Link>
            </div>
          )}

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-white/95 backdrop-blur-md shadow-lg">
            {isHomePage ? (
              <div className="flex flex-col space-y-4 p-6">
                <button
                  onClick={() => scrollToSection('home')}
                  className="text-left text-gray-700 hover:text-[#00c2e7] transition-colors font-medium"
                >
                  Home
                </button>
                <button
                  onClick={() => scrollToSection('services')}
                  className="text-left text-gray-700 hover:text-[#00c2e7] transition-colors font-medium"
                >
                  Services
                </button>
                <button
                  onClick={() => scrollToSection('about')}
                  className="text-left text-gray-700 hover:text-[#00c2e7] transition-colors font-medium"
                >
                  About
                </button>
                <button
                  onClick={() => scrollToSection('contact')}
                  className="text-left text-gray-700 hover:text-[#00c2e7] transition-colors font-medium"
                >
                  Contact
                </button>
                <button
                  onClick={() => scrollToSection('policies')}
                  className="text-left text-gray-700 hover:text-[#00c2e7] transition-colors font-medium"
                >
                  Policies
                </button>
              </div>
            ) : (
              <div className="flex flex-col space-y-4 p-6">
                <Link
                  to="/"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-left text-gray-700 hover:text-[#00c2e7] transition-colors font-medium"
                >
                  Back to Home
                </Link>
              </div>
            )}
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;