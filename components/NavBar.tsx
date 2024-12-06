import LocaleSwitcher from "./LocaleSwitcher";
import Link from "next/link";
import { Link as RoutingLink } from '@/i18n/routing';
import { getTranslations } from 'next-intl/server';

export default async function NavBar() {
  const t = await getTranslations('HomePage');

  return (
    <header className="w-full py-4 bg-slate-500 shadow-shadow relative z-30">
      <div className='container flex justify-between items-center'>
        <Link href='/' className='text-white text-2xl font-bold uppercase text-center'>Home</Link>
        <RoutingLink href='/contact' className='text-white text-xl text-center'>{t("contact")}</RoutingLink>
        <LocaleSwitcher />
      </div>
    </header>
  );
}
