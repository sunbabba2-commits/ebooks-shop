import Footer from 'components/layout/footer';
import Link from 'next/link';

export const metadata = {
  title: 'Contact Coach AKen | Get in Touch',
  description:
    'Contact Coach AKen for questions about the Fit Series, digital membership, or partnership opportunities. We respond within 2 business days.',
};

export default function ContactPage() {
  return (
    <>
      <div className="min-h-screen bg-gradient-to-b from-neutral-50 to-white dark:from-neutral-950 dark:to-neutral-900">
        {/* Hero Section */}
        <section className="relative overflow-hidden bg-gradient-to-br from-blue-600 via-indigo-600 to-purple-600 py-20 dark:from-blue-700 dark:via-indigo-700 dark:to-purple-700">
          <div className="absolute inset-0 opacity-20" style={{
            backgroundImage: "url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4xIj48cGF0aCBkPSJNMzYgMzRjMC0yLjIxLTEuNzktNC00LTRzLTQgMS43OS00IDQgMS43OSA0IDQgNCA0LTEuNzkgNC00em0wLTEwYzAtMi4yMS0xLjc5LTQtNC00cy00IDEuNzktNCA0IDEuNzkgNCA0IDQgNC0xLjc5IDQtNHptMC0xMGMwLTIuMjEtMS43OS00LTQtNHMtNCAxLjc5LTQgNCAxLjc5IDQgNCA0IDQtMS43OSA0LTR6TTEyIDM0YzAtMi4yMS0xLjc5LTQtNC00cy00IDEuNzktNCA0IDEuNzkgNCA0IDQgNC0xLjc5IDQtNHptMC0xMGMwLTIuMjEtMS43OS00LTQtNHMtNCAxLjc5LTQgNCAxLjc5IDQgNCA0IDQtMS43OSA0LTR6bTAtMTBjMC0yLjIxLTEuNzktNC00LTRzLTQgMS43OS00IDQgMS43OSA0IDQgNCA0LTEuNzkgNC00eiIvPjwvZz48L2c+PC9zdmc+')"
          }}></div>
          
          <div className="relative mx-auto max-w-4xl px-6 text-center">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-white/20 px-4 py-2 backdrop-blur-sm">
              <span className="text-2xl">📄</span>
              <span className="text-sm font-semibold text-white">Get in Touch</span>
            </div>
            
            <h1 className="mb-6 text-4xl font-black leading-tight text-white sm:text-5xl lg:text-6xl">
              Contact Coach AKen
            </h1>
            
            <p className="mx-auto max-w-3xl text-xl leading-relaxed text-white/95">
              We'd love to hear from you. Whether you have questions about the Coach AKen Fit Series, your digital membership, or partnership opportunities — this is the place to reach out.
            </p>
            <p className="mt-4 text-lg text-white/90">
              Every message is read personally, and we aim to respond within 2 business days.
            </p>
          </div>
        </section>

        {/* Main Content */}
        <section className="mx-auto max-w-5xl px-6 py-16">
          {/* Contact Information Block */}
          <div className="mb-16 grid gap-8 md:grid-cols-2">
            {/* Email Support */}
            <div className="rounded-2xl border border-neutral-200 bg-white p-8 shadow-lg dark:border-neutral-800 dark:bg-neutral-900">
              <div className="mb-4 flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-100 dark:bg-blue-900">
                  <span className="text-2xl">📧</span>
                </div>
                <h2 className="text-2xl font-bold text-neutral-900 dark:text-white">
                  Email Support
                </h2>
              </div>
              <a 
                href="mailto:support@coachaken.com"
                className="mb-3 block text-xl font-semibold text-blue-600 transition-colors hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300"
              >
                support@coachaken.com
              </a>
              <p className="text-neutral-600 dark:text-neutral-400">
                For product access, downloads, or billing inquiries.
              </p>
            </div>

            {/* General Inquiries / Partnerships */}
            <div className="rounded-2xl border border-neutral-200 bg-white p-8 shadow-lg dark:border-neutral-800 dark:bg-neutral-900">
              <div className="mb-4 flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-indigo-100 dark:bg-indigo-900">
                  <span className="text-2xl">🤝</span>
                </div>
                <h2 className="text-2xl font-bold text-neutral-900 dark:text-white">
                  General Inquiries / Partnerships
                </h2>
              </div>
              <a 
                href="mailto:connect@coachaken.com"
                className="mb-3 block text-xl font-semibold text-indigo-600 transition-colors hover:text-indigo-700 dark:text-indigo-400 dark:hover:text-indigo-300"
              >
                connect@coachaken.com
              </a>
              <p className="text-neutral-600 dark:text-neutral-400">
                For collaboration, licensing, media, or educational use requests.
              </p>
            </div>
          </div>

          {/* Office Hours */}
          <div className="mb-16 rounded-2xl border-2 border-purple-200 bg-gradient-to-br from-purple-50 to-pink-50 p-8 dark:border-purple-800 dark:from-purple-950 dark:to-pink-950">
            <div className="flex items-start gap-4">
              <div className="flex h-14 w-14 flex-shrink-0 items-center justify-center rounded-full bg-purple-100 dark:bg-purple-900">
                <span className="text-3xl">🕐</span>
              </div>
              <div>
                <h2 className="mb-3 text-2xl font-bold text-neutral-900 dark:text-white">
                  Office Hours
                </h2>
                <p className="mb-2 text-lg font-semibold text-purple-900 dark:text-purple-100">
                  Monday – Friday · 9 AM – 5 PM (UTC + 8)
                </p>
                <p className="text-neutral-600 dark:text-neutral-400">
                  Digital operations · No physical location for now.
                </p>
              </div>
            </div>
          </div>

          {/* Contact Form Section */}
          <div className="rounded-2xl border border-neutral-200 bg-white p-8 shadow-xl dark:border-neutral-800 dark:bg-neutral-900 md:p-12">
            <div className="mb-8">
              <h2 className="mb-4 text-3xl font-bold text-neutral-900 dark:text-white">
                📩 Send Us a Message
              </h2>
              <p className="text-lg leading-relaxed text-neutral-600 dark:text-neutral-400">
                Please complete the form below with as much detail as possible — including the product name, order ID (if applicable), or the topic of your message. This helps our digital team provide an accurate and efficient response.
              </p>
            </div>

            {/* Contact Form */}
            <form className="space-y-6">
              {/* Full Name */}
              <div>
                <label 
                  htmlFor="fullName" 
                  className="mb-2 block text-sm font-semibold text-neutral-700 dark:text-neutral-300"
                >
                  Full Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id="fullName"
                  name="fullName"
                  required
                  className="w-full rounded-lg border border-neutral-300 bg-white px-4 py-3 text-neutral-900 transition-colors focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20 dark:border-neutral-700 dark:bg-neutral-800 dark:text-white dark:focus:border-blue-400"
                  placeholder="Enter your full name"
                />
              </div>

              {/* Email Address */}
              <div>
                <label 
                  htmlFor="email" 
                  className="mb-2 block text-sm font-semibold text-neutral-700 dark:text-neutral-300"
                >
                  Email Address <span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full rounded-lg border border-neutral-300 bg-white px-4 py-3 text-neutral-900 transition-colors focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20 dark:border-neutral-700 dark:bg-neutral-800 dark:text-white dark:focus:border-blue-400"
                  placeholder="your.email@example.com"
                />
              </div>

              {/* Subject / Topic */}
              <div>
                <label 
                  htmlFor="subject" 
                  className="mb-2 block text-sm font-semibold text-neutral-700 dark:text-neutral-300"
                >
                  Subject / Topic <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  required
                  className="w-full rounded-lg border border-neutral-300 bg-white px-4 py-3 text-neutral-900 transition-colors focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20 dark:border-neutral-700 dark:bg-neutral-800 dark:text-white dark:focus:border-blue-400"
                  placeholder="What is your message about?"
                />
              </div>

              {/* Message Details */}
              <div>
                <label 
                  htmlFor="message" 
                  className="mb-2 block text-sm font-semibold text-neutral-700 dark:text-neutral-300"
                >
                  Message Details <span className="text-red-500">*</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={6}
                  className="w-full rounded-lg border border-neutral-300 bg-white px-4 py-3 text-neutral-900 transition-colors focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20 dark:border-neutral-700 dark:bg-neutral-800 dark:text-white dark:focus:border-blue-400"
                  placeholder="Please provide as much detail as possible, including product names, order IDs, or specific questions..."
                ></textarea>
              </div>

              {/* Submit Button */}
              <div>
                <button
                  type="submit"
                  className="w-full rounded-lg bg-gradient-to-r from-blue-600 to-indigo-600 px-8 py-4 text-lg font-bold text-white shadow-lg transition-all hover:scale-[1.02] hover:shadow-xl focus:outline-none focus:ring-4 focus:ring-blue-500/50 dark:from-blue-500 dark:to-indigo-500"
                >
                  Send Message
                </button>
              </div>

              {/* Success Message (Hidden by default - would be shown via JavaScript) */}
              <div className="hidden rounded-lg border-2 border-green-200 bg-green-50 p-4 dark:border-green-800 dark:bg-green-950">
                <div className="flex items-center gap-3">
                  <span className="text-2xl">✅</span>
                  <p className="font-semibold text-green-800 dark:text-green-200">
                    Thank you! Your message has been sent. We'll get back to you within 48 hours.
                  </p>
                </div>
              </div>
            </form>
          </div>

          {/* Privacy Note */}
          <div className="mt-12 rounded-xl border border-neutral-200 bg-neutral-50 p-6 dark:border-neutral-800 dark:bg-neutral-800">
            <div className="flex items-start gap-3">
              <span className="text-2xl">🔒</span>
              <div>
                <h3 className="mb-2 font-bold text-neutral-900 dark:text-white">
                  Privacy & Confidentiality
                </h3>
                <p className="text-sm leading-relaxed text-neutral-600 dark:text-neutral-400">
                  Your privacy matters. All messages are handled confidentially and used only for customer communication. We never share personal information with third parties.
                </p>
              </div>
            </div>
          </div>

          {/* Additional Links */}
          <div className="mt-12 text-center">
            <p className="mb-4 text-neutral-600 dark:text-neutral-400">
              Looking for more information?
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <Link
                href="/about"
                className="inline-flex items-center gap-2 text-blue-600 transition-colors hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300"
              >
                <span>About Coach AKen</span>
                <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
              <span className="text-neutral-300 dark:text-neutral-700">|</span>
              <Link
                href="/membership"
                className="inline-flex items-center gap-2 text-blue-600 transition-colors hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300"
              >
                <span>Digital Membership</span>
                <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
              <span className="text-neutral-300 dark:text-neutral-700">|</span>
              <Link
                href="/search"
                className="inline-flex items-center gap-2 text-blue-600 transition-colors hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300"
              >
                <span>Browse Products</span>
                <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          </div>
        </section>
      </div>

      <Footer />
    </>
  );
}
