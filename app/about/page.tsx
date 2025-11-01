import Footer from 'components/layout/footer';
import Link from 'next/link';

export const metadata = {
  title: 'About Coach AKen | Science-Based Performance Coach & Digital Educator',
  description:
    'Learn about Coach AKen, a performance coach and digital publisher dedicated to bringing science-based fitness education to everyday training through evidence-based publications.',
};

export default function AboutPage() {
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
              <span className="text-2xl">🧾</span>
              <span className="text-sm font-semibold text-white">Performance Coach & Digital Educator</span>
            </div>
            
            <h1 className="mb-6 text-4xl font-black leading-tight text-white sm:text-5xl lg:text-6xl">
              About Coach AKen
            </h1>
            
            <p className="mx-auto max-w-3xl text-xl leading-relaxed text-white/95">
              Coach AKen is a performance coach, educator, and digital publisher whose mission is to bring the clarity of science into everyday training.
            </p>
          </div>
        </section>

        {/* Main Content */}
        <section className="mx-auto max-w-5xl px-6 py-16">
          {/* Profile Section with Image */}
          <div className="mb-16 grid gap-8 md:grid-cols-2 md:items-center">
            <div className="order-2 md:order-1">
              <p className="mb-6 text-lg leading-relaxed text-neutral-700 dark:text-neutral-300">
                With a background rooted in exercise physiology, sports pedagogy, and practical coaching experience, Coach AKen bridges two worlds — the precision of academic research and the direct action of field‑tested training methods.
              </p>
              
              {/* Achievements */}
              <div className="rounded-xl border border-neutral-200 bg-white p-6 shadow-lg dark:border-neutral-800 dark:bg-neutral-900">
                <h3 className="mb-4 text-xl font-bold text-neutral-900 dark:text-white">
                  🏆 Professional Achievements
                </h3>
                <ul className="space-y-3">
                  <li className="flex gap-3 text-neutral-700 dark:text-neutral-300">
                    <span className="flex-shrink-0 text-blue-600 dark:text-blue-400">✓</span>
                    <span>Certified Exercise Physiologist & Performance Coach</span>
                  </li>
                  <li className="flex gap-3 text-neutral-700 dark:text-neutral-300">
                    <span className="flex-shrink-0 text-blue-600 dark:text-blue-400">✓</span>
                    <span>10+ Years of Practical Coaching Experience</span>
                  </li>
                  <li className="flex gap-3 text-neutral-700 dark:text-neutral-300">
                    <span className="flex-shrink-0 text-blue-600 dark:text-blue-400">✓</span>
                    <span>Recognized Educator in Sports Science & Biomechanics</span>
                  </li>
                  <li className="flex gap-3 text-neutral-700 dark:text-neutral-300">
                    <span className="flex-shrink-0 text-blue-600 dark:text-blue-400">✓</span>
                    <span>Developer of the Coach AKen Fit Series Educational Framework</span>
                  </li>
                </ul>
              </div>
            </div>
            
            <div className="order-1 md:order-2">
              <div className="overflow-hidden rounded-2xl border-4 border-white shadow-2xl dark:border-neutral-800">
                <img 
                  src="/ren.png" 
                  alt="Coach AKen" 
                  className="h-full w-full object-cover"
                />
              </div>
            </div>
          </div>

          {/* Industry Recognition */}
          <div className="mb-16 rounded-2xl border-2 border-orange-200 bg-gradient-to-br from-orange-50 to-yellow-50 p-8 dark:border-orange-800 dark:from-orange-950 dark:to-yellow-950">
            <h2 className="mb-6 flex items-center gap-3 text-3xl font-bold text-neutral-900 dark:text-white">
              <span className="text-4xl">🌟</span>
              Industry Recognition & Impact
            </h2>
            
            <div className="grid gap-6 md:grid-cols-2">
              <div className="rounded-xl border border-orange-200 bg-white p-6 dark:border-orange-800 dark:bg-neutral-900">
                <div className="mb-3 text-3xl">📚</div>
                <h3 className="mb-2 text-lg font-bold text-neutral-900 dark:text-white">
                  Educational Excellence Award
                </h3>
                <p className="text-sm text-neutral-600 dark:text-neutral-400">
                  Recognized for outstanding contribution to fitness education and evidence-based training methodology
                </p>
              </div>
              
              <div className="rounded-xl border border-orange-200 bg-white p-6 dark:border-orange-800 dark:bg-neutral-900">
                <div className="mb-3 text-3xl">🎓</div>
                <h3 className="mb-2 text-lg font-bold text-neutral-900 dark:text-white">
                  Sports Science Innovator
                </h3>
                <p className="text-sm text-neutral-600 dark:text-neutral-400">
                  Pioneering digital education platforms that make professional training knowledge accessible globally
                </p>
              </div>
              
              <div className="rounded-xl border border-orange-200 bg-white p-6 dark:border-orange-800 dark:bg-neutral-900">
                <div className="mb-3 text-3xl">👥</div>
                <h3 className="mb-2 text-lg font-bold text-neutral-900 dark:text-white">
                  Growing Community
                </h3>
                <p className="text-sm text-neutral-600 dark:text-neutral-400">
                  Building a trusted network of coaches, athletes, and fitness enthusiasts
                </p>
              </div>
              
              <div className="rounded-xl border border-orange-200 bg-white p-6 dark:border-orange-800 dark:bg-neutral-900">
                <div className="mb-3 text-3xl">⭐</div>
                <h3 className="mb-2 text-lg font-bold text-neutral-900 dark:text-white">
                  4.9/5.0 Average Rating
                </h3>
                <p className="text-sm text-neutral-600 dark:text-neutral-400">
                  Consistently high ratings from readers and members for content quality and practical application
                </p>
              </div>
            </div>
          </div>

          {/* Science-Based Approach */}
          <div className="mb-16">
            <h2 className="mb-6 text-3xl font-bold text-neutral-900 dark:text-white">
              A Science‑Based Approach to Human Performance
            </h2>
            
            <div className="space-y-6">
              <p className="text-lg leading-relaxed text-neutral-700 dark:text-neutral-300">
                Throughout his career, Coach AKen has pursued one consistent question:
              </p>
              
              <blockquote className="border-l-4 border-blue-600 bg-blue-50 p-6 italic dark:border-blue-400 dark:bg-blue-950">
                <p className="text-xl font-semibold text-blue-900 dark:text-blue-100">
                  "How can ordinary people train like professionals — safely, effectively, and intelligently?"
                </p>
              </blockquote>
              
              <p className="text-lg leading-relaxed text-neutral-700 dark:text-neutral-300">
                The answer lies in understanding science. Every digital book, guide, or membership resource created under Coach AKen Digital Publications is developed around that principle — building from physiology, biomechanics, and evidence‑based programming into practical application.
              </p>
            </div>
          </div>

          {/* Fit Series */}
          <div className="mb-16 rounded-2xl border border-neutral-200 bg-white p-8 shadow-lg dark:border-neutral-800 dark:bg-neutral-900">
            <p className="mb-6 text-lg leading-relaxed text-neutral-700 dark:text-neutral-300">
              The result is the <strong>Coach AKen Fit Series</strong> — a structured collection of digital eBooks covering:
            </p>
            
            <div className="space-y-4">
              <div className="flex gap-4 rounded-xl border border-neutral-200 bg-neutral-50 p-4 dark:border-neutral-700 dark:bg-neutral-800">
                <div className="flex-shrink-0 text-2xl">🏃</div>
                <div>
                  <h3 className="mb-1 font-bold text-neutral-900 dark:text-white">Aerobic Training</h3>
                  <p className="text-neutral-600 dark:text-neutral-400">How oxygen, heart‑rate zones, and endurance interplay.</p>
                </div>
              </div>
              
              <div className="flex gap-4 rounded-xl border border-neutral-200 bg-neutral-50 p-4 dark:border-neutral-700 dark:bg-neutral-800">
                <div className="flex-shrink-0 text-2xl">⚡</div>
                <div>
                  <h3 className="mb-1 font-bold text-neutral-900 dark:text-white">Anaerobic Training</h3>
                  <p className="text-neutral-600 dark:text-neutral-400">The principles of power, speed, and short‑term energy systems.</p>
                </div>
              </div>
              
              <div className="flex gap-4 rounded-xl border border-neutral-200 bg-neutral-50 p-4 dark:border-neutral-700 dark:bg-neutral-800">
                <div className="flex-shrink-0 text-2xl">💪</div>
                <div>
                  <h3 className="mb-1 font-bold text-neutral-900 dark:text-white">Muscle Recovery and Adaptation</h3>
                  <p className="text-neutral-600 dark:text-neutral-400">Optimizing rest, rebuilding, and long‑term resilience.</p>
                </div>
              </div>
              
              <div className="flex gap-4 rounded-xl border border-neutral-200 bg-neutral-50 p-4 dark:border-neutral-700 dark:bg-neutral-800">
                <div className="flex-shrink-0 text-2xl">🥗</div>
                <div>
                  <h3 className="mb-1 font-bold text-neutral-900 dark:text-white">Nutrition and Performance</h3>
                  <p className="text-neutral-600 dark:text-neutral-400">Fueling progress with precision and sustainability.</p>
                </div>
              </div>
            </div>
            
            <p className="mt-6 text-neutral-700 dark:text-neutral-300">
              Each volume is designed as an independent educational unit that connects to a larger framework — helping readers study, apply, and integrate science directly into their fitness journey.
            </p>
          </div>

          {/* From Coach to Digital Educator */}
          <div className="mb-16">
            <h2 className="mb-6 text-3xl font-bold text-neutral-900 dark:text-white">
              From Coach to Digital Educator
            </h2>
            
            <div className="space-y-6 text-lg leading-relaxed text-neutral-700 dark:text-neutral-300">
              <p>
                Before becoming a digital publisher, Coach AKen spent years coaching athletes, designing programs, and translating academic theory into field practice. His approach rejects extremes and quick fixes; every recommendation must be rooted in measurable physiology, not trends or opinions.
              </p>
              
              <p>
                This background shaped a teaching style that values clarity, progression, and integrity — qualities reflected in each publication's tone and structure.
              </p>
              
              <p>
                The transition to digital education came from a simple realization: fitness knowledge should not be locked behind geography or industry jargon. By converting structured content into digital eBooks and downloadable learning modules, Coach AKen created a model where quality education is open, affordable, and globally accessible.
              </p>
            </div>
          </div>

          {/* Purpose Behind Publications */}
          <div className="mb-16 rounded-2xl border border-neutral-200 bg-gradient-to-br from-indigo-50 to-purple-50 p-8 dark:border-neutral-800 dark:from-indigo-950 dark:to-purple-950">
            <h2 className="mb-6 text-3xl font-bold text-neutral-900 dark:text-white">
              The Purpose Behind the Publications
            </h2>
            
            <div className="space-y-6 text-lg leading-relaxed text-neutral-700 dark:text-neutral-300">
              <p className="text-xl font-semibold text-indigo-900 dark:text-indigo-100">
                Modern learners need more than motivation — they need a system.
              </p>
              
              <p>
                Coach AKen's materials provide clear explanations of complex concepts such as energy systems, recovery cycles, or nutrition timing — written in plain language yet backed by scientific sources and real‑world experience.
              </p>
              
              <p>
                Readers are encouraged not only to train harder, but to think deeper: to understand why and how performance adapts.
              </p>
              
              <p>
                This philosophy flows into the <strong>Coach AKen Digital Membership</strong>, a subscription‑based access point to the entire Fit Series library. It allows members to explore and study within a cohesive ecosystem — from aerobic fundamentals to advanced strength, recovery, and nutrition integration.
              </p>
            </div>
          </div>

          {/* Values and Vision */}
          <div className="mb-16">
            <h2 className="mb-6 text-3xl font-bold text-neutral-900 dark:text-white">
              Values and Vision
            </h2>
            
            <p className="mb-6 text-lg text-neutral-700 dark:text-neutral-300">
              The Coach AKen brand stands for three foundational values:
            </p>
            
            <div className="space-y-6">
              <div className="rounded-xl border-2 border-blue-200 bg-blue-50 p-6 dark:border-blue-800 dark:bg-blue-950">
                <h3 className="mb-3 text-xl font-bold text-blue-900 dark:text-blue-100">
                  Scientific Integrity
                </h3>
                <p className="text-blue-800 dark:text-blue-200">
                  Every resource is based on legitimate physiology and tested training logic.
                </p>
              </div>
              
              <div className="rounded-xl border-2 border-indigo-200 bg-indigo-50 p-6 dark:border-indigo-800 dark:bg-indigo-950">
                <h3 className="mb-3 text-xl font-bold text-indigo-900 dark:text-indigo-100">
                  Educational Transparency
                </h3>
                <p className="text-indigo-800 dark:text-indigo-200">
                  Information is presented clearly and directly, without exaggeration.
                </p>
              </div>
              
              <div className="rounded-xl border-2 border-purple-200 bg-purple-50 p-6 dark:border-purple-800 dark:bg-purple-950">
                <h3 className="mb-3 text-xl font-bold text-purple-900 dark:text-purple-100">
                  Practical Application
                </h3>
                <p className="text-purple-800 dark:text-purple-200">
                  Knowledge is meaningful only when it improves real‑world results.
                </p>
              </div>
            </div>
            
            <div className="mt-8 space-y-4 text-lg leading-relaxed text-neutral-700 dark:text-neutral-300">
              <p>
                In an industry clouded by trends and misinformation, Coach AKen represents a calm and credible voice — focusing on teaching, not selling; guiding, not guessing.
              </p>
              
              <p>
                Through consistent design, tone, and structure, the publications form a recognizable identity that readers can trust: clean, concise, and science‑driven.
              </p>
            </div>
          </div>

          {/* The Coach AKen Perspective */}
          <div className="rounded-2xl border-2 border-neutral-300 bg-neutral-100 p-8 dark:border-neutral-700 dark:bg-neutral-800">
            <h2 className="mb-6 text-3xl font-bold text-neutral-900 dark:text-white">
              The Coach AKen Perspective
            </h2>
            
            <blockquote className="mb-6 text-2xl font-bold italic text-neutral-900 dark:text-white">
              "True progress isn't luck — it's process."
            </blockquote>
            
            <div className="space-y-4 text-lg leading-relaxed text-neutral-700 dark:text-neutral-300">
              <p>
                Coach AKen invites every reader to step into that process with curiosity and patience, studying the mechanics of their own body as much as the movements in their training plan.
              </p>
              
              <p>
                Each digital edition becomes a companion for self‑coaching, reflection, and performance development.
              </p>
            </div>
          </div>

          {/* CTA */}
          <div className="mt-12 text-center">
            <div className="mb-6">
              <Link
                href="/membership"
                className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 px-8 py-4 text-lg font-bold text-white shadow-xl transition-all hover:scale-105 hover:shadow-2xl"
              >
                <span>Explore Digital Membership</span>
                <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </Link>
            </div>
            
            <Link
              href="/search"
              className="inline-flex items-center gap-2 text-blue-600 transition-colors hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300"
            >
              <span>Browse the Fit Series Library</span>
              <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </section>
      </div>

      <Footer />
    </>
  );
}
