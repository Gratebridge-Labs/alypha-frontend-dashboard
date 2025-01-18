'use client';
import { useState } from 'react';
import Image from 'next/image';

export default function IntegrationsPage() {
  const [activeTab, setActiveTab] = useState('all');

  const activeIntegrations = [
    {
      name: 'WhatsApp',
      description: 'Manage orders, send catalogs, and handle customer service',
      icon: 'https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg',
      isConnected: true,
      category: 'commerce',
      features: [
        'Auto-respond to product inquiries',
        'Send digital menus and catalogs',
        'Track order status and inventory',
        'Automated payment confirmations',
        'Bulk message campaigns'
      ]
    },
    {
      name: 'Instagram',
      description: 'Social commerce and automated customer engagement',
      icon: 'https://upload.wikimedia.org/wikipedia/commons/e/e7/Instagram_logo_2016.svg',
      isConnected: false,
      category: 'commerce',
      features: [
        'Auto-post product updates',
        'Story menu automation',
        'Order via DM management',
        'Stock alerts in bio',
        'Automated pricing updates'
      ]
    },
    {
      name: 'Slack',
      description: 'Team collaboration and automated project updates',
      icon: 'https://upload.wikimedia.org/wikipedia/commons/d/d5/Slack_icon_2019.svg',
      isConnected: true,
      category: 'communication'
    },
    {
      name: 'Jira',
      description: 'Project tracking and task management',
      icon: 'https://upload.wikimedia.org/wikipedia/commons/8/8a/Jira_Logo.svg',
      isConnected: false,
      category: 'productivity'
    },
    {
      name: 'Gmail',
      description: 'Email integration for communications and notifications',
      icon: 'https://upload.wikimedia.org/wikipedia/commons/7/7e/Gmail_icon_%282020%29.svg',
      isConnected: false,
      category: 'communication'
    },
    {
      name: 'Google Calendar',
      description: 'Schedule management and event coordination',
      icon: 'https://upload.wikimedia.org/wikipedia/commons/a/a5/Google_Calendar_icon_%282020%29.svg',
      isConnected: false,
      category: 'productivity'
    },
    {
      name: 'Reminders',
      description: 'Native device reminders and task management',
      icon: 'https://upload.wikimedia.org/wikipedia/commons/8/8f/Apple_Reminders_icon.png',
      isConnected: false,
      category: 'productivity'
    }
  ];

  const comingSoonIntegrations = [
    {
      name: 'Shopify',
      description: 'E-commerce platform with inventory sync',
      icon: 'https://upload.wikimedia.org/wikipedia/commons/0/0e/Shopify_logo_2018.svg',
      category: 'commerce',
      features: [
        'Sync inventory across platforms',
        'Automated order fulfillment',
        'Customer database integration'
      ]
    },
    {
      name: 'Square',
      description: 'Payment processing and POS integration',
      icon: 'https://upload.wikimedia.org/wikipedia/commons/3/3e/Square_Logo.svg',
      category: 'commerce',
      features: [
        'Payment link generation',
        'Receipt automation',
        'Sales analytics'
      ]
    },
    {
      name: 'Google Business',
      description: 'Manage your business profile and reviews',
      icon: 'https://upload.wikimedia.org/wikipedia/commons/b/bd/Google_Maps_Logo_2020.svg',
      category: 'commerce',
      features: [
        'Review management',
        'Business hours updates',
        'Post scheduling'
      ]
    },
    {
      name: 'Notion',
      description: 'Document management and team wikis',
      icon: 'https://upload.wikimedia.org/wikipedia/commons/4/45/Notion_app_logo.png',
      category: 'productivity'
    }
  ];

  const tabs = ['all', 'commerce', 'communication', 'productivity'];

  return (
    <div className="max-w-6xl mx-auto">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-2xl font-semibold mb-2">Integrations</h1>
        <p className="text-black/60 dark:text-white/60">
          Connect your business tools and automate your workflow
        </p>
      </div>

      {/* Tabs */}
      <div className="flex gap-2 mb-8 border-b border-black/[.08] dark:border-white/[.08]">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-4 py-2 text-sm capitalize ${
              activeTab === tab 
                ? 'border-b-2 border-black dark:border-white' 
                : 'text-black/60 dark:text-white/60'
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Active Integrations */}
      <div className="mb-12">
        <h2 className="text-lg font-medium mb-4">Available Integrations</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {activeIntegrations
            .filter(integration => activeTab === 'all' || integration.category === activeTab)
            .map((integration) => (
              <div
                key={integration.name}
                className="p-4 rounded-lg border border-black/[.08] dark:border-white/[.08] hover:bg-black/[.02] dark:hover:bg-white/[.02]"
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-black/[.02] dark:bg-white/[.02] p-2">
                    <Image
                      src={integration.icon}
                      alt={integration.name}
                      width={32}
                      height={32}
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-medium mb-1">{integration.name}</h3>
                    <p className="text-sm text-black/60 dark:text-white/60 mb-3">
                      {integration.description}
                    </p>
                    {integration.features && (
                      <ul className="text-xs text-black/40 dark:text-white/40 mb-3 space-y-1">
                        {integration.features.map((feature, i) => (
                          <li key={i} className="flex items-center gap-1">
                            <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                            {feature}
                          </li>
                        ))}
                      </ul>
                    )}
                    <button
                      className={`text-sm px-3 py-1 rounded-full ${
                        integration.isConnected
                          ? 'bg-green-50 dark:bg-green-900/20 text-green-700 dark:text-green-400'
                          : 'bg-black dark:bg-white text-white dark:text-black'
                      }`}
                    >
                      {integration.isConnected ? 'Connected' : 'Connect'}
                    </button>
                  </div>
                </div>
              </div>
            ))}
        </div>
      </div>

      {/* Coming Soon */}
      <div>
        <h2 className="text-lg font-medium mb-4">Coming Soon</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {comingSoonIntegrations
            .filter(integration => activeTab === 'all' || integration.category === activeTab)
            .map((integration) => (
              <div
                key={integration.name}
                className="p-4 rounded-lg border border-black/[.08] dark:border-white/[.08] bg-black/[.02] dark:bg-white/[.02]"
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-black/[.05] dark:bg-white/[.05] p-2 opacity-50">
                    <Image
                      src={integration.icon}
                      alt={integration.name}
                      width={32}
                      height={32}
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-medium mb-1">{integration.name}</h3>
                    <p className="text-sm text-black/60 dark:text-white/60 mb-3">
                      {integration.description}
                    </p>
                    <span className="text-sm px-3 py-1 rounded-full bg-black/5 dark:bg-white/5 text-black/40 dark:text-white/40">
                      Coming Soon
                    </span>
                  </div>
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
} 