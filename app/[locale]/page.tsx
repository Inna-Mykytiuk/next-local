import { getTranslations } from 'next-intl/server';

export default async function HomePage() {
  const t = await getTranslations('HomePage');
  return (
    <section className='w-full pt-10'>
      <div className='container'>
        <h1 className='text-2xl font-bold uppercase text-center'>{t('title')}</h1>
      </div>
    </section>
  );
}