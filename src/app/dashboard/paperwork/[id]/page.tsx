'use client';
import { useState, useCallback } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import SignaturePad from '@/components/SignaturePad';
import FileUpload from '@/components/FileUpload';
import { contractTemplates } from '@/data/contractTemplates';
import { sendContractForSignature } from '@/services/emailService';

export default function ContractViewPage() {
  const [pages, setPages] = useState([1, 2, 3]);
  const [isSignModalOpen, setIsSignModalOpen] = useState(false);
  const [signatureType, setSignatureType] = useState<'upload' | 'draw' | 'type'>('type');
  const [signature, setSignature] = useState('');
  const [recipientEmail, setRecipientEmail] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [viewMode, setViewMode] = useState<'row' | 'column'>('row');

  const handleSignatureChange = (newSignature: string) => {
    setSignature(newSignature);
  };

  const handleFileUpload = (file: File) => {
    const reader = new FileReader();
    reader.onloadend = () => {
      setSignature(reader.result as string);
    };
    reader.readAsDataURL(file);
  };

  const handleSignAndSend = async () => {
    if (!signature || !recipientEmail) {
      alert('Please provide both signature and recipient email');
      return;
    }

    setIsLoading(true);
    try {
      await sendContractForSignature({
        recipientEmail,
        contractId: '123', // Replace with actual contract ID
        contractName: 'Freelance Contract',
        signatureRequestId: Date.now().toString()
      });
      setIsSignModalOpen(false);
      alert('Contract sent successfully!');
    } catch (error) {
      alert('Failed to send contract. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="max-w-7xl mx-auto">
      {/* Action Bar */}
      <div className="sticky top-0 z-30 bg-white dark:bg-black border-b border-black/[.08] dark:border-white/[.08] py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <button className="p-2 hover:bg-black/5 dark:hover:bg-white/5 rounded-lg">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
            </button>
            <h1 className="text-lg font-medium">Freelance Contract</h1>
          </div>
          
          <div className="flex items-center gap-4">
            {/* View Toggle */}
            <div className="flex items-center gap-2 p-1 bg-black/[.02] dark:bg-white/[.02] rounded-lg">
              <button
                onClick={() => setViewMode('row')}
                className={`p-2 rounded ${
                  viewMode === 'row'
                    ? 'bg-white dark:bg-black shadow-sm'
                    : 'text-black/60 dark:text-white/60'
                }`}
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 17V7m0 10a2 2 0 01-2 2H5a2 2 0 01-2-2V7a2 2 0 012-2h2a2 2 0 012 2m0 10a2 2 0 002 2h2a2 2 0 002-2M9 7a2 2 0 012-2h2a2 2 0 012 2m0 10V7m0 10a2 2 0 002 2h2a2 2 0 002-2V7a2 2 0 00-2-2h-2a2 2 0 00-2 2" />
                </svg>
              </button>
              <button
                onClick={() => setViewMode('column')}
                className={`p-2 rounded ${
                  viewMode === 'column'
                    ? 'bg-white dark:bg-black shadow-sm'
                    : 'text-black/60 dark:text-white/60'
                }`}
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0h10a2 2 0 012 2v2M7 7h10" />
                </svg>
              </button>
            </div>

            <button className="px-4 py-2 text-sm border border-black/[.08] dark:border-white/[.08] rounded-lg hover:bg-black/[.02] dark:hover:bg-white/[.02]">
              Save Draft
            </button>
            <button 
              onClick={() => setIsSignModalOpen(true)}
              className="px-4 py-2 text-sm bg-black dark:bg-white text-white dark:text-black rounded-lg hover:bg-gray-800 dark:hover:bg-gray-200"
            >
              Sign & Send
            </button>
          </div>
        </div>
      </div>

      {/* Contract Pages */}
      <div className={`py-8 ${
        viewMode === 'row' 
          ? 'max-w-3xl mx-auto' 
          : 'px-8'
      }`}>
        <div className={`${
          viewMode === 'row'
            ? 'space-y-4'
            : 'grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4'
        }`}>
          {pages.map((page, index) => (
            <div 
              key={page}
              className={`bg-white dark:bg-black border border-black/[.08] dark:border-white/[.08] rounded-lg shadow-sm ${
                viewMode === 'column' ? 'aspect-[1/1.4]' : ''
              }`}
            >
              {/* Page Header */}
              <div className="flex items-center justify-between p-2 border-b border-black/[.08] dark:border-white/[.08]">
                <span className="text-sm text-black/40 dark:text-white/40">Page {index + 1}</span>
                <div className="flex items-center gap-1">
                  <button className="p-1 hover:bg-black/5 dark:hover:bg-white/5 rounded">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
                    </svg>
                  </button>
                  <button className="p-1 hover:bg-black/5 dark:hover:bg-white/5 rounded">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                    </svg>
                  </button>
                </div>
              </div>
              
              {/* Page Content */}
              <div className="aspect-[1/1.4] bg-white dark:bg-black p-8">
                <div className="prose dark:prose-invert max-w-none">
                  {index === pages.length - 1 ? (
                    // Signature Page with actual signature display
                    <div className="space-y-8">
                      <h2>Signatures</h2>
                      <div className="grid grid-cols-2 gap-8">
                        <div className="space-y-4">
                          <p className="font-medium">Client</p>
                          {signature ? (
                            <img 
                              src={signature} 
                              alt="Signature" 
                              className="h-24 object-contain"
                            />
                          ) : (
                            <div className="h-24 border-b-2 border-black/20 dark:border-white/20" />
                          )}
                          <p className="text-sm text-black/40 dark:text-white/40">
                            Date: {new Date().toLocaleDateString()}
                          </p>
                        </div>
                        <div className="space-y-4">
                          <p className="font-medium">Service Provider</p>
                          <div className="h-24 border-b-2 border-black/20 dark:border-white/20" />
                          <p className="text-sm text-black/40 dark:text-white/40">
                            Date: {new Date().toLocaleDateString()}
                          </p>
                        </div>
                      </div>
                    </div>
                  ) : (
                    // Regular Contract Content
                    <div contentEditable className="outline-none">
                      <h2>Section {index + 1}</h2>
                      <p>Edit this contract content...</p>
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}

          {/* Add Page Button */}
          <button 
            onClick={() => setPages([...pages, pages.length + 1])}
            className={`border-2 border-dashed border-black/[.08] dark:border-white/[.08] rounded-lg hover:bg-black/[.02] dark:hover:bg-white/[.02] ${
              viewMode === 'row'
                ? 'w-full py-4'
                : 'aspect-[1/1.4] flex items-center justify-center'
            }`}
          >
            <svg className="w-6 h-6 text-black/40 dark:text-white/40" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
            </svg>
          </button>
        </div>
      </div>

      {/* Signature Modal */}
      <AnimatePresence>
        {isSignModalOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsSignModalOpen(false)}
              className="fixed inset-0 bg-black/5 backdrop-blur-sm z-40"
            />
            
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="fixed inset-x-4 top-[10%] max-w-lg mx-auto bg-white dark:bg-black rounded-xl shadow-2xl z-50"
            >
              <div className="p-6">
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-xl font-semibold">Sign Contract</h2>
                  <button
                    onClick={() => setIsSignModalOpen(false)}
                    className="p-2 hover:bg-black/5 dark:hover:bg-white/5 rounded-full"
                  >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </div>

                {/* Signature Options */}
                <div className="space-y-6 mb-6">
                  <div className="flex gap-2">
                    {[
                      { type: 'type', label: 'Type' },
                      { type: 'draw', label: 'Draw' },
                      { type: 'upload', label: 'Upload' }
                    ].map((option) => (
                      <button
                        key={option.type}
                        onClick={() => setSignatureType(option.type as any)}
                        className={`flex-1 py-2 text-sm rounded-lg border ${
                          signatureType === option.type
                            ? 'border-black dark:border-white'
                            : 'border-black/[.08] dark:border-white/[.08]'
                        }`}
                      >
                        {option.label}
                      </button>
                    ))}
                  </div>

                  {/* Signature Input Area */}
                  <div className="h-40">
                    {signatureType === 'type' && (
                      <input
                        type="text"
                        placeholder="Type your full name"
                        onChange={(e) => setSignature(e.target.value)}
                        className="w-full h-full px-4 bg-transparent border-2 border-dashed border-black/[.08] dark:border-white/[.08] rounded-lg focus:outline-none text-center font-signature text-2xl"
                      />
                    )}
                    {signatureType === 'draw' && (
                      <SignaturePad onChange={handleSignatureChange} />
                    )}
                    {signatureType === 'upload' && (
                      <FileUpload onUpload={handleFileUpload} />
                    )}
                  </div>

                  {/* Recipient Email */}
                  <div>
                    <label className="block text-sm font-medium mb-2">
                      Recipient Email
                    </label>
                    <input
                      type="email"
                      value={recipientEmail}
                      onChange={(e) => setRecipientEmail(e.target.value)}
                      placeholder="Enter recipient's email"
                      className="w-full p-3 rounded-lg border border-black/[.08] dark:border-white/[.08] bg-transparent focus:ring-2 focus:ring-black dark:focus:ring-white focus:outline-none"
                    />
                  </div>
                </div>

                <div className="flex justify-end gap-3">
                  <button
                    onClick={() => setIsSignModalOpen(false)}
                    className="px-4 py-2 text-sm border border-black/[.08] dark:border-white/[.08] rounded-lg hover:bg-black/[.02] dark:hover:bg-white/[.02]"
                  >
                    Cancel
                  </button>
                  <button 
                    onClick={handleSignAndSend}
                    disabled={isLoading}
                    className="px-4 py-2 text-sm bg-black dark:bg-white text-white dark:text-black rounded-lg hover:bg-gray-800 dark:hover:bg-gray-200 disabled:opacity-50"
                  >
                    {isLoading ? 'Sending...' : 'Sign & Send'}
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