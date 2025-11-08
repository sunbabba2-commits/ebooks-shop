import Footer from 'components/layout/footer';
import Link from 'next/link';
import { Suspense } from 'react';
import OrderSnRedirect from './OrderSnRedirect';

export const metadata = {
  title: 'Coach AKen Digital Membership | Science-Based Fitness Education',
  description:
    'Join the Coach AKen Digital Membership for exclusive access to evidence-based fitness eBooks, training guides, and educational resources. Science-driven learning for performance, recovery, and nutrition.',
};

export default function MembershipPage() {
  return (
    <>
      <Suspense fallback={null}>
        <OrderSnRedirect />
      </Suspense>
      <div className="min-h-screen bg-gradient-to-b from-neutral-50 to-white dark:from-neutral-950 dark:to-neutral-900">
        {/* Hero Section */}
        <section className="relative overflow-hidden bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-500 py-20 dark:from-indigo-700 dark:via-purple-700 dark:to-pink-600">
          <div className="absolute inset-0 opacity-20" style={{
            backgroundImage: "url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4xIj48cGF0aCBkPSJNMzYgMzRjMC0yLjIxLTEuNzktNC00LTRzLTQgMS43OS00IDQgMS43OSA0IDQgNCA0LTEuNzkgNC00em0wLTEwYzAtMi4yMS0xLjc5LTQtNC00cy00IDEuNzktNCA0IDEuNzkgNCA0IDQgNC0xLjc5IDQtNHptMC0xMGMwLTIuMjEtMS43OS00LTQtNHMtNCAxLjc5LTQgNCAxLjc5IDQgNCA0IDQtMS43OSA0LTR6TTEyIDM0YzAtMi4yMS0xLjc5LTQtNC00cy00IDEuNzktNCA0IDEuNzkgNCA0IDQgNC0xLjc5IDQtNHptMC0xMGMwLTIuMjEtMS43OS00LTQtNHMtNCAxLjc5LTQgNCAxLjc5IDQgNCA0IDQtMS43OSA0LTR6bTAtMTBjMC0yLjIxLTEuNzktNC00LTRzLTQgMS43OS00IDQgMS43OSA0IDQgNCA0LTEuNzkgNC00eiIvPjwvZz48L2c+PC9zdmc+')"
          }}></div>
          
          <div className="relative mx-auto max-w-4xl px-6 text-center">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-white/20 px-4 py-2 backdrop-blur-sm">
              <span className="text-2xl">🧠</span>
              <span className="text-sm font-semibold text-white">Digital Education Platform</span>
            </div>
            
            <h1 className="mb-6 text-4xl font-black leading-tight text-white sm:text-5xl lg:text-6xl">
              Coach AKen Digital Membership
            </h1>
            
            <p className="mb-4 text-xl text-white/95">
              Science‑Based Fitness Education · Digital Publications · Evidence in Action
            </p>
            
            <p className="mx-auto max-w-3xl text-lg leading-relaxed text-white/90">
              The Coach AKen Digital Membership is your official gateway to evidence‑based learning for performance, recovery, and nutritional science.
            </p>
          </div>
        </section>

        {/* Main Content */}
        <section className="mx-auto max-w-5xl px-6 py-16">
          {/* Introduction */}
          <div className="mb-16 rounded-2xl border border-neutral-200 bg-white p-8 shadow-lg dark:border-neutral-800 dark:bg-neutral-900">
            <p className="mb-4 text-lg leading-relaxed text-neutral-700 dark:text-neutral-300">
              This is not a software‑as‑a‑service or an app license—it is a professionally curated digital publication program that delivers educational reading materials created by Coach AKen.
            </p>
            <p className="text-lg leading-relaxed text-neutral-700 dark:text-neutral-300">
              Subscribers receive exclusive access to digital eBooks, research‑driven training guides, and practical coaching resources designed to help you train smarter, recover faster, and live stronger.
            </p>
          </div>

          {/* What's Included */}
          <div className="mb-16">
            <h2 className="mb-8 flex items-center gap-3 text-3xl font-bold text-neutral-900 dark:text-white">
              <span className="text-4xl">📚</span>
              What Your Membership Includes
            </h2>
            
            <div className="space-y-4">
              <div className="flex gap-4 rounded-xl border border-neutral-200 bg-white p-6 dark:border-neutral-800 dark:bg-neutral-900">
                <div className="flex-shrink-0 text-2xl">✓</div>
                <p className="text-neutral-700 dark:text-neutral-300">
                  Full access to the <strong>Coach AKen Fit Series Library</strong>, a collection of concise, science‑focused eBooks (PDF format)
                </p>
              </div>
              
              <div className="flex gap-4 rounded-xl border border-neutral-200 bg-white p-6 dark:border-neutral-800 dark:bg-neutral-900">
                <div className="flex-shrink-0 text-2xl">✓</div>
                <p className="text-neutral-700 dark:text-neutral-300">
                  Continuous releases of new publications from Coach AKen during your active membership term
                </p>
              </div>
              
              <div className="flex gap-4 rounded-xl border border-neutral-200 bg-white p-6 dark:border-neutral-800 dark:bg-neutral-900">
                <div className="flex-shrink-0 text-2xl">✓</div>
                <p className="text-neutral-700 dark:text-neutral-300">
                  Downloadable educational content covering aerobic & anaerobic training, recovery systems, and healthy nutrition fundamentals
                </p>
              </div>
              
              <div className="flex gap-4 rounded-xl border border-neutral-200 bg-white p-6 dark:border-neutral-800 dark:bg-neutral-900">
                <div className="flex-shrink-0 text-2xl">✓</div>
                <p className="text-neutral-700 dark:text-neutral-300">
                  Members‑only reading editions, study guides, and supplemental resources
                </p>
              </div>
              
              <div className="flex gap-4 rounded-xl border border-neutral-200 bg-white p-6 dark:border-neutral-800 dark:bg-neutral-900">
                <div className="flex-shrink-0 text-2xl">✓</div>
                <p className="text-neutral-700 dark:text-neutral-300">
                  Periodic updates on performance tips, mobility frameworks, and applied exercise science
                </p>
              </div>
            </div>

            <div className="mt-6 rounded-xl border-2 border-orange-200 bg-orange-50 p-6 dark:border-orange-900 dark:bg-orange-950">
              <p className="mb-2 font-semibold text-orange-900 dark:text-orange-100">📝 Important Note:</p>
              <p className="text-orange-800 dark:text-orange-200">
                All materials are distributed as digital publications. There are no online tools, apps, or interactive dashboards. This membership strictly provides digital educational publications (digital goods) and not a software service.
              </p>
            </div>
          </div>

          {/* Membership Plans */}
          <div className="mb-16">
            <h2 className="mb-8 flex items-center gap-3 text-3xl font-bold text-neutral-900 dark:text-white">
              <span className="text-4xl">🗓️</span>
              Membership Plans
            </h2>
            
            <div className="grid gap-6 md:grid-cols-3">
              {/* 1-Month Plan */}
              <div className="rounded-2xl border-2 border-neutral-200 bg-white p-8 shadow-lg transition-all hover:border-purple-500 hover:shadow-xl dark:border-neutral-800 dark:bg-neutral-900">
                <h3 className="mb-2 text-2xl font-bold text-neutral-900 dark:text-white">1‑Month Access</h3>
                <p className="mb-4 text-sm text-neutral-600 dark:text-neutral-400">Perfect for trial learners</p>
                
                <div className="mb-6">
                  <div className="mb-4 text-3xl font-black text-purple-600 dark:text-purple-400">
                    $25<span className="text-lg font-normal text-neutral-600 dark:text-neutral-400">/month</span>
                  </div>
                  <p className="text-neutral-700 dark:text-neutral-300">
                    Try everything for one month. Gain full access to the entire Coach AKen Fit Series Library and any new eBooks released during your active period.
                  </p>
                </div>
                
                <p className="text-sm italic text-neutral-600 dark:text-neutral-400">
                  Perfect for first‑time readers and trial learners who want to explore the content in depth.
                </p>
              </div>

              {/* 3-Month Plan */}
              <div className="rounded-2xl border-2 border-purple-500 bg-white p-8 shadow-xl dark:border-purple-600 dark:bg-neutral-900">
                <div className="mb-2 inline-block rounded-full bg-purple-500 px-3 py-1 text-xs font-bold text-white">
                  POPULAR
                </div>
                <h3 className="mb-2 text-2xl font-bold text-neutral-900 dark:text-white">3‑Month Access</h3>
                <p className="mb-4 text-sm text-neutral-600 dark:text-neutral-400">Ideal for progressing learners</p>
                
                <div className="mb-6">
                  <div className="mb-4 text-3xl font-black text-purple-600 dark:text-purple-400">
                    $45<span className="text-lg font-normal text-neutral-600 dark:text-neutral-400">/3 months</span>
                  </div>
                  <p className="text-neutral-700 dark:text-neutral-300">
                    Access all published titles plus receive continuous new releases and updates throughout three months of membership.
                  </p>
                </div>
                
                <p className="text-sm italic text-neutral-600 dark:text-neutral-400">
                  Best for those following structured learning phases.
                </p>
              </div>

              {/* 12-Month Plan */}
              <div className="rounded-2xl border-2 border-neutral-200 bg-white p-8 shadow-lg transition-all hover:border-purple-500 hover:shadow-xl dark:border-neutral-800 dark:bg-neutral-900">
                <h3 className="mb-2 text-2xl font-bold text-neutral-900 dark:text-white">12‑Month Access</h3>
                <p className="mb-4 text-sm text-neutral-600 dark:text-neutral-400">Annual membership</p>
                
                <div className="mb-6">
                  <div className="mb-4 text-3xl font-black text-purple-600 dark:text-purple-400">
                    $72<span className="text-lg font-normal text-neutral-600 dark:text-neutral-400">/year</span>
                  </div>
                  <p className="text-neutral-700 dark:text-neutral-300">
                    Enjoy uninterrupted access to every current and future Coach AKen publication, exclusive annual bonuses, and additional digital education materials.
                  </p>
                </div>
                
                <p className="text-sm italic text-neutral-600 dark:text-neutral-400">
                  For dedicated professionals and long‑term learners.
                </p>
              </div>
            </div>

            <p className="mt-6 text-center text-sm text-neutral-600 dark:text-neutral-400">
              All memberships begin on the purchase date and remain active for the selected access period. After expiration, renewal is optional for ongoing access and updates.
            </p>
          </div>

          {/* Why Join */}
          <div className="mb-16 rounded-2xl border border-neutral-200 bg-gradient-to-br from-purple-50 to-pink-50 p-8 dark:border-neutral-800 dark:from-purple-950 dark:to-pink-950">
            <h2 className="mb-6 flex items-center gap-3 text-3xl font-bold text-neutral-900 dark:text-white">
              <span className="text-4xl">🎯</span>
              Why Join
            </h2>
            
            <ul className="space-y-3">
              <li className="flex gap-3 text-neutral-700 dark:text-neutral-300">
                <span className="flex-shrink-0 text-purple-600 dark:text-purple-400">▸</span>
                Build authentic knowledge using concise, science‑driven resources
              </li>
              <li className="flex gap-3 text-neutral-700 dark:text-neutral-300">
                <span className="flex-shrink-0 text-purple-600 dark:text-purple-400">▸</span>
                Replace social‑media myths with verified, research‑based training principles
              </li>
              <li className="flex gap-3 text-neutral-700 dark:text-neutral-300">
                <span className="flex-shrink-0 text-purple-600 dark:text-purple-400">▸</span>
                Learn at your own pace — all materials are self‑contained digital publications
              </li>
              <li className="flex gap-3 text-neutral-700 dark:text-neutral-300">
                <span className="flex-shrink-0 text-purple-600 dark:text-purple-400">▸</span>
                Suitable for coaches, fitness professionals, athletes, students, and motivated learners
              </li>
            </ul>
          </div>

          {/* Delivery & Access */}
          <div className="mb-16">
            <h2 className="mb-6 flex items-center gap-3 text-3xl font-bold text-neutral-900 dark:text-white">
              <span className="text-4xl">⚙️</span>
              Delivery & Access
            </h2>
            
            <div className="space-y-3 rounded-xl border border-neutral-200 bg-white p-6 dark:border-neutral-800 dark:bg-neutral-900">
              <p className="flex gap-3 text-neutral-700 dark:text-neutral-300">
                <span className="flex-shrink-0">•</span>
                Your digital membership begins immediately after checkout.
              </p>
              <p className="flex gap-3 text-neutral-700 dark:text-neutral-300">
                <span className="flex-shrink-0">•</span>
                All content is available for instant digital download or online reading.
              </p>
              <p className="flex gap-3 text-neutral-700 dark:text-neutral-300">
                <span className="flex-shrink-0">•</span>
                No physical shipment is required.
              </p>
              <p className="flex gap-3 text-neutral-700 dark:text-neutral-300">
                <span className="flex-shrink-0">•</span>
                All materials remain accessible during the active term of your membership.
              </p>
            </div>
          </div>

          {/* Classification Notice */}
          <div className="rounded-2xl border-2 border-blue-200 bg-blue-50 p-8 dark:border-blue-900 dark:bg-blue-950">
            <h2 className="mb-4 flex items-center gap-3 text-2xl font-bold text-blue-900 dark:text-blue-100">
              <span className="text-3xl">🧾</span>
              Classification Notice
            </h2>
            
            <div className="space-y-3 text-blue-800 dark:text-blue-200">
              <p>
                This product represents a <strong>digital publication membership</strong> that provides access to downloadable educational materials.
              </p>
              <p>
                It does not include or provide any software access, app functionality, or online SaaS platform.
              </p>
              <p>
                The membership serves as a time‑limited license for digital reading content delivery only.
              </p>
            </div>
          </div>

          {/* CTA */}
          <div className="mt-12 text-center">
            <Link
              href="/search/digital-membership"
              className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 px-8 py-4 text-lg font-bold text-white shadow-xl transition-all hover:scale-105 hover:shadow-2xl"
            >
              <span>Explore Membership Options</span>
              <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </Link>
            
            {/* Security Notice */}
            <div className="mt-6 flex flex-col items-center gap-2 text-sm text-neutral-600 dark:text-neutral-400">
              <div className="flex items-center gap-2">
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>Secure Checkout via Paddle Ltd (Merchant of Record)</span>
              </div>
              <div className="text-center">
                All digital sales are final once access has begun. See{' '}
                <Link href="/refund-policy" className="text-blue-600 hover:underline dark:text-blue-400">
                  Refund Policy
                </Link>
                .
              </div>
            </div>
          </div>
        </section>
      </div>

      <Footer />
    </>
  );
}
