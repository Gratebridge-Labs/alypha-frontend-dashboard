'use client';
import { useState } from 'react';
import { motion } from 'framer-motion';

type Condition = {
  field: string;
  operator: string;
  value: string;
};

type Action = {
  type: string;
  details: Record<string, any>;
};

type Rule = {
  id: string;
  name: string;
  conditions: Condition[];
  actions: Action[];
  isActive: boolean;
};

export default function AutomationRulesBuilder() {
  const [rules, setRules] = useState<Rule[]>([]);
  const [editingRule, setEditingRule] = useState<Rule | null>(null);

  const availableFields = [
    { value: 'lead_score', label: 'Lead Score' },
    { value: 'last_activity', label: 'Last Activity' },
    { value: 'email_opened', label: 'Email Opened' },
    { value: 'total_visits', label: 'Total Visits' },
    { value: 'source', label: 'Lead Source' }
  ];

  const availableActions = [
    { value: 'send_email', label: 'Send Email' },
    { value: 'send_sms', label: 'Send SMS' },
    { value: 'update_status', label: 'Update Status' },
    { value: 'assign_tag', label: 'Assign Tag' },
    { value: 'notify_team', label: 'Notify Team' }
  ];

  const handleAddRule = () => {
    const newRule: Rule = {
      id: Date.now().toString(),
      name: 'New Rule',
      conditions: [],
      actions: [],
      isActive: false
    };
    setEditingRule(newRule);
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <h2 className="text-lg font-medium">Automation Rules</h2>
        <button
          onClick={handleAddRule}
          className="px-4 py-2 text-sm bg-black dark:bg-white text-white dark:text-black rounded-lg"
        >
          Create Rule
        </button>
      </div>

      {/* Rules List */}
      <div className="space-y-4">
        {rules.map((rule) => (
          <div
            key={rule.id}
            className="p-4 border border-black/[.08] dark:border-white/[.08] rounded-lg"
          >
            <div className="flex items-center justify-between mb-4">
              <div>
                <h3 className="font-medium">{rule.name}</h3>
                <p className="text-sm text-black/60 dark:text-white/60">
                  {rule.conditions.length} conditions, {rule.actions.length} actions
                </p>
              </div>
              <div className="flex items-center gap-3">
                <button
                  onClick={() => setEditingRule(rule)}
                  className="text-sm text-blue-500 hover:underline"
                >
                  Edit
                </button>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input
                    type="checkbox"
                    checked={rule.isActive}
                    onChange={() => {
                      setRules(rules.map(r => 
                        r.id === rule.id ? { ...r, isActive: !r.isActive } : r
                      ));
                    }}
                    className="sr-only peer"
                  />
                  <div className="w-11 h-6 bg-black/[.08] dark:bg-white/[.08] rounded-full peer peer-checked:after:translate-x-full after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white dark:after:bg-black after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-black dark:peer-checked:bg-white"></div>
                </label>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Rule Editor Modal */}
      {editingRule && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/5 backdrop-blur-sm z-40 flex items-center justify-center"
        >
          <div className="bg-white dark:bg-black rounded-xl shadow-2xl max-w-2xl w-full mx-4 p-6">
            <div className="flex items-center justify-between mb-6">
              <input
                type="text"
                value={editingRule.name}
                onChange={(e) => setEditingRule({ ...editingRule, name: e.target.value })}
                className="text-xl font-semibold bg-transparent border-none focus:outline-none"
                placeholder="Rule Name"
              />
              <button
                onClick={() => setEditingRule(null)}
                className="p-2 hover:bg-black/5 dark:hover:bg-white/5 rounded-full"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            {/* Conditions Builder */}
            <div className="mb-6">
              <h3 className="font-medium mb-4">Conditions</h3>
              <div className="space-y-4">
                {editingRule.conditions.map((condition, index) => (
                  <div key={index} className="flex items-center gap-4">
                    <select
                      value={condition.field}
                      onChange={(e) => {
                        const newConditions = [...editingRule.conditions];
                        newConditions[index].field = e.target.value;
                        setEditingRule({ ...editingRule, conditions: newConditions });
                      }}
                      className="p-2 rounded-lg border border-black/[.08] dark:border-white/[.08] bg-transparent"
                    >
                      {availableFields.map((field) => (
                        <option key={field.value} value={field.value}>
                          {field.label}
                        </option>
                      ))}
                    </select>
                    {/* Add operator and value inputs */}
                  </div>
                ))}
                <button
                  onClick={() => setEditingRule({
                    ...editingRule,
                    conditions: [...editingRule.conditions, { field: 'lead_score', operator: 'greater_than', value: '' }]
                  })}
                  className="text-sm text-blue-500 hover:underline"
                >
                  + Add Condition
                </button>
              </div>
            </div>

            {/* Actions Builder */}
            <div className="mb-6">
              <h3 className="font-medium mb-4">Actions</h3>
              <div className="space-y-4">
                {editingRule.actions.map((action, index) => (
                  <div key={index} className="flex items-center gap-4">
                    <select
                      value={action.type}
                      onChange={(e) => {
                        const newActions = [...editingRule.actions];
                        newActions[index].type = e.target.value;
                        setEditingRule({ ...editingRule, actions: newActions });
                      }}
                      className="p-2 rounded-lg border border-black/[.08] dark:border-white/[.08] bg-transparent"
                    >
                      {availableActions.map((action) => (
                        <option key={action.value} value={action.value}>
                          {action.label}
                        </option>
                      ))}
                    </select>
                    {/* Add action details inputs */}
                  </div>
                ))}
                <button
                  onClick={() => setEditingRule({
                    ...editingRule,
                    actions: [...editingRule.actions, { type: 'send_email', details: {} }]
                  })}
                  className="text-sm text-blue-500 hover:underline"
                >
                  + Add Action
                </button>
              </div>
            </div>

            <div className="flex justify-end gap-3">
              <button
                onClick={() => setEditingRule(null)}
                className="px-4 py-2 text-sm border border-black/[.08] dark:border-white/[.08] rounded-lg"
              >
                Cancel
              </button>
              <button
                onClick={() => {
                  setRules(prev => {
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