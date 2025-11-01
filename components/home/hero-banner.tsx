import Link from 'next/link';

export function HeroBanner() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-500 dark:from-indigo-700 dark:via-purple-700 dark:to-pink-600">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-20" style={{
        backgroundImage: "url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4xIj48cGF0aCBkPSJNMzYgMzRjMC0yLjIxLTEuNzktNC00LTRzLTQgMS43OS00IDQgMS43OSA0IDQgNCA0LTEuNzkgNC00em0wLTEwYzAtMi4yMS0xLjc5LTQtNC00cy00IDEuNzktNCA0IDEuNzkgNCA0IDQgNC0xLjc5IDQtNHptMC0xMGMwLTIuMjEtMS43OS00LTQtNHMtNCAxLjc5LTQgNCAxLjc5IDQgNCA0IDQtMS43OSA0LTR6TTEyIDM0YzAtMi4yMS0xLjc5LTQtNC00cy00IDEuNzktNCA0IDEuNzkgNCA0IDQgNC0xLjc5IDQtNHptMC0xMGMwLTIuMjEtMS43OS00LTQtNHMtNCAxLjc5LTQgNCAxLjc5IDQgNCA0IDQtMS43OSA0LTR6bTAtMTBjMC0yLjIxLTEuNzktNC00LTRzLTQgMS43OS00IDQgMS43OSA0IDQgNCA0LTEuNzkgNC00eiIvPjwvZz48L2c+PC9zdmc+')"
      }}></div>
      
      <div className="relative mx-auto max-w-7xl px-6 py-16 pb-32 sm:py-24 sm:pb-40 lg:px-8 lg:pb-48">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Left: Text content */}
          <div className="flex flex-col justify-center">
            {/* Brand tag */}
            <div className="mb-6 inline-flex w-fit items-center gap-2 rounded-full bg-white/20 px-4 py-2 backdrop-blur-sm">
              <img src="/logo.png" alt="CoachAKen Logo" className="h-6 w-6 object-contain" />
              <span className="text-sm font-semibold text-white">CoachAKen Fitness Systems</span>
            </div>
            
            <h1 className="mb-4 text-4xl font-black leading-tight tracking-tight text-white sm:mb-6 sm:text-5xl lg:text-6xl">
              Train Smarter · Learn Better
            </h1>
            
            <p className="mb-6 text-base leading-relaxed text-white/90 sm:mb-8 sm:text-lg lg:text-xl">
              Science-based fitness eBooks written by CoachAKen.
            </p>
            
            <p className="mb-6 text-base leading-relaxed text-white/85 sm:text-lg">
              Understand the methods behind strength, endurance, and recovery.
            </p>
            
            <div className="mb-8 flex flex-wrap items-center gap-3 text-sm font-semibold text-white sm:gap-4 sm:text-base">
              <span className="flex items-center gap-2">
                <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                Monthly eBook Updates
              </span>
              <span className="hidden sm:inline text-white/40">×</span>
              <span className="flex items-center gap-2">
                <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
                Real Knowledge
              </span>
              <span className="hidden sm:inline text-white/40">×</span>
              <span className="flex items-center gap-2">
                <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
                Lasting Results
              </span>
            </div>
            
            {/* CTA buttons */}
            <div className="flex flex-wrap gap-4">
              <Link
                href="/search"
                className="group inline-flex items-center gap-2 rounded-full bg-white px-8 py-4 text-base font-bold text-purple-600 shadow-xl transition-all hover:scale-105 hover:shadow-2xl"
              >
                <span>Explore Programs</span>
                <svg className="h-5 w-5 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </Link>
            </div>

            {/* Trust indicators */}
            <div className="mt-10 flex flex-wrap items-center gap-6">
              <div className="flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white/20 backdrop-blur-sm">
                  <svg className="h-6 w-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <div className="text-sm text-white">
                  <div className="font-bold">100+</div>
                  <div className="opacity-90">Happy Readers</div>
                </div>
              </div>
              
              <div className="h-8 w-px bg-white/30"></div>
              
              <div className="flex items-center gap-3 text-white">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white/20 backdrop-blur-sm">
                  <svg className="h-6 w-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
                  </svg>
                </div>
                <div className="text-sm">
                  <div className="font-bold">24/7</div>
                  <div className="opacity-90">Customer Support</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Visual elements */}
          <div className="relative hidden lg:block">
            {/* Main display card */}
            <div className="relative z-10 animate-float">
              <div className="overflow-hidden rounded-3xl bg-white p-2 shadow-2xl">
                <div className="aspect-[3/4] overflow-hidden rounded-2xl">
                  <img 
                    src="/ren.png" 
                    alt="Hero Banner" 
                    className="h-full w-full object-cover"
                  />
                </div>
              </div>
            </div>

            {/* Decorative card 1 */}
            <div className="absolute -right-4 top-20 z-0 w-48 animate-float rounded-2xl bg-white p-4 shadow-xl" style={{ animationDelay: '0.5s' }}>
              <div className="mb-2 flex items-center gap-2">
                <div className="h-8 w-8 rounded-full bg-indigo-500"></div>
                <div className="text-xs font-bold">Strength</div>
              </div>
              <div className="space-y-1">
                <div className="h-1.5 w-full rounded-full bg-neutral-200"></div>
                <div className="h-1.5 w-3/4 rounded-full bg-neutral-200"></div>
              </div>
            </div>

            {/* Decorative card 2 */}
            <div className="absolute -left-4 bottom-20 z-0 w-48 animate-float rounded-2xl bg-white p-4 shadow-xl" style={{ animationDelay: '1s' }}>
              <div className="mb-2 flex items-center gap-2">
                <div className="h-8 w-8 rounded-full bg-pink-500"></div>
                <div className="text-xs font-bold">Conditioning</div>
              </div>
              <div className="space-y-1">
                <div className="h-1.5 w-full rounded-full bg-neutral-200"></div>
                <div className="h-1.5 w-2/3 rounded-full bg-neutral-200"></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
          <path d="M0 120L60 105C120 90 240 60 360 45C480 30 600 30 720 37.5C840 45 960 60 1080 67.5C1200 75 1320 75 1380 75L1440 75V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z" fill="currentColor" className="text-neutral-50 dark:text-neutral-950"/>
        </svg>
      </div>
    </section>
  );
}
