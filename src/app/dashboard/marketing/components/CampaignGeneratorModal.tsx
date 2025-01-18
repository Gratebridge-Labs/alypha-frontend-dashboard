'use client';
import { useState } from 'react';
import { motion } from 'framer-motion';

type Campaign = {
  name: string;
  description: string;
  budget: string;
  duration: string;
  platforms: string[];
};

export default function CampaignGeneratorModal({
  isOpen,
  onClose,
  onGenerate
}: {
  isOpen: boolean;
  onClose: () => void;
  onGenerate: (campaign: Campaign) => Promise<void>;
}) {
  const [formData, setFormData] = useState<Campaign>({
    name: '',
    description: '',
    budget: '',
    duration: '30',
    platforms: []
  });

  const handleSubmit = async () => {
    try {
      await onGenerate(formData);
      onClose();
    } catch (error) {
      console.error('Failed to create campaign:', error);
    }
  };

  if (!isOpen) return null;

  return (
    <>
      {/* Overlay */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
        className="fixed inset-0 bg-black/5 backdrop-blur-sm z-40"
      />

      {/* Modal */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.95 }}
        className="fixed inset-x-4 top-[5%] bottom-[5%] max-w-2xl mx-auto bg-white dark:bg-black rounded-xl shadow-2xl z-50 flex flex-col"
      >
        {/* Fixed Header */}
        <div className="flex items-center justify-between p-6 border-b border-black/[.08] dark:border-white/[.08]">
          <h2 className="text-xl font-semibold">Create New Campaign</h2>
          <button
            onClick={onClose}
            className="p-2 hover:bg-black/5 dark:hover:bg-white/5 rounded-full"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Scrollable Content */}
        <div className="flex-1 overflow-y-auto">
          <div className="p-6 space-y-6">
            <div>
              <label className="block text-sm font-medium mb-2">Campaign Name</label>
              <input
                type="text"
                placeholder="Enter campaign name"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full p-3 rounded-lg border border-black/[.08] dark:border-white/[.08] bg-transparent focus:ring-2 focus:ring-black dark:focus:ring-white focus:outline-none"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">Campaign Description</label>
              <textarea
                placeholder="Describe your campaign goals, target audience, and key messages..."
                value={formData.description}
                onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                className="w-full h-32 p-3 rounded-lg border border-black/[.08] dark:border-white/[.08] bg-transparent focus:ring-2 focus:ring-black dark:focus:ring-white focus:outline-none resize-none"
              />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium mb-2">Budget</label>
                <input
                  type="text"
                  placeholder="e.g. $1000"
                  value={formData.budget}
                  onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                  className="w-full p-3 rounded-lg border border-black/[.08] dark:border-white/[.08] bg-transparent focus:ring-2 focus:ring-black dark:focus:ring-white focus:outline-none"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Duration</label>
                <select 
                  value={formData.duration}
                  onChange={(e) => setFormData({ ...formData, duration: e.target.value })}
                  className="w-full p-3 rounded-lg border border-black/[.08] dark:border-white/[.08] bg-transparent focus:ring-2 focus:ring-black dark:focus:ring-white focus:outline-none"
                >
                  <option value="7">7 days</option>
                  <option value="14">14 days</option>
                  <option value="30">30 days</option>
                  <option value="60">60 days</option>
                  <option value="90">90 days</option>
                </select>
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">Target Platforms</label>
              <div className="grid grid-cols-2 gap-2">
                {['Meta Ads', 'Google Ads', 'Email', 'SMS'].map((platform) => (
                  <label
                    key={platform}
                    className="flex items-center gap-2 p-3 rounded-lg border border-black/[.08] dark:border-white/[.08] hover:bg-black/[.02] dark:hover:bg-white/[.02] cursor-pointer"
                  >
                    <input
                      type="checkbox"
                      checked={formData.platforms.includes(platform)}
                      onChange={(e) => {
                        if (e.target.checked) {
                          setFormData({
                            ...formData,
                            platforms: [...formData.platforms, platform]
                          });
                        } else {
                          setFormData({
                            ...formData,
                            platforms: formData.platforms.filter(p => p !== platform)
                          });
                        }
                      }}
                      className="rounded border-black/[.08] dark:border-white/[.08]"
                    />
                    <span>{platform}</span>
                  </label>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Fixed Footer */}
        <div className="flex items-center justify-end gap-3 p-6 border-t border-black/[.08] dark:border-white/[.08]">
          <button
            onClick={onClose}
            className="px-4 py-2 text-sm border border-black/[.08] dark:border-white/[.08] rounded-lg hover:bg-black/[.02] dark:hover:bg-white/[.02]"
          >
            Cancel
          </button>
          <button
            onClick={handleSubmit}
            className="px-4 py-2 text-sm bg-black dark:bg-white text-white dark:text-black rounded-lg hover:bg-gray-800 dark:hover:bg-gray-200"
          >
            Create Campaign
          </button>
        </div>
      </motion.div>
    </>
  );
} 