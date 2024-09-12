import { LocaleTypes, QueryResolvers } from './__generated__/types';

export default {
  locale: (_, args) => {
    const code = args.code;
    return {
      code,
      name: '',
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
} satisfies QueryResolvers;
