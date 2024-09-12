import { getRequestConfig } from 'next-intl/server';
import { getUserLocale } from './service';
import path from 'path';
import fs from 'fs';

export default getRequestConfig(async () => {
  const locale = getUserLocale();
  const fullPath = path.join(
    process.cwd(),
    'public',
    `/locales/${locale}/common.json`,
  );
  const messages = JSON.parse(fs.readFileSync(fullPath, 'utf8'));
  return {
    locale,
    messages,
  };
});
