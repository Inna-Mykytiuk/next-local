import { getTranslations } from 'next-intl/server';

export default async function HomePage() {
  const t = await getTranslations('contactForm');

  return (
    <section className='w-full pt-10'>
      <div className='container'>
        <h1 className='relative z-40 text-2xl font-bold uppercase text-center text-white'>{t('name')}</h1>
      </div>
    </section>
  );
}