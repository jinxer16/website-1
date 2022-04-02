import tokens from './tokens'
import { FarmConfig } from './types'

const farms: FarmConfig[] = [
  {
    pid: 0,
    lpSymbol: 'PAPPLE',
    isTokenOnly: true,
    lpAddresses: {
      200101: '0x0ADC86ee9bE178F490833b6A904D2A731662C4bf',
      56: '0x3fba787e48a1f4c2a1ec04702aa3fe2162704e67', /* 0x3e76bd1edb5f6d981dd14d9d2ab711f0c2a0a6a0 */
    },
    token: tokens.papple,
    quoteToken: tokens.busd,
  },
  {
    pid: 1,
    lpSymbol: 'PAPPLE-ADA LP',
    lpAddresses: {
      200101: '0x48f00ec3ec5ad370de07480879ae5d3ab7fa3ebf',
      56: '',
    },
    token: tokens.papple,
    quoteToken: tokens.wbnb,
  },
  {
    pid: 2,
    lpSymbol: 'DAI-ADA LP',
    lpAddresses: {
      200101: '0xa021a60250a7d5af3941542927a154bafdde2393',
      56: '0x58f876857a02d6762e0101bb5c46a8c1ed44dc16',
    },
    quoteToken: tokens.wbnb,
    token: tokens.busd,
  },
  {
    pid: 3,
    lpSymbol: 'PAPPLE-DAI LP',
    lpAddresses: {
      200101: '0x0ADC86ee9bE178F490833b6A904D2A731662C4bf',
      56: '',
    },
    token: tokens.papple,
    quoteToken: tokens.busd,
  },
  {
    pid: 4,
    lpSymbol: 'WADA',
    isTokenOnly: true,
    lpAddresses: {
      200101: '0xa021a60250a7d5af3941542927a154bafdde2393',
      56: '0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c', /* 0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c */
    },
    token: tokens.wbnb,
    quoteToken: tokens.busd,
  },
  {
    pid: 5,
    lpSymbol: 'DAI',
    isTokenOnly: true,
    lpAddresses: {
      200101: '0xf8B13C34A1c8b8a3207e55d00bc947212949C6AC',
      56: '0xe9e7CEA3DedcA5984780Bafc599bD69ADd087D56',
    },
    token: tokens.busd,
    quoteToken: tokens.busd,
  },

]

export default farms
