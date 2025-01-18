'use client';
import { useState } from 'react';
import { motion } from 'framer-motion';

type Platform = {
  name: string;
  icon: string;
  fields: Array<{
    key: string;
    label: string;
    type: string;
    placeholder: string;
    required: boolean;
  }>;
  description: string;
  instructions?: string;
};

export default function ConnectPlatformModal({
  isOpen,
  onClose,
  onConnect
}: {
  isOpen: boolean;
  onClose: () => void;
  onConnect: (platform: string, credentials: any) => Promise<void>;
}) {
  const [selectedPlatform, setSelectedPlatform] = useState<Platform | null>(null);
  const [connectionStatus, setConnectionStatus] = useState<'idle' | 'testing' | 'success' | 'error'>('idle');
  const [credentials, setCredentials] = useState<Record<string, string>>({});
  const [errorMessage, setErrorMessage] = useState<string>('');

  const platforms: Platform[] = [
    {
      name: 'Meta Ads',
      icon: '🎯',
      fields: [
        { key: 'account_id', label: 'Account ID', type: 'text', placeholder: 'Enter your Ad Account ID', required: true },
        { key: 'access_token', label: 'Access Token', type: 'password', placeholder: 'Enter your access token', required: true }
      ],
      description: 'Connect to Facebook & Instagram Ads',
      instructions: 'You can find your Ad Account ID in Business Manager under Settings > Ad Accounts'
    },
    {
      name: 'Google Ads',
      icon: '📈',
      fields: [
        { key: 'client_id', label: 'Client ID', type: 'text', placeholder: 'Enter your client ID', required: true },
        { key: 'client_secret', label: 'Client Secret', type: 'password', placeholder: 'Enter your client secret', required: true },
        { key: 'developer_token', label: 'Developer Token', type: 'password', placeholder: 'Enter your developer token', required: true }
      ],
      description: 'Connect to Google Ads platform',
      instructions: 'Create credentials in Google Cloud Console and enable Google Ads API'
    }
    // ... other platforms
  ];

  const handleConnect = async () => {
    setConnectionStatus('testing');
    setErrorMessage('');
    
    try {
      // Validate required fields
      const missingFields = selectedPlatform?.fields
        .filter(field => field.required && !credentials[field.key])
        .map(field => field.label);
      
      if (missingFields?.length) {
        throw new Error(`Missing required fields: ${missingFields.join(', ')}`);
      }

      // Test connection
      await onConnect(selectedPlatform!.name, credentials);
      setConnectionStatus('success');
      setTimeout(() => {
        onClose();
        setSelectedPlatform(null);
        setCredentials({});
      }, 1500);
    } catch (error) {
      setConnectionStatus('error');
      setErrorMessage(error instanceof Error ? error.message : 'Connection failed');
    }
  };

  if (!isOpen) return null;

  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
        className="fixed inset-0 bg-black/5 backdrop-blur-sm z-40"
      />

      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.95 }}
        className="fixed inset-x-4 top-[5%] bottom-[5%] max-w-2xl mx-auto bg-white dark:bg-black rounded-xl shadow-2xl z-50 flex flex-col"
      >
        <div className="flex items-center justify-between p-6 border-b border-black/[.08] dark:border-white/[.08]">
          <h2 className="text-xl font-semibold">
            {selectedPlatform ? `Connect ${selectedPlatform.name}` : 'Connect Platform'}
          </h2>
          <button
            onClick={onClose}
            className="p-2 hover:bg-black/5 dark:hover:bg-white/5 rounded-full"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        <div className="flex-1 overflow-y-auto p-6">
          {!selectedPlatform ? (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {platforms.map((platform) => (
                <button
                  key={platform.name}
                  onClick={() => setSelectedPlatform(platform)}
                  className="p-4 border border-black/[.08] dark:border-white/[.08] rounded-lg text-left hover:bg-black/[.02] dark:hover:bg-white/[.02]"
                >
                  <div className="flex items-center gap-3 mb-2">
                    <span className="text-2xl">{platform.icon}</span>
                    <span className="font-medium">{platform.name}</span>
                  </div>
                  <p className="text-sm text-black/60 dark:text-white/60">
                    {platform.description}
                  </p>
                </button>
              ))}
            </div>
          ) : (
            <div className="space-y-6">
              {selectedPlatform.instructions && (
                <div className="p-4 bg-blue-500/10 text-blue-500 rounded-lg text-sm">
                  ℹ️ {selectedPlatform.instructions}
                </div>
              )}

              {selectedPlatform.fields.map((field) => (
                <div key={field.key}>
                  <label className="block text-sm font-medium mb-2">
                    {field.label}
                    {field.required && <span className="text-red-500 ml-1">*</span>}
                  </label>
                  <input
                    type={field.type}
                    placeholder={field.placeholder}
                    value={credentials[field.key] || ''}
                    onChange={(e) => setCredentials({
                      ...credentials,
                      [field.key]: e.target.value
                    })}
                    className="w-full p-3 rounded-lg border border-black/[.08] dark:border-white/[.08] bg-transparent focus:ring-2 focus:ring-black dark:focus:ring-white focus:outline-none"
                  />
                </div>
              ))}

              {errorMessage && (
                <div className="p-4 bg-red-500/10 text-red-500 rounded-lg text-sm">
                  ⚠️ {errorMessage}
                </div>
              )}
            </div>
          )}
        </div>

        <div className="flex items-center justify-between p-6 border-t border-black/[.08] dark:border-white/[.08]">
          {selectedPlatform && (
            <button
              onClick={() => {
                setSelectedPlatform(null);
                setCredentials({});
                setErrorMessage('');
              }}
              className="text-sm text-black/60 dark:text-white/60 hover:underline"
            >
              ← Back to platforms
            </button>
          )}
          <div className="flex items-center gap-3">
            <button
              onClick={onClose}
              className="px-4 py-2 text-sm border border-black/[.08] dark:border-white/[.08] rounded-lg hover:bg-black/[.02] dark:hover:bg-white/[.02]"
            >
              Cancel
            </button>
            {selectedPlatform && (
              <button
                onClick={handleConnect}
                disabled={connectionStatus === 'testing'}
                className={`px-4 py-2 text-sm rounded-lg flex items-center gap-2 ${
                  connectionStatus === 'testing'
                    ? 'bg-black/20 dark:bg-white/20 cursor-not-allowed'
                    : 'bg-black dark:bg-white text-white dark:text-black hover:bg-gray-800 dark:hover:bg-gray-200'
                }`}
              >
                {connectionStatus === 'testing' ? (
                  <>
                    <motion.span
                      animate={{ rotate: 360 }}
                      transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
                      className="w-4 h-4 border-2 border-white/20 dark:border-black/20 border-t-white dark:border-t-black rounded-full"
                    />
                    Testing Connection...
                  </>
                ) : connectionStatus === 'success' ? (
                  <>✓ Connected</>
                ) : (
                  <>Connect</>
                )}
              </button>
            )}
          </div>
        </div>
      </motion.div>
    </>
  );
} 