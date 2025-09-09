import { Shield, Eye, Lock, FileText } from 'lucide-react';

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-white py-20">
      <div className="container mx-auto px-6 max-w-4xl">
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-[#00c2e7]/10 rounded-full mb-6">
            <Shield size={32} className="text-[#00c2e7]" />
          </div>
          <h1 className="text-4xl font-bold text-gray-800 mb-4" style={{ fontFamily: 'Nunito' }}>
            Privacy Policy
          </h1>
          <p className="text-lg text-gray-600" style={{ fontFamily: 'Inter' }}>
            Last updated: January 2025
          </p>
        </div>

        <div className="prose prose-lg max-w-none">
          <div className="bg-[#f8f9fa] rounded-2xl p-8 mb-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-4 flex items-center" style={{ fontFamily: 'Nunito' }}>
              <Eye size={24} className="text-[#00c2e7] mr-3" />
              Information We Collect
            </h2>
            <div className="space-y-4 text-gray-700" style={{ fontFamily: 'Inter' }}>
              <p>HSS Transportation LLC ("we," "our," or "us") collects information to provide better transportation and logistics services to our customers.</p>
              
              <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">Personal Information</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>Contact information (name, email address, phone number, mailing address)</li>
                <li>Business information (company name, industry, shipping requirements)</li>
                <li>Payment information (billing address, payment method details)</li>
                <li>Shipment details (pickup and delivery locations, cargo descriptions)</li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">Automatically Collected Information</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>Website usage data (pages visited, time spent, click patterns)</li>
                <li>Device information (IP address, browser type, operating system)</li>
                <li>Location data (for shipment tracking and route optimization)</li>
                <li>Cookies and similar tracking technologies</li>
              </ul>
            </div>
          </div>

          <div className="bg-white border border-gray-200 rounded-2xl p-8 mb-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-4 flex items-center" style={{ fontFamily: 'Nunito' }}>
              <Lock size={24} className="text-[#ff7a64] mr-3" />
              How We Use Your Information
            </h2>
            <div className="space-y-4 text-gray-700" style={{ fontFamily: 'Inter' }}>
              <p>We use the collected information for the following purposes:</p>
              
              <div className="grid md:grid-cols-2 gap-6 mt-6">
                <div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-3">Service Delivery</h3>
                  <ul className="list-disc pl-6 space-y-1 text-sm">
                    <li>Process and fulfill transportation requests</li>
                    <li>Track shipments and provide updates</li>
                    <li>Communicate about service status</li>
                    <li>Handle billing and payments</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-3">Business Operations</h3>
                  <ul className="list-disc pl-6 space-y-1 text-sm">
                    <li>Improve our services and operations</li>
                    <li>Analyze usage patterns and preferences</li>
                    <li>Comply with legal and regulatory requirements</li>
                    <li>Prevent fraud and ensure security</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-[#f8f9fa] rounded-2xl p-8 mb-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-4 flex items-center" style={{ fontFamily: 'Nunito' }}>
              <FileText size={24} className="text-[#00c2e7] mr-3" />
              Information Sharing
            </h2>
            <div className="space-y-4 text-gray-700" style={{ fontFamily: 'Inter' }}>
              <p>We may share your information in the following circumstances:</p>
              
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Service Providers:</strong> Third-party vendors who assist in our operations (payment processors, tracking systems, etc.)</li>
                <li><strong>Business Partners:</strong> Other transportation companies when coordinating shipments</li>
                <li><strong>Legal Requirements:</strong> When required by law, regulation, or legal process</li>
                <li><strong>Business Transfers:</strong> In connection with mergers, acquisitions, or asset sales</li>
                <li><strong>Consent:</strong> When you have given explicit consent for sharing</li>
              </ul>
              
              <p className="mt-4 p-4 bg-white rounded-lg border-l-4 border-[#00c2e7]">
                <strong>We do not sell your personal information to third parties for marketing purposes.</strong>
              </p>
            </div>
          </div>

          <div className="bg-white border border-gray-200 rounded-2xl p-8 mb-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-4" style={{ fontFamily: 'Nunito' }}>
              Data Security & Retention
            </h2>
            <div className="space-y-4 text-gray-700" style={{ fontFamily: 'Inter' }}>
              <p>We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction.</p>
              
              <h3 className="text-lg font-semibold text-gray-800 mt-6 mb-3">Security Measures</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>Encryption of data in transit and at rest</li>
                <li>Regular security assessments and updates</li>
                <li>Access controls and employee training</li>
                <li>Secure data centers and backup systems</li>
              </ul>
              
              <h3 className="text-lg font-semibold text-gray-800 mt-6 mb-3">Data Retention</h3>
              <p>We retain personal information for as long as necessary to fulfill the purposes outlined in this policy, comply with legal obligations, resolve disputes, and enforce agreements.</p>
            </div>
          </div>

          <div className="bg-[#f8f9fa] rounded-2xl p-8 mb-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-4" style={{ fontFamily: 'Nunito' }}>
              Your Rights & Choices
            </h2>
            <div className="space-y-4 text-gray-700" style={{ fontFamily: 'Inter' }}>
              <p>You have the following rights regarding your personal information:</p>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <ul className="list-disc pl-6 space-y-2">
                    <li><strong>Access:</strong> Request copies of your personal information</li>
                    <li><strong>Correction:</strong> Request correction of inaccurate information</li>
                    <li><strong>Deletion:</strong> Request deletion of your personal information</li>
                  </ul>
                </div>
                <div>
                  <ul className="list-disc pl-6 space-y-2">
                    <li><strong>Portability:</strong> Request transfer of your data</li>
                    <li><strong>Objection:</strong> Object to processing of your information</li>
                    <li><strong>Restriction:</strong> Request restriction of processing</li>
                  </ul>
                </div>
              </div>
              
              <p className="mt-6 p-4 bg-white rounded-lg">
                To exercise these rights, contact us at <a href="mailto:freightfusion77@gmail.com" className="text-[#00c2e7] hover:underline">freightfusion77@gmail.com</a> or call <a href="tel:5676664390" className="text-[#00c2e7] hover:underline">(567) 666-4390</a>.
              </p>
            </div>
          </div>

          <div className="bg-white border border-gray-200 rounded-2xl p-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-4" style={{ fontFamily: 'Nunito' }}>
              Contact Information
            </h2>
            <div className="text-gray-700" style={{ fontFamily: 'Inter' }}>
              <p className="mb-4">If you have questions about this Privacy Policy, please contact us:</p>
              
              <div className="space-y-2">
                <p><strong>HSS Transportation LLC</strong></p>
                <p>Email: <a href="mailto:freightfusion77@gmail.com" className="text-[#00c2e7] hover:underline">freightfusion77@gmail.com</a></p>
                <p>Phone: <a href="tel:5676664390" className="text-[#00c2e7] hover:underline">(567) 666-4390</a></p>
                <p>USDOT: 3426974 | MC: 1111300</p>
              </div>
              
              <p className="mt-6 text-sm text-gray-600">
                This Privacy Policy may be updated periodically. We will notify you of any material changes by posting the new policy on our website.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;