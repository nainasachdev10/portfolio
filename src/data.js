// impact: optional one-line result shown on the open project card.
export const projects = [
  {
    label: 'ETHMumbai Hackathon',
    title: 'Penumbra - DarkAuction',
    impact: '4 tracks won at ETHMumbai, incl. Overall Best Project',
    desc: 'Sealed-bid OTC auction platform for illiquid tokens with privacy-preserving settlement. Uses commit-reveal on-chain, Umbra stealth addresses for payouts, BitGo escrow for bidder deposits, and ENS for seller pseudonymity.',
    tech: ['Next.js', 'TypeScript', 'Solidity', 'Scaffold-ETH 2', 'Umbra', 'BitGo', 'ENS', 'Fileverse'],
    github: 'https://github.com/nainasachdev10/penumbra',
    demo: 'https://penumbra-trade.vercel.app/',
  },
  {
    label: 'AI Automation',
    title: 'Origami - Autonomous Content',
    impact: 'Publishes daily across 3 platforms, hands-free',
    desc: 'Autonomous content creation system for X, YouTube, and Instagram. Define your niche once - the system researches trends, generates scripts, creates media, and publishes daily, completely hands-free.',
    tech: ['Next.js', 'Python', 'FastAPI', 'Supabase', 'n8n', 'Gemini', 'Telegram Bot'],
    github: 'https://github.com/nainasachdev10/origami',
    demo: 'https://origami-agent.vercel.app/login',
  },
  {
    label: 'Stellar DApp',
    title: 'Stellar Snaps - Payment Links',
    impact: '200+ npm installs · 100+ extension users',
    desc: 'Shareable payment links for the Stellar blockchain. Create snaps, share URLs, and let anyone pay with one click using Freighter wallet. Ships as a web dashboard and a browser extension.',
    tech: ['Next.js', 'TypeScript', 'Stellar SDK', 'Freighter', 'PostgreSQL', 'Turborepo'],
    github: 'https://github.com/nainasachdev10/stellar-snaps',
    demo: 'https://stellar-snaps.vercel.app/',
  },
  {
    label: 'AI Product',
    title: 'Realty Engine - AI Real Estate',
    impact: '92% → 97% call-classification accuracy via evals',
    desc: 'AI-powered real estate acquisition engine for the Indian market. Automates Hinglish voice calling, WhatsApp follow-ups, ad creatives, and social content - full-stack from lead capture to close.',
    tech: ['Next.js', 'TypeScript', 'Claude API', 'Bolna', 'Supabase', 'Inngest', 'PostHog'],
    github: 'https://github.com/nainasachdev10/estate-engine',
    demo: 'https://estate-engine.vercel.app/',
  },
  {
    label: 'Base · WhyBase',
    title: 'DropIn - Attention into Instant Rewards',
    desc: 'Lets creators, brands and events reward their audiences instantly through verifiable on-chain giveaways, shareable DropLinks and QR tokens that can be claimed without friction.',
    tech: ['Next.js', 'TypeScript', 'Solidity', 'Base', 'Privy', 'Supabase', 'Resend', 'Farcaster Frames'],
    github: 'https://github.com/nainasachdev10/drop-in',
    demo: 'https://trydropin.xyz/',
  },
  {
    label: 'Base Mini App',
    title: 'MyOpini - Real-time Onchain Quiz Battles',
    desc: 'A Base Mini App for head-to-head crypto quiz battles inside Farcaster. Wallet-based matchmaking pairs players over WebSockets, a server-authoritative game loop scores timed rounds with streak and speed multipliers, and results are settled on-chain through a Solidity contract on Base.',
    tech: ['Next.js', 'TypeScript', 'OnchainKit', 'MiniKit', 'Farcaster', 'Socket.io', 'Solidity', 'PostgreSQL'],
    github: 'https://github.com/nainasachdev10/MyOpini_quiz',
    demo: 'https://myopini.vercel.app/',
  },
  {
    label: 'AI × Onchain Finance',
    title: 'Zetta - Financial OS for AI Agents',
    impact: 'Live at zettaai.co, indexing agent books on Base',
    desc: 'Indexes declared agent wallets on Base, classifies on-chain activity into revenue, expenses and treasury movement, and publishes per-agent P&L, runway and an economic leaderboard. Luca, an AI analyst layer, writes research reports from the books.',
    tech: ['Next.js', 'TypeScript', 'Viem', 'Base', 'x402', 'Claude API', 'OpenAI', 'Supabase', 'Privy'],
    github: 'https://github.com/nainasachdev10/zetta',
    demo: 'https://zettaai.co',
  },
  {
    label: 'Developer Tool',
    title: 'Claude Code Traffic Light',
    desc: 'An always-on-top pixel-art overlay that shows the live state of every Claude Code session as a traffic light: red when it needs approval, yellow while working, green when done. Driven by Claude Code hooks, with sessions pruned by process liveness.',
    tech: ['Electron', 'JavaScript', 'Claude Code Hooks', 'Node.js'],
    github: 'https://github.com/nainasachdev10/claude-code-traffic-light',
  },
  {
    label: 'Reinforcement Learning',
    title: 'Self-Navigating Warehouse Robot',
    desc: 'Side-by-side RL comparison: Q-Learning, SARSA, and Dueling Double-DQN agents navigate three robots through the same warehouse delivery task in parallel, with a live leaderboard ranking by success rate and speed.',
    tech: ['Python', 'Gymnasium', 'Q-Learning', 'SARSA', 'DQN', 'NumPy'],
    github: 'https://github.com/nainasachdev10/self-navigating-robot',
  },
  {
    label: 'Farcaster Mini-App',
    title: 'NabIt - Onchain E-commerce',
    desc: 'An onchain e-commerce mini-app for the Farcaster ecosystem. Browse, search, and purchase items without leaving Farcaster by connecting your wallet.',
    tech: ['Next.js', 'TypeScript', 'OnchainKit', 'MiniKit', 'Farcaster', 'Tailwind'],
    github: 'https://github.com/nainasachdev10/nabit',
    demo: 'https://nabit.vercel.app/',
  },
  {
    label: 'ETHGlobal Hackathon',
    title: 'GRC-20 D-Mail',
    desc: 'Solves anonymous spam and phishing by attaching verifiable on-chain reputation to wallet addresses using GRC-20 standards and Hypergraph (TheGraph) technology.',
    tech: ['Next.js', 'TypeScript', 'XMTP', 'TheGraph', 'GRC-20', 'Ethers.js', 'OpenAI'],
    github: 'https://github.com/nainasachdev10/ETHGlobal',
  },
  {
    label: 'AI + Computer Vision',
    title: 'SkinSight - Skincare Advisor',
    desc: 'AI skincare advisor that analyzes selfies for skin tone and acne, providing personalized product recommendations via real-time face detection.',
    tech: ['React', 'Flask', 'OpenCV', 'TensorFlow', 'CNN'],
    github: 'https://github.com/nainasachdev10/SkinSight',
  },
  {
    label: 'Web3 DApp',
    title: 'Web 3.0 Crypto Exchange',
    desc: 'Decentralized crypto exchange DApp with custom ERC20 token creation and trading. MetaMask integration for secure wallet pairing and real-time contract data.',
    tech: ['React', 'HTML', 'CSS', 'MetaMask', 'Solidity'],
    github: null,
  },
  {
    label: 'AI Tool',
    title: 'AI Powered PDF Chatbot',
    desc: 'AI chatbot that answers questions from uploaded PDF content. Enables natural language search and contextual information retrieval from any document.',
    tech: ['JavaScript', 'TypeScript', 'LangChain', 'OpenAI'],
    github: 'https://github.com/nainasachdev10/AI-PDF-Chatbot',
  },
];

export const experiences = [
  {
    label: 'Feb 2026 – Present',
    title: 'AI Engineer',
    org: 'Freelance',
    desc: 'Built and delivered 4 scoped AI engineering and automation projects for early-stage clients, working directly with founders. Own delivery end to end: architecture, implementation and handoff.',
    accent: '#6aabce',
  },
  {
    label: 'Jan 2026 – Present',
    title: 'India Chapter Lead',
    org: 'Dev3Pack',
    desc: 'Leading DevRel and community growth for the India chapter through partnerships and developer initiatives, including Dev3Pack India at Devcon 8 Mumbai: a career fair, meetups and a residency.',
    accent: '#5a90b0',
  },
  {
    label: 'Feb 2026 – Aug 2026',
    title: 'CTO',
    org: 'WhyBase',
    desc: 'Led a team of 3 building financial intelligence for on-chain AI agents, turning agent wallet activity into structured financial statements.',
    accent: '#6aabce',
  },
  {
    label: 'Feb 2026 – Present',
    title: 'DevRel Ambassador',
    org: 'BASE',
    desc: 'Supporting developers on Discord: resolving queries, debugging docs issues and feeding usability gaps back into the documentation.',
    accent: '#4e7d9a',
  },
  {
    label: 'Apr 2025 – Dec 2025',
    title: 'Fullstack Developer Intern',
    org: 'Stealth Startup',
    desc: 'Started as a full-stack developer, led the development team and handled architecture, then moved into blockchain: writing, testing and deploying secure, gas-efficient Solidity contracts.',
    accent: '#8ec4da',
  },
];

export const education = {
  school: 'University of Mumbai',
  degree: 'B.E. in Artificial Intelligence & Data Science',
  period: '2022 – 2026',
};

export const skillGroups = [
  {
    cat: 'AI / ML',
    items: ['LLM APIs', 'Multi-agent Systems', 'LangGraph', 'MCP', 'Tool Calling', 'RAG', 'Vector Databases', 'Evals', 'Prompt Engineering', 'Human-in-the-loop Workflows'],
  },
  {
    cat: 'Infra',
    items: ['Inngest', 'Supabase', 'PostgreSQL', 'Docker', 'n8n', 'PostHog', 'Foundry', 'Hardhat'],
  },
  {
    cat: 'Languages',
    items: ['TypeScript', 'Python', 'JavaScript', 'Rust', 'Solidity', 'SQL'],
  },
  {
    cat: 'Technologies',
    items: ['Next.js', 'React', 'Node.js', 'FastAPI', 'Tailwind CSS', 'Ethers.js', 'Wagmi', 'Viem', 'OnchainKit', 'Farcaster MiniKit', 'Scaffold-ETH 2', 'RainbowKit'],
  },
];

// "What else I've been up to": href is the main Proof of Work link, bracket an extra one.
export const achievements = [
  {
    title: 'Agentic Hub Co-organizer, Devcon 8',
    desc: 'Running a workshop and a roundtable panel on AI agents and UPI payments.',
    href: 'https://app.devcon.org/speakers/naina-sachdev',
  },
  {
    title: 'Guest Speaker — Farcaster Agentic Bootcamp',
    desc: 'Conducted a workshop for 120+ participants at the bootcamp by UrbeETH.',
    href: 'https://youtu.be/o2ckF8nPrB8?t=812',
  },
  {
    title: 'Leaders & Builders AI Residency',
    desc: 'Secured a spot among the 10 teams nationwide for the intensive residency program.',
  },
  {
    title: 'ETHMumbai Hackathon — 4-Track Winner',
    desc: 'Won 4 tracks with Penumbra: Overall Best Project, Best Privacy Project, Best Privacy on BASE, and ENS.',
    href: 'https://x.com/nainasachdev11/status/2033596003413332025',
    bracket: { label: 'Devfolio', href: 'https://devfolio.co/projects/penumbra-4c99' },
  },
  {
    title: 'ETHMumbai Speaker',
    desc: 'Spoke on onboarding developers from Web2 to Web3.',
    href: 'https://x.com/nainasachdev11/status/2032138667922440376',
  },
  {
    title: 'Uniswap Hook Incubator 8',
    desc: 'Selected for the Web3 incubator focused on building custom Uniswap v4 hooks for next-gen DeFi protocols alongside advanced Solidity developers.',
  },
  {
    title: 'SheFi Season 13 Scholar',
    desc: 'Selected as a Season 13 Scholar and awarded a scholarship to join a global women-led Web3 cohort.',
  },
  {
    title: 'Invictus Hackathon Winner',
    desc: 'Won the Invictus hackathon.',
    href: 'https://drive.google.com/file/d/10xHqg5RZ2oI1Qma-Ce10UKVhKqYIAEZR/view?usp=sharing',
  },
  {
    title: 'Chairperson, ISTE VESIT',
    desc: 'Led the Indian Society for Technical Education chapter at VESIT.',
    href: 'https://drive.google.com/file/d/1RyM2OEd8cMKW8FZ7I8tKsaK409M3_4GR/view?usp=sharing',
  },
];

export const contactItems = [
  { platform: 'Email',       handle: 'nainasachdev01@gmail.com',  href: 'mailto:nainasachdev01@gmail.com'            },
  { platform: 'GitHub',      handle: 'github.com/nainasachdev10', href: 'https://github.com/nainasachdev10'          },
  { platform: 'Telegram',    handle: '@nainasachdev',              href: 'https://t.me/nainasachdev'                  },
  { platform: 'LinkedIn',    handle: 'in/naina-sachdev',           href: 'https://www.linkedin.com/in/naina-sachdev/' },
  { platform: 'Twitter / X', handle: '@Nainasachdev11',            href: 'https://x.com/Nainasachdev11'              },
  { platform: 'Substack',    handle: 'nainaasachdev.substack.com', href: 'https://nainaasachdev.substack.com/'        },
];
