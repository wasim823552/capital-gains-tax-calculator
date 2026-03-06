import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowLeft, Mail, MessageSquare, Clock, MapPin } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Contact Us | Tax Gains Calc - Get in Touch',
  description: 'Contact Tax Gains Calc for questions about capital gains tax calculator, feedback, or support. We are here to help with your tax calculation needs.',
};

export default function ContactPage() {
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
          Contact Us
        </h1>

        <div className="prose prose-slate max-w-none">
          <p className="text-lg text-slate-700 mb-6">
            We would love to hear from you! Whether you have questions about our capital gains tax calculator, need clarification on how to use our tools, have suggestions for improvement, or want to report an issue, our team is here to help. At Tax Gains Calc, we are committed to providing excellent support and continuously improving our services based on user feedback.
          </p>

          <h2 className="text-2xl font-bold text-slate-900 mt-8 mb-4">How to Reach Us</h2>
          
          <div className="grid md:grid-cols-2 gap-6 my-8">
            <div className="bg-blue-50 p-6 rounded-lg border border-blue-100">
              <div className="flex items-center gap-3 mb-3">
                <Mail className="h-6 w-6 text-blue-600" />
                <h3 className="font-semibold text-slate-900">Email Us</h3>
              </div>
              <p className="text-slate-700 mb-2">For general inquiries, feedback, and support:</p>
              <a href="mailto:taxgainscalc@gmail.com" className="text-blue-600 hover:text-blue-700 font-medium">
                taxgainscalc@gmail.com
              </a>
            </div>

            <div className="bg-green-50 p-6 rounded-lg border border-green-100">
              <div className="flex items-center gap-3 mb-3">
                <Clock className="h-6 w-6 text-green-600" />
                <h3 className="font-semibold text-slate-900">Response Time</h3>
              </div>
              <p className="text-slate-700 mb-2">We typically respond within:</p>
              <p className="text-green-600 font-medium">24-48 hours</p>
            </div>
          </div>

          <h2 className="text-2xl font-bold text-slate-900 mt-8 mb-4">What We Can Help With</h2>
          <p className="text-slate-700 mb-4">
            Our team is available to assist you with a variety of questions and concerns related to our capital gains tax calculator and related resources:
          </p>
          
          <div className="bg-slate-50 p-6 rounded-lg my-6">
            <ul className="space-y-3 text-slate-700">
              <li className="flex items-start gap-2">
                <span className="text-blue-600 mt-1">•</span>
                <span><strong>Calculator Questions:</strong> Need help understanding how to use our calculator or interpreting the results? We can guide you through the process step by step.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-600 mt-1">•</span>
                <span><strong>Tax Rate Clarifications:</strong> Questions about current capital gains tax rates, brackets, or how different filing statuses affect your tax liability? We are happy to explain.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-600 mt-1">•</span>
                <span><strong>Technical Issues:</strong> Encountering bugs, errors, or unexpected behavior? Report them to us and we will work to resolve them promptly.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-600 mt-1">•</span>
                <span><strong>Feature Requests:</strong> Have ideas for new features or improvements? We value your suggestions and consider all feedback for future updates.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-600 mt-1">•</span>
                <span><strong>Partnership Inquiries:</strong> Interested in partnering with Tax Gains Calc? Reach out to discuss potential collaborations.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-600 mt-1">•</span>
                <span><strong>Advertising:</strong> For advertising opportunities on our platform, please contact us via email.</span>
              </li>
            </ul>
          </div>

          <h2 className="text-2xl font-bold text-slate-900 mt-8 mb-4">Information to Include</h2>
          <p className="text-slate-700 mb-4">
            To help us assist you more effectively, please include the following information when contacting us:
          </p>
          <ul className="list-disc list-inside text-slate-700 mb-4 space-y-2">
            <li>A clear description of your question or issue</li>
            <li>The type of device and browser you were using (for technical issues)</li>
            <li>Any error messages you encountered</li>
            <li>Screenshots if applicable (especially for technical problems)</li>
            <li>Your preferred contact method and best times to reach you</li>
          </ul>

          <h2 className="text-2xl font-bold text-slate-900 mt-8 mb-4">Important Notice</h2>
          <div className="bg-amber-50 border border-amber-200 p-6 rounded-lg my-6">
            <p className="text-amber-800 mb-3">
              <strong>Please Note:</strong> Tax Gains Calc provides educational tools and estimates for informational purposes only. We are not a tax preparation service and cannot provide personalized tax advice or file taxes on your behalf.
            </p>
            <p className="text-amber-800">
              For specific tax questions related to your personal financial situation, complex transactions, or tax planning strategies, we recommend consulting with a qualified tax professional, Certified Public Accountant (CPA), or tax attorney licensed in your jurisdiction.
            </p>
          </div>

          <h2 className="text-2xl font-bold text-slate-900 mt-8 mb-4">Stay Connected</h2>
          <p className="text-slate-700 mb-4">
            We are continuously working to improve Tax Gains Calc and add new features. Stay connected with us for updates, tax tips, and important announcements that may affect your capital gains tax calculations.
          </p>

          <div className="bg-slate-900 text-white p-6 rounded-lg my-6">
            <h3 className="font-semibold mb-3">Contact Information Summary</h3>
            <div className="space-y-2">
              <p className="flex items-center gap-2">
                <Mail className="h-5 w-5 text-blue-400" />
                <span>Email: taxgainscalc@gmail.com</span>
              </p>
              <p className="flex items-center gap-2">
                <MapPin className="h-5 w-5 text-blue-400" />
                <span>Serving investors across the United States</span>
              </p>
              <p className="flex items-center gap-2">
                <MessageSquare className="h-5 w-5 text-blue-400" />
                <span>Response Time: 24-48 hours</span>
              </p>
            </div>
          </div>

          <p className="text-slate-700 mt-6">
            Thank you for using Tax Gains Calc! We appreciate your trust in our capital gains tax calculator and look forward to assisting you. Your feedback helps us improve and serve you better.
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
