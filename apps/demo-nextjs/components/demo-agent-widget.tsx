'use client';

import { AgentWidget } from '@vispaico/agent-widget';

const suggestedPrompts = [
  'What do I own at the end of the Launch Program?',
  'Which page should I read if I want pricing and what is included?',
  'I want to talk to someone about my project.',
];

export function DemoAgentWidget() {
  const apiBaseUrl = process.env.NEXT_PUBLIC_AGENT_API_BASE_URL || '';
  const workspaceId = process.env.NEXT_PUBLIC_VISPAICO_WORKSPACE_ID || '';

  if (!apiBaseUrl || !workspaceId) {
    return null;
  }

  return (
    <AgentWidget
      apiBaseUrl={apiBaseUrl}
      workspaceId={workspaceId}
      brandName="Vispaico"
      title="Vispaico"
      subtitle="Ask me anything about Vispaico"
      suggestedPrompts={suggestedPrompts}
    />
  );
}
