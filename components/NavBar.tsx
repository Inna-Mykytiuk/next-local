import LocaleSwitcher from "./LocaleSwitcher";
import Link from "next/link";
import { getTranslations } from 'next-intl/server';

export default async function NavBar() {
  const t = await getTranslations('common');

  return (
    <header className="w-full py-4 bg-slate-500 shadow-shadow relative z-30">
      <div className='container flex justify-between items-center'>
        <Link href='/' className='text-white text-2xl font-bold uppercase text-center'>{t("homeLink")}</Link>
        <Link href='/contact' className='text-white text-xl text-center'>{t("contact")}</Link>
        <Link href='/categories' className='text-white text-xl text-center'>{t("categories")}</Link>
        <LocaleSwitcher />
      </div>
    </header>
  );
}
