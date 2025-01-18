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

type Props = {
  campaigns: Campaign[];
};

export default function AnalyticsDashboard({ campaigns }: Props) {
  const [timeframe, setTimeframe] = useState('7d');
  const [selectedMetric, setSelectedMetric] = useState<string | null>(null);

  const metrics = {
    overview: [
      { name: 'Total Leads', value: '1,234', change: '+12.3%', trend: 'up' },
      { name: 'Conversion Rate', value: '3.2%', change: '+0.8%', trend: 'up' },
      { name: 'Avg. Cost per Lead', value: '$45.20', change: '-5.4%', trend: 'down' },
      { name: 'Total Revenue', value: '$52,340', change: '+15.7%', trend: 'up' }
    ],
    byPlatform: [
      { name: 'Meta Ads', leads: 523, spend: 12400, revenue: 28900 },
      { name: 'Google Ads', leads: 412, spend: 9800, revenue: 19500 },
      { name: 'Email', leads: 189, spend: 2100, revenue: 8940 },
      { name: 'SMS', leads: 110, spend: 1200, revenue: 5000 }
    ],
    campaigns: [
      {
        name: 'Q4 Sales Campaign',
        status: 'active',
        leads: 245,
        spend: 5600,
        revenue: 12400,
        roi: 221
      }
      // ... more campaigns
    ]
  };

  return (
    <div className="space-y-6">
      {/* Timeframe Selector */}
      <div className="flex gap-2 p-1 bg-black/[.02] dark:bg-white/[.02] rounded-lg w-fit">
        {['7d', '30d', '90d', '12m'].map((period) => (
          <button
            key={period}
            onClick={() => setTimeframe(period)}
            className={`px-4 py-2 text-sm rounded-lg ${
              timeframe === period
                ? 'bg-white dark:bg-black shadow-sm'
                : 'text-black/60 dark:text-white/60'
            }`}
          >
            {period.toUpperCase()}
          </button>
        ))}
      </div>

      {/* Overview Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {metrics.overview.map((metric) => (
          <div
            key={metric.name}
            className="p-4 border border-black/[.08] dark:border-white/[.08] rounded-lg"
          >
            <div className="text-sm text-black/60 dark:text-white/60 mb-1">
              {metric.name}
            </div>
            <div className="flex items-end justify-between">
              <div className="text-2xl font-semibold">{metric.value}</div>
              <div className={`flex items-center text-sm ${
                metric.trend === 'up' ? 'text-green-500' : 'text-red-500'
              }`}>
                <svg
                  className={`w-4 h-4 ${metric.trend === 'down' && 'rotate-180'}`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                </svg>
                <span>{metric.change}</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Platform Performance */}
      <div className="border border-black/[.08] dark:border-white/[.08] rounded-lg p-4">
        <h3 className="font-medium mb-4">Platform Performance</h3>
        <div className="space-y-4">
          {metrics.byPlatform.map((platform) => (
            <div
              key={platform.name}
              className="flex items-center gap-4"
            >
              <div className="w-24 font-medium">{platform.name}</div>
              <div className="flex-1 h-2 bg-black/[.08] dark:bg-white/[.08] rounded-full overflow-hidden">
                <div
                  className="h-full bg-blue-500"
                  style={{ width: `${(platform.revenue / 30000) * 100}%` }}
                />
              </div>
              <div className="w-32 text-sm text-black/60 dark:text-white/60">
                ${platform.revenue.toLocaleString()}
              </div>
              <div className="w-24 text-sm text-black/60 dark:text-white/60">
                {platform.leads} leads
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Campaign Performance */}
      <div className="border border-black/[.08] dark:border-white/[.08] rounded-lg overflow-hidden">
        <table className="w-full">
          <thead>
            <tr className="border-b border-black/[.08] dark:border-white/[.08] bg-black/[.02] dark:bg-white/[.02]">
              <th className="px-4 py-2 text-left text-sm font-medium">Campaign</th>
              <th className="px-4 py-2 text-left text-sm font-medium">Status</th>
              <th className="px-4 py-2 text-left text-sm font-medium">Leads</th>
              <th className="px-4 py-2 text-left text-sm font-medium">Spend</th>
              <th className="px-4 py-2 text-left text-sm font-medium">Revenue</th>
              <th className="px-4 py-2 text-left text-sm font-medium">ROI</th>
            </tr>
          </thead>
          <tbody>
            {metrics.campaigns.map((campaign) => (
              <tr
                key={campaign.name}
                className="border-b border-black/[.08] dark:border-white/[.08]"
              >
                <td className="px-4 py-3 font-medium">{campaign.name}</td>
                <td className="px-4 py-3">
                  <span className="px-2 py-1 text-xs bg-green-500/10 text-green-500 rounded-full">
                    {campaign.status}
                  </span>
                </td>
                <td className="px-4 py-3">{campaign.leads}</td>
                <td className="px-4 py-3">${campaign.spend.toLocaleString()}</td>
                <td className="px-4 py-3">${campaign.revenue.toLocaleString()}</td>
                <td className="px-4 py-3 text-green-500">+{campaign.roi}%</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
} 