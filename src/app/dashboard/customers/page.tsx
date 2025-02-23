'use client';

import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Image from 'next/image';

const customers = [
  {
    id: 1,
    name: 'John Smith',
    email: 'john.smith@example.com',
    company: 'Tech Corp',
    status: 'Active',
    lastInteraction: '2 hours ago',
    totalSpent: 2500,
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'
  },
  {
    id: 2,
    name: 'Sarah Johnson',
    email: 'sarah.j@example.com',
    company: 'Design Studio',
    status: 'Inactive',
    lastInteraction: '3 days ago',
    totalSpent: 1800,
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'
  },
  {
    id: 3,
    name: 'Michael Brown',
    email: 'michael.b@example.com',
    company: 'Marketing Pro',
    status: 'Active',
    lastInteraction: '1 day ago',
    totalSpent: 3200,
    avatar: 'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'
  }
];

const metrics = [
  { label: 'Total Customers', value: '1,234', change: '+12%' },
  { label: 'Active Customers', value: '892', change: '+5%' },
  { label: 'Average Spend', value: '$2,345', change: '+8%' },
  { label: 'Customer Satisfaction', value: '4.8/5', change: '+2%' }
];

export default function CustomersPage() {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-semibold">Customers</h1>
          <p className="text-sm text-gray-500 mt-1">Manage and analyze your customer base</p>
        </div>
        <div className="flex gap-4">
          <Button variant="outline">Import</Button>
          <Button variant="default">Add Customer</Button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {metrics.map((metric) => (
          <Card key={metric.label} className="p-6">
            <div className="flex justify-between items-start mb-2">
              <h3 className="text-sm text-gray-500">{metric.label}</h3>
              <span className={`text-xs px-2 py-1 rounded-full ${
                metric.change.startsWith('+') 
                  ? 'bg-green-100 text-green-700 dark:bg-green-900 dark:text-green-300'
                  : 'bg-red-100 text-red-700 dark:bg-red-900 dark:text-red-300'
              }`}>
                {metric.change}
              </span>
            </div>
            <p className="text-2xl font-semibold">{metric.value}</p>
          </Card>
        ))}
      </div>

      <Card className="p-6">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-lg font-medium">Customer List</h2>
          <div className="flex items-center gap-4">
            <div className="relative">
              <input
                type="text"
                placeholder="Search customers..."
                className="pl-10 pr-4 py-2 border border-black/[.08] dark:border-white/[.08] rounded-lg bg-transparent"
              />
              <svg className="w-5 h-5 absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
            <Button variant="outline">Filter</Button>
          </div>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="text-left border-b border-black/[.08] dark:border-white/[.08]">
                <th className="pb-3 text-sm font-medium">Customer</th>
                <th className="pb-3 text-sm font-medium">Company</th>
                <th className="pb-3 text-sm font-medium">Status</th>
                <th className="pb-3 text-sm font-medium">Last Interaction</th>
                <th className="pb-3 text-sm font-medium">Total Spent</th>
                <th className="pb-3 text-sm font-medium"></th>
              </tr>
            </thead>
            <tbody>
              {customers.map((customer) => (
                <tr key={customer.id} className="border-b border-black/[.08] dark:border-white/[.08]">
                  <td className="py-4">
                    <div className="flex items-center gap-3">
                      <Image
                        src={customer.avatar}
                        alt={customer.name}
                        width={32}
                        height={32}
                        className="rounded-full"
                      />
                      <div>
                        <div className="font-medium">{customer.name}</div>
                        <div className="text-sm text-gray-500">{customer.email}</div>
                      </div>
                    </div>
                  </td>
                  <td className="py-4 text-sm">{customer.company}</td>
                  <td className="py-4">
                    <span className={`px-2 py-1 rounded-full text-xs ${
                      customer.status === 'Active' 
                        ? 'bg-green-100 text-green-700 dark:bg-green-900 dark:text-green-300'
                        : 'bg-gray-100 text-gray-700 dark:bg-gray-900 dark:text-gray-300'
                    }`}>
                      {customer.status}
                    </span>
                  </td>
                  <td className="py-4 text-sm">{customer.lastInteraction}</td>
                  <td className="py-4 text-sm">${customer.totalSpent.toLocaleString()}</td>
                  <td className="py-4">
                    <Button variant="outline" className="text-sm">View Profile</Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Card>
    </div>
  );
} 