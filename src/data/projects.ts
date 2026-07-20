export type ProjectKind = 'confirmed' | 'lab';
export type ProjectDomain = 'AI Systems' | 'Automation' | 'Trading' | 'Games' | 'Hardware' | 'Video' | 'Meta';
export type ProjectStage = 'Prototype' | 'MVP' | 'Production' | 'Research' | 'Tooling';

export interface Project {
  id: string;
  name: string;
  kind: ProjectKind;
  domain: ProjectDomain;
  stage: ProjectStage;
  description: string;
  role: string;
  stack: string[];
  repoUrl?: string;
  demoUrl?: string;
  demoLabel?: string;
}

export const projects: Project[] = [
  // ── Confirmed: public repos with a working demo ──────────────────────────
  {
    id: 'commyx-intel',
    name: 'CommyX Intel',
    kind: 'confirmed',
    domain: 'AI Systems',
    stage: 'Production',
    description:
      'Dockerized pipeline that scrapes Telegram channels/chats, clusters them with embeddings + UMAP, classifies by category, and serves a live dashboard. Tracking 3,800+ channels in production.',
    role: 'Market intelligence stack',
    stack: ['FastAPI', 'PostgreSQL', 'UMAP', 'Docker', 'Crawlee'],
    repoUrl: 'https://github.com/Detemen/commyx-intel',
    demoUrl: 'http://2.26.125.134:9000/',
    demoLabel: 'live dashboard'
  },
  {
    id: 'chatsspider',
    name: 'ChatsSpider',
    kind: 'confirmed',
    domain: 'Automation',
    stage: 'Production',
    description:
      'Multi-account Telegram spider that discovers channels/chats and classifies them via ChatGPT. Runs continuously in production, feeding the CommyX Intel dashboard.',
    role: 'Telegram intelligence collector',
    stack: ['Python', 'Telethon', 'Playwright'],
    repoUrl: 'https://github.com/Detemen/ChatsSpider',
    demoUrl: 'http://2.26.125.134:9000/',
    demoLabel: 'see its output'
  },
  {
    id: 'tg-bot-game',
    name: 'Marble Race',
    kind: 'confirmed',
    domain: 'Games',
    stage: 'MVP',
    description:
      'Telegram Mini App betting game — physics-based marble race with TON & Telegram Stars payouts, React frontend, Node/Prisma backend, Python bot.',
    role: 'Telegram game platform',
    stack: ['React', 'Node.js', 'Prisma', 'Matter.js'],
    repoUrl: 'https://github.com/Detemen/TG_bot_game'
  },
  {
    id: 'zombie-survivor-godot',
    name: 'Zombie Survivor',
    kind: 'confirmed',
    domain: 'Games',
    stage: 'Prototype',
    description:
      'Browser-playable pixel-art survivor prototype — auto-attack roguelite upgrade loop, waves, XP cards, a final miniboss, in a 5-minute run.',
    role: 'Godot game prototype',
    stack: ['Godot 4', 'GDScript'],
    repoUrl: 'https://github.com/Detemen/zombie-survivor-godot',
    demoUrl: 'https://detemen.github.io/zombie-survivor-godot/',
    demoLabel: 'play now'
  },
  {
    id: 'project-roadmap-site',
    name: 'Project Atlas',
    kind: 'confirmed',
    domain: 'Meta',
    stage: 'Production',
    description: "This site. A living map of the whole portfolio, filterable by domain, stage and stack — you're standing in it.",
    role: 'Portfolio visualization',
    stack: ['React', 'TypeScript', 'Vite'],
    repoUrl: 'https://github.com/Detemen/project-roadmap-site',
    demoUrl: 'https://detemen.github.io/project-roadmap-site/',
    demoLabel: 'you are here'
  },

  // ── Labs: real, own projects — not published as standalone repos yet ─────
  {
    id: 'expense-bot',
    name: 'expense-bot',
    kind: 'lab',
    domain: 'Automation',
    stage: 'MVP',
    description: 'Telegram expense-tracking bot with a conversation-state flow for quick manual bookkeeping.',
    role: 'Personal finance bot',
    stack: ['Python', 'python-telegram-bot']
  },
  {
    id: 'arduino',
    name: 'arduino',
    kind: 'lab',
    domain: 'Hardware',
    stage: 'Tooling',
    description: 'ESP8266-based power-outage monitor that pings a Telegram bot the moment mains power drops or returns.',
    role: 'Home IoT monitor',
    stack: ['ESP8266', 'C++', 'Telegram Bot API']
  },
  {
    id: 'neural-trading-mvp',
    name: 'neural-trading-mvp',
    kind: 'lab',
    domain: 'Trading',
    stage: 'Prototype',
    description: 'BTC/USDT futures long/short signal prototype — historical candles, a small TCN model, and live signal polling.',
    role: 'ML trading signal prototype',
    stack: ['Python', 'PyTorch', 'ccxt']
  },
  {
    id: 'polymarket-weather-bot',
    name: 'polymarket-weather-bot',
    kind: 'lab',
    domain: 'Trading',
    stage: 'MVP',
    description: 'MVP for discovering, normalizing, analyzing and paper-trading Polymarket weather prediction markets.',
    role: 'Prediction market research',
    stack: ['Python', 'SQLite', 'Polymarket CLOB']
  },
  {
    id: 'polymarket-bot',
    name: 'polymarket-bot',
    kind: 'lab',
    domain: 'Trading',
    stage: 'MVP',
    description: 'Polymarket research bot — price-dynamics analysis, a Telegram control UI, and an order-approval workflow.',
    role: 'Trading automation',
    stack: ['Python', 'Telegram bot', 'Pandas']
  },
  {
    id: 'polymarket-parser',
    name: 'polymarket-parser',
    kind: 'lab',
    domain: 'Trading',
    stage: 'Tooling',
    description: 'Lightweight Polymarket market-discovery and websocket ingestion parser (CLOB/RTDS feeds).',
    role: 'Market data infrastructure',
    stack: ['Python', 'aiohttp', 'WebSockets']
  },
  {
    id: 'tg-buy-crypto',
    name: 'tg_buy_crypto',
    kind: 'lab',
    domain: 'Trading',
    stage: 'MVP',
    description: 'Backtests Telegram crypto-signal channels against real GeckoTerminal market data and renders HTML reports.',
    role: 'Signal-quality analytics',
    stack: ['Python', 'Pandas', 'GeckoTerminal API']
  },
  {
    id: 'backtest',
    name: 'backtest',
    kind: 'lab',
    domain: 'Trading',
    stage: 'Research',
    description: 'Generic strategy-backtesting engine — indicators, settlement, and reporting modules shared across the trading bots above.',
    role: 'Strategy research bench',
    stack: ['Python']
  },
  {
    id: 'math-balls-battle',
    name: 'math-balls-battle',
    kind: 'lab',
    domain: 'Video',
    stage: 'Prototype',
    description: 'Generates short "math battle" videos — physics balls, TTS narration and auto-captions rendered frame by frame.',
    role: 'Generative video pipeline',
    stack: ['Node.js', 'Canvas', 'TTS']
  },
  {
    id: 'live-translator',
    name: 'live-translator',
    kind: 'lab',
    domain: 'AI Systems',
    stage: 'Prototype',
    description: 'Real-time audio capture and translation proof-of-concept with a small desktop GUI.',
    role: 'Live translation POC',
    stack: ['Python', 'Speech-to-text', 'Translation API']
  },
  {
    id: 'voice-clone',
    name: 'voice-clone',
    kind: 'lab',
    domain: 'AI Systems',
    stage: 'Research',
    description: 'R&D comparing voice-cloning approaches — ElevenLabs, F5-TTS and Edge-TTS — for quality and latency.',
    role: 'Voice synthesis research',
    stack: ['Python', 'ElevenLabs', 'F5-TTS']
  }
];
