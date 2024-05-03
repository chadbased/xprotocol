import { Chain } from 'wagmi'
import memoize from 'lodash/memoize'
import invert from 'lodash/invert'

export enum ChainId {

    SCROLL = 5
}

export const CHAIN_QUERY_NAME = {

    [ChainId.SCROLL]: 'scroll'

} as Record<ChainId, string>

const CHAIN_QUERY_NAME_TO_ID = invert(CHAIN_QUERY_NAME)

export const getChainId = memoize((chainName: string) => {
    if (!chainName) return undefined
    return CHAIN_QUERY_NAME_TO_ID[chainName] ? +CHAIN_QUERY_NAME_TO_ID[chainName] : undefined
})

export const DEFAULT_CHAIN_ID = 5
export const DEFAULT_PROVIDER = 'https://goerli.infura.io/v3/27345b7aeb16430bbd8c838ea8dacc91'



export const scroll: Chain = {
    id: 5,
    name: 'Scroll Alpha Testnet',
    network: 'scroll',
    nativeCurrency: {
        decimals: 18,
        name: 'ETH',
        symbol: 'ETH',  
    },
    rpcUrls: {
        public: { http: ['https://scroll-testnet.blockpi.network/v1/rpc/public'] },
        default: { http: ['https://scroll-testnet.blockpi.network/v1/rpc/public'] },
    },
    blockExplorers: {
        default: { name: 'Scroll', url: 'https://alpha-blockscout.scroll.io/' },
    },
    testnet: true,
}

