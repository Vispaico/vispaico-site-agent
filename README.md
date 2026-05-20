# Vispaico Site Agent

A reusable website chat widget frontend. Visitors can ask questions and receive answers with citations and actions from a backend agent service.

## Repo Structure

```
vispaico-site-agent/
├── apps/
│   └── demo-nextjs/       # Next.js demo app
├── packages/
│   └── widget/            # Reusable @vispaico/agent-widget package
├── package.json           # Root workspace config
├── turbo.json             # Turborepo config
└── tsconfig.base.json     # Shared TypeScript config
```

## Install

```bash
npm install
```

This installs all dependencies for the root workspace, the demo app, and the widget package.

## Dev

```bash
npm run dev
```

Runs both the widget build watcher and the Next.js demo app in parallel via Turborepo.

## Build

```bash
npm run build
```

Builds the widget package (`packages/widget/dist/`) and the demo app (`apps/demo-nextjs/.next/`).

## Environment Variables

Copy `.env.local.example` to `.env.local` in `apps/demo-nextjs/`:

```
NEXT_PUBLIC_AGENT_API_BASE_URL=https://api.example.com
NEXT_PUBLIC_VISPAICO_WORKSPACE_ID=your-workspace-id
```

## Using the Widget in Another Site

1. Reference `@vispaico/agent-widget` from the monorepo (workspaces) or publish it.
2. Import the styles in your app layout:

```ts
import '@vispaico/agent-widget/styles/tokens.css';
```

3. Import and render the widget component:

```tsx
import { AgentWidget } from '@vispaico/agent-widget';

<AgentWidget
  apiBaseUrl="https://api.example.com"
  workspaceId="your-workspace-id"
  brandName="My Brand"
  title="My Brand"
  subtitle="Ask me anything"
  suggestedPrompts={['Prompt 1', 'Prompt 2']}
/>
```

### Next.js Transpile

If you consume the widget from the monorepo workspace, add `transpilePackages` to your `next.config.ts`:

```ts
const nextConfig = {
  transpilePackages: ['@vispaico/agent-widget'],
};
```

## Theming

Set CSS custom properties on the widget container or `:root` to customize colors, radius, and shadows:

```css
:root {
  --widget-bg: #0a0a0a;
  --widget-surface: #111111;
  --widget-surface-2: #181818;
  --widget-border: rgba(255, 255, 255, 0.10);
  --widget-text: #f5f5f5;
  --widget-text-muted: #a3a3a3;
  --widget-button-bg: #f5f5f5;
  --widget-button-text: #0a0a0a;
  --widget-radius: 18px;
  --widget-shadow: 0 18px 50px rgba(0,0,0,0.35);
  --widget-font: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;
}
```

You can also pass a partial `theme` prop to override specific tokens inline.

## Widget Props

| Prop              | Type                                | Default       |
|-------------------|-------------------------------------|---------------|
| `apiBaseUrl`      | string                              | (required)    |
| `workspaceId`     | string                              | (required)    |
| `brandName`       | string                              | —             |
| `title`           | string                              | "Vispaico"    |
| `subtitle`        | string                              | "Ask me anything about Vispaico" |
| `suggestedPrompts`| string[]                            | []            |
| `theme`           | AgentWidgetTheme (partial CSS vars) | —             |
| `position`        | "bottom-right" \| "bottom-left"    | "bottom-right"|
| `onActionClick`   | (action) => void                    | —             |

## Widget Package API

```ts
export { AgentWidget } from '@vispaico/agent-widget';
export type { AgentCitation, AgentAction, AgentChatResponse, ChatMessage, AgentWidgetTheme, AgentWidgetProps } from '@vispaico/agent-widget';
```
