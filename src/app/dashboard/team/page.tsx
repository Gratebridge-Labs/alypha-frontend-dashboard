'use client';

import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Image from 'next/image';

const teamMembers = [
  {
    id: 1,
    name: 'Alex Thompson',
    role: 'Marketing Manager',
    email: 'alex.t@company.com',
    status: 'Online',
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'
  },
  {
    id: 2,
    name: 'Maria Garcia',
    role: 'Sales Director',
    email: 'maria.g@company.com',
    status: 'Away',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'
  },
  {
    id: 3,
    name: 'James Wilson',
    role: 'Customer Support',
    email: 'james.w@company.com',
    status: 'Offline',
    avatar: 'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'
  }
];

const aiAgents = [
  {
    id: 1,
    name: 'Support Bot',
    role: 'Customer Support',
    status: 'Active',
    tasks: 145,
    satisfaction: '98%',
    avatar: '🤖'
  },
  {
    id: 2,
    name: 'Marketing Assistant',
    role: 'Marketing',
    status: 'Active',
    tasks: 89,
    satisfaction: '95%',
    avatar: '🎯'
  },
  {
    id: 3,
    name: 'Sales Helper',
    role: 'Sales',
    status: 'Training',
    tasks: 0,
    satisfaction: 'N/A',
    avatar: '💼'
  }
];

export default function TeamPage() {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-semibold">Team Management</h1>
          <p className="text-sm text-gray-500 mt-1">Manage your team members and AI agents</p>
        </div>
        <div className="flex gap-4">
          <Button variant="outline">Invite Member</Button>
          <Button variant="default">Add AI Agent</Button>
        </div>
      </div>

      {/* Team Members Section */}
      <Card className="p-6">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-lg font-medium">Team Members</h2>
          <Button variant="outline">Manage Roles</Button>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="text-left border-b border-black/[.08] dark:border-white/[.08]">
                <th className="pb-3 text-sm font-medium">Member</th>
                <th className="pb-3 text-sm font-medium">Role</th>
                <th className="pb-3 text-sm font-medium">Status</th>
                <th className="pb-3 text-sm font-medium"></th>
              </tr>
            </thead>
            <tbody>
              {teamMembers.map((member) => (
                <tr key={member.id} className="border-b border-black/[.08] dark:border-white/[.08]">
                  <td className="py-4">
                    <div className="flex items-center gap-3">
                      <Image
                        src={member.avatar}
                        alt={member.name}
                        width={40}
                        height={40}
                        className="rounded-full"
                      />
                      <div>
                        <div className="font-medium">{member.name}</div>
                        <div className="text-sm text-gray-500">{member.email}</div>
                      </div>
                    </div>
                  </td>
                  <td className="py-4 text-sm">{member.role}</td>
                  <td className="py-4">
                    <span className={`px-2 py-1 rounded-full text-xs ${
                      member.status === 'Online' 
                        ? 'bg-green-100 text-green-700'
                        : member.status === 'Away'
                        ? 'bg-yellow-100 text-yellow-700'
                        : 'bg-gray-100 text-gray-700'
                    }`}>
                      {member.status}
                    </span>
                  </td>
                  <td className="py-4">
                    <Button variant="outline" className="text-sm">Manage</Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Card>

      {/* AI Agents Section */}
      <Card className="p-6">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-lg font-medium">AI Agents</h2>
          <Button variant="outline">Configure Agents</Button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {aiAgents.map((agent) => (
            <div key={agent.id} className="border border-black/[.08] dark:border-white/[.08] rounded-lg p-6">
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-black/[.02] dark:bg-white/[.02] flex items-center justify-center text-2xl">
                    {agent.avatar}
                  </div>
                  <div>
                    <h3 className="font-medium">{agent.name}</h3>
                    <p className="text-sm text-gray-500">{agent.role}</p>
                  </div>
                </div>
                <span className={`px-2 py-1 rounded-full text-xs ${
                  agent.status === 'Active' 
                    ? 'bg-green-100 text-green-700'
                    : 'bg-blue-100 text-blue-700'
                }`}>
                  {agent.status}
                </span>
              </div>
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="text-gray-500">Tasks Completed</span>
                  <span>{agent.tasks}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-500">Satisfaction Rate</span>
                  <span>{agent.satisfaction}</span>
                </div>
              </div>
              <div className="mt-4">
                <Button variant="outline" className="w-full">Configure</Button>
              </div>
            </div>
          ))}
        </div>
      </Card>
    </div>
  );
} 