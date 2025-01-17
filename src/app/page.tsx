import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Navbar */}
      <nav className="fixed w-full backdrop-blur-xl bg-white/70 dark:bg-black/70 z-50 border-b border-black/[.08] dark:border-white/[.08]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-2">
              <span className="text-2xl">א</span>
              <span className="font-[family-name:var(--font-geist-mono)]">Alypha</span>
            </div>
            <div className="hidden md:flex items-center gap-8">
              <a href="/product" className="text-sm hover:text-gray-600 dark:hover:text-gray-300">Product</a>
              <a href="/solutions" className="text-sm hover:text-gray-600 dark:hover:text-gray-300">Solutions</a>
              <a href="/pricing" className="text-sm hover:text-gray-600 dark:hover:text-gray-300">Pricing</a>
              <a href="/documentation" className="text-sm hover:text-gray-600 dark:hover:text-gray-300">Docs</a>
            </div>
            <div className="flex items-center gap-4">
              <a href="/login" className="text-sm hover:text-gray-600 dark:hover:text-gray-300">Log in</a>
              <a href="/get-started" className="text-sm bg-foreground text-background px-4 py-2 rounded-full hover:bg-[#383838] dark:hover:bg-[#ccc]">
                Get Started
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <main className="flex-1 pt-16">
        <div className="px-6 lg:px-8 pt-24 pb-20 max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-32">
            <div className="text-7xl font-bold mb-6">א</div>
            <h1 className="text-5xl sm:text-6xl font-bold tracking-tight mb-8">
              Infinite Possibilities for Creators and Managers
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
              Your central hub for project management, automation, and business growth. Streamline workflows, enhance productivity, and focus on what truly matters.
            </p>
            <div className="flex gap-4 justify-center flex-col sm:flex-row">
              <a
                className="rounded-full bg-foreground text-background hover:bg-[#383838] dark:hover:bg-[#ccc] h-12 px-8 flex items-center justify-center"
                href="/get-started"
              >
                Get Started
              </a>
              <a
                className="rounded-full border border-black/[.08] dark:border-white/[.145] hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] h-12 px-8 flex items-center justify-center"
                href="/demo"
              >
                View Demo
              </a>
            </div>
          </div>

          {/* Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-32">
            {[
              {
                title: "Seamless Integrations",
                description: "Connect with Notion, Jira, Slack, and more. Create a unified workspace for your team."
              },
              {
                title: "AI-Powered Automation",
                description: "Automate contracts, invoices, and repetitive tasks with intelligent tools."
              },
              {
                title: "SME Solutions",
                description: "Generate websites, manage orders, and handle customer interactions effortlessly."
              }
            ].map((feature, i) => (
              <div key={i} className="p-6 rounded-2xl border border-black/[.08] dark:border-white/[.145]">
                <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                <p className="text-gray-600 dark:text-gray-300">{feature.description}</p>
              </div>
            ))}
          </div>

          {/* Built for Every Professional Section */}
          <div className="mb-32">
            <h2 className="text-3xl font-bold mb-12">Built for Every Professional</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                {
                  title: "Product Managers",
                  subtitle: "Streamline your workflow",
                  description: "Transform project planning and execution with AI-powered tools and seamless integrations.",
                  image: "https://images.unsplash.com/photo-1553028826-f4804a6dba3b?auto=format&fit=crop&q=80",
                  alt: "Team collaborating on a project board"
                },
                {
                  title: "Creators & Designers",
                  subtitle: "Focus on creativity",
                  description: "Automate administrative tasks and streamline your creative process with intelligent tools.",
                  image: "https://images.unsplash.com/photo-1542744094-3a31f272c490?auto=format&fit=crop&q=80",
                  alt: "Designer working on a creative project"
                },
                {
                  title: "SME Solutions",
                  subtitle: "Scale your business",
                  description: "Generate websites, manage orders, and handle customer interactions effortlessly.",
                  image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80",
                  alt: "Business analytics and growth"
                },
                {
                  title: "Enterprise Teams",
                  subtitle: "Unify your workforce",
                  description: "Connect teams and workflows with enterprise-grade security and scalable solutions.",
                  image: "https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&q=80",
                  alt: "Modern office workspace"
                }
              ].map((item, i) => (
                <div
                  key={i}
                  className="group relative overflow-hidden rounded-3xl h-[400px] bg-white dark:bg-black"
                >
                  <div className="absolute inset-0 w-full h-full">
                    <img
                      src={item.image}
                      alt={item.alt}
                      className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/50 to-transparent"></div>
                  </div>
                  <div className="relative h-full p-8 flex flex-col justify-end text-white">
                    <div>
                      <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                      <p className="text-2xl font-bold mb-4">{item.subtitle}</p>
                      <p className="text-gray-200 mb-6">{item.description}</p>
                    </div>
                    <div className="transform translate-y-8 transition-transform duration-300 group-hover:translate-y-0 opacity-0 group-hover:opacity-100">
                      <a
                        href="#"
                        className="inline-flex items-center text-sm font-semibold text-white hover:opacity-80"
                      >
                        Learn more
                        <svg
                          className="ml-2 w-4 h-4"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M9 5l7 7-7 7"
                          />
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="w-full max-w-7xl mx-auto px-8">
        <div className="border-t border-gray-200 dark:border-gray-800 py-8">
          <div className="flex justify-between items-center flex-col sm:flex-row gap-4">
            <div className="flex items-center gap-2">
              <span className="text-2xl">א</span>
              <span className="font-[family-name:var(--font-geist-mono)]">Alypha</span>
            </div>
            <div className="flex gap-8 text-sm text-gray-600 dark:text-gray-300">
              <a href="/about" className="hover:text-gray-900 dark:hover:text-white">About</a>
              <a href="/privacy" className="hover:text-gray-900 dark:hover:text-white">Privacy Policy</a>
              <a href="/contact" className="hover:text-gray-900 dark:hover:text-white">Contact</a>
              <a href="/github" className="hover:text-gray-900 dark:hover:text-white">GitHub</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
