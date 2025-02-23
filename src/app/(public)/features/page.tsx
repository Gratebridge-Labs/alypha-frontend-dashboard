'use client';
import { useState } from 'react';
import { useTheme } from '@/contexts/ThemeContext';

type Feature = {
  id: string;
  title: string;
  description: string;
  icon: JSX.Element;
  details: {
    overview: string;
    benefits: string[];
    capabilities: string[];
  };
};

export default function FeaturesPage() {
  const { theme } = useTheme();
  const [selectedFeature, setSelectedFeature] = useState<Feature | null>(null);

  const features: Feature[] = [
    {
      id: 'ai-automation',
      title: 'AI-Powered Automation',
      description: 'Streamline your workflows with intelligent automation',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
      details: {
        overview: 'Transform your business operations with AI-powered automation that learns and adapts to your needs.',
        benefits: [
          'Reduce manual tasks by up to 80%',
          'Minimize human error',
          'Scale operations efficiently',
          'Improve customer response times'
        ],
        capabilities: [
          'Smart workflow automation',
          'Document processing',
          'Data analysis and reporting',
          'Predictive insights'
        ]
      }
    },
    {
      id: 'website-generation',
      title: 'Website Generation',
      description: 'Create professional websites instantly',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
      details: {
        overview: 'Generate beautiful, responsive websites tailored to your business needs with just a few clicks.',
        benefits: [
          'Launch websites in minutes',
          'No coding required',
          'Professional designs',
          'SEO optimized'
        ],
        capabilities: [
          'AI-powered design suggestions',
          'Custom domain integration',
          'Mobile optimization',
          'Built-in analytics'
        ]
      }
    },
    {
      id: 'customer-support',
      title: 'Customer Support AI',
      description: 'Provide 24/7 intelligent customer service',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
        </svg>
      ),
      details: {
        overview: 'Deliver exceptional customer support around the clock with AI-powered assistance.',
        benefits: [
          '24/7 availability',
          'Instant response times',
          'Consistent service quality',
          'Reduced support costs'
        ],
        capabilities: [
          'Natural language processing',
          'Multi-language support',
          'Automated ticket routing',
          'Knowledge base integration'
        ]
      }
    }
  ];

  return (
    <div className="min-h-screen bg-white dark:bg-black">
      {/* Hero Section */}
      <div className="py-24 px-6 sm:px-8 lg:px-16 text-center">
        <h1 className="text-4xl sm:text-5xl font-bold mb-6">
          Powerful Features for Modern Businesses
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
          Discover how Alypha's comprehensive suite of features can transform your business operations.
        </p>
      </div>

      {/* Features Grid */}
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-16 pb-24">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature) => (
            <button
              key={feature.id}
              onClick={() => setSelectedFeature(feature)}
              className="text-left p-6 rounded-xl border border-black/[.08] dark:border-white/[.08] hover:bg-black/[.02] dark:hover:bg-white/[.02] transition-colors"
            >
              <div className="w-12 h-12 mb-6 flex items-center justify-center rounded-full bg-black/[.02] dark:bg-white/[.02]">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold mb-4">{feature.title}</h3>
              <p className="text-gray-600 dark:text-gray-400">
                {feature.description}
              </p>
            </button>
          ))}
        </div>
      </div>

      {/* Feature Detail Modal */}
      {selectedFeature && (
        <div className="fixed inset-0 bg-black/5 backdrop-blur-sm z-40 flex items-center justify-center">
          <div className="bg-white dark:bg-black rounded-xl shadow-2xl max-w-2xl w-full mx-4 p-6">
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 flex items-center justify-center rounded-full bg-black/[.02] dark:bg-white/[.02]">
                  {selectedFeature.icon}
                </div>
                <h2 className="text-xl font-semibold">{selectedFeature.title}</h2>
              </div>
              <button
                onClick={() => setSelectedFeature(null)}
                className="p-2 hover:bg-black/5 dark:hover:bg-white/5 rounded-full"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            <p className="text-gray-600 dark:text-gray-400 mb-6">
              {selectedFeature.details.overview}
            </p>

            <div className="space-y-6">
              <div>
                <h3 className="font-medium mb-3">Key Benefits</h3>
                <ul className="space-y-2">
                  {selectedFeature.details.benefits.map((benefit, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <svg
                        className="w-5 h-5 text-green-500 mt-0.5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                      <span>{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 className="font-medium mb-3">Capabilities</h3>
                <ul className="space-y-2">
                  {selectedFeature.details.capabilities.map((capability, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <svg
                        className="w-5 h-5 text-blue-500 mt-0.5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                      <span>{capability}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
} 