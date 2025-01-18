'use client';
import { useState } from 'react';
import { motion } from 'framer-motion';

type EmailTemplate = {
  id: string;
  name: string;
  subject: string;
  content: string;
  variables: string[];
};

type SMSTemplate = {
  id: string;
  name: string;
  content: string;
  variables: string[];
};

export default function TemplateEditor() {
  const [selectedTemplate, setSelectedTemplate] = useState<any>(null);
  const [templateType, setTemplateType] = useState<'email' | 'sms'>('email');
  const [editorContent, setEditorContent] = useState('');

  const templates: {
    email: EmailTemplate[];
    sms: SMSTemplate[];
  } = {
    email: [
      {
        id: 'welcome',
        name: 'Welcome Email',
        subject: 'Welcome to {{company_name}}',
        content: `<h1>Welcome, {{first_name}}!</h1>
        <p>We're excited to have you on board.</p>`,
        variables: ['first_name', 'company_name']
      },
      // ... more email templates
    ],
    sms: [
      {
        id: 'reminder',
        name: 'Appointment Reminder',
        content: 'Hi {{first_name}}, reminder about your appointment tomorrow at {{time}}.',
        variables: ['first_name', 'time']
      },
      // ... more SMS templates
    ]
  };

  return (
    <div className="space-y-6">
      {/* Template Type Toggle */}
      <div className="flex gap-2 p-1 bg-black/[.02] dark:bg-white/[.02] rounded-lg w-fit">
        {(['email', 'sms'] as const).map((type) => (
          <button
            key={type}
            onClick={() => setTemplateType(type)}
            className={`px-4 py-2 text-sm rounded-lg ${
              templateType === type
                ? 'bg-white dark:bg-black shadow-sm'
                : 'text-black/60 dark:text-white/60'
            }`}
          >
            {type.toUpperCase()}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-5 gap-6">
        {/* Templates List */}
        <div className="col-span-2 border border-black/[.08] dark:border-white/[.08] rounded-lg p-4">
          <h3 className="font-medium mb-4">Templates</h3>
          <div className="space-y-2">
            {templates[templateType].map((template) => (
              <button
                key={template.id}
                onClick={() => setSelectedTemplate(template)}
                className={`w-full p-3 text-left rounded-lg ${
                  selectedTemplate?.id === template.id
                    ? 'bg-black/[.02] dark:bg-white/[.02] border border-black/[.08] dark:border-white/[.08]'
                    : 'hover:bg-black/[.02] dark:hover:bg-white/[.02]'
                }`}
              >
                <div className="font-medium mb-1">{template.name}</div>
                <div className="text-sm text-black/60 dark:text-white/60 truncate">
                  {templateType === 'email' 
                    ? (template as EmailTemplate).subject 
                    : template.content
                  }
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* Editor */}
        <div className="col-span-3 border border-black/[.08] dark:border-white/[.08] rounded-lg p-4">
          {selectedTemplate ? (
            <div className="space-y-4">
              {templateType === 'email' && (
                <div>
                  <label className="block text-sm font-medium mb-2">Subject</label>
                  <input
                    type="text"
                    value={selectedTemplate.subject}
                    onChange={(e) => setSelectedTemplate({
                      ...selectedTemplate,
                      subject: e.target.value
                    })}
                    className="w-full p-3 rounded-lg border border-black/[.08] dark:border-white/[.08] bg-transparent"
                  />
                </div>
              )}

              <div>
                <label className="block text-sm font-medium mb-2">Content</label>
                <textarea
                  value={selectedTemplate.content}
                  onChange={(e) => setSelectedTemplate({
                    ...selectedTemplate,
                    content: e.target.value
                  })}
                  className="w-full h-64 p-3 rounded-lg border border-black/[.08] dark:border-white/[.08] bg-transparent font-mono text-sm"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Variables</label>
                <div className="flex flex-wrap gap-2">
                  {selectedTemplate.variables.map((variable: string) => (
                    <span
                      key={variable}
                      className="px-2 py-1 text-sm bg-black/[.02] dark:bg-white/[.02] rounded"
                    >
                      {`{{${variable}}}`}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex justify-end gap-3">
                <button className="px-4 py-2 text-sm border border-black/[.08] dark:border-white/[.08] rounded-lg">
                  Preview
                </button>
                <button className="px-4 py-2 text-sm bg-black dark:bg-white text-white dark:text-black rounded-lg">
                  Save Template
                </button>
              </div>
            </div>
          ) : (
            <div className="h-full flex items-center justify-center text-black/40 dark:text-white/40">
              Select a template to edit
            </div>
          )}
        </div>
      </div>
    </div>
  );
} 