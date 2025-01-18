'use client';
import { useState } from 'react';
import { motion } from 'framer-motion';

type ScoringRule = {
  id: string;
  attribute: string;
  condition: string;
  value: string;
  points: number;
  isActive: boolean;
};

export default function LeadScoringSystem() {
  const [scoringRules, setScoringRules] = useState<ScoringRule[]>([]);
  const [editingRule, setEditingRule] = useState<ScoringRule | null>(null);

  const attributes = [
    { value: 'page_views', label: 'Page Views' },
    { value: 'time_on_site', label: 'Time on Site' },
    { value: 'form_submissions', label: 'Form Submissions' },
    { value: 'email_opens', label: 'Email Opens' },
    { value: 'email_clicks', label: 'Email Clicks' },
    { value: 'social_engagement', label: 'Social Engagement' },
    { value: 'purchase_history', label: 'Purchase History' }
  ];

  const conditions = [
    { value: 'equals', label: 'Equals' },
    { value: 'greater_than', label: 'Greater Than' },
    { value: 'less_than', label: 'Less Than' },
    { value: 'contains', label: 'Contains' },
    { value: 'exists', label: 'Exists' }
  ];

  const handleAddRule = () => {
    const newRule: ScoringRule = {
      id: Date.now().toString(),
      attribute: 'page_views',
      condition: 'greater_than',
      value: '',
      points: 10,
      isActive: true
    };
    setEditingRule(newRule);
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-lg font-medium">Lead Scoring</h2>
          <p className="text-sm text-black/60 dark:text-white/60">
            Configure rules to automatically score leads based on their behavior
          </p>
        </div>
        <button
          onClick={handleAddRule}
          className="px-4 py-2 text-sm bg-black dark:bg-white text-white dark:text-black rounded-lg"
        >
          Add Scoring Rule
        </button>
      </div>

      {/* Scoring Rules Table */}
      <div className="border border-black/[.08] dark:border-white/[.08] rounded-lg overflow-hidden">
        <table className="w-full">
          <thead>
            <tr className="border-b border-black/[.08] dark:border-white/[.08] bg-black/[.02] dark:bg-white/[.02]">
              <th className="px-4 py-2 text-left text-sm font-medium">Attribute</th>
              <th className="px-4 py-2 text-left text-sm font-medium">Condition</th>
              <th className="px-4 py-2 text-left text-sm font-medium">Value</th>
              <th className="px-4 py-2 text-left text-sm font-medium">Points</th>
              <th className="px-4 py-2 text-left text-sm font-medium">Status</th>
              <th className="px-4 py-2 text-left text-sm font-medium">Actions</th>
            </tr>
          </thead>
          <tbody>
            {scoringRules.map((rule) => (
              <tr key={rule.id} className="border-b border-black/[.08] dark:border-white/[.08]">
                <td className="px-4 py-3">
                  {attributes.find(a => a.value === rule.attribute)?.label}
                </td>
                <td className="px-4 py-3">
                  {conditions.find(c => c.value === rule.condition)?.label}
                </td>
                <td className="px-4 py-3">{rule.value}</td>
                <td className="px-4 py-3">{rule.points}</td>
                <td className="px-4 py-3">
                  <span className={`px-2 py-1 text-xs rounded-full ${
                    rule.isActive
                      ? 'bg-green-500/10 text-green-500'
                      : 'bg-black/[.05] dark:bg-white/[.05] text-black/40 dark:text-white/40'
                  }`}>
                    {rule.isActive ? 'Active' : 'Inactive'}
                  </span>
                </td>
                <td className="px-4 py-3">
                  <button
                    onClick={() => setEditingRule(rule)}
                    className="text-sm text-blue-500 hover:underline"
                  >
                    Edit
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Rule Editor Modal */}
      {editingRule && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/5 backdrop-blur-sm z-40 flex items-center justify-center"
        >
          <div className="bg-white dark:bg-black rounded-xl shadow-2xl max-w-lg w-full mx-4 p-6">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-lg font-medium">
                {editingRule.id ? 'Edit Scoring Rule' : 'New Scoring Rule'}
              </h3>
              <button
                onClick={() => setEditingRule(null)}
                className="p-2 hover:bg-black/5 dark:hover:bg-white/5 rounded-full"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-2">Attribute</label>
                <select
                  value={editingRule.attribute}
                  onChange={(e) => setEditingRule({ ...editingRule, attribute: e.target.value })}
                  className="w-full p-2 rounded-lg border border-black/[.08] dark:border-white/[.08] bg-transparent"
                >
                  {attributes.map((attr) => (
                    <option key={attr.value} value={attr.value}>
                      {attr.label}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Condition</label>
                <select
                  value={editingRule.condition}
                  onChange={(e) => setEditingRule({ ...editingRule, condition: e.target.value })}
                  className="w-full p-2 rounded-lg border border-black/[.08] dark:border-white/[.08] bg-transparent"
                >
                  {conditions.map((cond) => (
                    <option key={cond.value} value={cond.value}>
                      {cond.label}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Value</label>
                <input
                  type="text"
                  value={editingRule.value}
                  onChange={(e) => setEditingRule({ ...editingRule, value: e.target.value })}
                  className="w-full p-2 rounded-lg border border-black/[.08] dark:border-white/[.08] bg-transparent"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Points</label>
                <input
                  type="number"
                  value={editingRule.points}
                  onChange={(e) => setEditingRule({ ...editingRule, points: parseInt(e.target.value) })}
                  className="w-full p-2 rounded-lg border border-black/[.08] dark:border-white/[.08] bg-transparent"
                />
              </div>

              <div className="flex items-center gap-2">
                <input
                  type="checkbox"
                  checked={editingRule.isActive}
                  onChange={(e) => setEditingRule({ ...editingRule, isActive: e.target.checked })}
                  className="rounded border-black/[.08] dark:border-white/[.08]"
                />
                <label className="text-sm">Active</label>
              </div>
            </div>

            <div className="flex justify-end gap-3 mt-6">
              <button
                onClick={() => setEditingRule(null)}
                className="px-4 py-2 text-sm border border-black/[.08] dark:border-white/[.08] rounded-lg"
              >
                Cancel
              </button>
              <button
                onClick={() => {
                  setScoringRules(prev => {
                    const existing = prev.findIndex(r => r.id === editingRule.id);
                    if (existing >= 0) {
                      return prev.map(r => r.id === editingRule.id ? editingRule : r);
                    }
                    return [...prev, editingRule];
                  });
                  setEditingRule(null);
                }}
                className="px-4 py-2 text-sm bg-black dark:bg-white text-white dark:text-black rounded-lg"
              >
                Save Rule
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </div>
  );
} 