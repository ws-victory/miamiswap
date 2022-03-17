import tokens from './tokens'
import { FarmConfig } from './types'

const farms: FarmConfig[] = [
  {
    pid: 0,
    lpSymbol: 'MIA',
    isTokenOnly: true,
    lpAddresses: {
      97: '',
      56: '0xAc2de434932C0D247ba97Ac3254A5638b00afA56',
    },
    token: tokens.mia,
    quoteToken: tokens.usdt,
  },
  {
    pid: 1,
    lpSymbol: 'MIA-BUSD LP',
    lpAddresses: {
      97: '',
      56: '0xe74795013Ab3E3a83a96c5eb1c600D231179d674',
    },
    token: tokens.mia,
    quoteToken: tokens.busd,
  },
  {
    pid: 2,
    lpSymbol: 'MIA-BNB LP',
    lpAddresses: {
      97: '',
      56: '0x466855ce6994E895a7a0882EA31058e759391Dd5',
    },
    token: tokens.mia,
    quoteToken: tokens.wbnb,
  },
  {
    pid: 3,
    lpSymbol: 'MIA-USDT LP',
    lpAddresses: {
      97: '',
      56: '0xAc2de434932C0D247ba97Ac3254A5638b00afA56',
    },
    token: tokens.mia,
    quoteToken: tokens.usdt,
  },
  {
    pid: 4,
    lpSymbol: 'BUSD-BNB LP',
    lpAddresses: {
      97: '',
      56: '0x58F876857a02D6762E0101bb5C46A8c1ED44Dc16',
    },
    token: tokens.busd,
    quoteToken: tokens.wbnb,
  },
]

export default farms
