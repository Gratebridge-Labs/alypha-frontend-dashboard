'use client';
import { useState } from 'react';
import Image from 'next/image';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

type Message = {
  id: string;
  content: string;
  sender: 'user' | 'ai';
  timestamp: Date;
  agentName?: string;
};

type Agent = {
  id: string;
  name: string;
  role: string;
  avatar: string;
  status: 'online' | 'busy' | 'offline';
  specialty: string[];
  lastActive: string;
};

// Replace the external URLs with local ones
const AVATAR_URLS = {
  noah: '/avatars/placeholder-1.png',
  emma: '/avatars/placeholder-2.png',
  leo: '/avatars/placeholder-3.png',
};

// Replace the hero illustration with a local one
const HERO_ILLUSTRATION = '/illustrations/hero.svg';

// Add these color constants at the top
const BRAND_COLORS = {
  primary: 'from-violet-600 to-indigo-600',
  primaryHover: 'hover:from-violet-700 hover:to-indigo-700',
  primaryLight: 'bg-violet-50',
  primaryText: 'text-violet-600',
  primaryBorder: 'border-violet-200',
};

export default function DashboardPage() {
  const [selectedAgent, setSelectedAgent] = useState<string | null>(null);
  const [message, setMessage] = useState('');
  const [chatHistory, setChatHistory] = useState<Message[]>([]);

  const agents: Agent[] = [
    {
      id: '1',
      name: 'Noah',
      role: 'Customer Support Specialist',
      avatar: '/ai-avatars/noah.png', // You'll need to add these images
      status: 'online',
      specialty: ['Technical Support', 'Product Guidance', 'Issue Resolution'],
      lastActive: 'Now'
    },
    {
      id: '2',
      name: 'Leo',
      role: 'Marketing Strategist',
      avatar: '/ai-avatars/leo.png',
      status: 'online',
      specialty: ['Campaign Planning', 'Content Strategy', 'Market Analysis'],
      lastActive: 'Now'
    }
  ];

  const handleSendMessage = () => {
    if (!message.trim() || !selectedAgent) return;

    const newMessage: Message = {
      id: Date.now().toString(),
      content: message,
      sender: 'user',
      timestamp: new Date(),
    };

    setChatHistory([...chatHistory, newMessage]);
    setMessage('');
    // Here you would typically make an API call to get the AI response
  };

  // Quick Action Icons as SVG components
  const QuickActionIcons = {
    integration: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
    templates: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
      </svg>
    ),
    notifications: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
      </svg>
    ),
    analytics: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>
    )
  };

  // Category Icons as SVG components
  const CategoryIcons = {
    support: (
      <svg className="w-6 h-6" fill="none" stroke="white" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
      </svg>
    ),
    marketing: (
      <svg className="w-6 h-6" fill="none" stroke="white" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z" />
      </svg>
    ),
    rocket: (
      <svg className="w-6 h-6" fill="none" stroke="white" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.59 14.37a6 6 0 01-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 006.16-12.12A14.98 14.98 0 009.631 8.41m5.96 5.96a14.926 14.926 0 01-5.841 2.58m-.119-8.54a6 6 0 00-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 00-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 01-2.448-2.448 14.9 14.9 0 01.06-.312m-2.24 2.39a4.493 4.493 0 00-1.757 4.306 4.493 4.493 0 004.306-1.758M16.5 9a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z" />
      </svg>
    )
  };

  return (
    <div className="space-y-6">
      {/* Hero Section with improved contrast and subtle patterns */}
      <div className={`relative overflow-hidden rounded-2xl bg-gradient-to-r ${BRAND_COLORS.primary} p-8`}>
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
            <div className="flex items-center gap-3">
              <h1 className="text-3xl font-bold text-white">Welcome to Alypha</h1>
              <span className="px-2 py-1 rounded-full bg-violet-500/30 text-xs font-medium text-white border border-violet-400/30">
                Beta
              </span>
            </div>
            <p className="text-violet-100 max-w-xl">
              Your AI Workforce Platform. Streamline operations and boost productivity with our intelligent AI agents.
            </p>
            <div className="flex gap-4">
              <Button 
                className={`bg-white text-violet-600 hover:bg-violet-50 hover:text-violet-700 transition-colors`}
              >
                Hire New Agent
              </Button>
              <Button 
                variant="outline" 
                className="border-white text-white hover:bg-white/10"
              >
                Watch Demo
              </Button>
            </div>
          </div>
          <div className="hidden md:block">
            <svg className="w-64 h-64 text-white/20" viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 4c4.418 0 8 3.582 8 8s-3.582 8-8 8-8-3.582-8-8 3.582-8 8-8zM3 12h18M12 3v18" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M7 12c0 2.761 2.239 5 5 5s5-2.239 5-5-2.239-5-5-5-5 2.239-5 5z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M18.364 5.636l-3.536 3.536M5.636 18.364l3.536-3.536M18.364 18.364l-3.536-3.536M5.636 5.636l3.536 3.536" />
            </svg>
          </div>
        </div>
      </div>

      {/* Stats Section with subtle purple accents */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {[
          { label: 'Active AI Agents', value: '12', trend: '+2 this week' },
          { label: 'Tasks Completed', value: '1,234', trend: '+12% vs last week' },
          { label: 'Avg Response Time', value: '1.2s', trend: '-0.3s vs last week' }
        ].map((stat) => (
          <Card key={stat.label} className={`p-6 ${BRAND_COLORS.primaryLight} border-none`}>
            <div className="text-sm text-gray-600">{stat.label}</div>
            <div className="text-2xl font-semibold mt-1">{stat.value}</div>
            <div className={`text-xs ${BRAND_COLORS.primaryText} mt-1`}>{stat.trend}</div>
          </Card>
        ))}
      </div>

      {/* Active AI Workforce */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {[
          {
            category: 'Customer Support',
            icon: '/icons/support.svg',
            agents: [
              { name: 'Noah', status: 'active', avatar: '/avatars/noah.png' },
              { name: 'Emma', status: 'training', avatar: '/avatars/emma.png' }
            ],
            metrics: { performance: 98, satisfaction: 4.9 },
            color: 'from-emerald-500 to-teal-600'
          },
          {
            category: 'Marketing',
            icon: '/icons/marketing.svg',
            agents: [
              { name: 'Leo', status: 'active', avatar: '/avatars/leo.png' }
            ],
            metrics: { performance: 94, satisfaction: 4.7 },
            color: 'from-blue-500 to-indigo-600'
          },
          {
            category: 'Coming Soon',
            icon: '/icons/rocket.svg',
            roles: ['Development', 'Product Management', 'Research', 'Legal'],
            color: 'from-purple-500 to-pink-600'
          }
        ].map((category, i) => (
          <Card key={i} className="overflow-hidden">
            <div className={`bg-gradient-to-r ${category.color} p-6 text-white`}>
              <div className="flex items-center gap-4">
                <div className="rounded-lg bg-white/10 p-2">
                  {category.category === 'Customer Support' && CategoryIcons.support}
                  {category.category === 'Marketing' && CategoryIcons.marketing}
                  {category.category === 'Coming Soon' && CategoryIcons.rocket}
                </div>
                <h3 className="text-lg font-semibold">{category.category}</h3>
              </div>
            </div>
            <div className="p-6">
              {'agents' in category ? (
                <>
                  <div className="flex -space-x-2 mb-4">
                    {category.agents.map((agent) => (
                      <div key={agent.name} className="relative">
                        <div 
                          className={`w-10 h-10 rounded-full flex items-center justify-center text-white text-sm font-medium border-2 border-white
                            ${agent.name === 'Noah' ? 'bg-gradient-to-br from-blue-500 to-blue-700' :
                              agent.name === 'Emma' ? 'bg-gradient-to-br from-purple-500 to-purple-700' :
                              'bg-gradient-to-br from-emerald-500 to-emerald-700'}`}
                        >
                          <span className="font-semibold">{agent.name[0]}</span>
                        </div>
                        <span className={`absolute bottom-0 right-0 w-3 h-3 rounded-full border-2 border-white
                          ${agent.status === 'active' ? 'bg-green-500' : 'bg-yellow-500'}`}
                        />
                      </div>
                    ))}
                  </div>
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span>Performance</span>
                      <span className="font-medium">{category.metrics.performance}%</span>
                    </div>
                    <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                      <div 
                        className={`h-full rounded-full bg-gradient-to-r ${category.color}`}
                        style={{ width: `${category.metrics.performance}%` }}
                      />
                    </div>
                    <div className="flex justify-between text-sm">
                      <span>Satisfaction</span>
                      <span className="font-medium">⭐️ {category.metrics.satisfaction}/5</span>
                    </div>
                  </div>
                </>
              ) : (
                <div className="space-y-3">
                  {category.roles.map((role) => (
                    <div key={role} className="flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-purple-200" />
                      <span className="text-sm text-gray-600">{role}</span>
                    </div>
                  ))}
                  <Button variant="outline" className="w-full mt-4">
                    Join Waitlist
                  </Button>
                </div>
              )}
            </div>
          </Card>
        ))}
      </div>

      {/* Quick Actions with improved visual hierarchy */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card className="p-6 bg-gradient-to-br from-gray-50 to-gray-100">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-medium">Quick Actions</h2>
            <span className={`text-xs ${BRAND_COLORS.primaryText}`}>4 actions available</span>
          </div>
          <div className="grid grid-cols-2 gap-3">
            {[
              {
                title: 'New Integration',
                icon: QuickActionIcons.integration,
                color: 'bg-blue-500'
              },
              {
                title: 'View Templates',
                icon: QuickActionIcons.templates,
                color: 'bg-amber-500'
              },
              {
                title: 'Notifications',
                icon: QuickActionIcons.notifications,
                color: 'bg-purple-500'
              },
              {
                title: 'Analytics',
                icon: QuickActionIcons.analytics,
                color: 'bg-emerald-500'
              }
            ].map((action) => (
              <Button
                key={action.title}
                variant="outline"
                className="h-auto py-6 flex flex-col items-center gap-3 hover:bg-white hover:shadow-md transition-all"
              >
                <div className={`p-2 rounded-lg ${action.color} text-white`}>
                  {action.icon}
                </div>
                <span className="text-sm font-medium">{action.title}</span>
              </Button>
            ))}
          </div>
        </Card>

        {/* Recent Activity with purple accents */}
        <Card className="p-6">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-lg font-medium">Recent Activity</h2>
            <Button 
              variant="outline" 
              size="sm"
              className={`border-violet-200 ${BRAND_COLORS.primaryText} hover:bg-violet-50`}
            >
              View All
            </Button>
          </div>
          <div className="space-y-4">
            {[
              {
                title: 'New Slack integration configured',
                time: '2 minutes ago',
                icon: QuickActionIcons.integration,
                color: 'bg-blue-100 text-blue-600'
              },
              {
                title: 'Marketing AI agent Leo deployed',
                time: '1 hour ago',
                icon: CategoryIcons.marketing,
                color: 'bg-purple-100 text-purple-600'
              },
              {
                title: 'Customer support workflow updated',
                time: '3 hours ago',
                icon: CategoryIcons.support,
                color: 'bg-amber-100 text-amber-600'
              }
            ].map((activity, i) => (
              <div key={i} className="flex items-start gap-4">
                <div className={`w-10 h-10 rounded-full ${activity.color} flex items-center justify-center`}>
                  {activity.icon}
                </div>
                <div>
                  <p className="text-sm font-medium">{activity.title}</p>
                  <p className="text-xs text-gray-500">{activity.time}</p>
                </div>
              </div>
            ))}
          </div>
        </Card>
      </div>
    </div>
  );
} 