'use client';
import { useState } from 'react';
import { useTheme } from '@/contexts/ThemeContext';

type PricingPlan = {
  name: string;
  price: string;
  billing: 'monthly' | 'yearly';
  description: string;
  features: string[];
  highlighted?: boolean;
};

export default function PricingPage() {
  const { theme } = useTheme();
  const [billing, setBilling] = useState<'monthly' | 'yearly'>('monthly');

  const plans: PricingPlan[] = [
    {
      name: 'Starter',
      price: billing === 'monthly' ? '$49' : '$470',
      billing,
      description: 'Perfect for small businesses just getting started',
      features: [
        'AI-powered website builder',
        'Basic marketing automation',
        'Customer support chatbot',
        'Up to 5 team members',
        '1,000 customer interactions/mo',
        'Basic analytics'
      ]
    },
    {
      name: 'Professional',
      price: billing === 'monthly' ? '$99' : '$950',
      billing,
      description: 'Ideal for growing businesses',
      features: [
        'Everything in Starter, plus:',
        'Advanced marketing automation',
        'Custom AI agents',
        'Up to 15 team members',
        '10,000 customer interactions/mo',
        'Advanced analytics & reporting',
        'Priority support'
      ],
      highlighted: true
    },
    {
      name: 'Enterprise',
      price: 'Custom',
      billing,
      description: 'For large organizations with specific needs',
      features: [
        'Everything in Professional, plus:',
        'Unlimited AI agents',
        'Unlimited team members',
        'Unlimited customer interactions',
        'Custom integrations',
        'Dedicated account manager',
        'SLA guarantee',
        'Custom training & onboarding'
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-white dark:bg-black">
      {/* Header */}
      <div className="py-24 px-6 sm:px-8 lg:px-16 text-center">
        <h1 className="text-4xl sm:text-5xl font-bold mb-6">
          Simple, transparent pricing
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
          Choose the perfect plan for your business. All plans include a 14-day free trial.
        </p>
        
        {/* Billing Toggle */}
        <div className="mt-12 inline-flex items-center p-1 bg-black/[.02] dark:bg-white/[.02] rounded-lg">
          <button
            onClick={() => setBilling('monthly')}
            className={`px-4 py-2 text-sm rounded-lg ${
              billing === 'monthly'
                ? 'bg-white dark:bg-black shadow-sm'
                : 'text-black/60 dark:text-white/60'
            }`}
          >
            Monthly
          </button>
          <button
            onClick={() => setBilling('yearly')}
            className={`px-4 py-2 text-sm rounded-lg ${
              billing === 'yearly'
                ? 'bg-white dark:bg-black shadow-sm'
                : 'text-black/60 dark:text-white/60'
            }`}
          >
            Yearly
            <span className="ml-1 text-green-500">-20%</span>
          </button>
        </div>
      </div>

      {/* Pricing Cards */}
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-16 pb-24">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`relative rounded-2xl p-8 ${
                plan.highlighted
                  ? 'border-2 border-black dark:border-white shadow-lg'
                  : 'border border-black/[.08] dark:border-white/[.08]'
              }`}
            >
              {plan.highlighted && (
                <div className="absolute -top-5 left-1/2 transform -translate-x-1/2">
                  <span className="px-4 py-1 bg-black dark:bg-white text-white dark:text-black text-sm font-medium rounded-full">
                    Most Popular
                  </span>
                </div>
              )}

              <div className="mb-6">
                <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                <p className="text-gray-600 dark:text-gray-400">
                  {plan.description}
                </p>
              </div>

              <div className="mb-6">
                <div className="flex items-end gap-2 mb-1">
                  <span className="text-4xl font-bold">{plan.price}</span>
                  {plan.price !== 'Custom' && (
                    <span className="text-gray-600 dark:text-gray-400 mb-1">
                      /{plan.billing}
                    </span>
                  )}
                </div>
                {billing === 'yearly' && plan.price !== 'Custom' && (
                  <p className="text-sm text-green-500">
                    Save 20% with yearly billing
                  </p>
                )}
              </div>

              <ul className="mb-8 space-y-4">
                {plan.features.map((feature, index) => (
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
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <button
                className={`w-full py-3 rounded-lg ${
                  plan.highlighted
                    ? 'bg-black dark:bg-white text-white dark:text-black'
                    : 'border border-black/[.08] dark:border-white/[.08] hover:bg-black/[.02] dark:hover:bg-white/[.02]'
                }`}
              >
                {plan.price === 'Custom' ? 'Contact Sales' : 'Start Free Trial'}
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
} 