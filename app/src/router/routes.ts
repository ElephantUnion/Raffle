const adminNs = '/admin_panel';

const adminRoutes = {
  HOME: `${adminNs}/`,
  RAFFLES: `${adminNs}/raffles`,
};

const routes = {
  HOME: '/#',
  RAFFLES: '/',
  STAKE: '/stake',
  MARKET: '/marketplace',
  AUCTION: '/auction',
  TOOLS: '/tools',
  ADMIN: adminRoutes,
  WHITELIST_RAFFLE: 'https://market.kiddoslabs.io/raffle',
  STAKING: 'https://delysidkiddos.stakooor.app/',
  UNION: 'https://union.kiddoslabs.io/',
};

export { routes };
