import { FileText, Scale, Truck, AlertTriangle } from 'lucide-react';

const TermsOfService = () => {
  return (
    <div className="min-h-screen bg-white py-20">
      <div className="container mx-auto px-6 max-w-4xl">
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-[#00c2e7]/10 rounded-full mb-6">
            <Scale size={32} className="text-[#00c2e7]" />
          </div>
          <h1 className="text-4xl font-bold text-gray-800 mb-4" style={{ fontFamily: 'Nunito' }}>
            Terms of Service
          </h1>
          <p className="text-lg text-gray-600" style={{ fontFamily: 'Inter' }}>
            Last updated: January 2025
          </p>
        </div>

        <div className="prose prose-lg max-w-none">
          <div className="bg-[#f8f9fa] rounded-2xl p-8 mb-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-4 flex items-center" style={{ fontFamily: 'Nunito' }}>
              <FileText size={24} className="text-[#00c2e7] mr-3" />
              Agreement to Terms
            </h2>
            <div className="space-y-4 text-gray-700" style={{ fontFamily: 'Inter' }}>
              <p>These Terms of Service ("Terms") govern your use of transportation and logistics services provided by HSS Transportation LLC ("Company," "we," "our," or "us"). By engaging our services, you ("Customer," "you," or "your") agree to be bound by these Terms.</p>
              
              <div className="p-4 bg-white rounded-lg border-l-4 border-[#00c2e7]">
                <p className="font-semibold">Company Information:</p>
                <p>HSS Transportation LLC<br/>
                USDOT: 3426974 | MC: 1111300<br/>
                Licensed and bonded transportation services</p>
              </div>
            </div>
          </div>

          <div className="bg-white border border-gray-200 rounded-2xl p-8 mb-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-4 flex items-center" style={{ fontFamily: 'Nunito' }}>
              <Truck size={24} className="text-[#ff7a64] mr-3" />
              Transportation Services
            </h2>
            <div className="space-y-4 text-gray-700" style={{ fontFamily: 'Inter' }}>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">Service Scope</h3>
              <p>HSS Transportation LLC provides interstate transportation and logistics services including:</p>
              
              <ul className="list-disc pl-6 space-y-2">
                <li>Long-haul freight transportation</li>
                <li>Specialized cargo handling</li>
                <li>Time-critical delivery services</li>
                <li>Logistics coordination and planning</li>
                <li>Real-time shipment tracking</li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">Service Limitations</h3>
              <div className="bg-[#f8f9fa] rounded-lg p-6">
                <ul className="list-disc pl-6 space-y-2">
                  <li>Services are subject to equipment availability and scheduling</li>
                  <li>Certain hazardous materials require special handling and documentation</li>
                  <li>Weather, traffic, and other conditions may affect delivery times</li>
                  <li>Weight and size restrictions apply based on equipment specifications</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="bg-[#f8f9fa] rounded-2xl p-8 mb-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-4" style={{ fontFamily: 'Nunito' }}>
              Customer Responsibilities
            </h2>
            <div className="space-y-4 text-gray-700" style={{ fontFamily: 'Inter' }}>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-3">Shipment Preparation</h3>
                  <ul className="list-disc pl-6 space-y-1 text-sm">
                    <li>Proper packaging and labeling</li>
                    <li>Accurate weight and dimension information</li>
                    <li>Complete shipping documentation</li>
                    <li>Hazardous material declarations</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-3">Payment Terms</h3>
                  <ul className="list-disc pl-6 space-y-1 text-sm">
                    <li>Payment due within 30 days of invoice</li>
                    <li>Late fees may apply to overdue accounts</li>
                    <li>Credit applications may be required</li>
                    <li>COD terms available upon approval</li>
                  </ul>
                </div>
              </div>
              
              <div className="mt-6 p-4 bg-white rounded-lg border border-gray-200">
                <h3 className="text-lg font-semibold text-gray-800 mb-3">Access and Loading</h3>
                <p>Customer must provide safe and adequate access for pickup and delivery, including proper loading/unloading facilities and personnel when required.</p>
              </div>
            </div>
          </div>

          <div className="bg-white border border-gray-200 rounded-2xl p-8 mb-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-4" style={{ fontFamily: 'Nunito' }}>
              Pricing and Payment
            </h2>
            <div className="space-y-4 text-gray-700" style={{ fontFamily: 'Inter' }}>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">Rate Structure</h3>
              <p>Transportation rates are determined based on:</p>
              
              <div className="grid md:grid-cols-3 gap-4 mt-4">
                <div className="bg-[#f8f9fa] rounded-lg p-4">
                  <h4 className="font-semibold text-[#00c2e7] mb-2">Distance & Route</h4>
                  <p className="text-sm">Mileage, fuel costs, and route complexity</p>
                </div>
                <div className="bg-[#f8f9fa] rounded-lg p-4">
                  <h4 className="font-semibold text-[#ff7a64] mb-2">Cargo Specifications</h4>
                  <p className="text-sm">Weight, dimensions, and special handling requirements</p>
                </div>
                <div className="bg-[#f8f9fa] rounded-lg p-4">
                  <h4 className="font-semibold text-[#00c2e7] mb-2">Service Level</h4>
                  <p className="text-sm">Standard, expedited, or specialized services</p>
                </div>
              </div>

              <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">Additional Charges</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>Detention time beyond agreed free time</li>
                <li>Extra stops or route changes</li>
                <li>Special equipment or handling requirements</li>
                <li>Fuel surcharges based on current market rates</li>
                <li>Accessorial services (inside delivery, liftgate, etc.)</li>
              </ul>
            </div>
          </div>

          <div className="bg-[#f8f9fa] rounded-2xl p-8 mb-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-4 flex items-center" style={{ fontFamily: 'Nunito' }}>
              <AlertTriangle size={24} className="text-[#ff7a64] mr-3" />
              Liability and Insurance
            </h2>
            <div className="space-y-4 text-gray-700" style={{ fontFamily: 'Inter' }}>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">Cargo Liability</h3>
              <div className="bg-white rounded-lg p-6 border border-gray-200">
                <p className="mb-4">HSS Transportation LLC maintains cargo insurance coverage as required by federal regulations. Our liability for cargo loss or damage is limited to:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>The actual value of the goods at time of shipment</li>
                  <li>Maximum coverage limits as specified in our insurance policy</li>
                  <li>Depreciated value for used or damaged goods</li>
                  <li>Exclusions for certain types of cargo (as detailed in shipping agreement)</li>
                </ul>
              </div>

              <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">Claims Process</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold text-gray-800 mb-2">Damage Claims</h4>
                  <ul className="list-disc pl-6 space-y-1 text-sm">
                    <li>Must be reported within 24 hours</li>
                    <li>Written notice required within 9 months</li>
                    <li>Supporting documentation required</li>
                    <li>Inspection may be required</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800 mb-2">Loss Claims</h4>
                  <ul className="list-disc pl-6 space-y-1 text-sm">
                    <li>Report immediately upon discovery</li>
                    <li>Police report may be required</li>
                    <li>Proof of value documentation</li>
                    <li>Cooperation with investigation</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white border border-gray-200 rounded-2xl p-8 mb-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-4" style={{ fontFamily: 'Nunito' }}>
              Force Majeure and Delays
            </h2>
            <div className="space-y-4 text-gray-700" style={{ fontFamily: 'Inter' }}>
              <p>HSS Transportation LLC shall not be liable for delays or failures in performance due to circumstances beyond our reasonable control, including:</p>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-3">Natural Events</h3>
                  <ul className="list-disc pl-6 space-y-1">
                    <li>Severe weather conditions</li>
                    <li>Natural disasters</li>
                    <li>Earthquakes, floods, fires</li>
                    <li>Other acts of nature</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-3">Human Events</h3>
                  <ul className="list-disc pl-6 space-y-1">
                    <li>Government actions or regulations</li>
                    <li>Labor strikes or disputes</li>
                    <li>Civil unrest or terrorism</li>
                    <li>Equipment failures beyond our control</li>
                  </ul>
                </div>
              </div>
              
              <div className="mt-6 p-4 bg-[#f8f9fa] rounded-lg">
                <p><strong>Communication:</strong> We will make reasonable efforts to communicate delays and provide updated delivery estimates when circumstances permit.</p>
              </div>
            </div>
          </div>

          <div className="bg-[#f8f9fa] rounded-2xl p-8 mb-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-4" style={{ fontFamily: 'Nunito' }}>
              Dispute Resolution
            </h2>
            <div className="space-y-4 text-gray-700" style={{ fontFamily: 'Inter' }}>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">Resolution Process</h3>
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="w-8 h-8 bg-[#00c2e7] text-white rounded-full flex items-center justify-center text-sm font-bold mr-4 mt-1">1</div>
                  <div>
                    <h4 className="font-semibold mb-1">Direct Communication</h4>
                    <p className="text-sm">Contact our customer service team to discuss and resolve issues</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-8 h-8 bg-[#ff7a64] text-white rounded-full flex items-center justify-center text-sm font-bold mr-4 mt-1">2</div>
                  <div>
                    <h4 className="font-semibold mb-1">Formal Complaint</h4>
                    <p className="text-sm">Submit written complaint with supporting documentation</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-8 h-8 bg-[#00c2e7] text-white rounded-full flex items-center justify-center text-sm font-bold mr-4 mt-1">3</div>
                  <div>
                    <h4 className="font-semibold mb-1">Mediation</h4>
                    <p className="text-sm">Voluntary mediation through agreed-upon neutral third party</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-8 h-8 bg-[#ff7a64] text-white rounded-full flex items-center justify-center text-sm font-bold mr-4 mt-1">4</div>
                  <div>
                    <h4 className="font-semibold mb-1">Legal Action</h4>
                    <p className="text-sm">Court proceedings as a last resort, subject to applicable laws</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white border border-gray-200 rounded-2xl p-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-4" style={{ fontFamily: 'Nunito' }}>
              Contact Information
            </h2>
            <div className="text-gray-700" style={{ fontFamily: 'Inter' }}>
              <p className="mb-4">For questions about these Terms of Service or our transportation services:</p>
              
              <div className="space-y-2">
                <p><strong>HSS Transportation LLC</strong></p>
                <p>Primary: <a href="tel:5676664390" className="text-[#00c2e7] hover:underline">(567) 666-4390</a></p>
                <p>Main Office: <a href="tel:5679703540" className="text-[#00c2e7] hover:underline">(567) 970-3540</a></p>
                <p>Fax: (567) 686-0191</p>
                <p>Email: <a href="mailto:freightfusion77@gmail.com" className="text-[#00c2e7] hover:underline">freightfusion77@gmail.com</a></p>
                <p>USDOT: 3426974 | MC: 1111300</p>
              </div>
              
              <div className="mt-6 p-4 bg-[#f8f9fa] rounded-lg">
                <p className="text-sm">
                  <strong>Effective Date:</strong> These Terms of Service are effective as of January 2025 and may be updated periodically. Continued use of our services constitutes acceptance of any modifications.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TermsOfService;