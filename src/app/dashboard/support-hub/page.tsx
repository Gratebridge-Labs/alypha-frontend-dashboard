'use client';
import { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Image from 'next/image';

type SupportTab = 'overview' | 'agents' | 'channels' | 'analytics' | 'settings';

export default function SupportHubPage() {
  const [activeTab, setActiveTab] = useState<SupportTab>('overview');

  const tabs = [
    { id: 'overview', name: 'Overview' },
    { id: 'agents', name: 'AI & Human Agents' },
    { id: 'channels', name: 'Support Channels' },
    { id: 'analytics', name: 'Analytics' },
    { id: 'settings', name: 'Settings' }
  ] as const;

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-semibold">Support Hub</h1>
          <p className="text-sm text-gray-500">Manage your customer support operations and AI agents</p>
        </div>
        <Button>Quick Setup Guide</Button>
      </div>

      {/* Tabs */}
      <div className="border-b border-gray-200">
        <nav className="-mb-px flex space-x-8">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`
                whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm
                ${activeTab === tab.id
                  ? 'border-black text-black'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                }
              `}
            >
              {tab.name}
            </button>
          ))}
        </nav>
      </div>

      {/* Content */}
      {activeTab === 'overview' && (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card className="p-6 col-span-2">
            <h3 className="text-lg font-medium mb-4">Support Activity</h3>
            <div className="grid grid-cols-3 gap-4 mb-6">
              <div>
                <div className="text-sm text-gray-500">Active Tickets</div>
                <div className="text-2xl font-semibold">24</div>
              </div>
              <div>
                <div className="text-sm text-gray-500">Avg Response Time</div>
                <div className="text-2xl font-semibold">3m</div>
              </div>
              <div>
                <div className="text-sm text-gray-500">Resolution Rate</div>
                <div className="text-2xl font-semibold">94%</div>
              </div>
            </div>
            {/* Add activity chart here */}
          </Card>

          <Card className="p-6">
            <h3 className="text-lg font-medium mb-4">Quick Actions</h3>
            <div className="space-y-3">
              <Button className="w-full justify-start">
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                </svg>
                Hire New AI Agent
              </Button>
              <Button variant="outline" className="w-full justify-start">
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v1m6 11h2m-6 0h-2v4m0-11v3m0 0h.01M12 12h4.01M16 20h4M4 12h4m12 0h.01M5 8h2a1 1 0 001-1V5a1 1 0 00-1-1H5a1 1 0 00-1 1v2a1 1 0 001 1zm12 0h2a1 1 0 001-1V5a1 1 0 00-1-1h-2a1 1 0 00-1 1v2a1 1 0 001 1zM5 20h2a1 1 0 001-1v-2a1 1 0 00-1-1H5a1 1 0 00-1 1v2a1 1 0 001 1z" />
                </svg>
                Add Support Channel
              </Button>
              <Button variant="outline" className="w-full justify-start">
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                </svg>
                View Templates
              </Button>
            </div>
          </Card>

          <Card className="p-6 col-span-2">
            <h3 className="text-lg font-medium mb-4">Active Agents</h3>
            <div className="space-y-4">
              {[
                { name: 'Support AI #1', type: 'AI', status: 'Active', load: '65%', satisfaction: '98%' },
                { name: 'John Smith', type: 'Human', status: 'Active', load: '45%', satisfaction: '96%' },
                { name: 'Support AI #2', type: 'AI', status: 'Training', load: '0%', satisfaction: 'N/A' }
              ].map((agent) => (
                <div key={agent.name} className="flex items-center justify-between p-4 border border-gray-200 rounded-lg">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center">
                      {agent.type === 'AI' ? '🤖' : '👤'}
                    </div>
                    <div>
                      <div className="font-medium">{agent.name}</div>
                      <div className="text-sm text-gray-500">{agent.type} Agent • {agent.status}</div>
                    </div>
                  </div>
                  <div className="text-sm text-gray-500">
                    Load: {agent.load} • Satisfaction: {agent.satisfaction}
                  </div>
                </div>
              ))}
            </div>
          </Card>

          <Card className="p-6">
            <h3 className="text-lg font-medium mb-4">Support Channels</h3>
            <div className="space-y-3">
              {[
                { name: 'Phone Support', status: 'Active', count: '3 numbers' },
                { name: 'Email Support', status: 'Active', count: '2 addresses' },
                { name: 'Live Chat', status: 'Active', count: '24/7' },
                { name: 'WhatsApp', status: 'Inactive', count: 'Not configured' }
              ].map((channel) => (
                <div key={channel.name} className="flex items-center justify-between p-3 border border-gray-200 rounded-lg">
                  <div className="font-medium">{channel.name}</div>
                  <div className="text-sm">
                    <span className={`px-2 py-1 rounded-full ${
                      channel.status === 'Active' 
                        ? 'bg-green-100 text-green-700'
                        : 'bg-gray-100 text-gray-700'
                    }`}>
                      {channel.count}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </Card>
        </div>
      )}

      {/* AI & Human Agents Tab */}
      {activeTab === 'agents' && (
        <div className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* AI Agent Marketplace */}
            <Card className="p-6 col-span-2">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-lg font-medium">AI Agent Marketplace</h3>
                <Button>Deploy New Agent</Button>
              </div>
              <div className="grid grid-cols-2 gap-4">
                {[
                  {
                    name: 'Customer Service Pro AI',
                    specialty: 'General Support',
                    price: '$299/mo',
                    features: ['24/7 Availability', 'Multi-language', 'Quick Learning']
                  },
                  {
                    name: 'Technical Support AI',
                    specialty: 'Technical Issues',
                    price: '$399/mo',
                    features: ['Deep Technical Knowledge', 'Code Analysis', 'Bug Tracking']
                  },
                  {
                    name: 'Sales Assistant AI',
                    specialty: 'Sales Support',
                    price: '$349/mo',
                    features: ['Lead Qualification', 'Product Knowledge', 'Upselling']
                  },
                  {
                    name: 'Onboarding Specialist AI',
                    specialty: 'User Onboarding',
                    price: '$299/mo',
                    features: ['Process Guidance', 'Feature Education', 'Setup Support']
                  }
                ].map((agent) => (
                  <div key={agent.name} className="border border-gray-200 rounded-lg p-4">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center">
                        🤖
                      </div>
                      <div>
                        <div className="font-medium">{agent.name}</div>
                        <div className="text-sm text-gray-500">{agent.specialty}</div>
                      </div>
                    </div>
                    <div className="text-sm text-gray-500 mb-3">
                      {agent.features.map((feature) => (
                        <div key={feature} className="flex items-center gap-2">
                          <svg className="w-4 h-4 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          {feature}
                        </div>
                      ))}
                    </div>
                    <div className="flex items-center justify-between mt-4">
                      <span className="font-medium">{agent.price}</span>
                      <Button variant="outline" size="sm">Deploy</Button>
                    </div>
                  </div>
                ))}
              </div>
            </Card>

            {/* Training & Onboarding */}
            <Card className="p-6">
              <h3 className="text-lg font-medium mb-4">Training Center</h3>
              <div className="space-y-4">
                <div className="border border-gray-200 rounded-lg p-4">
                  <h4 className="font-medium mb-2">Active Training</h4>
                  <div className="space-y-3">
                    {[
                      { agent: 'Support AI #2', progress: 65, type: 'Initial Training' },
                      { agent: 'Sales AI #1', progress: 92, type: 'Product Update' }
                    ].map((training) => (
                      <div key={training.agent} className="space-y-2">
                        <div className="flex justify-between text-sm">
                          <span>{training.agent}</span>
                          <span>{training.progress}%</span>
                        </div>
                        <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                          <div 
                            className="h-full bg-blue-500 rounded-full"
                            style={{ width: `${training.progress}%` }}
                          />
                        </div>
                        <div className="text-xs text-gray-500">{training.type}</div>
                      </div>
                    ))}
                  </div>
                </div>
                <Button className="w-full">Start New Training</Button>
              </div>
            </Card>
          </div>

          {/* Team Management */}
          <Card className="p-6">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-lg font-medium">Team Management</h3>
              <div className="flex gap-2">
                <Button variant="outline">Import Team</Button>
                <Button>Add Member</Button>
              </div>
            </div>
            <div className="space-y-4">
              {[
                {
                  name: 'John Smith',
                  role: 'Senior Support Agent',
                  type: 'Human',
                  status: 'Active',
                  channels: ['Phone', 'Email', 'Chat'],
                  availability: 'Mon-Fri, 9AM-5PM'
                },
                {
                  name: 'Support AI #1',
                  role: 'General Support',
                  type: 'AI',
                  status: 'Active',
                  channels: ['Chat', 'Email'],
                  availability: '24/7'
                },
                {
                  name: 'Sarah Johnson',
                  role: 'Technical Support',
                  type: 'Human',
                  status: 'Away',
                  channels: ['Phone', 'Email'],
                  availability: 'Mon-Fri, 12PM-8PM'
                }
              ].map((member) => (
                <div key={member.name} className="flex items-center justify-between p-4 border border-gray-200 rounded-lg">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center">
                      {member.type === 'AI' ? '🤖' : '👤'}
                    </div>
                    <div>
                      <div className="font-medium">{member.name}</div>
                      <div className="text-sm text-gray-500">{member.role}</div>
                      <div className="flex gap-2 mt-1">
                        {member.channels.map((channel) => (
                          <span key={channel} className="text-xs px-2 py-1 bg-gray-100 rounded-full">
                            {channel}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className={`text-sm ${
                      member.status === 'Active' ? 'text-green-600' : 'text-gray-500'
                    }`}>
                      {member.status}
                    </div>
                    <div className="text-sm text-gray-500">{member.availability}</div>
                    <Button variant="outline" size="sm" className="mt-2">Manage</Button>
                  </div>
                </div>
              ))}
            </div>
          </Card>
        </div>
      )}

      {/* Support Channels Tab */}
      {activeTab === 'channels' && (
        <div className="space-y-6">
          {/* Phone Support Section */}
          <Card className="p-6">
            <div className="flex items-center justify-between mb-6">
              <div>
                <h3 className="text-lg font-medium">Phone Support</h3>
                <p className="text-sm text-gray-500">Manage virtual phone numbers and routing</p>
              </div>
              <Button>Add Phone Number</Button>
            </div>
            <div className="space-y-4">
              {[
                {
                  number: '+1 (555) 123-4567',
                  type: 'Main Support',
                  assigned: ['John Smith', 'Support AI #1'],
                  hours: '24/7',
                  status: 'Active'
                },
                {
                  number: '+1 (555) 234-5678',
                  type: 'Technical Support',
                  assigned: ['Sarah Johnson', 'Support AI #2'],
                  hours: 'Mon-Fri, 9AM-5PM',
                  status: 'Active'
                }
              ].map((line) => (
                <div key={line.number} className="flex items-center justify-between p-4 border border-gray-200 rounded-lg">
                  <div>
                    <div className="font-medium">{line.number}</div>
                    <div className="text-sm text-gray-500">{line.type}</div>
                    <div className="flex gap-2 mt-1">
                      {line.assigned.map((agent) => (
                        <span key={agent} className="text-xs px-2 py-1 bg-gray-100 rounded-full">
                          {agent}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-sm text-gray-500">{line.hours}</div>
                    <Button variant="outline" size="sm" className="mt-2">Configure</Button>
                  </div>
                </div>
              ))}
            </div>
          </Card>

          {/* Email Support Section */}
          <Card className="p-6">
            {/* Similar structure to phone support, but for email */}
          </Card>

          {/* Live Chat Section */}
          <Card className="p-6">
            {/* Live chat configuration */}
          </Card>

          {/* Integration Settings */}
          <Card className="p-6">
            {/* Third-party integrations */}
          </Card>
        </div>
      )}

      {/* Analytics Tab */}
      {activeTab === 'analytics' && (
        <div className="space-y-6">
          {/* Performance Overview */}
          <Card className="p-6">
            <h3 className="text-lg font-medium mb-4">Performance Overview</h3>
            {/* Add charts and metrics here */}
          </Card>

          {/* Chat History & Monitoring */}
          <Card className="p-6">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-lg font-medium">Chat History</h3>
              <div className="flex gap-2">
                <select className="text-sm border border-gray-300 rounded-md px-3 py-2">
                  <option>All Agents</option>
                  <option>AI Agents Only</option>
                  <option>Human Agents Only</option>
                </select>
                <select className="text-sm border border-gray-300 rounded-md px-3 py-2">
                  <option>Last 24 Hours</option>
                  <option>Last 7 Days</option>
                  <option>Last 30 Days</option>
                </select>
                <Button variant="outline">Export</Button>
              </div>
            </div>

            <div className="space-y-4">
              {[
                {
                  id: 'chat-001',
                  agent: 'Support AI #1',
                  customer: 'Jane Cooper',
                  timestamp: '2024-02-15 14:23',
                  duration: '12m',
                  status: 'Resolved',
                  satisfaction: '5/5'
                },
                // ... more chat history entries
              ].map((chat) => (
                <div key={chat.id} className="p-4 border border-gray-200 rounded-lg">
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center">
                        {chat.agent.includes('AI') ? '🤖' : '👤'}
                      </div>
                      <div>
                        <div className="font-medium">{chat.agent}</div>
                        <div className="text-sm text-gray-500">with {chat.customer}</div>
                      </div>
                    </div>
                    <Button variant="outline" size="sm">View Transcript</Button>
                  </div>
                  <div className="grid grid-cols-4 gap-4 text-sm">
                    <div>
                      <div className="text-gray-500">Time</div>
                      <div>{chat.timestamp}</div>
                    </div>
                    <div>
                      <div className="text-gray-500">Duration</div>
                      <div>{chat.duration}</div>
                    </div>
                    <div>
                      <div className="text-gray-500">Status</div>
                      <div>{chat.status}</div>
                    </div>
                    <div>
                      <div className="text-gray-500">Satisfaction</div>
                      <div>{chat.satisfaction}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </Card>

          {/* Real-time Monitoring */}
          <Card className="p-6">
            <h3 className="text-lg font-medium mb-4">Live Monitoring</h3>
            {/* Add real-time chat monitoring interface */}
          </Card>
        </div>
      )}

      {/* Settings Tab */}
      {activeTab === 'settings' && (
        <div className="space-y-6">
          {/* General Settings */}
          <Card className="p-6">
            {/* Add settings configuration */}
          </Card>

          {/* Automation Rules */}
          <Card className="p-6">
            {/* Add automation settings */}
          </Card>

          {/* Templates */}
          <Card className="p-6">
            {/* Add response templates */}
          </Card>
        </div>
      )}
    </div>
  );
} 