import { LocaleTypes, Resolvers } from './__generated__/types';
import Query from './query';

export default {
  Query,
  Locale: {
    name: (parent, { code }) => {
      const names: Record<LocaleTypes, string> = {
        en: 'English',
        ml: 'Malayalam',
        np: 'Nepali',
      } as const;
      console.log(parent, code);
      return names[code || parent.code];
    },
  },
} satisfies Resolvers;
