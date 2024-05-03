import JSBI from 'jsbi'
import { Percent } from '@/utils/percent'
import { Token } from '@/utils/token'
import { ChainId } from './chains'
import { ChainMap, ChainTokenList } from './types'
import { PINNED_TOKENS_SCROLL } from './tokens'


export const EXCHANGE_PAGE_PATHS = ['/swap', '/limit-orders', 'liquidity', '/add', '/find', '/remove']

export const BIG_INT_ZERO = JSBI.BigInt(0)
export const BIG_INT_TEN = JSBI.BigInt(10)
export const MIN_BNB: JSBI = JSBI.exponentiate(BIG_INT_TEN, JSBI.BigInt(16)) // .01 BNB

// one basis point
export const BIPS_BASE = JSBI.BigInt(10000)
export const ONE_BIPS = new Percent(JSBI.BigInt(1), BIPS_BASE)
// used for warning states
export const ALLOWED_PRICE_IMPACT_LOW: Percent = new Percent(JSBI.BigInt(100), BIPS_BASE) // 1%
export const ALLOWED_PRICE_IMPACT_MEDIUM: Percent = new Percent(JSBI.BigInt(300), BIPS_BASE) // 3%
export const ALLOWED_PRICE_IMPACT_HIGH: Percent = new Percent(JSBI.BigInt(500), BIPS_BASE) // 5%
// if the price slippage exceeds this number, force the user to type 'confirm' to execute
export const PRICE_IMPACT_WITHOUT_FEE_CONFIRM_MIN: Percent = new Percent(JSBI.BigInt(1000), BIPS_BASE) // 10%
// for non expert mode disable swaps above this
export const BLOCKED_PRICE_IMPACT_NON_EXPERT: Percent = new Percent(JSBI.BigInt(1500), BIPS_BASE) // 15%

export const BLOCKED_PRICE_IMPACT: Percent = new Percent(JSBI.BigInt(5000), BIPS_BASE)

// used to ensure the user doesn't send so much BNB so they end up with <.01

export const BETTER_TRADE_LESS_HOPS_THRESHOLD = new Percent(JSBI.BigInt(50), BIPS_BASE)

export const ZERO_PERCENT = new Percent('0')
export const ONE_HUNDRED_PERCENT = new Percent('1')

export const BASE_FEE = new Percent(JSBI.BigInt(25), BIPS_BASE)
export const INPUT_FRACTION_AFTER_FEE = ONE_HUNDRED_PERCENT.subtract(BASE_FEE)


export const ROUTER_ADDRESS: ChainMap<string> = {

    //[ChainId.SCROLL]: '0xC828e1DF020F306fec8B30a20691a943C4066E18',
    //[ChainId.SCROLL]: '0x71a5CABE7Eed551d0c163b9144BDbB58125c4675',
    [ChainId.SCROLL]: '0x6416BBb88F24568A2Cfe41B971406081b1f4F9c4',
}

export const BASES_TO_TRACK_LIQUIDITY_FOR: ChainTokenList = {

    [ChainId.SCROLL]: [PINNED_TOKENS_SCROLL.weth],
    
}

/**
 * Some tokens can only be swapped via certain pairs, so we override the list of bases that are considered for these
 * tokens.
 * @example [AMPL.address]: [DAI, WNATIVE[ChainId.BSC]]
 */
export const CUSTOM_BASES: { [chainId in ChainId]?: { [tokenAddress: string]: Token[] } } = {

    [ChainId.SCROLL]: {},
  
}

export const INIT_CODE_HASH = '0xe217ff914ecb4849d0612c5988c1ed65d4921f2da6b8eb5227218a3154a64553'
export const INIT_CODE_HASH_MAP: Record<number, string> = {

    [ChainId.SCROLL]: INIT_CODE_HASH,
 
}


export const FACTORY_ADDRESS_MAP: Record<number, string> = {

    [ChainId.SCROLL]: '0xA0474d9D8d4AD5456DA5930002b8fCE059916a3C',

}


export const PINNED_PAIRS: { readonly [chainId in ChainId]?: [Token, Token][] } = {

    [ChainId.SCROLL]: [[PINNED_TOKENS_SCROLL.xtoken, PINNED_TOKENS_SCROLL.usdt]],

 
}




