'use client';
import { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

// Integration Icons as SVG components
const IntegrationIcons = {
  zendesk: (
    <svg className="w-12 h-12" viewBox="0 0 24 24">
      <path d="M14.05 2.79c0 3.49-2.55 6.32-5.7 6.32-3.15 0-5.7-2.83-5.7-6.32h11.4zM2.65 16.54h11.4V24l-11.4-7.46zM8.35 0c3.15 0 5.7 2.83 5.7 6.32H2.65C2.65 2.83 5.2 0 8.35 0z" 
        fill="#03363D"/>
    </svg>
  ),
  intercom: (
    <svg className="w-12 h-12" viewBox="0 0 24 24">
      <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm0 3.6c4.64 0 8.4 3.76 8.4 8.4 0 4.64-3.76 8.4-8.4 8.4-4.64 0-8.4-3.76-8.4-8.4 0-4.64 3.76-8.4 8.4-8.4z" 
        fill="#1F2937"/>
      <path d="M7 14.5c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zm5 0c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zm5 0c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5z" 
        fill="#1F2937"/>
    </svg>
  ),
  freshdesk: (
    <svg className="w-12 h-12" viewBox="0 0 24 24" fill="#0B9BE3">
      <path d="M12 2.5L2.5 7.3v9.4l9.5 4.8 9.5-4.8V7.3L12 2.5zm0 2.1l6.9 3.4-6.9 3.4-6.9-3.4L12 4.6z"/>
    </svg>
  ),
  hubspot: (
    <svg className="w-12 h-12" viewBox="0 0 24 24" fill="#FF7A59">
      <path d="M12 3.54a8.46 8.46 0 100 16.92 8.46 8.46 0 000-16.92zM6.76 14.65a1.31 1.31 0 110-2.62 1.31 1.31 0 010 2.62zm3.28-5.23a1.31 1.31 0 110-2.62 1.31 1.31 0 010 2.62zm3.94 0a1.31 1.31 0 110-2.62 1.31 1.31 0 010 2.62zm3.28 5.23a1.31 1.31 0 110-2.62 1.31 1.31 0 010 2.62z"/>
    </svg>
  ),
  mailchimp: (
    <svg className="w-12 h-12" viewBox="0 0 24 24" fill="#FFE01B">
      <path d="M12 2.5c-5.25 0-9.5 4.25-9.5 9.5s4.25 9.5 9.5 9.5 9.5-4.25 9.5-9.5-4.25-9.5-9.5-9.5zm4.5 11.5h-9v-4h9v4z"/>
    </svg>
  ),
  buffer: (
    <svg className="w-12 h-12" viewBox="0 0 24 24" fill="#231F20">
      <path d="M12 2L2 6.5l10 4.5 10-4.5L12 2zM2 11.5L12 16l10-4.5v-2L12 14 2 9.5v2zM2 16.5L12 21l10-4.5v-2L12 19 2 14.5v2z"/>
    </svg>
  ),
  github: (
    <svg className="w-12 h-12" viewBox="0 0 24 24" fill="#181717">
      <path d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.17 6.839 9.49.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.604-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.464-1.11-1.464-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0112 6.836c.85.004 1.705.114 2.504.336 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.167 22 16.418 22 12c0-5.523-4.477-10-10-10z"/>
    </svg>
  ),
  jira: (
    <svg className="w-12 h-12" viewBox="0 0 24 24" fill="#0052CC">
      <path d="M11.571 11.513H0a5.218 5.218 0 0 0 5.232 5.215h2.13v2.057A5.215 5.215 0 0 0 12.575 24V12.518a1.005 1.005 0 0 0-1.005-1.005zm5.723-5.756H5.736a5.215 5.215 0 0 0 5.215 5.214h2.129v2.058a5.218 5.218 0 0 0 5.215 5.214V6.762a1.005 1.005 0 0 0-1.001-1.005zM23.015 0H11.459a5.215 5.215 0 0 0 5.214 5.215h2.129v2.057A5.215 5.215 0 0 0 24 12.483V1.005A1.005 1.005 0 0 0 23.015 0z"/>
    </svg>
  ),
  docusign: (
    <svg className="w-12 h-12" viewBox="0 0 24 24" fill="#FFCC22">
      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 13.55l-1.47 1.47-3.18-3.18-3.17 3.17-1.47-1.47 3.17-3.17-3.17-3.17 1.47-1.47 3.17 3.17 3.18-3.17 1.47 1.47-3.18 3.17 3.18 3.18z"/>
    </svg>
  ),
  slack: (
    <svg className="w-12 h-12" viewBox="0 0 24 24" fill="none">
      <path d="M5.042 15.165a2.528 2.528 0 0 1-2.52 2.523A2.528 2.528 0 0 1 0 15.165a2.527 2.527 0 0 1 2.522-2.52h2.52v2.52zM6.313 15.165a2.527 2.527 0 0 1 2.521-2.52 2.527 2.527 0 0 1 2.521 2.52v6.313A2.528 2.528 0 0 1 8.834 24a2.528 2.528 0 0 1-2.521-2.522v-6.313zM8.834 5.042a2.528 2.528 0 0 1-2.521-2.52A2.528 2.528 0 0 1 8.834 0a2.528 2.528 0 0 1 2.521 2.522v2.52H8.834zM8.834 6.313a2.528 2.528 0 0 1 2.521 2.521 2.528 2.528 0 0 1-2.521 2.521H2.522A2.528 2.528 0 0 1 0 8.834a2.528 2.528 0 0 1 2.522-2.521h6.312zM18.956 8.834a2.528 2.528 0 0 1 2.522-2.521A2.528 2.528 0 0 1 24 8.834a2.528 2.528 0 0 1-2.522 2.521h-2.522V8.834zM17.688 8.834a2.528 2.528 0 0 1-2.523 2.521 2.527 2.527 0 0 1-2.52-2.521V2.522A2.527 2.527 0 0 1 15.165 0a2.528 2.528 0 0 1 2.523 2.522v6.312zM15.165 18.956a2.528 2.528 0 0 1 2.523 2.522A2.528 2.528 0 0 1 15.165 24a2.527 2.527 0 0 1-2.52-2.522v-2.522h2.52zM15.165 17.688a2.527 2.527 0 0 1-2.52-2.523 2.526 2.526 0 0 1 2.52-2.52h6.313A2.527 2.527 0 0 1 24 15.165a2.528 2.528 0 0 1-2.522 2.523h-6.313z" 
        fill="#E01E5A"/>
    </svg>
  ),
  gmail: (
    <svg className="w-12 h-12" viewBox="0 0 24 24" fill="none">
      <path d="M24 5.457v13.909c0 .904-.732 1.636-1.636 1.636h-3.819V11.73L12 16.64l-6.545-4.91v9.273H1.636A1.636 1.636 0 0 1 0 19.366V5.457c0-2.023 2.309-3.178 3.927-1.964L5.455 4.64 12 9.548l6.545-4.6.826-.483c.874-.656 2.121-.035 2.121 1.06z" 
        fill="#EA4335"/>
    </svg>
  ),
  outlook: (
    <svg className="w-12 h-12" viewBox="0 0 24 24" fill="none">
      <path d="M24 7.387v10.478c0 .23-.153.383-.383.383h-8.234v-4.76L12 15.42l-3.383-1.933v4.76H.383A.383.383 0 0 1 0 17.865V7.387c0-1.095 1.247-1.716 2.121-1.06l.826.483L12 11.41l9.053-4.6.826-.483c.874-.656 2.121-.035 2.121 1.06z" 
        fill="#0078D4"/>
    </svg>
  ),
  'microsoft-teams': (
    <svg className="w-12 h-12" viewBox="0 0 24 24" fill="none">
      <path d="M19.796 4.147c0 1.262-.895 2.278-2 2.278h-2.316v-.005C15.496 5.91 14.704 5 13.748 5c-.956 0-1.751.91-1.751 2.42v8.184c0 1.51.795 2.42 1.751 2.42.956 0 1.748-.91 1.748-2.42v-3.002h2.316c1.105 0 2 .616 2 1.278v1.88c0 2.325-1.886 4.213-4.211 4.213h-8.29C4.886 20.973 3 19.085 3 16.76V7.24C3 4.915 4.886 3.027 7.211 3.027h8.29c2.325 0 4.211 1.888 4.211 4.213v1.88z" 
        fill="#464EB8"/>
      <path d="M14.796 12.147c0 .662-.895 1.278-2 1.278h-2.316v-.005c-.016-.51-.808-1.42-1.764-1.42-.956 0-1.751.91-1.751 2.42v4.184c0 1.51.795 2.42 1.751 2.42.956 0 1.748-.91 1.748-2.42v-1.002h2.316c1.105 0 2 .616 2 1.278v.88c0 2.325-1.886 4.213-4.211 4.213h-4.29C4.886 23.973 3 22.085 3 19.76v-5.24c0-2.325 1.886-4.213 4.211-4.213h4.29c2.325 0 4.211 1.888 4.211 4.213v.88z" 
        fill="#464EB8" fillOpacity="0.8"/>
    </svg>
  ),
};

type Integration = {
  id: string;
  name: string;
  description: string;
  category: 'support' | 'marketing' | 'coming_soon';
  icon: keyof typeof IntegrationIcons;
  status: 'connected' | 'disconnected' | 'coming_soon';
  aiAgents: string[];
};

export default function IntegrationsPage() {
  const [activeCategory, setActiveCategory] = useState<'all' | 'support' | 'marketing' | 'coming_soon'>('all');

  const integrations: Integration[] = [
    // Communication & Collaboration
    {
      id: 'slack1',
      name: 'Slack',
      description: 'Team communication and collaboration',
      category: 'support',
      icon: 'slack',
      status: 'connected',
      aiAgents: ['Noah', 'Emma']
    },
    {
      id: 'teams1',
      name: 'Microsoft Teams',
      description: 'Enterprise communication platform',
      category: 'support',
      icon: 'microsoft-teams',
      status: 'disconnected',
      aiAgents: []
    },
    
    // Email Platforms
    {
      id: 'gmail1',
      name: 'Gmail',
      description: 'Email and communication platform',
      category: 'marketing',
      icon: 'gmail',
      status: 'connected',
      aiAgents: ['Leo']
    },
    {
      id: 'outlook1',
      name: 'Outlook',
      description: 'Email and calendar management',
      category: 'marketing',
      icon: 'outlook',
      status: 'disconnected',
      aiAgents: []
    },

    // Customer Support
    {
      id: 'zendesk1',
      name: 'Zendesk',
      description: 'Customer support and ticketing system',
      category: 'support',
      icon: 'zendesk',
      status: 'connected',
      aiAgents: ['Noah']
    },
    {
      id: 'intercom1',
      name: 'Intercom',
      description: 'Customer messaging platform',
      category: 'support',
      icon: 'intercom',
      status: 'connected',
      aiAgents: ['Noah', 'Emma']
    },
    
    // Marketing Tools
    {
      id: 'hubspot1',
      name: 'HubSpot',
      description: 'Marketing automation and CRM',
      category: 'marketing',
      icon: 'hubspot',
      status: 'connected',
      aiAgents: ['Leo']
    },
    {
      id: 'mailchimp1',
      name: 'Mailchimp',
      description: 'Email marketing platform',
      category: 'marketing',
      icon: 'mailchimp',
      status: 'connected',
      aiAgents: ['Leo']
    },

    // Coming Soon Section
    {
      id: 'github1',
      name: 'GitHub',
      description: 'Development workflow (Coming Soon)',
      category: 'coming_soon',
      icon: 'github',
      status: 'coming_soon',
      aiAgents: []
    },
    {
      id: 'jira1',
      name: 'Jira',
      description: 'Project management (Coming Soon)',
      category: 'coming_soon',
      icon: 'jira',
      status: 'coming_soon',
      aiAgents: []
    },
    {
      id: 'docusign1',
      name: 'DocuSign',
      description: 'Legal document management (Coming Soon)',
      category: 'coming_soon',
      icon: 'docusign',
      status: 'coming_soon',
      aiAgents: []
    }
  ];

  const filteredIntegrations = activeCategory === 'all' 
    ? integrations 
    : integrations.filter(i => i.category === activeCategory);

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-semibold">Integrations</h1>
          <p className="text-gray-500">Connect your tools with Alypha AI agents</p>
        </div>
        <Button>Add New Integration</Button>
      </div>

      {/* Categories */}
      <div className="flex gap-2 p-1 bg-gray-100 rounded-lg w-fit">
        {[
          { id: 'all', label: 'All' },
          { id: 'support', label: 'Customer Support' },
          { id: 'marketing', label: 'Marketing' },
          { id: 'coming_soon', label: 'Coming Soon' }
        ].map((category) => (
          <button
            key={category.id}
            onClick={() => setActiveCategory(category.id as any)}
            className={`px-4 py-2 rounded-md text-sm font-medium transition-colors
              ${activeCategory === category.id 
                ? 'bg-white text-violet-600 shadow-sm' 
                : 'text-gray-600 hover:text-gray-900'}`}
          >
            {category.label}
          </button>
        ))}
      </div>

      {/* Integrations Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredIntegrations.map((integration) => (
          <Card key={integration.id} className="p-6">
            <div className="flex items-start justify-between">
              <div className="flex items-center gap-4">
                <div className="relative w-12 h-12 flex-shrink-0 flex items-center justify-center">
                  {IntegrationIcons[integration.icon]}
                </div>
                <div>
                  <h3 className="font-medium">{integration.name}</h3>
                  <p className="text-sm text-gray-500">{integration.description}</p>
                </div>
              </div>
            </div>

            <div className="mt-4">
              {integration.status === 'connected' && (
                <>
                  <div className="flex items-center gap-2 text-sm text-green-600 mb-3">
                    <span className="w-2 h-2 rounded-full bg-green-500" />
                    Connected
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {integration.aiAgents.map((agent) => (
                      <span 
                        key={agent}
                        className="px-2 py-1 bg-violet-50 text-violet-600 rounded-full text-xs font-medium"
                      >
                        {agent}
                      </span>
                    ))}
                  </div>
                </>
              )}

              {integration.status === 'disconnected' && (
                <Button variant="outline" className="w-full">
                  Connect
                </Button>
              )}

              {integration.status === 'coming_soon' && (
                <Button variant="outline" className="w-full" disabled>
                  Coming Soon
                </Button>
              )}
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
} 