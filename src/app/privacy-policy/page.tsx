import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowLeft, Shield, Lock, Eye, Database, UserCheck } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Privacy Policy | Tax Gains Calc',
  description: 'Privacy Policy for Tax Gains Calc. Learn how we collect, use, and protect your information when using our capital gains tax calculator.',
};

export default function PrivacyPolicyPage() {
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
          <Shield className="h-8 w-8 text-blue-600" />
          <h1 className="text-3xl md:text-4xl font-bold text-slate-900">
            Privacy Policy
          </h1>
        </div>

        <div className="bg-blue-50 border border-blue-100 rounded-lg p-4 mb-8">
          <p className="text-slate-700">
            <strong>Last Updated:</strong> March 2025 | <strong>Effective Date:</strong> March 2025
          </p>
        </div>

        <div className="prose prose-slate max-w-none">
          <p className="text-lg text-slate-700 mb-6">
            At Tax Gains Calc (taxgainscalc.com), we are committed to protecting your privacy and ensuring the security of any information you provide while using our capital gains tax calculator and related services. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our services.
          </p>

          <h2 className="text-2xl font-bold text-slate-900 mt-8 mb-4 flex items-center gap-2">
            <Eye className="h-5 w-5 text-blue-600" />
            Information We Collect
          </h2>
          <p className="text-slate-700 mb-4">
            When you use Tax Gains Calc, we may collect the following types of information:
          </p>
          
          <h3 className="text-xl font-semibold text-slate-800 mt-6 mb-3">Information You Provide</h3>
          <ul className="list-disc list-inside text-slate-700 mb-4 space-y-2">
            <li><strong>Calculation Data:</strong> When you use our capital gains tax calculator, you may enter information such as purchase price, sale price, holding period, and filing status. This information is processed locally in your browser and is not stored on our servers unless you explicitly choose to save or share it.</li>
            <li><strong>Contact Information:</strong> If you contact us via email, we may collect your email address and any other information you choose to provide in your communication.</li>
            <li><strong>Feedback:</strong> Any feedback, suggestions, or comments you submit to us.</li>
          </ul>

          <h3 className="text-xl font-semibold text-slate-800 mt-6 mb-3">Information Collected Automatically</h3>
          <ul className="list-disc list-inside text-slate-700 mb-4 space-y-2">
            <li><strong>Usage Data:</strong> We may collect information about how you interact with our website, including pages visited, time spent on pages, and features used.</li>
            <li><strong>Device Information:</strong> We may collect information about the device and browser you use to access our website, including device type, operating system, browser type, and screen resolution.</li>
            <li><strong>Location Data:</strong> We may collect general location information based on your IP address, such as country or region. This helps us provide relevant content and comply with regional requirements.</li>
          </ul>

          <h2 className="text-2xl font-bold text-slate-900 mt-8 mb-4 flex items-center gap-2">
            <Database className="h-5 w-5 text-blue-600" />
            How We Use Your Information
          </h2>
          <p className="text-slate-700 mb-4">
            We use the information we collect for the following purposes:
          </p>
          <ul className="list-disc list-inside text-slate-700 mb-4 space-y-2">
            <li><strong>Provide Services:</strong> To operate and maintain our capital gains tax calculator and deliver accurate tax calculations.</li>
            <li><strong>Improve Our Services:</strong> To understand how users interact with our website and identify areas for improvement.</li>
            <li><strong>Communication:</strong> To respond to your inquiries, provide customer support, and send important notices about our services.</li>
            <li><strong>Security:</strong> To detect and prevent fraud, abuse, and other violations of our Terms of Service.</li>
            <li><strong>Legal Compliance:</strong> To comply with applicable laws, regulations, and legal processes.</li>
          </ul>

          <h2 className="text-2xl font-bold text-slate-900 mt-8 mb-4 flex items-center gap-2">
            <Lock className="h-5 w-5 text-blue-600" />
            Data Security
          </h2>
          <p className="text-slate-700 mb-4">
            We implement appropriate technical and organizational measures to protect your information from unauthorized access, alteration, disclosure, or destruction. These measures include:
          </p>
          <ul className="list-disc list-inside text-slate-700 mb-4 space-y-2">
            <li>Secure socket layer (SSL) encryption for data transmission</li>
            <li>Regular security assessments and updates</li>
            <li>Access controls and authentication for sensitive systems</li>
            <li>Employee training on data protection practices</li>
          </ul>
          <p className="text-slate-700 mb-4">
            However, please note that no method of transmission over the Internet or method of electronic storage is 100% secure. While we strive to use commercially acceptable means to protect your information, we cannot guarantee its absolute security.
          </p>

          <h2 className="text-2xl font-bold text-slate-900 mt-8 mb-4 flex items-center gap-2">
            <UserCheck className="h-5 w-5 text-blue-600" />
            Third-Party Services
          </h2>
          <p className="text-slate-700 mb-4">
            We may use third-party services for the following purposes:
          </p>
          <ul className="list-disc list-inside text-slate-700 mb-4 space-y-2">
            <li><strong>Analytics:</strong> We may use Google Analytics or similar services to understand website usage and improve our content.</li>
            <li><strong>Advertising:</strong> We use Google AdSense to display advertisements on our website. Google AdSense uses cookies to serve ads based on your prior visits to our website or other websites. You can opt out of personalized advertising by visiting Google's Ad Settings.</li>
            <li><strong>Hosting:</strong> Our website is hosted on Vercel, which may collect certain technical information for hosting and security purposes.</li>
          </ul>

          <h2 className="text-2xl font-bold text-slate-900 mt-8 mb-4">Cookies and Tracking</h2>
          <p className="text-slate-700 mb-4">
            We use cookies and similar tracking technologies to enhance your experience on our website. Cookies are small data files stored on your device that help us remember your preferences and understand how you use our website.
          </p>
          <p className="text-slate-700 mb-4">
            Types of cookies we may use:
          </p>
          <ul className="list-disc list-inside text-slate-700 mb-4 space-y-2">
            <li><strong>Essential Cookies:</strong> Required for the website to function properly, such as maintaining your session.</li>
            <li><strong>Analytics Cookies:</strong> Help us understand how visitors interact with our website.</li>
            <li><strong>Advertising Cookies:</strong> Used by Google AdSense to serve relevant advertisements.</li>
          </ul>
          <p className="text-slate-700 mb-4">
            You can control cookies through your browser settings. However, disabling cookies may affect the functionality of our website and some features may not work properly.
          </p>

          <h2 className="text-2xl font-bold text-slate-900 mt-8 mb-4">Your Rights</h2>
          <p className="text-slate-700 mb-4">
            Depending on your location, you may have certain rights regarding your personal information:
          </p>
          <ul className="list-disc list-inside text-slate-700 mb-4 space-y-2">
            <li><strong>Access:</strong> Request information about the personal data we hold about you.</li>
            <li><strong>Correction:</strong> Request correction of inaccurate or incomplete data.</li>
            <li><strong>Deletion:</strong> Request deletion of your personal data.</li>
            <li><strong>Opt-Out:</strong> Opt out of certain uses of your information, such as personalized advertising.</li>
          </ul>
          <p className="text-slate-700 mb-4">
            To exercise these rights, please contact us at taxgainscalc@gmail.com.
          </p>

          <h2 className="text-2xl font-bold text-slate-900 mt-8 mb-4">Children's Privacy</h2>
          <p className="text-slate-700 mb-4">
            Our website is not intended for children under the age of 13. We do not knowingly collect personal information from children under 13. If you believe that a child has provided us with personal information, please contact us immediately, and we will take steps to delete such information.
          </p>

          <h2 className="text-2xl font-bold text-slate-900 mt-8 mb-4">Changes to This Policy</h2>
          <p className="text-slate-700 mb-4">
            We may update this Privacy Policy from time to time. The updated version will be indicated by an updated "Last Updated" date at the top of this policy. We encourage you to review this Privacy Policy periodically to stay informed about how we are protecting your information.
          </p>

          <h2 className="text-2xl font-bold text-slate-900 mt-8 mb-4">Contact Us</h2>
          <p className="text-slate-700 mb-4">
            If you have any questions about this Privacy Policy or our data practices, please contact us:
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
