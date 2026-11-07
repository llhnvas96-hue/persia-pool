/* PersiaPool wallet database.
   Edit this file to add/change wallets, then commit — the site updates in ~1 minute.
   Fields:
     hashrate    : number, in H/s (12500 = 12.50 kH/s)
     workers     : number of mining rigs
     balanceXmr  : unpaid balance shown on the dashboard
     totalPaidXmr: total paid out shown on the dashboard
     label       : optional note (not shown publicly) */
window.WALLET_DATA = {
  "4PersiaDemoWalletAddress00000000000000000000000000000000000000000000000000000000000000000001": {
    hashrate: 12500, workers: 4, balanceXmr: 1.2847, totalPaidXmr: 24.1930, label: "demo-rig-1"
  },
  "8PersiaDemoWalletAddress00000000000000000000000000000000000000000000000000000000000000000002": {
    hashrate: 6200, workers: 2, balanceXmr: 0.4121, totalPaidXmr: 8.5530, label: "demo-rig-2"
  }
};
