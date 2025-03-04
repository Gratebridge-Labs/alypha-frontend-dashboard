'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { contractTemplates } from '@/data/contractTemplates';

export default function PaperworkPage() {
  const router = useRouter();
  const [activeTab, setActiveTab] = useState('contracts');
  const [isTemplateModalOpen, setIsTemplateModalOpen] = useState(false);
  const [isCreateModalOpen, setIsCreateModalOpen] = useState(false);
  const [selectedTemplate, setSelectedTemplate] = useState<number | null>(null);
  const [prompt, setPrompt] = useState('');
  const [isCreating, setIsCreating] = useState(false);
  const [selectedTemplateType, setSelectedTemplateType] = useState('');

  const tabs = [
    { id: 'contracts', label: 'Contracts' },
    { id: 'invoices', label: 'Invoices' },
    { id: 'receipts', label: 'Receipts' },
  ];

  const openTemplateModal = (type: string) => {
    setSelectedTemplate(null);
    setIsTemplateModalOpen(true);
  };

  const handleTemplateSelect = async (templateId: number) => {
    setSelectedTemplate(templateId);
    setIsTemplateModalOpen(false);
    setIsCreateModalOpen(true);
  };

  const handleCreateContract = async () => {
    if (!selectedTemplate || !prompt) {
      alert('Please provide contract requirements');
      return;
    }

    setIsCreating(true);
    try {
      // Simulate API call delay
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      // Generate a random contract ID
      const contractId = Math.random().toString(36).substring(7);
      
      // Navigate to the contract page
      router.push(`/dashboard/paperwork/${contractId}`);
    } catch (error) {
      alert('Failed to create contract');
      setIsCreating(false);
    }
  };

  return (
    <div className="max-w-7xl mx-auto">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-2xl font-semibold mb-2">Paperwork</h1>
        <p className="text-black/60 dark:text-white/60">
          Manage your contracts, invoices, and receipts
        </p>
      </div>

      {/* Tabs */}
      <div className="flex gap-2 mb-8 border-b border-black/[.08] dark:border-white/[.08]">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`px-4 py-2 text-sm capitalize ${
              activeTab === tab.id 
                ? 'border-b-2 border-black dark:border-white' 
                : 'text-black/60 dark:text-white/60'
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Content Area */}
      <div className="mb-8">
        {/* Action Bar */}
        <div className="flex items-center justify-between mb-6">
          <button
            onClick={() => openTemplateModal(activeTab)}
            className="px-4 py-2 bg-black dark:bg-white text-white dark:text-black rounded-lg hover:bg-gray-800 dark:hover:bg-gray-200 transition-colors"
          >
            Create New
          </button>
          <button
            onClick={() => setIsTemplateModalOpen(true)}
            className="flex items-center gap-2 px-4 py-2 border border-black/[.08] dark:border-white/[.08] rounded-lg hover:bg-black/[.02] dark:hover:bg-white/[.02]"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zm10 0a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zm10 0a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
            </svg>
            Templates
          </button>
        </div>

        {/* Empty State */}
        <div className="text-center py-12 border-2 border-dashed border-black/[.08] dark:border-white/[.08] rounded-lg">
          <div className="max-w-sm mx-auto">
            <svg className="w-12 h-12 mx-auto mb-4 text-black/40 dark:text-white/40" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
            <h3 className="text-lg font-medium mb-2">No {activeTab} yet</h3>
            <p className="text-sm text-black/60 dark:text-white/60 mb-4">
              Create your first {activeTab.slice(0, -1)} using our templates or upload your own
            </p>
            <button
              onClick={() => openTemplateModal(activeTab)}
              className="text-sm px-4 py-2 bg-black dark:bg-white text-white dark:text-black rounded-lg hover:bg-gray-800 dark:hover:bg-gray-200 transition-colors"
            >
              Create {activeTab.slice(0, -1)}
            </button>
          </div>
        </div>
      </div>

      {/* Template Selection Modal */}
      <AnimatePresence>
        {isTemplateModalOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsTemplateModalOpen(false)}
              className="fixed inset-0 bg-black/5 dark:bg-white/5 backdrop-blur-sm z-40"
            />
            
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="fixed inset-x-4 top-[10%] max-w-6xl mx-auto h-[80vh] bg-white dark:bg-black rounded-xl shadow-2xl z-50 overflow-hidden"
            >
              <div className="h-full flex flex-col">
                {/* Modal Header */}
                <div className="flex items-center justify-between p-6 border-b border-black/[.08] dark:border-white/[.08]">
                  <h2 className="text-xl font-semibold">Select Template</h2>
                  <button
                    onClick={() => setIsTemplateModalOpen(false)}
                    className="p-2 hover:bg-black/5 dark:hover:bg-white/5 rounded-full"
                  >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </div>

                {/* Modal Content */}
                <div className="flex-1 overflow-auto p-6">
                  {/* Filter Options */}
                  <div className="mb-6">
                    <div className="flex gap-2">
                      {['All', 'Popular', 'Recent', 'Uploaded'].map((filter) => (
                        <button
                          key={filter}
                          className="px-3 py-1.5 text-sm rounded-full border border-black/[.08] dark:border-white/[.08] hover:bg-black/[.02] dark:hover:bg-white/[.02]"
                        >
                          {filter}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Templates Grid */}
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {/* Upload Template Card */}
                    <div className="p-4 rounded-lg border-2 border-dashed border-black/[.08] dark:border-white/[.08] hover:bg-black/[.02] dark:hover:bg-white/[.02] cursor-pointer">
                      <div className="text-center">
                        <svg className="w-8 h-8 mx-auto mb-2 text-black/40 dark:text-white/40" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                        </svg>
                        <h3 className="font-medium mb-1">Upload Template</h3>
                        <p className="text-sm text-black/60 dark:text-white/60">
                          Upload your own template
                        </p>
                      </div>
                    </div>

                    {/* Example Template Cards */}
                    {[1, 2, 3, 4, 5].map((i) => (
                      <div
                        key={i}
                        onClick={() => handleTemplateSelect(i)}
                        className="p-4 rounded-lg border border-black/[.08] dark:border-white/[.08] hover:bg-black/[.02] dark:hover:bg-white/[.02] cursor-pointer"
                      >
                        <div className="aspect-[3/4] mb-3 rounded-lg bg-black/[.02] dark:bg-white/[.02]" />
                        <h3 className="font-medium mb-1">Template {i}</h3>
                        <p className="text-sm text-black/60 dark:text-white/60">
                          Description of template {i}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Modal Footer */}
                <div className="p-6 border-t border-black/[.08] dark:border-white/[.08]">
                  <div className="flex justify-end gap-3">
                    <button
                      onClick={() => setIsTemplateModalOpen(false)}
                      className="px-4 py-2 text-sm border border-black/[.08] dark:border-white/[.08] rounded-lg hover:bg-black/[.02] dark:hover:bg-white/[.02]"
                    >
                      Cancel
                    </button>
                    <button className="px-4 py-2 text-sm bg-black dark:bg-white text-white dark:text-black rounded-lg hover:bg-gray-800 dark:hover:bg-gray-200">
                      Use Template
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* Create Contract Modal */}
      <AnimatePresence>
        {isCreateModalOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsCreateModalOpen(false)}
              className="fixed inset-0 bg-black/5 backdrop-blur-sm z-40"
            />
            
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="fixed inset-x-4 top-[10%] max-w-2xl mx-auto bg-white dark:bg-black rounded-xl shadow-2xl z-50"
            >
              <div className="p-6">
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-xl font-semibold">Create Contract</h2>
                  <button
                    onClick={() => setIsCreateModalOpen(false)}
                    className="p-2 hover:bg-black/5 dark:hover:bg-white/5 rounded-full"
                  >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </div>

                <div className="mb-6">
                  <label className="block text-sm font-medium mb-2">
                    Describe your contract requirements
                  </label>
                  <textarea
                    value={prompt}
                    onChange={(e) => setPrompt(e.target.value)}
                    placeholder="Example: Create a freelance contract for web development services, including payment terms of $75/hour, weekly billing, and standard confidentiality clauses..."
                    className="w-full h-32 p-3 rounded-lg border border-black/[.08] dark:border-white/[.08] bg-white dark:bg-black focus:ring-2 focus:ring-black dark:focus:ring-white focus:outline-none resize-none"
                  />
                </div>

                <div className="flex justify-end gap-3">
                  <button
                    onClick={() => setIsCreateModalOpen(false)}
                    className="px-4 py-2 text-sm border border-black/[.08] dark:border-white/[.08] rounded-lg hover:bg-black/[.02] dark:hover:bg-white/[.02]"
                  >
                    Cancel
                  </button>
                  <button 
                    onClick={handleCreateContract}
                    disabled={isCreating}
                    className="px-4 py-2 text-sm bg-black dark:bg-white text-white dark:text-black rounded-lg hover:bg-gray-800 dark:hover:bg-gray-200 disabled:opacity-50"
                  >
                    {isCreating ? (
                      <div className="flex items-center justify-center gap-2">
                        <div className="w-4 h-4 border-2 border-white dark:border-black border-t-transparent dark:border-t-transparent rounded-full animate-spin" />
                        <span>Generating...</span>
                      </div>
                    ) : (
                      'Generate Contract'
                    )}
                  </button>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
} 