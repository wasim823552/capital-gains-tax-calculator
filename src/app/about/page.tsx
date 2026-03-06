import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowLeft, Mail, MapPin, Phone } from 'lucide-react';

export const metadata: Metadata = {
  title: 'About Us | Tax Gains Calc - Capital Gains Tax Calculator',
  description: 'Learn about Tax Gains Calc - Your trusted resource for accurate capital gains tax calculations and tax planning guidance for USA investors.',
};

export default function AboutPage() {
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
        <h1 className="text-3xl md:text-4xl font-bold text-slate-900 mb-8">
          About Tax Gains Calc
        </h1>

        <div className="prose prose-slate max-w-none">
          <p className="text-lg text-slate-700 mb-6">
            Welcome to Tax Gains Calc, your trusted online resource for calculating capital gains tax on investments in the United States. We are dedicated to helping investors, traders, and everyday Americans understand and accurately estimate their tax obligations on capital gains from stocks, cryptocurrency, real estate, and other investment assets.
          </p>

          <h2 className="text-2xl font-bold text-slate-900 mt-8 mb-4">Our Mission</h2>
          <p className="text-slate-700 mb-4">
            Our mission is to simplify the complex world of capital gains taxation. We believe that every investor deserves access to accurate, easy-to-use tax calculation tools without the need for expensive software or professional tax preparation services. Whether you are a seasoned stock trader, a cryptocurrency enthusiast, or someone selling their first investment property, Tax Gains Calc is here to help you navigate the tax implications of your financial decisions.
          </p>
          <p className="text-slate-700 mb-4">
            Tax planning should not be intimidating. That is why we have developed an intuitive capital gains tax calculator that takes into account all the essential factors: your filing status, holding period, taxable income, and the type of asset you have sold. Our goal is to empower you with the knowledge you need to make informed financial decisions and avoid surprises when tax season arrives.
          </p>

          <h2 className="text-2xl font-bold text-slate-900 mt-8 mb-4">What We Offer</h2>
          <p className="text-slate-700 mb-4">
            Tax Gains Calc provides a comprehensive suite of tools and resources for capital gains tax calculation and planning:
          </p>
          <ul className="list-disc list-inside text-slate-700 mb-4 space-y-2">
            <li><strong>Free Capital Gains Tax Calculator:</strong> Our flagship tool allows you to calculate both short-term and long-term capital gains tax based on current IRS tax brackets and rates for 2025-2026.</li>
            <li><strong>Filing Status Support:</strong> We support all IRS filing statuses including Single, Married Filing Jointly, Married Filing Separately, and Head of Household.</li>
            <li><strong>Multiple Asset Types:</strong> Calculate taxes on stocks, bonds, mutual funds, cryptocurrency, real estate, and other capital assets.</li>
            <li><strong>Tax Bracket Information:</strong> Up-to-date information on capital gains tax rates and income thresholds for the current tax year.</li>
            <li><strong>Educational Resources:</strong> Comprehensive guides on capital gains tax rules, strategies to minimize your tax liability, and answers to frequently asked questions.</li>
          </ul>

          <h2 className="text-2xl font-bold text-slate-900 mt-8 mb-4">Our Commitment to Accuracy</h2>
          <p className="text-slate-700 mb-4">
            We understand that tax calculations require precision. That is why we continuously update our calculator to reflect the latest IRS regulations, tax brackets, and inflation adjustments. Our team monitors changes to tax law and ensures that Tax Gains Calc remains accurate and reliable throughout the year.
          </p>
          <p className="text-slate-700 mb-4">
            For the 2025-2026 tax year, we have incorporated all inflation-adjusted thresholds for capital gains tax brackets, ensuring that your calculations reflect the most current tax rates. Whether you are planning for the current tax year or estimating future tax obligations, you can trust that our numbers are based on official IRS guidelines.
          </p>

          <h2 className="text-2xl font-bold text-slate-900 mt-8 mb-4">Who We Serve</h2>
          <p className="text-slate-700 mb-4">
            Tax Gains Calc serves a diverse community of investors and taxpayers across the United States:
          </p>
          <ul className="list-disc list-inside text-slate-700 mb-4 space-y-2">
            <li><strong>Individual Investors:</strong> Retail investors who buy and sell stocks, ETFs, and mutual funds in taxable brokerage accounts.</li>
            <li><strong>Cryptocurrency Traders:</strong> Crypto investors who need to calculate gains on Bitcoin, Ethereum, and other digital assets.</li>
            <li><strong>Real Estate Investors:</strong> Property investors and homeowners selling investment properties or second homes.</li>
            <li><strong>Day Traders:</strong> Active traders who frequently buy and sell securities and need to track short-term gains.</li>
            <li><strong>Tax Planners:</strong> Individuals who want to understand their potential tax liability before making investment decisions.</li>
          </ul>

          <h2 className="text-2xl font-bold text-slate-900 mt-8 mb-4">Disclaimer</h2>
          <p className="text-slate-700 mb-4">
            While we strive to provide accurate and helpful information, Tax Gains Calc is intended for educational and estimation purposes only. Our calculator provides estimates based on the information you provide and current tax rates. It should not be considered professional tax advice. For complex tax situations or specific questions about your tax obligations, we recommend consulting with a qualified tax professional or Certified Public Accountant (CPA).
          </p>

          <h2 className="text-2xl font-bold text-slate-900 mt-8 mb-4">Contact Us</h2>
          <p className="text-slate-700 mb-4">
            We value your feedback and are always looking for ways to improve our services. If you have questions, suggestions, or encounter any issues with our calculator, please do not hesitate to reach out to us.
          </p>
          
          <div className="bg-slate-50 p-6 rounded-lg mt-6">
            <h3 className="font-semibold text-slate-900 mb-4">Get in Touch</h3>
            <div className="space-y-3 text-slate-700">
              <p className="flex items-center gap-2">
                <Mail className="h-5 w-5 text-blue-600" />
                Email: taxgainscalc@gmail.com
              </p>
              <p className="flex items-center gap-2">
                <MapPin className="h-5 w-5 text-blue-600" />
                Serving investors across the United States
              </p>
            </div>
          </div>

          <h2 className="text-2xl font-bold text-slate-900 mt-8 mb-4">Thank You for Choosing Tax Gains Calc</h2>
          <p className="text-slate-700 mb-4">
            We appreciate your trust in Tax Gains Calc as your capital gains tax calculation resource. We are committed to providing you with accurate, free, and easy-to-use tools that help you make informed financial decisions. Start calculating your capital gains tax today and take control of your investment tax planning.
          </p>
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
