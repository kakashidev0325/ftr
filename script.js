(() => {
  const config = {
    buy: 'https://jup.ag/',
    chart: 'https://dexscreener.com/solana',
    jupiter: 'https://jup.ag/',
    coingecko: 'https://www.coingecko.com/en/categories/solana-ecosystem',
    whitepaper: '#',
    telegram: 'https://t.me/ftrsol_tg',
    x: 'https://x.com/ftrsol_x',
    tiktok: '#',
    instagram: '#',
    reddit: '#',
    contractAddress: 'EerxgTnkL6KCNjn8uKMby7ZR8zh91xftS3WFethopump',
    officialEmail: '',
    ...(window.FTR_CONFIG || {})
  };

  const translations = {
    en: {
      '__title': 'Fraudulent Tesla Roadster — $FTR on Solana',
      '__description': 'Fraudulent Tesla Roadster ($FTR) is a meme token on Solana about a taped-up cartoon roadster, a cardboard sign that says 100% legit, and an astronaut who will not pull over.',
      'brand.subtitle': 'ROADSTER',
      'nav.home': 'Home',
      'nav.about': 'About',
      'nav.tokenomics': 'Tokenomics',
      'nav.memes': 'Meme Gallery',
      'nav.howToBuy': 'How to Buy',
      'nav.roadmap': 'Roadmap',
      'nav.faq': 'FAQ',
      'nav.community': 'Community',
      'header.join': 'Join FTR',
      'mobile.buy': 'Buy',
      'mobile.chart': 'Chart',
      'mobile.ig': 'X',
      'hero.titleTop': 'FRAUDULENT',
      'hero.titleBottom': 'ROADSTER.',
      'hero.subtitle': 'Fraudulent Tesla Roadster ($FTR) is a meme token on Solana. Same cartoon every time: a red roadster, a roll of tape, a cardboard sign that says 100% legit, and an astronaut who will not pull over.',
      'actions.buyNow': 'Buy Now',
      'actions.chart': 'Chart',
      'actions.joinCommunity': 'Follow on X',
      'actions.whitepaper': 'Whitepaper',
      'actions.copy': 'Copy',
      'actions.copied': 'Copied!',
      'actions.copyFailed': 'Copy failed',
      'contract.label': 'Token Mint',
      'social.telegram': 'Telegram',
      'social.x': 'Twitter / X',
      'social.tiktok': 'TikTok',
      'social.instagram': 'Instagram',
      'social.reddit': 'Reddit',
      'social.jupiter': 'Jupiter',
      'social.coingecko': 'CoinGecko',
      'hero.speech': '100% legit.',
      'hero.woodSign': 'TAPE<br>ZONE',
      'sections.essence': 'THE ROADSTER',
      'essence.lead': 'The picture is the whole project. A sports car that left the road, lost a wheel, and kept the cardboard sign. Rust, duct tape, smoke, and a driver who still waves.',
      'essence.text': '$FTR brings that drawing to Solana. The project stays meme-first: one car, one sign, one ticker. The 3/3 tax is directed to SOL rewards for holders. This is a joke token. It is not a car, not a company, and not a promise of profit.',
      'essence.mark1': 'TAPE',
      'essence.mark2': 'RUST',
      'essence.mark3': 'SOL',
      'essence.point1.title': 'Duct Tape',
      'essence.point1.text': 'The bodywork is mostly tape. That is the repair, and that is the meme.',
      'essence.point2.title': 'Rust and Bolts',
      'essence.point2.text': 'Holes, loose bolts, and a wheel that left early.',
      'essence.point3.title': 'SOL Rewards',
      'essence.point3.text': 'The 3/3 tax is structured around SOL rewards for holders.',
      'sections.tokenomics': 'TOKENOMICS',
      'tokenomics.totalSupply': 'Total Supply',
      'tokenomics.circulatingSupply': 'Circulating Supply',
      'tokenomics.oneBillion': '1 Billion',
      'tokenomics.burn': 'Burn',
      'tokenomics.liquidity': 'Liquidity',
      'tokenomics.tax': 'Tax',
      'tokenomics.taxValue': '3/3 SOL Rewards',
      'sections.memes': 'MEME GALLERY',
      'memes.m1': '100%<br>LEGIT',
      'memes.m2': 'STILL<br>WAVING',
      'memes.m3': 'HUG THE<br>SIGN',
      'memes.m4': 'CLOUD<br>PARKING',
      'memes.m5': 'NOTHING<br>WRONG HERE',
      'memes.m6': 'WEN<br>WHEEL?',
      'sections.instagram': 'THE FLIGHT',
      'sections.howToBuy': 'HOW TO BUY',
      'steps.wallet.title': 'Choose a Wallet',
      'steps.wallet.text': 'Use Phantom, Solflare, Backpack, or another Solana wallet.',
      'steps.network.title': 'Open Solana',
      'steps.network.text': 'Stay on Solana mainnet. Solana is not an EVM chain, so there is no chain ID to switch.',
      'steps.sol.title': 'Add SOL',
      'steps.sol.text': 'SOL is required to buy $FTR and to pay the Solana network fee.',
      'steps.contract.title': 'Verify the Mint',
      'steps.contract.text': 'Always match the official $FTR mint exactly before you trade.',
      'steps.swap.title': 'Swap on Jupiter',
      'steps.swap.text': 'Use Jupiter or the official route to swap SOL for $FTR.',
      'steps.review.title': 'Review the Trade',
      'steps.review.text': 'Check the amount, price impact, slippage, priority fee, and the 3% buy/sell tax.',
      'steps.confirm.title': 'Confirm on Solscan',
      'steps.confirm.text': 'Confirm in your wallet, then verify the transaction on Solscan.',
      'sections.roadmap': 'ROADMAP',
      'road.phase1': 'Phase 1',
      'road.phase2': 'Phase 2',
      'road.phase3': 'Phase 3',
      'road.phase4': 'Phase 4',
      'road.phase5': 'Phase 5',
      'road.phase6': 'Phase 6',
      'road.phase7': 'Phase 7',
      'road.foundation.title': 'The Tape',
      'road.foundation.a': 'Name, ticker $FTR, and roadster logo',
      'road.foundation.b': 'Official website',
      'road.foundation.c': 'Public socials for the tape crew',
      'road.foundation.d': 'Public token page',
      'road.foundation.e': 'Tokenomics in plain language',
      'road.foundation.f': 'Solana chosen as home chain',
      'road.dex.title': 'Launch',
      'road.dex.a': 'Solana mint goes live',
      'road.dex.b': 'Jupiter swap route',
      'road.dex.c': 'DexScreener chart',
      'road.dex.d': 'Birdeye listing',
      'road.dex.e': 'Raydium liquidity',
      'road.dex.f': 'First tape-and-sky meme pack',
      'road.verification.title': 'Open Books',
      'road.verification.a': 'Solscan token metadata',
      'road.verification.b': 'Mint address posted in the hero and footer',
      'road.verification.c': 'Authority and liquidity notes in public',
      'road.verification.d': 'CoinGecko and CoinMarketCap submissions',
      'road.verification.e': 'Holder updates from the official channels',
      'road.marketing.title': 'The Sky',
      'road.marketing.a': 'Meme posts in the roadster style',
      'road.marketing.b': 'Short videos of tape, rust, and sky',
      'road.marketing.c': 'Solana community spaces',
      'road.marketing.d': 'Posts that stay a joke',
      'road.social.title': 'A Bigger Cloud',
      'road.social.a': 'Wider meme reach',
      'road.social.b': 'More languages',
      'road.social.c': 'Community posts built from the cartoon',
      'road.social.d': 'Still a drawing, still not a car',
      'road.cex.title': 'Listings',
      'road.cex.a': 'Tracker listings',
      'road.cex.b': 'Exchange conversations',
      'road.cex.c': 'Broader Solana exposure',
      'road.cex.d': 'New communities, same sign',
      'road.defi.title': 'After the Dive',
      'road.defi.a': 'A new roadmap once the meme is established',
      'road.defi.b': 'Community tools only if holders ask',
      'road.defi.c': 'Still a meme first',
      'road.defi.d': 'Nothing promised that has not shipped',
      'sections.faq': 'FAQ',
      'faq.what.q': 'What is Fraudulent Tesla Roadster?',
      'faq.what.a': '$FTR is a meme token on Solana about a cartoon roadster held together with tape and a sign that says 100% legit.',
      'faq.chain.q': 'Which chain is $FTR on?',
      'faq.chain.a': 'Solana.',
      'faq.buy.q': 'How can I buy $FTR?',
      'faq.buy.a': 'Use a Solana wallet such as Phantom or Solflare, verify the mint, and swap SOL through Jupiter or the official route.',
      'faq.safe.q': 'Is $FTR a safe investment?',
      'faq.safe.a': 'Crypto is risky. Always do your own research and never spend more than you can afford to lose.',
      'faq.contract.q': 'Where can I see the mint?',
      'faq.contract.a': 'The official mint is shown in the hero and the footer. Always match it before you trade.',
      'faq.fortune.q': 'Why the cardboard sign?',
      'faq.fortune.a': 'Because the car says 100% legit. The sign is the joke. The tape is the rest of the joke.',
      'faq.abundance.q': 'Is this a real car?',
      'faq.abundance.a': 'No. It is a drawing and a meme. No vehicle, no delivery date, and no company behind the windshield.',
      'faq.reward.q': 'How do SOL rewards fit?',
      'faq.reward.a': 'The 3/3 tax is directed to SOL rewards for holders. It is a simple meme mechanic, not a promise of profit.',
      'sections.contact': 'CONTACT',
      'contact.title': 'The flight log is on X.',
      'footer.rights': '© 2026 FRAUDULENT TESLA ROADSTER. ALL RIGHTS RESERVED.',
      'footer.made': 'MADE WITH ❤️ BY THE TAPE CREW',
      'footer.contract': 'Mint:'
    },
    cn: {
      '__title': 'Fraudulent Tesla Roadster — Solana 上的 $FTR',
      '__description': 'Fraudulent Tesla Roadster（$FTR）是 Solana 上的迷因代币：一辆用胶带粘住的卡通跑车、一块写着 100% legit 的纸板，还有一个不肯靠边的宇航员。',
      'brand.subtitle': '跑车',
      'nav.home': '首页',
      'nav.about': '关于',
      'nav.tokenomics': '代币经济',
      'nav.memes': '迷因画廊',
      'nav.howToBuy': '如何购买',
      'nav.roadmap': '路线图',
      'nav.faq': '常见问题',
      'nav.community': '社区',
      'header.join': '加入 FTR',
      'mobile.buy': '购买',
      'mobile.chart': '图表',
      'mobile.ig': 'X',
      'hero.titleTop': 'FRAUDULENT',
      'hero.titleBottom': 'ROADSTER.',
      'hero.subtitle': 'Fraudulent Tesla Roadster（$FTR）是 Solana 上的迷因代币。画面永远一样：一辆红色跑车、一卷胶带、一块写着 100% legit 的纸板，还有一个不肯靠边的宇航员。',
      'actions.buyNow': '立即购买',
      'actions.chart': '图表',
      'actions.joinCommunity': '在 X 关注',
      'actions.whitepaper': '白皮书',
      'actions.copy': '复制',
      'actions.copied': '已复制！',
      'actions.copyFailed': '复制失败',
      'contract.label': '代币铸币地址',
      'social.telegram': 'Telegram',
      'social.x': 'Twitter / X',
      'social.tiktok': 'TikTok',
      'social.instagram': 'Instagram',
      'social.reddit': 'Reddit',
      'social.jupiter': 'Jupiter',
      'social.coingecko': 'CoinGecko',
      'hero.speech': '100% legit。',
      'hero.woodSign': '胶带<br>区域',
      'sections.essence': '这辆跑车',
      'essence.lead': '这张图就是整个项目。一辆跑车离开了公路，掉了一只轮子，纸板还在。锈、胶带、黑烟，还有一个仍在挥手的司机。',
      'essence.text': '$FTR 把这张画带到 Solana。项目保持迷因为先：一辆车、一块牌子、一个代币符号。3/3 税费用于向持有者发放 SOL 奖励。这是玩笑代币。它不是车，不是公司，也不是收益承诺。',
      'essence.mark1': '胶带',
      'essence.mark2': '锈',
      'essence.mark3': 'SOL',
      'essence.point1.title': '胶带',
      'essence.point1.text': '车身基本靠胶带。修理本身就是这个迷因。',
      'essence.point2.title': '锈和螺栓',
      'essence.point2.text': '破洞、松掉的螺栓，还有一只提前离开的轮子。',
      'essence.point3.title': 'SOL 奖励',
      'essence.point3.text': '3/3 税费结构围绕向持有者发放 SOL 奖励。',
      'sections.tokenomics': '代币经济',
      'tokenomics.totalSupply': '总供应量',
      'tokenomics.circulatingSupply': '流通供应量',
      'tokenomics.oneBillion': '10亿',
      'tokenomics.burn': '销毁',
      'tokenomics.liquidity': '流动性',
      'tokenomics.tax': '税费',
      'tokenomics.taxValue': '3/3 SOL 奖励',
      'sections.memes': '迷因画廊',
      'memes.m1': '100%<br>LEGIT',
      'memes.m2': '还在<br>挥手',
      'memes.m3': '抱住<br>这块牌',
      'memes.m4': '云上<br>停车',
      'memes.m5': '一切<br>正常',
      'memes.m6': '轮子<br>呢？',
      'sections.instagram': '这次飞行',
      'sections.howToBuy': '如何购买',
      'steps.wallet.title': '选择钱包',
      'steps.wallet.text': '使用 Phantom、Solflare、Backpack 或其他 Solana 钱包。',
      'steps.network.title': '打开 Solana',
      'steps.network.text': '保持在 Solana 主网。Solana 不是 EVM 链，不需要切换 Chain ID。',
      'steps.sol.title': '准备 SOL',
      'steps.sol.text': '购买 $FTR 和支付 Solana 网络费用都需要 SOL。',
      'steps.contract.title': '核对铸币地址',
      'steps.contract.text': '交易前请逐字核对官方 $FTR 铸币地址。',
      'steps.swap.title': '在 Jupiter 兑换',
      'steps.swap.text': '通过 Jupiter 或官方路径，把 SOL 兑换成 $FTR。',
      'steps.review.title': '检查交易',
      'steps.review.text': '确认数量、价格影响、滑点、优先费，以及 3% 买入/卖出税。',
      'steps.confirm.title': '在 Solscan 确认',
      'steps.confirm.text': '在钱包中确认，然后到 Solscan 核对交易。',
      'sections.roadmap': '路线图',
      'road.phase1': '阶段 1',
      'road.phase2': '阶段 2',
      'road.phase3': '阶段 3',
      'road.phase4': '阶段 4',
      'road.phase5': '阶段 5',
      'road.phase6': '阶段 6',
      'road.phase7': '阶段 7',
      'road.foundation.title': '胶带',
      'road.foundation.a': '名称、代币符号 $FTR 和跑车标志',
      'road.foundation.b': '官方网站',
      'road.foundation.c': '胶带小队的公开社交账号',
      'road.foundation.d': '公开代币页面',
      'road.foundation.e': '用白话写清代币经济',
      'road.foundation.f': '选择 Solana 作为主链',
      'road.dex.title': '发行',
      'road.dex.a': 'Solana 铸币地址上线',
      'road.dex.b': 'Jupiter 兑换路径',
      'road.dex.c': 'DexScreener 图表',
      'road.dex.d': 'Birdeye 收录',
      'road.dex.e': 'Raydium 流动性',
      'road.dex.f': '第一套胶带与天空迷因',
      'road.verification.title': '公开账本',
      'road.verification.a': 'Solscan 代币资料',
      'road.verification.b': '在首页和页脚公布铸币地址',
      'road.verification.c': '公开权限与流动性说明',
      'road.verification.d': '提交 CoinGecko 和 CoinMarketCap',
      'road.verification.e': '通过官方渠道更新持有者',
      'road.marketing.title': '天空',
      'road.marketing.a': '用跑车风格发布迷因',
      'road.marketing.b': '胶带、锈和天空的短视频',
      'road.marketing.c': 'Solana 社区空间',
      'road.marketing.d': '内容始终是玩笑',
      'road.social.title': '更大的云',
      'road.social.a': '扩大迷因传播',
      'road.social.b': '更多语言',
      'road.social.c': '用这张卡通做社区内容',
      'road.social.d': '它仍是一张画，仍不是一辆车',
      'road.cex.title': '收录',
      'road.cex.a': '行情网站收录',
      'road.cex.b': '与交易所沟通',
      'road.cex.c': '更广的 Solana 曝光',
      'road.cex.d': '新社区，同一块牌子',
      'road.defi.title': '俯冲之后',
      'road.defi.a': '迷因站稳后再发布新路线图',
      'road.defi.b': '只有持有者需要时才做社区工具',
      'road.defi.c': '始终迷因为先',
      'road.defi.d': '没交付的功能不做承诺',
      'sections.faq': '常见问题',
      'faq.what.q': '什么是 Fraudulent Tesla Roadster？',
      'faq.what.a': '$FTR 是 Solana 上的迷因代币，讲的是一辆用胶带粘住、挂着 100% legit 纸板的卡通跑车。',
      'faq.chain.q': '$FTR 在哪条链上？',
      'faq.chain.a': 'Solana。',
      'faq.buy.q': '如何购买 $FTR？',
      'faq.buy.a': '使用 Phantom 或 Solflare 等 Solana 钱包，核对铸币地址，再通过 Jupiter 或官方路径用 SOL 兑换。',
      'faq.safe.q': '$FTR 是安全投资吗？',
      'faq.safe.a': '加密资产有风险。请自行研究，不要投入超过自己承受能力的资金。',
      'faq.contract.q': '在哪里查看铸币地址？',
      'faq.contract.a': '官方铸币地址显示在首页和页脚。交易前请始终核对。',
      'faq.fortune.q': '为什么是纸板？',
      'faq.fortune.a': '因为车上写着 100% legit。牌子是玩笑，胶带是玩笑的另一半。',
      'faq.abundance.q': '这是一辆真车吗？',
      'faq.abundance.a': '不是。它是一张画，也是一个迷因。没有车辆，没有交付日期，挡风玻璃后面也没有公司。',
      'faq.reward.q': 'SOL 奖励如何对应？',
      'faq.reward.a': '3/3 税费流向持有者的 SOL 奖励。这是简单的迷因机制，不是收益承诺。',
      'sections.contact': '联系',
      'contact.title': '飞行记录在 X 上。',
      'footer.rights': '© 2026 FRAUDULENT TESLA ROADSTER. 版权所有。',
      'footer.made': '由胶带小队用 ❤️ 打造',
      'footer.contract': '铸币地址：'
    }
  };

  let currentLang = 'en';

  const applyLanguage = (lang) => {
    currentLang = translations[lang] ? lang : 'en';
    const dict = translations[currentLang];

    document.documentElement.lang = currentLang === 'cn' ? 'zh-CN' : 'en';
    document.body.dataset.lang = currentLang;
    document.title = dict.__title || translations.en.__title;

    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) metaDescription.setAttribute('content', dict.__description || translations.en.__description);

    document.querySelectorAll('[data-i18n]').forEach((el) => {
      const key = el.getAttribute('data-i18n');
      if (dict[key] !== undefined) el.textContent = dict[key];
    });

    document.querySelectorAll('[data-i18n-html]').forEach((el) => {
      const key = el.getAttribute('data-i18n-html');
      if (dict[key] !== undefined) el.innerHTML = dict[key];
    });

    document.querySelectorAll('[data-language-toggle]').forEach((btn) => {
      btn.textContent = 'EN / CN';
      btn.setAttribute('aria-label', currentLang === 'en' ? 'Switch to Chinese' : 'Switch to English');
      btn.dataset.activeLang = currentLang;
    });

    localStorage.setItem('ftrLanguage', currentLang);
  };

  document.querySelectorAll('[data-link]').forEach(el => {
    const key = el.getAttribute('data-link');
    el.href = config[key] || '#';
  });
  document.querySelectorAll('[data-text="contract"]').forEach(el => el.textContent = config.contractAddress || 'Coming Soon');

  document.querySelectorAll('[data-language-toggle]').forEach((btn) => {
    btn.addEventListener('click', () => {
      applyLanguage(currentLang === 'en' ? 'cn' : 'en');
    });
  });

  const initialLang = localStorage.getItem('ftrLanguage') === 'cn' ? 'cn' : 'en';
  applyLanguage(initialLang);

  document.querySelectorAll('[data-copy-contract]').forEach(btn => {
    btn.addEventListener('click', async () => {
      const value = config.contractAddress || '';
      try {
        await navigator.clipboard.writeText(value);
        btn.textContent = translations[currentLang]['actions.copied'];
        setTimeout(() => { btn.textContent = translations[currentLang]['actions.copy']; }, 1200);
      } catch (e) {
        btn.textContent = translations[currentLang]['actions.copyFailed'];
        setTimeout(() => { btn.textContent = translations[currentLang]['actions.copy']; }, 1200);
      }
    });
  });

  const revealItems = document.querySelectorAll('.reveal');
  const io = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('show');
        io.unobserve(entry.target);
      }
    });
  }, { threshold: .14 });
  revealItems.forEach(el => io.observe(el));
})();
