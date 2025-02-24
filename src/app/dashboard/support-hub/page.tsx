'use client';
import { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

export default function SupportHubPage() {
  const [selectedTier, setSelectedTier] = useState<string | null>(null);

  const supportAgents = [
    {
      name: 'Lina',
      tier: 'Basic',
      description: 'Perfect for handling routine inquiries and basic support needs',
      color: 'from-emerald-500 to-teal-600',
      features: [
        'FAQ Management',
        'Auto-responders',
        'Basic Ticket Routing',
        'Email Support',
        'Response Templates'
      ],
      channels: ['Email', 'Live Chat'],
      avatar: '/ai-avatars/lina.svg'
    },
    {
      name: 'Ethan',
      tier: 'Advanced',
      description: 'Enhanced support capabilities with advanced troubleshooting',
      color: 'from-violet-500 to-purple-600',
      features: [
        'Dynamic Conversations',
        'Technical Troubleshooting',
        'Smart Escalation',
        'Performance Analytics',
        'Integration with Tools'
      ],
      channels: ['Email', 'Live Chat', 'Slack', 'WhatsApp'],
      avatar: '/ai-avatars/ethan.svg'
    },
    {
      name: 'Sienna',
      tier: 'Premium',
      description: 'Full-featured autonomous support with enterprise capabilities',
      color: 'from-blue-500 to-indigo-600',
      features: [
        'Multi-language Support',
        'CRM Integration',
        'Priority Handling',
        'Custom Workflows',
        'Advanced Analytics'
      ],
      channels: ['All Channels', 'Custom Integrations'],
      avatar: '/ai-avatars/sienna.svg'
    }
  ];

  return (
    <div className="space-y-8">
      {/* Hero Banner */}
      <div className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-violet-600 to-indigo-600 p-8">
        <div className="absolute top-0 right-0 -mt-16 -mr-16">
          <svg width="400" height="400" fill="none" viewBox="0 0 400 400" className="opacity-10">
            <defs>
              <pattern id="pattern" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
                <path d="M0 40L40 0H20L0 20M40 40V20L20 40" fill="rgba(255,255,255,0.1)" />
              </pattern>
            </defs>
            <rect width="400" height="400" fill="url(#pattern)" />
          </svg>
        </div>
        
        <div className="relative flex justify-between items-center">
          <div className="space-y-4">
            <h1 className="text-3xl font-bold text-white">Alypha Support</h1>
            <p className="text-violet-100 max-w-xl">
              Transform your customer support with AI-powered agents. Handle inquiries across multiple channels with intelligent automation.
            </p>
            <div className="flex gap-4">
              <Button 
                className="bg-white text-violet-600 hover:bg-violet-50 shadow-lg hover:shadow-xl transition-all"
              >
                Deploy AI Agent
              </Button>
              <Button 
                variant="outline" 
                className="border-white text-white hover:bg-white/10"
              >
                View Demo
              </Button>
            </div>
          </div>
          <div className="hidden lg:block">
            <svg className="w-64 h-64 text-white/20" viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" 
                d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" />
            </svg>
          </div>
        </div>
      </div>

      {/* Support Channels */}
      <Card className="p-6 bg-gradient-to-br from-gray-50 to-gray-100">
        <h2 className="text-lg font-semibold mb-4">Supported Channels</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {['WhatsApp', 'Slack', 'Email', 'Live Chat'].map((channel) => (
            <div key={channel} className="flex items-center gap-3 p-3 bg-white rounded-lg shadow-sm">
              <div className="w-8 h-8 rounded-full bg-violet-100 flex items-center justify-center">
                <svg className="w-4 h-4 text-violet-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                </svg>
              </div>
              <span className="font-medium">{channel}</span>
            </div>
          ))}
        </div>
      </Card>

      {/* Agent Tiers */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {supportAgents.map((agent) => (
          <Card key={agent.name} className="p-6 relative overflow-hidden">
            <div className={`absolute top-0 right-0 w-24 h-24 bg-gradient-to-br ${agent.color} opacity-10 rounded-bl-full`} />
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-semibold">{agent.name}</h3>
                <div className="px-2 py-1 rounded-full text-xs font-medium bg-violet-50 text-violet-600 border border-violet-200">
                  {agent.tier}
                </div>
              </div>
              <p className="text-sm text-gray-600">{agent.description}</p>
              <div className="space-y-2">
                <p className="text-sm font-medium">Key Features:</p>
                <ul className="space-y-2">
                  {agent.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-2 text-sm">
                      <svg className="w-4 h-4 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="pt-4">
                <Button className="w-full bg-gradient-to-r from-violet-600 to-indigo-600 text-white">
                  Deploy {agent.name}
                </Button>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
} 