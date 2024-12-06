import { routing } from "@/i18n/routing";
import { Globe } from "lucide-react";
import { useLocale } from "next-intl";
import LocaleSwitcherSelect from "./LocaleSwitcherSelect";

export default function LocaleSwitcher() {
  const locale = useLocale();

  return (
    <div className='flex items-center gap-2'>
      <Globe className='h-6 w-6 text-muted-foreground text-white' />
      <LocaleSwitcherSelect defaultValue={locale} label='Select a locale' >
        {routing.locales.map((cur) => (
          <option key={cur} value={cur} >
            {cur}
          </option>
        ))}
      </LocaleSwitcherSelect>
    </div>
  );
}
