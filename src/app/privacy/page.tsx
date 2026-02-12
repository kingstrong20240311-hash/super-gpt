import Link from "next/link";

export default function PrivacyPage() {
  return (
    <div className="bg-background-light dark:bg-background-dark min-h-screen">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            <Link href="/" className="flex items-center gap-2">
              <div className="w-8 h-8 bg-primary rounded flex items-center justify-center">
                <span className="material-icons text-white text-xl">bolt</span>
              </div>
              <span className="text-xl font-bold tracking-tight text-slate-900 dark:text-white">Super GPT</span>
            </Link>
            <nav className="hidden md:flex space-x-8 items-center">
              <Link className="text-sm font-medium text-slate-600 dark:text-slate-300 hover:text-primary" href="#">Product</Link>
              <Link className="text-sm font-medium text-slate-600 dark:text-slate-300 hover:text-primary" href="#">Pricing</Link>
              <Link className="text-sm font-medium text-slate-600 dark:text-slate-300 hover:text-primary" href="#">Enterprise</Link>
              <Link href="/login" className="bg-primary text-white px-4 py-2 rounded-lg text-sm font-semibold hover:bg-blue-600 transition-colors">Sign In</Link>
            </nav>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col md:flex-row gap-12">
          {/* Sidebar Navigation */}
          <aside className="w-full md:w-64 flex-shrink-0">
            <div className="sticky top-24 space-y-8">
              <div>
                <h4 className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-4">Legal Documents</h4>
                <nav className="space-y-1">
                  <a className="group flex items-center px-3 py-2 text-sm font-medium rounded-lg bg-primary/10 text-primary" href="#privacy-policy">
                    <span className="material-icons text-sm mr-2">security</span>
                    Privacy Policy
                  </a>
                  <a className="group flex items-center px-3 py-2 text-sm font-medium rounded-lg text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800" href="#terms-of-service">
                    <span className="material-icons text-sm mr-2">gavel</span>
                    Terms of Service
                  </a>
                </nav>
              </div>
              <div>
                <h4 className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-4">On this page</h4>
                <nav className="space-y-1 border-l-2 border-slate-200 dark:border-slate-800 ml-2">
                  <a className="block pl-4 py-1 text-sm text-slate-500 hover:text-primary border-l-2 border-transparent -ml-[2px] hover:border-primary" href="#introduction">Introduction</a>
                  <a className="block pl-4 py-1 text-sm text-slate-500 hover:text-primary border-l-2 border-transparent -ml-[2px] hover:border-primary" href="#collection">Data Collection</a>
                  <a className="block pl-4 py-1 text-sm text-slate-500 hover:text-primary border-l-2 border-transparent -ml-[2px] hover:border-primary" href="#usage">How We Use Data</a>
                  <a className="block pl-4 py-1 text-sm text-slate-500 hover:text-primary border-l-2 border-transparent -ml-[2px] hover:border-primary" href="#security">Data Security</a>
                  <a className="block pl-4 py-1 text-sm text-slate-500 hover:text-primary border-l-2 border-transparent -ml-[2px] hover:border-primary" href="#responsibilities">User Responsibilities</a>
                  <a className="block pl-4 py-1 text-sm text-slate-500 hover:text-primary border-l-2 border-transparent -ml-[2px] hover:border-primary" href="#liability">Limitation of Liability</a>
                  <a className="block pl-4 py-1 text-sm text-slate-500 hover:text-primary border-l-2 border-transparent -ml-[2px] hover:border-primary" href="#contact">Contact Us</a>
                </nav>
              </div>
            </div>
          </aside>

          {/* Main Content Area */}
          <article className="flex-1 max-w-4xl bg-white dark:bg-slate-900 p-8 md:p-12 rounded-2xl shadow-sm border border-slate-200 dark:border-slate-800">
            <div className="mb-10 pb-10 border-b border-slate-100 dark:border-slate-800">
              <h1 className="text-4xl font-extrabold text-slate-900 dark:text-white mb-4">Privacy Policy & Terms</h1>
              <div className="flex items-center gap-4 text-sm text-slate-500">
                <span className="flex items-center gap-1"><span className="material-icons text-xs">update</span> Last updated: October 24, 2023</span>
                <span className="flex items-center gap-1"><span className="material-icons text-xs">history</span> Version 2.4.0</span>
              </div>
            </div>

            <div className="legal-content">
              <section id="introduction">
                <h2>1. Introduction</h2>
                <p>Welcome to Super GPT. Your privacy and trust are paramount to us. This document combines our Privacy Policy and Terms of Service to provide a transparent overview of how we operate, how we handle your data, and what we expect from you as a user of our artificial intelligence platform.</p>
                <p>By using Super GPT, you agree to the practices and terms described herein. We encourage you to read this document in its entirety to understand your rights and responsibilities.</p>
              </section>

              <section id="collection">
                <h2>2. Information We Collect</h2>
                <p>In order to provide our AI-driven services, we collect several types of information from and about our users:</p>
                <ul>
                  <li><strong>Account Information:</strong> When you register, we collect your name, email address, and billing information.</li>
                  <li><strong>Interaction Data:</strong> We store the prompts you provide to the AI and the generated responses to improve service quality.</li>
                  <li><strong>Technical Data:</strong> IP addresses, browser types, and device information are collected for security and performance monitoring.</li>
                  <li><strong>Usage Metrics:</strong> We track how you interact with our interface to optimize the user experience.</li>
                </ul>
              </section>

              <section id="usage">
                <h2>3. How We Use Data</h2>
                <p>Super GPT uses your data to deliver, maintain, and improve our services. Specifically:</p>
                <ul>
                  <li>To provide the AI generation features you request.</li>
                  <li>To process payments and manage your subscription level.</li>
                  <li>To personalize your experience based on past interactions.</li>
                  <li>To detect and prevent fraudulent or abusive behavior on the platform.</li>
                </ul>
                <div className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-primary p-4 my-6">
                  <p className="text-sm font-medium text-primary mb-1">Important Privacy Note</p>
                  <p className="text-sm text-slate-600 dark:text-slate-400 mb-0">We do not sell your personal data to third parties. Your prompts are used for inference and, unless you opt-out, for fine-tuning our models to better serve your specific needs.</p>
                </div>
              </section>

              <section id="security">
                <h2>4. Data Security</h2>
                <p>We implement industry-standard security measures to protect your information. This includes end-to-end encryption for data in transit and AES-256 encryption for data at rest. Our infrastructure is hosted in SOC2-compliant data centers with 24/7 monitoring.</p>
                <p>Despite our best efforts, no method of transmission over the Internet is 100% secure. We encourage you to use strong passwords and enable two-factor authentication (2FA) where available.</p>
              </section>

              <section id="responsibilities">
                <h2>5. User Responsibilities</h2>
                <p>As a user of Super GPT, you agree to the following code of conduct:</p>
                <ul>
                  <li>You will not use the service to generate harmful, illegal, or sexually explicit content.</li>
                  <li>You are responsible for maintaining the confidentiality of your account credentials.</li>
                  <li>You will not attempt to reverse-engineer or &quot;jailbreak&quot; the AI models.</li>
                  <li>You must be at least 18 years of age or have legal guardian consent to use this service.</li>
                </ul>
              </section>

              <section id="liability">
                <h2>6. Limitation of Liability</h2>
                <p>Super GPT provides services on an &quot;as-is&quot; and &quot;as-available&quot; basis. While we strive for accuracy, AI-generated content can occasionally be incorrect, biased, or nonsensical. Super GPT shall not be liable for any damages arising from the use of or inability to use the service.</p>
                <p>Our total liability for any claim arising out of these terms shall not exceed the amount paid by you for the service in the twelve months preceding the claim.</p>
              </section>

              <section className="mt-16 pt-10 border-t border-slate-100 dark:border-slate-800" id="contact">
                <h2>Contact Us</h2>
                <p>If you have questions about this Privacy Policy or our Terms of Service, please contact our legal team:</p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-6">
                  <div className="p-5 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-800/50">
                    <span className="material-icons text-primary mb-2">email</span>
                    <p className="font-semibold text-slate-900 dark:text-white mb-1">Email Support</p>
                    <p className="text-sm text-slate-500">legal@supergpt.ai</p>
                  </div>
                  <div className="p-5 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-800/50">
                    <span className="material-icons text-primary mb-2">location_on</span>
                    <p className="font-semibold text-slate-900 dark:text-white mb-1">Office Location</p>
                    <p className="text-sm text-slate-500">123 AI Boulevard, Tech City, CA 94103</p>
                  </div>
                </div>
              </section>
            </div>
          </article>
        </div>
      </main>

      <footer className="bg-white dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-8">
            <Link href="/" className="flex items-center gap-2">
              <div className="w-6 h-6 bg-primary rounded flex items-center justify-center">
                <span className="material-icons text-white text-xs">bolt</span>
              </div>
              <span className="text-lg font-bold tracking-tight text-slate-900 dark:text-white">Super GPT</span>
            </Link>
            <div className="flex gap-8">
              <Link className="text-sm text-slate-500 hover:text-primary transition-colors" href="/privacy">Privacy</Link>
              <Link className="text-sm text-slate-500 hover:text-primary transition-colors" href="/privacy">Terms</Link>
              <Link className="text-sm text-slate-500 hover:text-primary transition-colors" href="#">Cookies</Link>
              <Link className="text-sm text-slate-500 hover:text-primary transition-colors" href="#">Security</Link>
            </div>
            <div className="text-sm text-slate-400">
              © 2023 Super GPT Inc. All rights reserved.
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
