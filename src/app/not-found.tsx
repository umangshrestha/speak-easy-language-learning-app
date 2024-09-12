import { NOT_FOUND_IMAGE } from '@/config/config';
import { useTranslations } from 'next-intl';
import Image from 'next/image';

export default function NotFound() {
  const t = useTranslations('404');

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
         <h1>{t('title')}</h1>
         <p>{t('description')}</p>
        <Image src={NOT_FOUND_IMAGE} alt="404" width={400} height={400} />
      </main>
    </div>
  );
}
