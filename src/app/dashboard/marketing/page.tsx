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

type Campaign = {
  name: string;
  description: string;
  budget: string;
  duration: string;
  platforms: string[];
};

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
    <div className="max-w-7xl mx-auto p-6">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-2xl font-semibold mb-2">Marketing Automation</h1>
        <p className="text-black/60 dark:text-white/60">
          Create and manage AI-powered marketing campaigns
        </p>
      </div>

      {/* Connected Platforms */}
      <div className="mb-8">
        <h2 className="text-lg font-medium mb-4">Connected Platforms</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {connectedPlatforms.map((platform) => (
            <div
              key={platform.name}
              className="p-4 border border-black/[.08] dark:border-white/[.08] rounded-lg"
            >
              <div className="flex items-center gap-3 mb-2">
                <span className="text-2xl">{platform.icon}</span>
                <div>
                  <div className="font-medium">{platform.name}</div>
                  <div className="text-sm text-black/60 dark:text-white/60">
                    {platform.account}
                  </div>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <span className={`text-xs px-2 py-1 rounded-full ${
                  platformStatuses[platform.name] === 'connected'
                    ? 'bg-green-500/10 text-green-500'
                    : platformStatuses[platform.name] === 'error'
                    ? 'bg-red-500/10 text-red-500'
                    : 'bg-yellow-500/10 text-yellow-500'
                }`}>
                  {platformStatuses[platform.name] || 'checking...'}
                </span>
                <button
                  onClick={() => setShowDisconnectConfirm(platform.name)}
                  className="text-sm text-red-500 hover:underline"
                >
                  Disconnect
                </button>
              </div>

              {/* Disconnect Confirmation */}
              {showDisconnectConfirm === platform.name && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="fixed inset-0 bg-black/5 backdrop-blur-sm z-40 flex items-center justify-center"
                >
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    className="bg-white dark:bg-black rounded-lg p-6 max-w-md w-full mx-4 shadow-2xl border border-black/[.08] dark:border-white/[.08]"
                  >
                    <h3 className="text-lg font-medium mb-2">Disconnect {platform.name}</h3>
                    <p className="text-sm text-black/60 dark:text-white/60 mb-4">
                      Are you sure you want to disconnect {platform.name}? This will stop all active campaigns.
                    </p>
                    <div className="flex justify-end gap-3">
                      <button
                        onClick={() => setShowDisconnectConfirm(null)}
                        className="px-4 py-2 text-sm border border-black/[.08] dark:border-white/[.08] rounded-lg hover:bg-black/[.02] dark:hover:bg-white/[.02]"
                      >
                        Cancel
                      </button>
                      <button
                        onClick={() => handleDisconnect(platform.name)}
                        className="px-4 py-2 text-sm bg-red-500 hover:bg-red-600 text-white rounded-lg"
                      >
                        Disconnect
                      </button>
                    </div>
                  </motion.div>
                </motion.div>
              )}
            </div>
          ))}
          
          <button
            onClick={() => setIsConnectModalOpen(true)}
            className="p-4 border border-dashed border-black/[.08] dark:border-white/[.08] rounded-lg hover:bg-black/[.02] dark:hover:bg-white/[.02] flex items-center justify-center"
          >
            <span className="text-black/60 dark:text-white/60">+ Add Platform</span>
          </button>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
        <button
          onClick={() => setIsConnectModalOpen(true)}
          className="p-4 border border-black/[.08] dark:border-white/[.08] rounded-lg hover:bg-black/[.02] dark:hover:bg-white/[.02]"
        >
          <div className="flex items-center gap-3 mb-2">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
            <span className="font-medium">Connect Platform</span>
          </div>
          <p className="text-sm text-black/60 dark:text-white/60 text-left">
            Add your marketing platforms to start creating campaigns
          </p>
        </button>

        <button
          onClick={() => setIsCampaignModalOpen(true)}
          className="p-4 border border-black/[.08] dark:border-white/[.08] rounded-lg hover:bg-black/[.02] dark:hover:bg-white/[.02]"
        >
          <div className="flex items-center gap-3 mb-2">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z" />
            </svg>
            <span className="font-medium">New Campaign</span>
          </div>
          <p className="text-sm text-black/60 dark:text-white/60 text-left">
            Create an AI-powered marketing campaign
          </p>
        </button>
      </div>

      {/* Tabs */}
      <div className="border-b border-black/[.08] dark:border-white/[.08] mb-6">
        <nav className="flex gap-4">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-4 py-2 text-sm font-medium border-b-2 -mb-px ${
                activeTab === tab.id
                  ? 'border-black dark:border-white text-black dark:text-white'
                  : 'border-transparent text-black/60 dark:text-white/60 hover:text-black dark:hover:text-white'
              }`}
            >
              {tab.name}
            </button>
          ))}
        </nav>
      </div>

      {/* Tab Content */}
      <div className="min-h-[500px]">
        {activeTab === 'dashboard' && (
          <AnalyticsDashboard campaigns={campaigns} />
        )}
        {activeTab === 'automation' && (
          <AutomationFlow campaigns={campaigns} />
        )}
        {activeTab === 'templates' && <TemplateEditor />}
        {activeTab === 'leads' && <LeadScoringSystem />}
        {activeTab === 'rules' && <AutomationRulesBuilder />}
      </div>

      {/* Modals */}
      <AnimatePresence>
        {isConnectModalOpen && (
          <ConnectPlatformModal
            isOpen={isConnectModalOpen}
            onClose={() => setIsConnectModalOpen(false)}
            onConnect={async (platform, credentials) => {
              // Handle platform connection
              console.log('Connecting platform:', platform, credentials);
            }}
          />
        )}

        {isCampaignModalOpen && (
          <CampaignGeneratorModal
            isOpen={isCampaignModalOpen}
            onClose={() => setIsCampaignModalOpen(false)}
            onGenerate={handleCampaignGenerate}
          />
        )}
      </AnimatePresence>
    </div>
  );
} 