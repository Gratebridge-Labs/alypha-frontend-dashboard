'use client';
import { useEffect } from 'react';
import { motion } from 'framer-motion';

type Campaign = {
  name: string;
  description: string;
  budget: string;
  duration: string;
  platforms: string[];
};

export default function AutomationFlow({ campaigns }: { campaigns: Campaign[] }) {
  useEffect(() => {
    // When a new campaign is added, scroll it into view
    if (campaigns.length > 0) {
      const lastCampaign = document.getElementById(`campaign-${campaigns.length - 1}`);
      lastCampaign?.scrollIntoView({ behavior: 'smooth' });
    }
  }, [campaigns.length]);

  return (
    <div className="space-y-6">
      {campaigns.length === 0 ? (
        <div className="text-center py-12">
          <p className="text-black/60 dark:text-white/60">
            No campaigns yet. Create one to see the automation flow.
          </p>
        </div>
      ) : (
        campaigns.map((campaign, index) => (
          <motion.div
            key={index}
            id={`campaign-${index}`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="border border-black/[.08] dark:border-white/[.08] rounded-lg p-6"
          >
            <h3 className="text-lg font-medium mb-4">{campaign.name}</h3>
            
            {/* Campaign Flow Visualization */}
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <div className="w-8 h-8 rounded-full bg-blue-500 flex items-center justify-center text-white">1</div>
                <div className="flex-1 p-4 border border-black/[.08] dark:border-white/[.08] rounded-lg">
                  Campaign Setup
                  <div className="text-sm text-black/60 dark:text-white/60 mt-1">
                    Budget: {campaign.budget} • Duration: {campaign.duration} days
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-8 h-8 rounded-full bg-green-500 flex items-center justify-center text-white">2</div>
                <div className="flex-1 p-4 border border-black/[.08] dark:border-white/[.08] rounded-lg">
                  Platform Integration
                  <div className="flex gap-2 mt-2">
                    {campaign.platforms.map((platform) => (
                      <span
                        key={platform}
                        className="px-2 py-1 text-xs bg-black/[.05] dark:bg-white/[.05] rounded"
                      >
                        {platform}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-8 h-8 rounded-full bg-purple-500 flex items-center justify-center text-white">3</div>
                <div className="flex-1 p-4 border border-black/[.08] dark:border-white/[.08] rounded-lg">
                  Automation Rules
                  <div className="text-sm text-black/60 dark:text-white/60 mt-1">
                    Lead scoring and automated responses enabled
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-8 h-8 rounded-full bg-orange-500 flex items-center justify-center text-white">4</div>
                <div className="flex-1 p-4 border border-black/[.08] dark:border-white/[.08] rounded-lg">
                  Analytics & Monitoring
                  <div className="text-sm text-black/60 dark:text-white/60 mt-1">
                    Real-time performance tracking
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        ))
      )}
    </div>
  );
} 