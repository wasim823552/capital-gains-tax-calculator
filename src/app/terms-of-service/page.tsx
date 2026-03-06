import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowLeft, FileText, Scale, AlertTriangle, Ban, RefreshCw } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Terms of Service | Tax Gains Calc',
  description: 'Terms of Service for Tax Gains Calc. Read our terms and conditions for using the capital gains tax calculator and related services.',
};

export default function TermsOfServicePage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      {/* Header */}
      <header className="bg-white border-b border-slate-200 sticky top-0 z-50">
        <div className="max-w-4xl mx-auto px-4 py-4">
          <Link href="/" className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 transition-colors">
            <ArrowLeft className="h-4 w-4" />
            Back to Calculator
          </Link>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-4 py-12">
        <div className="flex items-center gap-3 mb-8">
          <FileText className="h-8 w-8 text-blue-600" />
          <h1 className="text-3xl md:text-4xl font-bold text-slate-900">
            Terms of Service
          </h1>
        </div>

        <div className="bg-blue-50 border border-blue-100 rounded-lg p-4 mb-8">
          <p className="text-slate-700">
            <strong>Last Updated:</strong> March 2025 | <strong>Effective Date:</strong> March 2025
          </p>
        </div>

        <div className="prose prose-slate max-w-none">
          <p className="text-lg text-slate-700 mb-6">
            Welcome to Tax Gains Calc (taxgainscalc.com). These Terms of Service ("Terms") govern your use of our website and services. By accessing or using Tax Gains Calc, you agree to be bound by these Terms. If you do not agree to these Terms, please do not use our website or services.
          </p>

          <h2 className="text-2xl font-bold text-slate-900 mt-8 mb-4 flex items-center gap-2">
            <Scale className="h-5 w-5 text-blue-600" />
            1. Acceptance of Terms
          </h2>
          <p className="text-slate-700 mb-4">
            By accessing or using Tax Gains Calc, you acknowledge that you have read, understood, and agree to be bound by these Terms of Service and our Privacy Policy. These Terms constitute a legally binding agreement between you and Tax Gains Calc regarding your use of our website and services.
          </p>
          <p className="text-slate-700 mb-4">
            We reserve the right to modify these Terms at any time. Any changes will be effective immediately upon posting on this page. Your continued use of our website after any modifications indicates your acceptance of the modified Terms. We encourage you to review these Terms periodically.
          </p>

          <h2 className="text-2xl font-bold text-slate-900 mt-8 mb-4">2. Description of Services</h2>
          <p className="text-slate-700 mb-4">
            Tax Gains Calc provides a free online capital gains tax calculator designed to help users estimate potential tax liabilities on investment gains. Our services include:
          </p>
          <ul className="list-disc list-inside text-slate-700 mb-4 space-y-2">
            <li>Capital gains tax calculation tools</li>
            <li>Tax rate information for the current tax year</li>
            <li>Educational content about capital gains taxation</li>
            <li>Tax planning resources and guides</li>
          </ul>

          <h2 className="text-2xl font-bold text-slate-900 mt-8 mb-4 flex items-center gap-2">
            <AlertTriangle className="h-5 w-5 text-blue-600" />
            3. Disclaimer of Warranties
          </h2>
          <p className="text-slate-700 mb-4">
            <strong>IMPORTANT: Tax Gains Calc provides estimates for informational and educational purposes only. Our calculator is NOT a substitute for professional tax advice.</strong>
          </p>
          <p className="text-slate-700 mb-4">
            THE SERVICES PROVIDED BY TAX GAINS CALC ARE OFFERED "AS IS" AND "AS AVAILABLE" WITHOUT WARRANTIES OF ANY KIND, EITHER EXPRESS OR IMPLIED. TO THE FULLEST EXTENT PERMITTED BY LAW, WE DISCLAIM ALL WARRANTIES, INCLUDING BUT NOT LIMITED TO:
          </p>
          <ul className="list-disc list-inside text-slate-700 mb-4 space-y-2">
            <li>Warranties of merchantability and fitness for a particular purpose</li>
            <li>Warranties that the services will be uninterrupted, error-free, or secure</li>
            <li>Warranties regarding the accuracy, reliability, or completeness of any content</li>
            <li>Warranties that defects will be corrected</li>
          </ul>
          <p className="text-slate-700 mb-4">
            Tax calculations are complex and depend on individual circumstances. The estimates provided by our calculator may not reflect your actual tax liability. For accurate tax advice, please consult with a qualified tax professional, Certified Public Accountant (CPA), or tax attorney.
          </p>

          <h2 className="text-2xl font-bold text-slate-900 mt-8 mb-4">4. Limitation of Liability</h2>
          <p className="text-slate-700 mb-4">
            TO THE MAXIMUM EXTENT PERMITTED BY LAW, TAX GAINS CALC AND ITS OWNERS, OPERATORS, AFFILIATES, AND PARTNERS SHALL NOT BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, INCLUDING BUT NOT LIMITED TO:
          </p>
          <ul className="list-disc list-inside text-slate-700 mb-4 space-y-2">
            <li>Loss of profits, data, or business opportunities</li>
            <li>Damages resulting from reliance on information provided</li>
            <li>Damages resulting from errors in calculations</li>
            <li>Damages resulting from inability to access the website</li>
          </ul>
          <p className="text-slate-700 mb-4">
            We are not responsible for any decisions you make based on information obtained from our website. You agree to indemnify and hold harmless Tax Gains Calc from any claims arising from your use of our services.
          </p>

          <h2 className="text-2xl font-bold text-slate-900 mt-8 mb-4">5. Accuracy of Information</h2>
          <p className="text-slate-700 mb-4">
            While we strive to provide accurate and up-to-date tax information, tax laws and regulations change frequently. We make reasonable efforts to update our calculator with current tax rates and thresholds, but we cannot guarantee that all information is current or accurate.
          </p>
          <p className="text-slate-700 mb-4">
            Tax brackets, rates, and rules may vary based on numerous factors not captured by our calculator, including but not limited to:
          </p>
          <ul className="list-disc list-inside text-slate-700 mb-4 space-y-2">
            <li>State and local tax obligations</li>
            <li>Alternative minimum tax (AMT)</li>
            <li>Net investment income tax (NIIT)</li>
            <li>Specific deductions and credits</li>
            <li>Carryover losses from previous years</li>
          </ul>

          <h2 className="text-2xl font-bold text-slate-900 mt-8 mb-4 flex items-center gap-2">
            <Ban className="h-5 w-5 text-blue-600" />
            6. Prohibited Uses
          </h2>
          <p className="text-slate-700 mb-4">
            You agree not to use Tax Gains Calc for any unlawful purpose or in any way that could damage, disable, overburden, or impair the website. Prohibited activities include:
          </p>
          <ul className="list-disc list-inside text-slate-700 mb-4 space-y-2">
            <li>Attempting to gain unauthorized access to any portion of the website</li>
            <li>Using automated systems (bots, scrapers) to access the website without permission</li>
            <li>Interfering with the proper functioning of the website</li>
            <li>Transmitting viruses, malware, or other harmful code</li>
            <li>Collecting personal information about other users</li>
            <li>Using the website for any fraudulent purpose</li>
          </ul>

          <h2 className="text-2xl font-bold text-slate-900 mt-8 mb-4">7. Intellectual Property</h2>
          <p className="text-slate-700 mb-4">
            All content on Tax Gains Calc, including text, graphics, logos, calculator algorithms, and software, is the property of Tax Gains Calc or its content suppliers and is protected by intellectual property laws. You may not:
          </p>
          <ul className="list-disc list-inside text-slate-700 mb-4 space-y-2">
            <li>Copy, reproduce, or distribute our content without permission</li>
            <li>Modify or create derivative works based on our content</li>
            <li>Use our content for commercial purposes without authorization</li>
            <li>Remove any copyright or proprietary notices</li>
          </ul>

          <h2 className="text-2xl font-bold text-slate-900 mt-8 mb-4">8. Third-Party Links</h2>
          <p className="text-slate-700 mb-4">
            Our website may contain links to third-party websites or services that are not owned or controlled by Tax Gains Calc. We have no control over, and assume no responsibility for, the content, privacy policies, or practices of any third-party websites or services. You acknowledge and agree that Tax Gains Calc shall not be responsible or liable for any damage or loss caused by your use of any such content, goods, or services available on or through any such websites or services.
          </p>

          <h2 className="text-2xl font-bold text-slate-900 mt-8 mb-4">9. Advertisements</h2>
          <p className="text-slate-700 mb-4">
            Tax Gains Calc displays advertisements through Google AdSense and other advertising partners. We are not responsible for the content of advertisements displayed on our website. The inclusion of advertisements does not imply endorsement of the advertised products or services.
          </p>

          <h2 className="text-2xl font-bold text-slate-900 mt-8 mb-4 flex items-center gap-2">
            <RefreshCw className="h-5 w-5 text-blue-600" />
            10. Changes to Services
          </h2>
          <p className="text-slate-700 mb-4">
            We reserve the right to modify, suspend, or discontinue any aspect of our services at any time without prior notice. We shall not be liable to you or any third party for any modification, suspension, or discontinuance of our services.
          </p>

          <h2 className="text-2xl font-bold text-slate-900 mt-8 mb-4">11. Governing Law</h2>
          <p className="text-slate-700 mb-4">
            These Terms shall be governed by and construed in accordance with the laws of the United States of America, without regard to conflict of law principles. Any disputes arising under these Terms shall be subject to the exclusive jurisdiction of the courts located within the United States.
          </p>

          <h2 className="text-2xl font-bold text-slate-900 mt-8 mb-4">12. Severability</h2>
          <p className="text-slate-700 mb-4">
            If any provision of these Terms is found to be unenforceable or invalid, that provision shall be limited or eliminated to the minimum extent necessary, and the remaining provisions shall remain in full force and effect.
          </p>

          <h2 className="text-2xl font-bold text-slate-900 mt-8 mb-4">13. Contact Information</h2>
          <p className="text-slate-700 mb-4">
            If you have any questions about these Terms of Service, please contact us:
          </p>
          <div className="bg-slate-50 p-6 rounded-lg mb-6">
            <p className="text-slate-700">
              <strong>Email:</strong> taxgainscalc@gmail.com<br />
              <strong>Website:</strong> taxgainscalc.com
            </p>
          </div>
        </div>

        {/* Back to Calculator Button */}
        <div className="mt-12 text-center">
          <Link 
            href="/" 
            className="inline-flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Capital Gains Tax Calculator
          </Link>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-slate-900 text-slate-300 py-8 mt-16">
        <div className="max-w-4xl mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-6 mb-4">
            <Link href="/about" className="hover:text-white transition-colors">About Us</Link>
            <Link href="/contact" className="hover:text-white transition-colors">Contact</Link>
            <Link href="/privacy-policy" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="/terms-of-service" className="hover:text-white transition-colors">Terms of Service</Link>
            <Link href="/disclaimer" className="hover:text-white transition-colors">Disclaimer</Link>
          </div>
          <p className="text-center text-slate-500 text-sm">
            © {new Date().getFullYear()} Tax Gains Calc. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
