import React from 'react'
import { getTranslations } from 'next-intl/server';

export default async function Categories() {
  const t = await getTranslations('common');
  return (
    <>
      <div className="flex min-h-screen flex-col items-center justify-between p-24">
        <h1 className="text-2xl font-bold">{t("categories")}</h1>
      </div>
    </>
  )
}