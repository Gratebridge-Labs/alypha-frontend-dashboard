'use client';

import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Image from 'next/image';

const integrations = [
  {
    name: 'Google Workspace',
    description: 'Connect your Google Calendar, Gmail, and Drive',
    icon: '/icons/google.svg',
    status: 'connected'
  },
  {
    name: 'Meta Business',
    description: 'Integrate with Facebook, Instagram, and WhatsApp',
    icon: '/icons/meta.svg',
    status: 'not_connected'
  },
  {
    name: 'Salesforce',
    description: 'Sync customer data and sales pipeline',
    icon: '/icons/salesforce.svg',
    status: 'not_connected'
  },
  {
    name: 'Slack',
    description: 'Team communication and notifications',
    icon: '/icons/slack.svg',
    status: 'connected'
  },
  {
    name: 'HubSpot',
    description: 'CRM and marketing automation',
    icon: '/icons/hubspot.svg',
    status: 'not_connected'
  },
  {
    name: 'Zoom',
    description: 'Video meetings and webinars',
    icon: '/icons/zoom.svg',
    status: 'connected'
  }
];

export default function IntegrationsPage() {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-semibold">Integrations</h1>
          <p className="text-sm text-gray-500 mt-1">Connect your favorite tools and services</p>
        </div>
        <Button variant="default">
          <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
          </svg>
          Add New Integration
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {integrations.map((integration) => (
          <Card key={integration.name} className="p-6">
            <div className="flex items-start justify-between">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 relative">
                  <Image
                    src={integration.icon}
                    alt={integration.name}
                    fill
                    className="object-contain"
                  />
                </div>
                <div>
                  <h3 className="font-medium">{integration.name}</h3>
                  <p className="text-sm text-gray-500">{integration.description}</p>
                </div>
              </div>
            </div>
            <div className="mt-4 flex items-center justify-between">
              <span className={`text-xs px-2 py-1 rounded-full ${
                integration.status === 'connected' 
                  ? 'bg-green-100 text-green-700 dark:bg-green-900 dark:text-green-300'
                  : 'bg-gray-100 text-gray-700 dark:bg-gray-900 dark:text-gray-300'
              }`}>
                {integration.status === 'connected' ? 'Connected' : 'Not Connected'}
              </span>
              <Button variant="outline" className="text-sm">
                {integration.status === 'connected' ? 'Configure' : 'Connect'}
              </Button>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
} 