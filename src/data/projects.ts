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
  {
    id: 'expense-bot',
    name: 'expense-bot',
    kind: 'confirmed',
    domain: 'Automation',
    stage: 'MVP',
    description: 'Telegram expense-tracking bot with a conversation-state flow for quick manual bookkeeping.',
    role: 'Personal finance bot',
    stack: ['Python', 'python-telegram-bot'],
    repoUrl: 'https://github.com/Detemen/expense-bot'
  },
  {
    id: 'arduino',
    name: 'arduino',
    kind: 'confirmed',
    domain: 'Hardware',
    stage: 'Tooling',
    description: 'ESP8266-based power-outage monitor that pings a Telegram bot the moment mains power drops or returns.',
    role: 'Home IoT monitor',
    stack: ['ESP8266', 'C++', 'Telegram Bot API'],
    repoUrl: 'https://github.com/Detemen/arduino'
  },
  {
    id: 'neural-trading-mvp',
    name: 'neural-trading-mvp',
    kind: 'confirmed',
    domain: 'Trading',
    stage: 'Prototype',
    description: 'BTC/USDT futures long/short signal prototype — historical candles, a small TCN model, and live signal polling.',
    role: 'ML trading signal prototype',
    stack: ['Python', 'PyTorch', 'ccxt'],
    repoUrl: 'https://github.com/Detemen/neural-trading-mvp'
  },
  {
    id: 'polymarket-weather-bot',
    name: 'polymarket-weather-bot',
    kind: 'confirmed',
    domain: 'Trading',
    stage: 'MVP',
    description: 'MVP for discovering, normalizing, analyzing and paper-trading Polymarket weather prediction markets.',
    role: 'Prediction market research',
    stack: ['Python', 'SQLite', 'Polymarket CLOB'],
    repoUrl: 'https://github.com/Detemen/polymarket-weather-bot'
  },
  {
    id: 'polymarket-bot',
    name: 'polymarket-bot',
    kind: 'confirmed',
    domain: 'Trading',
    stage: 'MVP',
    description: 'Polymarket research bot — price-dynamics analysis, a Telegram control UI, and an order-approval workflow.',
    role: 'Trading automation',
    stack: ['Python', 'Telegram bot', 'Pandas'],
    repoUrl: 'https://github.com/Detemen/polymarket-bot'
  },
  {
    id: 'polymarket-parser',
    name: 'polymarket-parser',
    kind: 'confirmed',
    domain: 'Trading',
    stage: 'Tooling',
    description: 'Lightweight Polymarket market-discovery and websocket ingestion parser (CLOB/RTDS feeds).',
    role: 'Market data infrastructure',
    stack: ['Python', 'aiohttp', 'WebSockets'],
    repoUrl: 'https://github.com/Detemen/polymarket-parser'
  },
  {
    id: 'backtest',
    name: 'backtest',
    kind: 'confirmed',
    domain: 'Trading',
    stage: 'Research',
    description: 'Generic strategy-backtesting engine — indicators, settlement, and reporting modules shared across the trading bots above.',
    role: 'Strategy research bench',
    stack: ['Python'],
    repoUrl: 'https://github.com/Detemen/backtest'
  },
  {
    id: 'math-balls-battle',
    name: 'math-balls-battle',
    kind: 'confirmed',
    domain: 'Video',
    stage: 'Prototype',
    description: 'Generates short "math battle" videos — physics balls, TTS narration and auto-captions rendered frame by frame.',
    role: 'Generative video pipeline',
    stack: ['Node.js', 'Canvas', 'TTS'],
    repoUrl: 'https://github.com/Detemen/math-balls-battle',
    demoUrl: 'https://detemen.github.io/math-balls-battle/',
    demoLabel: 'play now'
  },
  {
    id: 'live-translator',
    name: 'live-translator',
    kind: 'confirmed',
    domain: 'AI Systems',
    stage: 'Prototype',
    description: 'Real-time audio capture and translation proof-of-concept with a small desktop GUI.',
    role: 'Live translation POC',
    stack: ['Python', 'Speech-to-text', 'Translation API'],
    repoUrl: 'https://github.com/Detemen/live-translator'
  },
  {
    id: 'voice-clone',
    name: 'voice-clone',
    kind: 'confirmed',
    domain: 'AI Systems',
    stage: 'Research',
    description: 'R&D comparing voice-cloning approaches — ElevenLabs, F5-TTS and Edge-TTS — for quality and latency.',
    role: 'Voice synthesis research',
    stack: ['Python', 'ElevenLabs', 'F5-TTS'],
    repoUrl: 'https://github.com/Detemen/voice-clone'
  }
];
