import { Cookie, Settings, BarChart, Shield } from 'lucide-react';
import { useEffect } from 'react';

const CookiePolicy = () => {

  useEffect(() => {
    window.scrollTo(0,0);
  })

  return (
    <div className="min-h-screen bg-white py-20">
      <div className="container mx-auto px-6 max-w-4xl">
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-[#ff7a64]/10 rounded-full mb-6">
            <Cookie size={32} className="text-[#ff7a64]" />
          </div>
          <h1 className="text-4xl font-bold text-gray-800 mb-4" style={{ fontFamily: 'Nunito' }}>
            Cookie Policy
          </h1>
          <p className="text-lg text-gray-600" style={{ fontFamily: 'Inter' }}>
            Last updated: January 2025
          </p>
        </div>

        <div className="prose prose-lg max-w-none">
          <div className="bg-[#f8f9fa] rounded-2xl p-8 mb-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-4 flex items-center" style={{ fontFamily: 'Nunito' }}>
              <Cookie size={24} className="text-[#ff7a64] mr-3" />
              What Are Cookies?
            </h2>
            <div className="space-y-4 text-gray-700" style={{ fontFamily: 'Inter' }}>
              <p>Cookies are small text files that are stored on your device when you visit our website. They help us provide you with a better experience by remembering your preferences and analyzing how you use our site.</p>
              
              <p>HSS Transportation LLC uses cookies and similar technologies to enhance your browsing experience, analyze website traffic, and improve our services.</p>
            </div>
          </div>

          <div className="bg-white border border-gray-200 rounded-2xl p-8 mb-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-4 flex items-center" style={{ fontFamily: 'Nunito' }}>
              <Settings size={24} className="text-[#00c2e7] mr-3" />
              Types of Cookies We Use
            </h2>
            <div className="space-y-6 text-gray-700" style={{ fontFamily: 'Inter' }}>
              
              <div className="border-l-4 border-[#00c2e7] pl-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-3">Essential Cookies</h3>
                <p className="mb-3">These cookies are necessary for the website to function properly and cannot be disabled.</p>
                <ul className="list-disc pl-6 space-y-1">
                  <li>Session management and security</li>
                  <li>Form submission and data processing</li>
                  <li>Basic website functionality</li>
                  <li>Load balancing and performance</li>
                </ul>
              </div>

              <div className="border-l-4 border-[#ff7a64] pl-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-3">Analytics Cookies</h3>
                <p className="mb-3">These cookies help us understand how visitors interact with our website.</p>
                <ul className="list-disc pl-6 space-y-1">
                  <li>Google Analytics for traffic analysis</li>
                  <li>Page view and user behavior tracking</li>
                  <li>Performance monitoring</li>
                  <li>Error tracking and debugging</li>
                </ul>
              </div>

              <div className="border-l-4 border-[#00c2e7] pl-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-3">Functional Cookies</h3>
                <p className="mb-3">These cookies enable enhanced functionality and personalization.</p>
                <ul className="list-disc pl-6 space-y-1">
                  <li>Language and region preferences</li>
                  <li>User interface customizations</li>
                  <li>Remember form inputs</li>
                  <li>Accessibility settings</li>
                </ul>
              </div>

              <div className="border-l-4 border-[#ff7a64] pl-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-3">Marketing Cookies</h3>
                <p className="mb-3">These cookies are used to deliver relevant advertisements and track campaign effectiveness.</p>
                <ul className="list-disc pl-6 space-y-1">
                  <li>Targeted advertising</li>
                  <li>Social media integration</li>
                  <li>Campaign performance tracking</li>
                  <li>Retargeting and remarketing</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="bg-[#f8f9fa] rounded-2xl p-8 mb-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-4 flex items-center" style={{ fontFamily: 'Nunito' }}>
              <BarChart size={24} className="text-[#00c2e7] mr-3" />
              Third-Party Cookies
            </h2>
            <div className="space-y-4 text-gray-700" style={{ fontFamily: 'Inter' }}>
              <p>We may use third-party services that set their own cookies on our website:</p>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white rounded-lg p-6">
                  <h3 className="text-lg font-semibold text-gray-800 mb-3">Google Analytics</h3>
                  <p className="text-sm">Tracks website usage and provides insights into visitor behavior.</p>
                  <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer" className="text-[#00c2e7] hover:underline text-sm">
                    Google Privacy Policy →
                  </a>
                </div>
                
                <div className="bg-white rounded-lg p-6">
                  <h3 className="text-lg font-semibold text-gray-800 mb-3">Social Media</h3>
                  <p className="text-sm">Social media plugins may set cookies for sharing and integration features.</p>
                </div>
                
                <div className="bg-white rounded-lg p-6">
                  <h3 className="text-lg font-semibold text-gray-800 mb-3">Payment Processors</h3>
                  <p className="text-sm">Secure payment processing may require cookies for transaction security.</p>
                </div>
                
                <div className="bg-white rounded-lg p-6">
                  <h3 className="text-lg font-semibold text-gray-800 mb-3">Customer Support</h3>
                  <p className="text-sm">Live chat and support tools may use cookies for functionality.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white border border-gray-200 rounded-2xl p-8 mb-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-4 flex items-center" style={{ fontFamily: 'Nunito' }}>
              <Shield size={24} className="text-[#ff7a64] mr-3" />
              Managing Your Cookie Preferences
            </h2>
            <div className="space-y-4 text-gray-700" style={{ fontFamily: 'Inter' }}>
              <p>You have several options for managing cookies:</p>
              
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-3">Browser Settings</h3>
                  <p className="mb-3">Most browsers allow you to control cookies through their settings:</p>
                  <ul className="list-disc pl-6 space-y-1">
                    <li>Block all cookies</li>
                    <li>Block third-party cookies only</li>
                    <li>Delete existing cookies</li>
                    <li>Receive notifications when cookies are set</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-3">Browser-Specific Instructions</h3>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="bg-[#f8f9fa] rounded-lg p-4">
                      <h4 className="font-semibold mb-2">Chrome</h4>
                      <p className="text-sm">Settings → Privacy and Security → Cookies and other site data</p>
                    </div>
                    <div className="bg-[#f8f9fa] rounded-lg p-4">
                      <h4 className="font-semibold mb-2">Firefox</h4>
                      <p className="text-sm">Options → Privacy & Security → Cookies and Site Data</p>
                    </div>
                    <div className="bg-[#f8f9fa] rounded-lg p-4">
                      <h4 className="font-semibold mb-2">Safari</h4>
                      <p className="text-sm">Preferences → Privacy → Manage Website Data</p>
                    </div>
                    <div className="bg-[#f8f9fa] rounded-lg p-4">
                      <h4 className="font-semibold mb-2">Edge</h4>
                      <p className="text-sm">Settings → Cookies and site permissions → Cookies and site data</p>
                    </div>
                  </div>
                </div>

                <div className="p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
                  <p className="text-sm text-yellow-800">
                    <strong>Note:</strong> Disabling certain cookies may affect website functionality and your user experience.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-[#f8f9fa] rounded-2xl p-8 mb-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-4" style={{ fontFamily: 'Nunito' }}>
              Cookie Retention
            </h2>
            <div className="space-y-4 text-gray-700" style={{ fontFamily: 'Inter' }}>
              <p>Different types of cookies are stored for different periods:</p>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-3">Session Cookies</h3>
                  <p className="text-sm">Deleted when you close your browser</p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-3">Persistent Cookies</h3>
                  <p className="text-sm">Stored for a specific period (typically 30 days to 2 years)</p>
                </div>
              </div>
              
              <p className="mt-4">We regularly review and delete unnecessary cookies to minimize data collection.</p>
            </div>
          </div>

          <div className="bg-white border border-gray-200 rounded-2xl p-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-4" style={{ fontFamily: 'Nunito' }}>
              Contact Us About Cookies
            </h2>
            <div className="text-gray-700" style={{ fontFamily: 'Inter' }}>
              <p className="mb-4">If you have questions about our use of cookies, please contact us:</p>
              
              <div className="space-y-2">
                <p><strong>HSS Transportation LLC</strong></p>
                <p>Email: <a href="mailto:freightfusion77@gmail.com" className="text-[#00c2e7] hover:underline">freightfusion77@gmail.com</a></p>
                <p>Phone: <a href="tel:5676664390" className="text-[#00c2e7] hover:underline">(567) 666-4390</a></p>
                <p>USDOT: 3426974 | MC: 1111300</p>
              </div>
              
              <p className="mt-6 text-sm text-gray-600">
                This Cookie Policy may be updated periodically to reflect changes in our practices or applicable laws.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CookiePolicy;