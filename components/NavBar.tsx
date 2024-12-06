import LocaleSwitcher from "./LocaleSwitcher";
import Link from "next/link";
import { Link as RoutingLink } from '@/i18n/routing';
import { getTranslations } from 'next-intl/server';

export default async function NavBar() {
  const t = await getTranslations('HomePage');

  return (
    <header className="w-full py-6 bg-[#555353] shadow-shadow ">
      <div className='container flex justify-between items-center'>
        <Link href='/' className='text-white text-2xl font-bold uppercase text-center'>Home</Link>
        <RoutingLink href='/contact' className='text-white text-xl text-center'>{t("contact")}</RoutingLink>
        <LocaleSwitcher />
      </div>
    </header>
  );
}
