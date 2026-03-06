import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowLeft, AlertTriangle, Info, DollarSign, Users } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Disclaimer | Tax Gains Calc',
  description: 'Important disclaimer for Tax Gains Calc capital gains tax calculator. Understand the limitations of our tax estimation tools and when to seek professional advice.',
};

export default function DisclaimerPage() {
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
          <AlertTriangle className="h-8 w-8 text-amber-500" />
          <h1 className="text-3xl md:text-4xl font-bold text-slate-900">
            Disclaimer
          </h1>
        </div>

        <div className="bg-amber-50 border border-amber-200 rounded-lg p-6 mb-8">
          <p className="text-amber-800 font-medium">
            <strong>IMPORTANT:</strong> Please read this disclaimer carefully before using our capital gains tax calculator. The information provided on this website is for general informational purposes only and should not be considered professional tax, legal, or financial advice.
          </p>
        </div>

        <div className="prose prose-slate max-w-none">
          <h2 className="text-2xl font-bold text-slate-900 mt-8 mb-4 flex items-center gap-2">
            <Info className="h-5 w-5 text-blue-600" />
            General Information Only
          </h2>
          <p className="text-slate-700 mb-4">
            The content, calculators, and tools provided on Tax Gains Calc (taxgainscalc.com) are intended for general informational and educational purposes only. They are designed to help you estimate potential capital gains tax liability, but they are not intended to provide comprehensive or specific tax advice for your individual situation.
          </p>
          <p className="text-slate-700 mb-4">
            Tax laws in the United States are complex and subject to frequent changes. The information on this website may not reflect the most current legal developments or apply to your specific circumstances. We make no representations or warranties about the completeness, accuracy, reliability, suitability, or availability of the information contained on this website.
          </p>

          <h2 className="text-2xl font-bold text-slate-900 mt-8 mb-4">Not Professional Tax Advice</h2>
          <p className="text-slate-700 mb-4">
            <strong>Our capital gains tax calculator does not constitute professional tax advice.</strong> The calculations provided are estimates based on general tax rules and the information you provide. These estimates may not reflect your actual tax liability due to numerous factors, including but not limited to:
          </p>
          <ul className="list-disc list-inside text-slate-700 mb-4 space-y-2">
            <li>State and local taxes that may apply to your situation</li>
            <li>Alternative Minimum Tax (AMT) considerations</li>
            <li>Net Investment Income Tax (NIIT) implications</li>
            <li>Specific deductions, credits, or exemptions you may qualify for</li>
            <li>Capital loss carryovers from previous years</li>
            <li>Wash sale adjustments</li>
            <li>Qualified small business stock exclusions</li>
            <li>Like-kind exchange (1031 exchange) deferrals</li>
            <li>Unique circumstances affecting your cost basis</li>
          </ul>

          <h2 className="text-2xl font-bold text-slate-900 mt-8 mb-4 flex items-center gap-2">
            <Users className="h-5 w-5 text-blue-600" />
            Consult a Qualified Professional
          </h2>
          <p className="text-slate-700 mb-4">
            Before making any tax-related decisions or filing your tax return, you should consult with a qualified tax professional, such as:
          </p>
          <ul className="list-disc list-inside text-slate-700 mb-4 space-y-2">
            <li><strong>Certified Public Accountant (CPA):</strong> A licensed professional who can provide comprehensive tax planning and preparation services.</li>
            <li><strong>Tax Attorney:</strong> A lawyer specializing in tax law for complex legal tax issues.</li>
            <li><strong>Enrolled Agent:</strong> A tax professional licensed by the IRS to represent taxpayers.</li>
            <li><strong>Tax Preparation Service:</strong> Professional services that can prepare your tax returns accurately.</li>
          </ul>
          <p className="text-slate-700 mb-4">
            These professionals can review your specific financial situation, applicable tax laws, and provide personalized advice that our calculator cannot offer.
          </p>

          <h2 className="text-2xl font-bold text-slate-900 mt-8 mb-4 flex items-center gap-2">
            <DollarSign className="h-5 w-5 text-blue-600" />
            No Financial Advice
          </h2>
          <p className="text-slate-700 mb-4">
            The information on this website does not constitute financial or investment advice. We are not financial advisors, and the content should not be relied upon for making investment decisions. Before making any investment decisions, please consult with a qualified financial advisor who can assess your individual financial situation, risk tolerance, and investment objectives.
          </p>

          <h2 className="text-2xl font-bold text-slate-900 mt-8 mb-4">Accuracy of Calculations</h2>
          <p className="text-slate-700 mb-4">
            While we make reasonable efforts to ensure our capital gains tax calculator uses accurate tax rates and thresholds, we cannot guarantee:
          </p>
          <ul className="list-disc list-inside text-slate-700 mb-4 space-y-2">
            <li>That all calculations are error-free</li>
            <li>That all applicable tax rules have been incorporated</li>
            <li>That the tax rates and brackets are current for all jurisdictions</li>
            <li>That the calculator accounts for all relevant tax code provisions</li>
          </ul>
          <p className="text-slate-700 mb-4">
            Tax calculations can vary significantly based on individual circumstances. What appears to be a simple calculation may involve complex considerations that our calculator does not address.
          </p>

          <h2 className="text-2xl font-bold text-slate-900 mt-8 mb-4">Limitation of Liability</h2>
          <p className="text-slate-700 mb-4">
            Under no circumstances shall Tax Gains Calc, its owners, operators, employees, or affiliates be liable for any direct, indirect, incidental, special, or consequential damages arising from your use of our website or reliance on any information provided herein. This includes, but is not limited to:
          </p>
          <ul className="list-disc list-inside text-slate-700 mb-4 space-y-2">
            <li>Damages resulting from errors in calculations</li>
            <li>Financial losses due to reliance on estimated tax figures</li>
            <li>Penalties or interest resulting from inaccurate tax filings</li>
            <li>Any other damages arising from your use of our services</li>
          </ul>
          <p className="text-slate-700 mb-4">
            You are solely responsible for verifying any information obtained from this website and for ensuring the accuracy of your tax filings.
          </p>

          <h2 className="text-2xl font-bold text-slate-900 mt-8 mb-4">Third-Party Content</h2>
          <p className="text-slate-700 mb-4">
            Our website may contain links to third-party websites or display third-party advertisements through Google AdSense. We do not control, endorse, or assume responsibility for the content, accuracy, or practices of any third-party websites or advertisers. Visiting linked websites or interacting with advertisements is at your own risk.
          </p>

          <h2 className="text-2xl font-bold text-slate-900 mt-8 mb-4">Changes and Updates</h2>
          <p className="text-slate-700 mb-4">
            Tax laws and regulations change frequently. We may update our calculator and content periodically, but we cannot guarantee that all information is current. The "Last Updated" date on this page and our calculator indicates when we last reviewed or updated our content.
          </p>

          <h2 className="text-2xl font-bold text-slate-900 mt-8 mb-4">IRS References</h2>
          <p className="text-slate-700 mb-4">
            For authoritative information about capital gains tax, we recommend referring to official IRS publications, including:
          </p>
          <ul className="list-disc list-inside text-slate-700 mb-4 space-y-2">
            <li>IRS Publication 550 - Investment Income and Expenses</li>
            <li>IRS Publication 544 - Sales and Other Dispositions of Assets</li>
            <li>IRS Publication 17 - Your Federal Income Tax</li>
            <li>Form 8949 - Sales and Other Dispositions of Capital Assets</li>
            <li>Schedule D - Capital Gains and Losses</li>
          </ul>
          <p className="text-slate-700 mb-4">
            These publications can be found at <a href="https://www.irs.gov" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">www.irs.gov</a>.
          </p>

          <h2 className="text-2xl font-bold text-slate-900 mt-8 mb-4">Acceptance of Terms</h2>
          <p className="text-slate-700 mb-4">
            By using Tax Gains Calc, you acknowledge that you have read, understood, and agree to this disclaimer. If you do not agree with any part of this disclaimer, please do not use our website or services.
          </p>

          <h2 className="text-2xl font-bold text-slate-900 mt-8 mb-4">Contact Us</h2>
          <p className="text-slate-700 mb-4">
            If you have any questions about this disclaimer, please contact us:
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
