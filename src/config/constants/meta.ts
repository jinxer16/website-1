import { ContextApi } from 'contexts/Localization/types'
import { PageMeta } from './types'

export const DEFAULT_META: PageMeta = {
  title: 'PINEAPPLE',
  description:
    'The most popular AMM on BSC by user count! Earn CHY through yield farming or win it in the Lottery, then stake it in Syrup Pools to earn more tokens on a platform you can trust.',
  image: 'http://bashprotocol.com/images/hero.png',
}

export const getCustomMeta = (path: string, t: ContextApi['t']): PageMeta => {
  switch (path) {
    case '/':
      return {
        title: `${t('Home')} | ${t('PINEAPPLE')}`,
      }
    case '/competition':
      return {
        title: `${t('Trading Battle')} | ${t('PINEAPPLE')}`,
      }
    case '/prediction':
      return {
        title: `${t('Prediction')} | ${t('PINEAPPLE')}`,
      }
    case '/farms':
      return {
        title: `${t('Farms')} | ${t('PINEAPPLE')}`,
      }
    case '/pools':
      return {
        title: `${t('Pools')} | ${t('PINEAPPLE')}`,
      }
    case '/lottery':
      return {
        title: `${t('Lottery')} | ${t('PINEAPPLE')}`,
      }
    case '/collectibles':
      return {
        title: `${t('Collectibles')} | ${t('PINEAPPLE')}`,
      }
    case '/ifo':
      return {
        title: `${t('Initial Farm Offering')} | ${t('PINEAPPLE')}`,
      }
    case '/teams':
      return {
        title: `${t('Leaderboard')} | ${t('PINEAPPLE')}`,
      }
    case '/profile/tasks':
      return {
        title: `${t('Task Center')} | ${t('PINEAPPLE')}`,
      }
    case '/profile':
      return {
        title: `${t('Your Profile')} | ${t('PINEAPPLE')}`,
      }
    default:
      return null
  }
}
