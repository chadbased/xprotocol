import { ERC20Token } from "@/utils/token";
import { ChainId } from "./chains";

export const PINNED_TOKENS_SCROLL = {

    weth: new ERC20Token(
        ChainId.SCROLL,
        '0x5d2FDbfB1CCe5F1Ed2ABf95D15fD71083a327d33',
        18,
        'WETH',
        'Wrapped Ether',
        'https://tokens.pancakeswap.finance/images/symbol/weth.png'
    ),
    wbtc: new ERC20Token(
        ChainId.SCROLL,
        '0x1E8520232500de66438029B28F4627990B58B86A',
        18,
        'WBTC',
        'Wrapped BTC',
        'https://tokens.pancakeswap.finance/images/symbol/wbtc.png'
    ),
    usdt: new ERC20Token(
        ChainId.SCROLL,
        '0xAf3bf9495ccAe5b3EA2A40A43164a4eCaFBD72Bc',
        18,
        'USDT',
        'Tether USD',
        'https://tokens.pancakeswap.finance/images/symbol/usdt.png'
    ),
    xtoken: new ERC20Token(
        ChainId.SCROLL,
        '0x08689475Eee20c12252621F37E46c6841F20Cd56',
        18,
        'X',
        'X Token',
        'https://i.imgur.com/BPImZcM.png'
    )
}