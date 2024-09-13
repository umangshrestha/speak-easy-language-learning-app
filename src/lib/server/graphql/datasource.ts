import { PATH_TO_CONTENT } from '@/config/config';
import fs from 'fs';
import path from 'path';
import { Locale, LocaleType, Translation } from './__generated__/types';

const LOCALE_FILE = path.join(PATH_TO_CONTENT, 'locales.json');
const DATA_FILE = path.join(PATH_TO_CONTENT, 'data.json');

interface Data {
  id: string;
  word: Record<LocaleType, string>;
  name: Record<LocaleType, string>;
  phonetic: Record<LocaleType, Record<LocaleType, string>>;
}

const LOCALES = {} as Record<LocaleType, Locale>;
const WORDS = {} as Record<string, Data>;

fs.readFile(LOCALE_FILE, 'utf8', (err, data) => {
  if (err) {
    console.error(err);
    process.exit(1);
  }
  const parsedData: Record<LocaleType, Omit<Locale, 'code'>> = JSON.parse(data);
  for (const [key, value] of Object.entries(parsedData)) {
    LOCALES[key as LocaleType] = { ...value, code: key as LocaleType };
  }
});

fs.readFile(DATA_FILE, 'utf8', (err, data) => {
  if (err) {
    console.error(err);
    process.exit(1);
  }
  const parsedData: Record<string, Omit<Data, 'id'>> = JSON.parse(data);
  for (const [key, value] of Object.entries(parsedData)) {
    WORDS[key] = { ...value, id: key };
  }
});

export default class DataSource {
  static findOneLocale(code: LocaleType) {
    return LOCALES[code as LocaleType];
  }

  static findManyLocales(): Locale[] {
    return Object.values(LOCALES);
  }

  static findManyTranslations(from: LocaleType, to: LocaleType): Translation[] {
    return Object.values(WORDS).map((word) => ({
      id: word.id,
      word: word.word[from],
      translation: word.word[to],
      phonetic: word.phonetic[to][from],
    }));
  }
  static findOneTranslation(
    id: string,
    from: LocaleType,
    to: LocaleType,
  ): Translation {
    const word = WORDS[id];
    return {
      id: word.id,
      word: word.word[from],
      translation: word.word[to],
      phonetic: word.phonetic[to][from],
    };
  }
}
