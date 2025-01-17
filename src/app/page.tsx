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

          {/* Enhanced Target Audience Section */}
          <div className="max-w-6xl mx-auto mb-32">
            <h2 className="text-3xl font-bold mb-12 text-center">Built for Every Professional</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  title: "Product Managers",
                  description: "Streamline project planning and tracking",
                  image: "https://images.unsplash.com/photo-1531498860502-7c67cf02f657?q=80&w=400&h=300&fit=crop"
                },
                {
                  title: "Creators",
                  description: "Focus on creativity, not administration",
                  image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=400&h=300&fit=crop"
                },
                {
                  title: "SMEs",
                  description: "Enhance business productivity",
                  image: "https://images.unsplash.com/photo-1556761175-b413da4baf72?q=80&w=400&h=300&fit=crop"
                },
                {
                  title: "Enterprises",
                  description: "Unify teams and workflows",
                  image: "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=400&h=300&fit=crop"
                }
              ].map((audience, i) => (
                <div key={i} className="group relative overflow-hidden rounded-xl">
                  <div className="aspect-[4/3] relative">
                    <img 
                      src={audience.image} 
                      alt={audience.title}
                      className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                    <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                      <h3 className="font-semibold text-xl mb-2">{audience.title}</h3>
                      <p className="text-sm text-gray-200">{audience.description}</p>
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
