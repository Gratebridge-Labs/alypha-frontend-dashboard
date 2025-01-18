'use client';
import { useState } from 'react';
import Image from 'next/image';

export default function PromptPage() {
  const [prompt, setPrompt] = useState('');
  const [isRecording, setIsRecording] = useState(false);

  const shortcuts = [
    { mac: '⌘ + V', ios: 'Tap + Hold', description: 'Start voice recording' },
    { mac: '⌘ + I', ios: 'Tap Image', description: 'Upload image' },
    { mac: '⌘ + D', ios: 'Tap Doc', description: 'Upload document' },
    { mac: '⌘ + ⏎', ios: 'Blue Button', description: 'Send prompt' },
  ];

  const suggestions = [
    {
      category: "Integrations",
      prompts: [
        "Create a Jira epic from this project brief",
        "Send daily updates to Slack channel #team-updates",
        "Generate a Notion template for content calendar",
        "Sync this timeline with Google Calendar"
      ]
    },
    {
      category: "Automation",
      prompts: [
        "Generate a weekly progress report for stakeholders",
        "Create custom invoice template for my business",
        "Schedule social media posts for next week",
        "Auto-respond to WhatsApp customer inquiries"
      ]
    },
    {
      category: "SME Tools",
      prompts: [
        "Generate a professional website for my bakery",
        "Create a pricing catalog with WhatsApp integration",
        "Set up automated order confirmation system",
        "Design a customer loyalty program"
      ]
    },
    {
      category: "Productivity",
      prompts: [
        "Analyze team performance and suggest improvements",
        "Organize project documents by priority",
        "Create meeting summary and action items",
        "Generate project timeline with resource allocation"
      ]
    }
  ];

  return (
    <div className="max-w-4xl mx-auto">
      {/* Shortcuts Panel */}
      <div className="mb-8 p-4 rounded-lg border border-black/[.08] dark:border-white/[.08] bg-black/[.02] dark:bg-white/[.02]">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {shortcuts.map((shortcut, i) => (
            <div key={i} className="text-sm">
              <div className="flex items-center gap-2 mb-1">
                <span className="font-mono bg-black/[.05] dark:bg-white/[.05] px-2 py-1 rounded text-xs">
                  {shortcut.mac}
                </span>
                <span className="text-black/40 dark:text-white/40">|</span>
                <span className="font-mono bg-black/[.05] dark:bg-white/[.05] px-2 py-1 rounded text-xs">
                  {shortcut.ios}
                </span>
              </div>
              <p className="text-black/60 dark:text-white/60">{shortcut.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Main Prompt Area */}
      <div className="relative mb-4">
        <textarea
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
          placeholder="Type your prompt here or use shortcuts for voice/image/document input..."
          className="w-full h-40 p-4 rounded-lg border border-black/[.08] dark:border-white/[.08] bg-white dark:bg-black focus:ring-2 focus:ring-black dark:focus:ring-white focus:outline-none resize-none"
        />
        
        {/* Action Buttons */}
        <div className="absolute bottom-4 right-4 flex items-center gap-2">
          {/* Document Upload Button */}
          <button className="p-2 rounded-full hover:bg-black/5 dark:hover:bg-white/5">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
          </button>
          {/* Image Upload Button */}
          <button className="p-2 rounded-full hover:bg-black/5 dark:hover:bg-white/5">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
          </button>
          {/* Voice Recording Button */}
          <button 
            className={`p-2 rounded-full ${isRecording ? 'text-red-500' : ''} hover:bg-black/5 dark:hover:bg-white/5`}
            onClick={() => setIsRecording(!isRecording)}
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" />
            </svg>
          </button>
          {/* Send Button */}
          <button className="p-2 rounded-full bg-black dark:bg-white text-white dark:text-black hover:bg-gray-800 dark:hover:bg-gray-200">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 5l7 7-7 7M5 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>

      {/* Suggestions */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {suggestions.map((category, i) => (
          <div key={i} className="space-y-3">
            <h3 className="text-sm font-medium">{category.category}</h3>
            <div className="space-y-2">
              {category.prompts.map((prompt, j) => (
                <button
                  key={j}
                  onClick={() => setPrompt(prompt)}
                  className="w-full text-left text-sm px-3 py-2 rounded-lg border border-black/[.08] dark:border-white/[.08] hover:bg-black/5 dark:hover:bg-white/5"
                >
                  {prompt}
                </button>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
} 