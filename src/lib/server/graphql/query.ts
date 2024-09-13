import { QueryResolvers } from './__generated__/types';

export default {
  locale: (_, { code }, { dataSource }) => {
    return dataSource.findOneLocale(code);
  },
  locales: (_, __, { dataSource }) => {
    return dataSource.findManyLocales();
  },
  translation: (_, { id, from, to }, { dataSource }) => {
    return dataSource.findOneTranslation(id, from, to);
  },
  translations: (_, { from, to }, { dataSource }) => {
    return dataSource.findManyTranslations(from, to);
  },
} satisfies QueryResolvers;
