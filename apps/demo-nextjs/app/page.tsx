'use client';

import '@vispaico/agent-widget/styles/tokens.css';
import { DemoAgentWidget } from '../components/demo-agent-widget';

export default function Home() {
  return (
    <div className="page">
      <div className="logo">Vispaico</div>
      <p className="tagline">
        Intelligent site agent — ask questions, get answers with citations and actions.
      </p>
      <p className="hint">Click the chat button in the bottom-right corner to try it.</p>
      <DemoAgentWidget />
    </div>
  );
}
