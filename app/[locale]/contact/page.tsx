import { getTranslations } from 'next-intl/server';
import { ContactForm } from "@/components/ContactForm";

export default async function ContactPage() {
  const t = await getTranslations('common');

  return (
    <section className='w-full pt-10'>
      <div className='container'>
        <h1 className='relative z-40 text-2xl font-bold uppercase text-center text-white'>{t('contactFormTitle')}</h1>
        <ContactForm />
      </div>
    </section>
  );
}

