import { MenuEntry, menuStatus } from '@pancakeswap/uikit'
import { ContextApi } from 'contexts/Localization/types'

const config: (t: ContextApi['t']) => MenuEntry[] = (t) => [
  {
    label: t('Home'),
    icon: 'HomeIcon',
    href: '/',
  },
  {
    label: t('Swap'),
    icon: 'TradeIcon',
    items: [
      {
        label: t('Exchange'),
        href: '/swap',
      },
      {
        label: t('Liquidity'),
        href: '/liquidity',
      },
      // {
      //   label: t('LP Migration'),
      //   href: 'https://v1exchange.pancakeswap.finance/#/migrate',
      // },
    ],
  },
  {
    label: t('Farms'),
    icon: 'FarmIcon',
    href: '/farms',
    // status: menuStatus.SOON
  },
  {
    label: t('Pools'),
    icon: 'PoolIcon',
    href: '/pools',
    // status: menuStatus.SOON
  },
  // {
  //   label: t('Juicy (soon)'),
  //   icon: 'PredictionsIcon',
  //   href: '/juicy',
  // },
  // {
  //   label: t('IGO (soon)'),
  //   icon: 'GroupsIcon',
  //   href: '/igo',
  // },
  // {
  //   label: t('Lottery'),
  //   icon: 'TicketIcon',
  //   href: '/lottery',
  // },
  // {
  //   label: t('Bash Stake(soon)'),
  //   icon: 'NftIcon',
  //   href: '',
  // },
  // {
  //   label: t('Bash Store(soon)'),
  //   icon: 'TeamBattleIcon',
  //   href: '',
  // },
  
  // {
  //   label: t('Merch (soon)'),
  //   icon: 'InfoIcon',
  //   href: '/merch',
  // },
  // {
  //   label: t('LaunchPad'),
  //   icon: 'IfoIcon',
  //   href: '/launchpad',
  // },
  // {
  //   label: t('KYC'),
  //   icon: 'KycIcon',
  //   href: 'https://nanem.club/ns22f56bp',
  // },
  // {
  //   label: t('Doxxed Team'),
  //   icon: 'TeamIcon',
  //   href: 'https://ipfs.io/ipfs/QmThQBvQeekRhL73pZPRFb5iLbong7PvuQG9LP29TsZJYh',
  // },
  // {
  //   label: t('BNB stake'),
  //   icon: 'StakeIcon',
  //   href: 'https://bnbstake.bashprotocol.com/',
  //   // status: menuStatus.SOON
  // },
  // {
  //   label: t('Bash Titano'),
  //   icon: 'NftIcon',
  //   href: '/shop',
  //   status: menuStatus.SOON
  // },
  // {
  //   label: t('Bash Fantasm'),
  //   icon: 'InfoIcon',
  //   href: '/Info',
  //   status: menuStatus.SOON
  // },
  // {
  //   label: t('Stats'),
  //   icon: 'NftIcon',
  //   href: '/Stats',
  //   status: menuStatus.SOON
  // },
  // {
  //   label: t('Info'),
  //   icon: 'InfoIcon',
  //   href: '/Info',
  //   status: menuStatus.SOON
  // },
  // {
  //   label: t('More'),
  //   icon: 'MoreIcon',
  //   items: [
  //     // {
  //     //   label: t('Contact'),
  //     //   href: 'https://docs.pancakeswap.finance/contact-us',
  //     // },
  //     // {
  //     //   label: t('Voting'),
  //     //   href: '/voting',
  //     // },
  //     {
  //       label: t('Github'),
  //       href: 'https://github.com/bashprotocol',
  //     },
  //     {
  //       label: t('Docs'),
  //       href: 'https://bash-protocol.gitbook.io/bash-protocol-docs/',
  //     },
  //     {
  //       label: t('Audit'),
  //       href: '#',
  //     },
  //     // {
  //     //   label: t('Merch'),
  //     //   href: 'https://pancakeswap.creator-spring.com/',
  //     // },
  //   ],
  // },
  
]

export default config
