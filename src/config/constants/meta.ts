import { ContextApi } from 'contexts/Localization/types'
import { PageMeta } from './types'

export const DEFAULT_META: PageMeta = {
  title: 'Miami Finance',
  description:
    'The most popular AMM on BSC by user count! Earn MIA through yield farming or win it in the Lottery, then stake it in Syrup Pools to earn more tokens! Initial Farm Offerings (new token launch model pioneered by MIA), NFTs, and more, on a platform you can trust.',
  image: 'https://miamiswap.finance/images/hero.png',
}

export const getCustomMeta = (path: string, t: ContextApi['t']): PageMeta => {
  switch (path) {
    case '/':
      return {
        title: `${t('Home')} | ${t('Miami Finance')}`,
      }
    case '/games':
      return {
        title: `${t('Games')} | ${t('Miami Finance')}`,
      }
    case '/prediction':
      return {
        title: `${t('Prediction')} | ${t('Miami Finance')}`,
      }
    case '/farms':
      return {
        title: `${t('Farms')} | ${t('Miami Finance')}`,
      }
    case '/pools':
      return {
        title: `${t('Staking')} | ${t('Miami Finance')}`,
      }
    case '/lottery':
      return {
        title: `${t('Lottery')} | ${t('Miami Finance')}`,
      }
    case '/collectibles':
      return {
        title: `${t('Collectibles')} | ${t('Miami Finance')}`,
      }
    case '/ifo':
      return {
        title: `${t('Initial Farm Offering')} | ${t('Miami Finance')}`,
      }
    case '/referral':
      return {
        title: `${t('Referral')} | ${t('Miami Finance')}`,
      }
    case '/profile/tasks':
      return {
        title: `${t('Task Center')} | ${t('Miami Finance')}`,
      }
    case '/nft':
      return {
        title: `${t('NFT')} | ${t('Miami Finance')}`,
      }
    default:
      return null
  }
}
