export enum ConnectorNames {
    MetaMask = 'metaMask',
    Injected = 'injected',
    WalletConnect = 'walletConnect',
    WalletLink = 'coinbaseWallet'
}

export const CELER_API = 'https://api.celerscan.com/scan'

export const TokenImage: Record<string, string> = {
    eth: 'https://tokens.pancakeswap.finance/images/symbol/eth.png',
    weth: 'https://tokens.pancakeswap.finance/images/symbol/weth.png',
    wbtc: 'https://tokens.pancakeswap.finance/images/symbol/wbtc.png',
    matic: 'https://s2.coinmarketcap.com/static/img/coins/64x64/3890.png',
    xtoken: './assets/images/logo.png',
    b2z: './assets/images/b2z.png'
}
