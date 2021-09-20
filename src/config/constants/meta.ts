import { ContextApi } from 'contexts/LocalizationContext/types';
import { PageMeta } from './types';

export const DEFAULT_META: PageMeta = {
  title: 'Zeni Protocol',
  description: 'Bitcoin-centric DeFi HUB',
  image: '/img/zeni-192x192.png'
};

export const getCustomMeta = (path: string, t: ContextApi['t']): PageMeta => {
  switch (path) {
    case '/':
      return {
        title: `${t('Zeni Protocol')} | ${t('Bitcoin-centric DeFi HUB')}`
      };
    default:
      return null;
  }
};
