'use client';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import ConnectPlatformModal from './components/ConnectPlatformModal';
import CampaignGeneratorModal from './components/CampaignGeneratorModal';
import AutomationFlow from './components/AutomationFlow';
import LeadScoringSystem from './components/LeadScoringSystem';
import AutomationRulesBuilder from './components/AutomationRulesBuilder';
import TemplateEditor from './components/TemplateEditor';
import AnalyticsDashboard from './components/AnalyticsDashboard';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

type Campaign = {
  name: string;
  description: string;
  budget: string;
  duration: string;
  platforms: string[];
};

const marketingFeatures = [
  {
    title: 'Bulk Email',
    description: 'Send personalized email campaigns to your audience',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
    href: '/dashboard/marketing/email'
  },
  {
    title: 'Bulk SMS',
    description: 'Reach customers directly with text message campaigns',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
      </svg>
    ),
    href: '/dashboard/marketing/sms'
  },
  {
    title: 'Campaigns',
    description: 'Create and manage automated marketing campaigns',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z" />
      </svg>
    ),
    href: '/dashboard/marketing/campaigns'
  },
  {
    title: 'AI Marketing Assistant',
    description: 'Get AI-powered suggestions for your marketing strategy',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
    href: '/dashboard/marketing/ai-assistant'
  }
];

const recentCampaigns = [
  {
    name: 'Summer Sale Newsletter',
    type: 'Email',
    status: 'Active',
    sent: 1234,
    opened: 789,
    clicked: 432
  },
  {
    name: 'Product Launch SMS',
    type: 'SMS',
    status: 'Scheduled',
    sent: 0,
    opened: 0,
    clicked: 0
  },
  {
    name: 'Customer Feedback',
    type: 'Email',
    status: 'Completed',
    sent: 5000,
    opened: 3200,
    clicked: 1500
  }
];

export default function MarketingPage() {
  const [activeTab, setActiveTab] = useState('dashboard');
  const [isConnectModalOpen, setIsConnectModalOpen] = useState(false);
  const [isCampaignModalOpen, setIsCampaignModalOpen] = useState(false);
  const [showDisconnectConfirm, setShowDisconnectConfirm] = useState<string | null>(null);
  const [platformStatuses, setPlatformStatuses] = useState<Record<string, 'connected' | 'disconnected' | 'error'>>({});
  const [connectedPlatforms, setConnectedPlatforms] = useState([
    {
      name: 'Meta Ads',
      icon: '🎯',
      account: 'Business Manager - Acme Corp',
      status: 'active'
    },
    {
      name: 'Google Ads',
      icon: '📈',
      account: 'john@acmecorp.com',
      status: 'active'
    }
  ]);
  const [campaigns, setCampaigns] = useState<Campaign[]>([]);

  const tabs = [
    { id: 'dashboard', name: 'Dashboard' },
    { id: 'automation', name: 'Automation' },
    { id: 'templates', name: 'Templates' },
    { id: 'leads', name: 'Lead Scoring' },
    { id: 'rules', name: 'Rules' }
  ];

  // Platform connection monitoring
  useEffect(() => {
    const checkPlatformStatus = async () => {
      // Simulate API calls to check platform status
      const statuses: Record<string, 'connected' | 'disconnected' | 'error'> = {};
      for (const platform of connectedPlatforms) {
        try {
          // Simulate API call
          await new Promise(resolve => setTimeout(resolve, 1000));
          statuses[platform.name] = 'connected';
        } catch {
          statuses[platform.name] = 'error';
        }
      }
      setPlatformStatuses(statuses);
    };

    const interval = setInterval(checkPlatformStatus, 60000); // Check every minute
    checkPlatformStatus();

    return () => clearInterval(interval);
  }, [connectedPlatforms]);

  const handleDisconnect = async (platformName: string) => {
    try {
      // Simulate API call to disconnect
      await new Promise(resolve => setTimeout(resolve, 1000));
      // Update connected platforms list
      setConnectedPlatforms(prev => prev.filter(p => p.name !== platformName));
      setShowDisconnectConfirm(null);
    } catch (error) {
      console.error('Failed to disconnect:', error);
    }
  };

  const handleCampaignGenerate = async (campaign: Campaign) => {
    try {
      // Add campaign to state
      setCampaigns(prev => [...prev, campaign]);
      
      // Switch to automation tab to show the flow
      setActiveTab('automation');
      
      // Close the modal
      setIsCampaignModalOpen(false);

      // Show success notification
      // You can add a toast notification here if you have one
      
      // Log for debugging
      console.log('New campaign created:', campaign);
    } catch (error) {
      console.error('Failed to create campaign:', error);
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-semibold">Marketing Hub</h1>
          <p className="text-sm text-gray-500 mt-1">Create and manage your marketing campaigns</p>
        </div>
        <Button variant="default">
          Create Campaign
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {marketingFeatures.map((feature) => (
          <Link key={feature.title} href={feature.href}>
            <Card className="p-6 hover:bg-gray-50 dark:hover:bg-gray-900 transition-colors">
              <div className="w-12 h-12 rounded-lg bg-black/[.02] dark:bg-white/[.02] flex items-center justify-center mb-4">
                {feature.icon}
              </div>
              <h3 className="font-medium mb-2">{feature.title}</h3>
              <p className="text-sm text-gray-500">{feature.description}</p>
            </Card>
          </Link>
        ))}
      </div>

      <Card className="p-6">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-lg font-medium">Recent Campaigns</h2>
          <Button variant="outline">View All</Button>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="text-left border-b border-black/[.08] dark:border-white/[.08]">
                <th className="pb-3 text-sm font-medium">Campaign Name</th>
                <th className="pb-3 text-sm font-medium">Type</th>
                <th className="pb-3 text-sm font-medium">Status</th>
                <th className="pb-3 text-sm font-medium">Sent</th>
                <th className="pb-3 text-sm font-medium">Opened</th>
                <th className="pb-3 text-sm font-medium">Clicked</th>
              </tr>
            </thead>
            <tbody>
              {recentCampaigns.map((campaign) => (
                <tr key={campaign.name} className="border-b border-black/[.08] dark:border-white/[.08]">
                  <td className="py-4 text-sm">{campaign.name}</td>
                  <td className="py-4 text-sm">{campaign.type}</td>
                  <td className="py-4 text-sm">
                    <span className={`px-2 py-1 rounded-full text-xs ${
                      campaign.status === 'Active' ? 'bg-green-100 text-green-700' :
                      campaign.status === 'Scheduled' ? 'bg-blue-100 text-blue-700' :
                      'bg-gray-100 text-gray-700'
                    }`}>
                      {campaign.status}
                    </span>
                  </td>
                  <td className="py-4 text-sm">{campaign.sent.toLocaleString()}</td>
                  <td className="py-4 text-sm">{campaign.opened.toLocaleString()}</td>
                  <td className="py-4 text-sm">{campaign.clicked.toLocaleString()}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Card>
    </div>
  );
} 