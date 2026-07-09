export type ProjectKind = 'confirmed' | 'lab';
export type ProjectDomain =
  | 'Video'
  | 'Trading'
  | 'Social Automation'
  | 'Marketing Ops'
  | 'AI Systems'
  | 'Games'
  | 'Labs';
export type ProjectStage = 'Prototype' | 'MVP' | 'Production' | 'Research' | 'Tooling';

export interface Project {
  id: string;
  name: string;
  path: string;
  kind: ProjectKind;
  domain: ProjectDomain;
  stage: ProjectStage;
  description: string;
  role: string;
  stack: string[];
}

export const projects: Project[] = [
  {
    id: 'onda',
    name: 'onda',
    path: 'onda',
    kind: 'confirmed',
    domain: 'Video',
    stage: 'Production',
    description: 'Premium source-installed motion graphics component system with docs and catalog surfaces.',
    role: 'Motion design infrastructure',
    stack: ['Remotion', 'React', 'TypeScript', 'Next.js', 'Zod']
  },
  {
    id: 'swiftclip',
    name: 'SwiftClip',
    path: 'SwiftClip',
    kind: 'confirmed',
    domain: 'Video',
    stage: 'Production',
    description: 'Production-ready Remotion template library with a Next.js showcase and copy-paste components.',
    role: 'Reusable video template product',
    stack: ['Next.js', 'Remotion', 'React', 'TypeScript', 'Tailwind']
  },
  {
    id: 'remotion-templates',
    name: 'remotion-templates',
    path: 'remotion-templates',
    kind: 'confirmed',
    domain: 'Video',
    stage: 'Production',
    description: 'Large collection of Remotion animation templates across charts, text, transitions, and cinematic effects.',
    role: 'Template inventory',
    stack: ['Remotion', 'React']
  },
  {
    id: 'ai-shorts',
    name: 'ai-shorts',
    path: 'ai-shorts',
    kind: 'confirmed',
    domain: 'Video',
    stage: 'Prototype',
    description: 'Remotion-based short-form video compositions with generated voice and audio assets.',
    role: 'AI video experiment',
    stack: ['Remotion', 'React', 'TypeScript', 'TTS']
  },
  {
    id: 'polymarket-weather-bot',
    name: 'polymarket-weather-bot',
    path: 'polymarket-weather-bot',
    kind: 'confirmed',
    domain: 'Trading',
    stage: 'MVP',
    description: 'Local MVP for discovering, normalizing, analyzing, and paper-trading Polymarket weather markets.',
    role: 'Prediction market research system',
    stack: ['Python', 'SQLite', 'Polymarket CLOB', 'Weather APIs']
  },
  {
    id: 'polymarket-bot',
    name: 'polymarket-bot',
    path: 'polymarket-bot',
    kind: 'confirmed',
    domain: 'Trading',
    stage: 'MVP',
    description: 'Polymarket trading and research bot with strategies, feeds, Telegram UI, dashboard, and execution modules.',
    role: 'Trading automation platform',
    stack: ['Python', 'Telegram bot', 'Playwright', 'Pandas']
  },
  {
    id: 'polymarket-parser',
    name: 'polymarket-parser',
    path: 'polymarket-parser',
    kind: 'confirmed',
    domain: 'Trading',
    stage: 'Tooling',
    description: 'Lightweight Polymarket market discovery and websocket ingestion parser.',
    role: 'Market data infrastructure',
    stack: ['Python', 'aiohttp', 'WebSockets', 'SQLite']
  },
  {
    id: 'neural-trading-mvp',
    name: 'neural-trading-mvp',
    path: 'neural-trading-mvp',
    kind: 'confirmed',
    domain: 'Trading',
    stage: 'Prototype',
    description: 'BTC/USDT futures signal prototype using historical candles, TCN training, and live signal polling.',
    role: 'ML signal prototype',
    stack: ['Python', 'PyTorch', 'ccxt', 'scikit-learn']
  },
  {
    id: 'neurotrader-nodata',
    name: 'neurotrader_nodata',
    path: 'neurotrader_nodata',
    kind: 'confirmed',
    domain: 'Trading',
    stage: 'Research',
    description: 'Walk-forward NeuroTrader project skeleton for model-based market experiments.',
    role: 'Trading research workspace',
    stack: ['Python', 'LightGBM', 'Pandas', 'Matplotlib']
  },
  {
    id: 'tg-buy-crypto',
    name: 'tg_buy_crypto',
    path: 'tg_buy_crypto',
    kind: 'confirmed',
    domain: 'Trading',
    stage: 'MVP',
    description: 'Telegram token-signal backtesting pipeline with GeckoTerminal market data and HTML reports.',
    role: 'Crypto signal analytics',
    stack: ['Python', 'Pandas', 'Jinja2', 'GeckoTerminal']
  },
  {
    id: 'backtest',
    name: 'backtest',
    path: 'backtest',
    kind: 'confirmed',
    domain: 'Trading',
    stage: 'Research',
    description: 'Strategy backtesting workspace with indicators, settlement, reporting, and grouped strategy modules.',
    role: 'Strategy research bench',
    stack: ['Python', 'Custom strategy engine']
  },
  {
    id: 'chatsspider',
    name: 'ChatsSpider',
    path: 'ChatsSpider',
    kind: 'confirmed',
    domain: 'Social Automation',
    stage: 'MVP',
    description: 'Multi-account Telegram channel and chat parser with assisted analysis workflows.',
    role: 'Telegram intelligence collector',
    stack: ['Python', 'Telethon', 'SQLite', 'Playwright', 'aiogram']
  },
  {
    id: 'threadschecker-main',
    name: 'ThreadsChecker-main',
    path: 'ThreadsChecker-main',
    kind: 'confirmed',
    domain: 'Social Automation',
    stage: 'Production',
    description: 'Telegram-controlled Threads account autopilot for importing, posting, metrics, proxies, and niche management.',
    role: 'Social account operations',
    stack: ['Python', 'aiogram', 'httpx', 'SQLite', 'Next.js']
  },
  {
    id: 'commyx-intel',
    name: 'commyx-intel',
    path: 'commyx-intel',
    kind: 'confirmed',
    domain: 'Social Automation',
    stage: 'MVP',
    description: 'Multi-service Telegram and catalog intelligence system with scraper, API, clustering, sync, worker, and web surface.',
    role: 'Market intelligence stack',
    stack: ['Crawlee', 'Playwright', 'FastAPI', 'Postgres', 'UMAP']
  },
  {
    id: 'instagram-autoreg',
    name: 'instagram-autoreg',
    path: 'instagram-autoreg',
    kind: 'confirmed',
    domain: 'Social Automation',
    stage: 'MVP',
    description: 'Instagram auto-registration system using Android/Appium flows, SMS and captcha providers, proxies, and DB state.',
    role: 'Account automation lab',
    stack: ['Python', 'Appium', 'SQLAlchemy', 'FastAPI']
  },
  {
    id: 'tg-outreach',
    name: 'WORK/tg-outreach',
    path: 'WORK/tg-outreach',
    kind: 'confirmed',
    domain: 'Social Automation',
    stage: 'Tooling',
    description: 'Telegram outreach runner with lead collection, inbox reporting, autonomous send waves, and anti-ban controls.',
    role: 'Outbound automation tool',
    stack: ['Python', 'Telethon', 'dotenv']
  },
  {
    id: 'fb',
    name: 'FB',
    path: 'FB',
    kind: 'confirmed',
    domain: 'Marketing Ops',
    stage: 'Tooling',
    description: 'Facebook Ads and CRM automation for spend/lead matching, CPL calculation, and Excel reporting.',
    role: 'Ad operations reporting',
    stack: ['Python', 'Selenium', 'Pandas', 'openpyxl']
  },
  {
    id: 'fb-catalog-saas',
    name: 'WORK/fb-catalog-saas',
    path: 'WORK/fb-catalog-saas',
    kind: 'confirmed',
    domain: 'Marketing Ops',
    stage: 'MVP',
    description: 'Production-oriented SaaS rewrite for Facebook catalog ad launches with encrypted credentials and worker jobs.',
    role: 'Adtech SaaS platform',
    stack: ['Fastify', 'TypeScript', 'React', 'Vite', 'Prisma', 'Postgres', 'Redis']
  },
  {
    id: 'fb-api-zaliv-catalog',
    name: 'WORK/fb_api_zaliv_catalog',
    path: 'WORK/fb_api_zaliv_catalog',
    kind: 'confirmed',
    domain: 'Marketing Ops',
    stage: 'Prototype',
    description: 'Local Node/Express prototype for Facebook catalog campaign and creative launch workflows.',
    role: 'Campaign launch prototype',
    stack: ['Node.js', 'Express', 'Facebook APIs']
  },
  {
    id: 'site-translator-extension',
    name: 'WORK/site-translator-extension',
    path: 'WORK/site-translator-extension',
    kind: 'confirmed',
    domain: 'Marketing Ops',
    stage: 'MVP',
    description: 'Chrome and Edge MV3 extension that translates visible website text with Google or LibreTranslate-compatible APIs.',
    role: 'Browser productivity extension',
    stack: ['JavaScript', 'MV3', 'Python']
  },
  {
    id: 'lead-form-site',
    name: 'lead-form-site',
    path: 'lead-form-site',
    kind: 'confirmed',
    domain: 'Marketing Ops',
    stage: 'Tooling',
    description: 'Static lead form with tracking pixels, Telegram notifications, validation, and localStorage fallback.',
    role: 'Lead capture surface',
    stack: ['HTML', 'JavaScript', 'Tracking Pixels']
  },
  {
    id: 'ai-vector-db',
    name: 'WORK/ai+vector_db',
    path: 'WORK/ai+vector_db',
    kind: 'confirmed',
    domain: 'AI Systems',
    stage: 'MVP',
    description: 'Telegram RAG bot over local PDF, DOCX, and TXT materials with vector DB and optional 3D visualizer.',
    role: 'Knowledge assistant',
    stack: ['Python', 'OpenAI', 'ChromaDB', 'FastAPI', 'Telegram bot']
  },
  {
    id: 'tg-bot-game',
    name: 'TG_bot_game',
    path: 'TG_bot_game',
    kind: 'confirmed',
    domain: 'Games',
    stage: 'MVP',
    description: 'Telegram Mini App marble race game with TON and Stars betting-oriented architecture.',
    role: 'Telegram game platform',
    stack: ['React', 'Vite', 'Matter.js', 'Zustand', 'Fastify', 'Prisma']
  },
  {
    id: 'math-balls-battle',
    name: 'math-balls-battle',
    path: 'math-balls-battle',
    kind: 'confirmed',
    domain: 'Games',
    stage: 'Prototype',
    description: 'Math battle renderer and game with Telegram bot, TTS, and TikTok publishing helpers.',
    role: 'Video-first game experiment',
    stack: ['Node.js', 'Canvas', 'Telegraf', 'TTS']
  },
  {
    id: 'tiktok-stream-game',
    name: 'tiktok-stream-game',
    path: 'tiktok-stream-game',
    kind: 'confirmed',
    domain: 'Games',
    stage: 'Prototype',
    description: 'Browser-based TikTok live stream game experiments with grid-war gameplay and gift metadata.',
    role: 'Live-stream game experiment',
    stack: ['HTML', 'CSS', 'JavaScript']
  },
  {
    id: 'hermes-agent',
    name: 'hermes-agent',
    path: 'hermes-agent',
    kind: 'lab',
    domain: 'Labs',
    stage: 'Research',
    description: 'Large AI agent framework folder that needs ownership or fork status labeling before main portfolio placement.',
    role: 'Needs label',
    stack: ['Python', 'TypeScript', 'Agents']
  },
  {
    id: 'shannon',
    name: 'shannon',
    path: 'shannon',
    kind: 'lab',
    domain: 'Labs',
    stage: 'Research',
    description: 'AI pentester-oriented repository that needs ownership or contribution status clarification.',
    role: 'Needs label',
    stack: ['Security', 'AI', 'Web']
  },
  {
    id: 'agency-agents',
    name: 'agency-agents',
    path: 'agency-agents',
    kind: 'lab',
    domain: 'Labs',
    stage: 'Tooling',
    description: 'Local agent prompt library and orchestration material used as a reference layer for workflows.',
    role: 'Reference library',
    stack: ['Markdown', 'Agents', 'Prompts']
  },
  {
    id: 'n8n-skills',
    name: 'n8n-skills',
    path: 'n8n-skills',
    kind: 'lab',
    domain: 'Labs',
    stage: 'Tooling',
    description: 'External n8n skill repository clone; include only as a reference unless customized ownership is confirmed.',
    role: 'Reference library',
    stack: ['n8n', 'Markdown', 'Automation']
  },
  {
    id: 'tets-dz',
    name: 'tets_dz',
    path: 'tets_dz',
    kind: 'lab',
    domain: 'Labs',
    stage: 'MVP',
    description: 'Amazon listing filter workflow project; workflow contents remain uninspected until explicitly authorized.',
    role: 'Needs label',
    stack: ['n8n', 'Webapp', 'Automation']
  }
];
