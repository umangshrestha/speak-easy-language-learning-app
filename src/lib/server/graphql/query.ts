import { LocaleTypes, QueryResolvers } from './types';

export default {
  locale: (_, args) => {
    const code = args.code;
    const locales: Record<string, string> = {
      en: 'English',
      ml: 'Malayalam',
      np: 'Nepali',
    } as const;
    if (!locales[code]) return null;

    return {
      code,
      name: locales[code],
    };
  },
  translation: (_, args) => {
    const translations: Record<LocaleTypes, string> = {
      en: 'Mother',
      ml: 'അമ്മ',
      np: 'आमा',
    } as const;
    const phonetics: Record<LocaleTypes, string> = {
      en: 'Muh-thur',
      ml: 'Am-ma',
      np: 'Aa-maa',
    } as const;
    return {
      id: args.id,
      word: translations[args.from],
      translation: translations[args.to],
      phonetic: phonetics[args.to],
      description: '',
    };
  },
} as QueryResolvers;
