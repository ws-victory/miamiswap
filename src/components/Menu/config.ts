import { MenuEntry } from '@pancakeswap/uikit'
import { ContextApi } from 'contexts/Localization/types'

const config: (t: ContextApi['t']) => MenuEntry[] = (t) => [
  {
    label: t('Home'),
    icon: 'HomeIcon',
    href: '/',
  },
  {
    label: t('Trade'),
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
    ],
  },
  {
    label: t('Farms'),
    icon: 'FarmIcon',
    href: '/farms',
  },
  {
    label: t('Staking'),
    icon: 'PoolIcon',
    href: '/pools',
  },
  {
    label: t('Referral'),
    icon: 'GroupsIcon',
    href: '/referral',
  },
  {
    label: 'Games',
    icon: 'PredictionsIcon',
    href: '/games',
  },
  {
    label: 'NFT',
    icon: 'NftIcon',
    href: '/nft',
  },
  {
    label: 'Join',
    icon: 'IfoIcon',
    items: [
      {
        label: 'Telegram',
        href: 'https://t.me/miamitoken',
      },
      {
        label: 'Youtube',
        href: 'https://www.youtube.com/channel/UC3Bv3IjT5wYskKuM1Klty8w',
      },
      {
        label: 'Reddit',
        href: 'https://www.reddit.com/r/Miamitoken/',
      },
      {
        label: 'Instagram',
        href: 'https://www.instagram.com/miami_token/',
      },
      {
        label: 'Tiktok',
        href: 'https://www.tiktok.com/@miami_token?lang=en',
      },
      {
        label: 'Facebook',
        href: 'https://www.facebook.com/profile.php?id=100063735194701',
      },
      {
        label: 'Discord',
        href: 'https://discord.gg/9S8ZDUug',
      },
      {
        label: 'Twitter',
        href: 'https://twitter.com/miami_Token_',
      },
    ],
  },
  {
    label: 'Charts',
    icon: 'InfoIcon',
    items: [
      {
        label: 'Dextools',
        href: 'https://www.dextools.io/app/bsc/pair-explorer/0xac2de434932c0d247ba97ac3254a5638b00afa56',
      },
      {
        label: 'Poocoin',
        href: 'https://poocoin.app/tokens/0x5417f8559ee78f0e77589109d605246c89dd01c9',
      },
    ],
  },
  {
    label: 'More',
    icon: 'MoreIcon',
    items: [
      {
        label: 'GitHub',
        href: 'https://github.com/miamitoken',
      },
      {
        label: 'Doc(EN)',
        href: 'https://documentcloud.adobe.com/link/track?uri=urn:aaid:scds:US:5c3183e0-4d9a-48bf-be8d-7447999ccc13',
      },
      {
        label: 'Doc(ES)',
        href: 'https://documentcloud.adobe.com/link/track?uri=urn:aaid:scds:US:fd65c188-08dd-4de7-9217-5a1ca307ab97',
      },
     
    ],
  },
  {
    label: 'Join Our Farm',
    icon: 'TeamBattleIcon',
    href: 'https://docs.google.com/forms/d/e/1FAIpQLSerA87JRjIwbqIBP7OqmD-b3E0pawIRbQ9dc74Lcuf6TbzqHA/viewform',
  }
]

export default config
