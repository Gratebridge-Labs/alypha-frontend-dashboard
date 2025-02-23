'use client';
import { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Image from 'next/image';

type SettingsTab = 'profile' | 'organization' | 'billing' | 'integrations' | 'notifications' | 'security' | 'developer';

export default function SettingsPage() {
  const [activeTab, setActiveTab] = useState<SettingsTab>('profile');

  const tabs = [
    {
      id: 'profile',
      name: 'Profile',
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
        </svg>
      )
    },
    {
      id: 'organization',
      name: 'Organization',
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
        </svg>
      )
    },
    {
      id: 'billing',
      name: 'Billing',
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
        </svg>
      )
    },
    {
      id: 'integrations',
      name: 'Integrations',
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z" />
        </svg>
      )
    },
    {
      id: 'notifications',
      name: 'Notifications',
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
        </svg>
      )
    },
    {
      id: 'security',
      name: 'Security',
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      )
    },
    {
      id: 'developer',
      name: 'Developer',
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
        </svg>
      )
    }
  ] as const;

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-semibold">Settings</h1>
        <p className="text-sm text-gray-500 mt-1">Manage your account and application preferences</p>
      </div>

      {/* Horizontal Tabs */}
      <div className="border-b border-gray-200">
        <nav className="-mb-px flex space-x-8">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`
                flex items-center gap-2 py-4 px-1 border-b-2 font-medium text-sm whitespace-nowrap
                ${activeTab === tab.id
                  ? 'border-gray-900 text-gray-900'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                }
              `}
            >
              {tab.icon}
              {tab.name}
            </button>
          ))}
        </nav>
      </div>

      {/* Content Area */}
      <div className="mt-6 max-w-4xl">
        {activeTab === 'profile' && (
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <div>
                <h1 className="text-2xl font-semibold">Profile Settings</h1>
                <p className="text-sm text-gray-500">Manage your personal information and preferences</p>
              </div>
              <Button>Save Changes</Button>
            </div>

            <Card className="p-6">
              <div className="flex items-center gap-6 pb-6 border-b">
                <div className="relative">
                  <Image
                    src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                    alt="Profile"
                    width={100}
                    height={100}
                    className="rounded-full"
                  />
                  <button className="absolute bottom-0 right-0 p-1 rounded-full bg-white border border-gray-200 shadow-sm">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
                    </svg>
                  </button>
                </div>
                <div>
                  <h3 className="font-medium">Profile Photo</h3>
                  <p className="text-sm text-gray-500">Upload a new photo or remove the current one</p>
                  <div className="flex gap-2 mt-2">
                    <Button variant="outline" size="sm">Upload New</Button>
                    <Button variant="outline" size="sm">Remove</Button>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-6 pt-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    First Name
                  </label>
                  <input
                    type="text"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Last Name
                  </label>
                  <input
                    type="text"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Email Address
                  </label>
                  <input
                    type="email"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md"
                  />
                </div>
                <div className="col-span-2">
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Bio
                  </label>
                  <textarea
                    rows={4}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md"
                    placeholder="Write a short bio..."
                  />
                </div>
              </div>
            </Card>

            <Card className="p-6">
              <h3 className="text-lg font-medium mb-4">Email Preferences</h3>
              <div className="space-y-4">
                {[
                  'Product updates and announcements',
                  'Security alerts',
                  'Account notifications',
                  'Marketing communications'
                ].map((pref) => (
                  <label key={pref} className="flex items-center gap-3">
                    <input type="checkbox" className="rounded border-gray-300" />
                    <span className="text-sm">{pref}</span>
                  </label>
                ))}
              </div>
            </Card>
          </div>
        )}

        {activeTab === 'organization' && (
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <div>
                <h1 className="text-2xl font-semibold">Organization Settings</h1>
                <p className="text-sm text-gray-500">Manage your organization details and team settings</p>
              </div>
              <Button>Save Changes</Button>
            </div>

            <Card className="p-6">
              <div className="flex items-center gap-6 pb-6 border-b">
                <div className="relative">
                  <Image
                    src="/placeholder-logo.png"
                    alt="Company Logo"
                    width={100}
                    height={100}
                    className="rounded-lg"
                  />
                  <button className="absolute bottom-0 right-0 p-1 rounded-full bg-white border border-gray-200 shadow-sm">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
                    </svg>
                  </button>
                </div>
                <div>
                  <h3 className="font-medium">Company Logo</h3>
                  <p className="text-sm text-gray-500">This will be displayed on your invoices and communications</p>
                  <div className="flex gap-2 mt-2">
                    <Button variant="outline" size="sm">Upload New</Button>
                    <Button variant="outline" size="sm">Remove</Button>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-6 pt-6">
                <div className="col-span-2">
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Company Name
                  </label>
                  <input
                    type="text"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md"
                  />
                </div>
                <div className="col-span-2">
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Business Address
                  </label>
                  <textarea
                    rows={3}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Tax ID / VAT Number
                  </label>
                  <input
                    type="text"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Company Size
                  </label>
                  <select className="w-full px-3 py-2 border border-gray-300 rounded-md">
                    <option>1-10 employees</option>
                    <option>11-50 employees</option>
                    <option>51-200 employees</option>
                    <option>201-500 employees</option>
                    <option>500+ employees</option>
                  </select>
                </div>
              </div>
            </Card>

            <Card className="p-6">
              <h3 className="text-lg font-medium mb-4">Team Members</h3>
              <div className="space-y-4">
                {[
                  { name: 'John Doe', email: 'john@example.com', role: 'Admin' },
                  { name: 'Jane Smith', email: 'jane@example.com', role: 'Member' },
                  { name: 'Mike Johnson', email: 'mike@example.com', role: 'Member' }
                ].map((member) => (
                  <div key={member.email} className="flex items-center justify-between p-4 border border-gray-200 rounded-lg">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center">
                        {member.name.charAt(0)}
                      </div>
                      <div>
                        <div className="font-medium">{member.name}</div>
                        <div className="text-sm text-gray-500">{member.email}</div>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <select className="text-sm border border-gray-300 rounded-md px-2 py-1">
                        <option>Admin</option>
                        <option>Member</option>
                        <option>Viewer</option>
                      </select>
                      <Button variant="outline" size="sm">Remove</Button>
                    </div>
                  </div>
                ))}
                <Button className="w-full">Add Team Member</Button>
              </div>
            </Card>
          </div>
        )}

        {activeTab === 'billing' && (
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <div>
                <h1 className="text-2xl font-semibold">Billing & Subscription</h1>
                <p className="text-sm text-gray-500">Manage your subscription and billing information</p>
              </div>
              <Button>Update Plan</Button>
            </div>

            <Card className="p-6">
              <div className="flex items-center justify-between pb-6 border-b">
                <div>
                  <h3 className="font-medium">Current Plan</h3>
                  <div className="text-2xl font-semibold mt-1">Professional</div>
                  <div className="text-sm text-gray-500">$49/month • Renews on Aug 1, 2024</div>
                </div>
                <Button variant="outline">Change Plan</Button>
              </div>

              <div className="py-6 border-b">
                <h3 className="font-medium mb-4">Usage This Month</h3>
                <div className="grid grid-cols-3 gap-6">
                  {[
                    { label: 'API Calls', used: '85,233', limit: '100,000' },
                    { label: 'Storage', used: '15.5 GB', limit: '50 GB' },
                    { label: 'Team Members', used: '8', limit: '10' }
                  ].map((metric) => (
                    <div key={metric.label}>
                      <div className="text-sm text-gray-500">{metric.label}</div>
                      <div className="text-lg font-medium mt-1">{metric.used}</div>
                      <div className="text-sm text-gray-500">of {metric.limit}</div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-6">
                <h3 className="font-medium mb-4">Payment Method</h3>
                <div className="flex items-center justify-between p-4 border border-gray-200 rounded-lg">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-8 bg-gray-100 rounded flex items-center justify-center">
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
                      </svg>
                    </div>
                    <div>
                      <div className="font-medium">Visa ending in 4242</div>
                      <div className="text-sm text-gray-500">Expires 12/24</div>
                    </div>
                  </div>
                  <Button variant="outline">Update</Button>
                </div>
              </div>
            </Card>

            <Card className="p-6">
              <h3 className="text-lg font-medium mb-4">Billing History</h3>
              <div className="space-y-4">
                {[
                  { date: 'Jul 1, 2024', amount: '$49.00', status: 'Paid', invoice: '#INV-2024-007' },
                  { date: 'Jun 1, 2024', amount: '$49.00', status: 'Paid', invoice: '#INV-2024-006' },
                  { date: 'May 1, 2024', amount: '$49.00', status: 'Paid', invoice: '#INV-2024-005' }
                ].map((invoice) => (
                  <div key={invoice.invoice} className="flex items-center justify-between p-4 border border-gray-200 rounded-lg">
                    <div>
                      <div className="font-medium">{invoice.date}</div>
                      <div className="text-sm text-gray-500">{invoice.invoice}</div>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="text-sm font-medium">{invoice.amount}</div>
                      <span className="text-xs px-2 py-1 bg-green-100 text-green-700 rounded-full">
                        {invoice.status}
                      </span>
                      <Button variant="outline" size="sm">Download</Button>
                    </div>
                  </div>
                ))}
              </div>
            </Card>
          </div>
        )}

        {activeTab === 'integrations' && (
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <div>
                <h1 className="text-2xl font-semibold">Integrations</h1>
                <p className="text-sm text-gray-500">Connect and manage your external services</p>
              </div>
              <Button>Browse Integrations</Button>
            </div>

            <Card className="p-6">
              <h3 className="text-lg font-medium mb-4">Connected Services</h3>
              <div className="space-y-4">
                {[
                  {
                    name: 'Slack',
                    icon: '/slack-icon.svg',
                    status: 'Connected',
                    workspace: 'Alypha Team',
                    lastSync: '5 minutes ago'
                  },
                  {
                    name: 'Google Workspace',
                    icon: '/google-icon.svg',
                    status: 'Connected',
                    workspace: 'company.com',
                    lastSync: '1 hour ago'
                  },
                  {
                    name: 'Microsoft 365',
                    icon: '/microsoft-icon.svg',
                    status: 'Not Connected',
                    workspace: null,
                    lastSync: null
                  }
                ].map((integration) => (
                  <div key={integration.name} className="flex items-center justify-between p-4 border border-gray-200 rounded-lg">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center">
                        {/* Placeholder for integration icon */}
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                        </svg>
                      </div>
                      <div>
                        <div className="font-medium">{integration.name}</div>
                        {integration.workspace && (
                          <div className="text-sm text-gray-500">
                            {integration.workspace} • Last synced {integration.lastSync}
                          </div>
                        )}
                      </div>
                    </div>
                    <Button variant={integration.status === 'Connected' ? 'outline' : 'default'}>
                      {integration.status === 'Connected' ? 'Manage' : 'Connect'}
                    </Button>
                  </div>
                ))}
              </div>
            </Card>

            <Card className="p-6">
              <h3 className="text-lg font-medium mb-4">Available Integrations</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[
                  'Jira', 'GitHub', 'Notion', 'Salesforce', 'Zendesk', 'HubSpot'
                ].map((service) => (
                  <div key={service} className="p-4 border border-gray-200 rounded-lg">
                    <div className="font-medium">{service}</div>
                    <Button variant="outline" className="mt-2">Connect</Button>
                  </div>
                ))}
              </div>
            </Card>
          </div>
        )}

        {activeTab === 'notifications' && (
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <div>
                <h1 className="text-2xl font-semibold">Notification Preferences</h1>
                <p className="text-sm text-gray-500">Manage how and when you receive notifications</p>
              </div>
              <Button>Save Changes</Button>
            </div>

            <Card className="p-6">
              <h3 className="text-lg font-medium mb-6">Notification Channels</h3>
              <div className="space-y-6">
                {[
                  { name: 'Email', description: 'Receive notifications via email' },
                  { name: 'Push Notifications', description: 'Browser and mobile push notifications' },
                  { name: 'Slack', description: 'Receive notifications in Slack' }
                ].map((channel) => (
                  <div key={channel.name} className="flex items-center justify-between">
                    <div>
                      <div className="font-medium">{channel.name}</div>
                      <div className="text-sm text-gray-500">{channel.description}</div>
                    </div>
                    <div className="flex items-center gap-2">
                      <select className="text-sm border border-gray-300 rounded-md px-2 py-1">
                        <option>All notifications</option>
                        <option>Important only</option>
                        <option>None</option>
                      </select>
                    </div>
                  </div>
                ))}
              </div>
            </Card>

            <Card className="p-6">
              <h3 className="text-lg font-medium mb-6">Notification Types</h3>
              <div className="space-y-6">
                {[
                  { category: 'Team Activity', items: [
                    'New team member added',
                    'Team member removed',
                    'Role changes'
                  ]},
                  { category: 'Security', items: [
                    'New device login',
                    'Password changes',
                    'Two-factor authentication updates'
                  ]},
                  { category: 'Billing', items: [
                    'Payment processed',
                    'Failed payments',
                    'Subscription changes'
                  ]}
                ].map((group) => (
                  <div key={group.category}>
                    <h4 className="font-medium mb-3">{group.category}</h4>
                    <div className="space-y-3 ml-4">
                      {group.items.map((item) => (
                        <label key={item} className="flex items-center gap-3">
                          <input type="checkbox" className="rounded border-gray-300" />
                          <span className="text-sm">{item}</span>
                        </label>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </Card>
          </div>
        )}

        {activeTab === 'security' && (
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <div>
                <h1 className="text-2xl font-semibold">Security Settings</h1>
                <p className="text-sm text-gray-500">Manage your account security and authentication methods</p>
              </div>
            </div>

            <Card className="p-6">
              <h3 className="text-lg font-medium mb-6">Multi-Factor Authentication</h3>
              <div className="space-y-6">
                {[
                  {
                    method: 'Authenticator App',
                    status: 'Enabled',
                    description: 'Use Google Authenticator or similar apps'
                  },
                  {
                    method: 'SMS Authentication',
                    status: 'Not Enabled',
                    description: 'Receive codes via text message'
                  },
                  {
                    method: 'Security Keys',
                    status: 'Not Enabled',
                    description: 'Use hardware security keys'
                  }
                ].map((method) => (
                  <div key={method.method} className="flex items-center justify-between">
                    <div>
                      <div className="font-medium">{method.method}</div>
                      <div className="text-sm text-gray-500">{method.description}</div>
                    </div>
                    <Button variant={method.status === 'Enabled' ? 'outline' : 'default'}>
                      {method.status === 'Enabled' ? 'Manage' : 'Enable'}
                    </Button>
                  </div>
                ))}
              </div>
            </Card>

            <Card className="p-6">
              <h3 className="text-lg font-medium mb-6">Password</h3>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Current Password
                  </label>
                  <input
                    type="password"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    New Password
                  </label>
                  <input
                    type="password"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Confirm New Password
                  </label>
                  <input
                    type="password"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md"
                  />
                </div>
                <Button className="mt-2">Update Password</Button>
              </div>
            </Card>

            <Card className="p-6">
              <h3 className="text-lg font-medium mb-6">Login History</h3>
              <div className="space-y-4">
                {[
                  { device: 'MacBook Pro', location: 'San Francisco, CA', time: '2 minutes ago', status: 'Current session' },
                  { device: 'iPhone 12', location: 'San Francisco, CA', time: '1 day ago', status: 'Successful' },
                  { device: 'Windows PC', location: 'New York, NY', time: '3 days ago', status: 'Successful' }
                ].map((session, i) => (
                  <div key={i} className="flex items-center justify-between p-4 border border-gray-200 rounded-lg">
                    <div>
                      <div className="font-medium">{session.device}</div>
                      <div className="text-sm text-gray-500">
                        {session.location} • {session.time}
                      </div>
                    </div>
                    <span className={`text-sm ${
                      session.status === 'Current session' ? 'text-green-600' : 'text-gray-500'
                    }`}>
                      {session.status}
                    </span>
                  </div>
                ))}
              </div>
            </Card>
          </div>
        )}

        {activeTab === 'developer' && (
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <div>
                <h1 className="text-2xl font-semibold">Developer Settings</h1>
                <p className="text-sm text-gray-500">Manage API keys and developer resources</p>
              </div>
              <Button>Generate New Key</Button>
            </div>

            <Card className="p-6">
              <h3 className="text-lg font-medium mb-6">API Keys</h3>
              <div className="space-y-4">
                {[
                  {
                    name: 'Production API Key',
                    key: 'sk_live_1234567890abcdef',
                    created: '2024-01-15',
                    lastUsed: '2 hours ago'
                  },
                  {
                    name: 'Development API Key',
                    key: 'sk_test_1234567890abcdef',
                    created: '2024-01-10',
                    lastUsed: '5 days ago'
                  }
                ].map((apiKey) => (
                  <div key={apiKey.name} className="p-4 border border-gray-200 rounded-lg">
                    <div className="flex items-center justify-between mb-2">
                      <div className="font-medium">{apiKey.name}</div>
                      <Button variant="outline" size="sm">Revoke</Button>
                    </div>
                    <div className="font-mono text-sm bg-gray-50 p-2 rounded mb-2">{apiKey.key}</div>
                    <div className="text-sm text-gray-500">
                      Created on {apiKey.created} • Last used {apiKey.lastUsed}
                    </div>
                  </div>
                ))}
              </div>
            </Card>

            <Card className="p-6">
              <h3 className="text-lg font-medium mb-6">Webhooks</h3>
              <div className="space-y-4">
                {[
                  {
                    url: 'https://api.example.com/webhooks',
                    events: ['user.created', 'user.updated'],
                    status: 'Active'
                  }
                ].map((webhook, i) => (
                  <div key={i} className="p-4 border border-gray-200 rounded-lg">
                    <div className="flex items-center justify-between mb-2">
                      <div className="font-medium">Endpoint URL</div>
                      <span className="text-xs px-2 py-1 bg-green-100 text-green-700 rounded-full">
                        {webhook.status}
                      </span>
                    </div>
                    <div className="font-mono text-sm bg-gray-50 p-2 rounded mb-2">{webhook.url}</div>
                    <div className="flex gap-2">
                      {webhook.events.map((event) => (
                        <span key={event} className="text-xs px-2 py-1 bg-gray-100 rounded-full">
                          {event}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
                <Button variant="outline" className="w-full">Add Webhook</Button>
              </div>
            </Card>

            <Card className="p-6">
              <h3 className="text-lg font-medium mb-6">Documentation & Resources</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[
                  { title: 'API Documentation', description: 'Detailed API reference and guides' },
                  { title: 'SDKs & Libraries', description: 'Official SDKs for various languages' },
                  { title: 'Sample Code', description: 'Example implementations and snippets' },
                  { title: 'API Status', description: 'Current API status and incidents' }
                ].map((resource) => (
                  <div key={resource.title} className="p-4 border border-gray-200 rounded-lg">
                    <div className="font-medium">{resource.title}</div>
                    <div className="text-sm text-gray-500">{resource.description}</div>
                    <Button variant="outline" className="mt-2">View</Button>
                  </div>
                ))}
              </div>
            </Card>
          </div>
        )}
      </div>
    </div>
  );
} 