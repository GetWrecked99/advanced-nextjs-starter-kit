import { type ReactNode } from 'react'
import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { unstable_setRequestLocale } from 'next-intl/server'

import { QueryParamProvider, TanstackQueryProvider } from '@partials/providers'

import { inter } from '@core/configs/fonts'
import { LOCALES } from '@core/configs/i18n'
import { type TLocalesType } from '@core/configs/i18n'

import '@styles/globals.css'

export const metadata: Metadata = {
    title: 'Advanced Next.js Starter Kit',
    description: 'Generated by GetWrecked'
}

interface IRootLayoutProps {
    children: ReactNode
    params: { locale: TLocalesType }
}

export const generateStaticParams = () => LOCALES.map((locale) => ({ locale }))

const RootLayout = ({ children, params: { locale } }: IRootLayoutProps) => {
    unstable_setRequestLocale(locale)

    if (!LOCALES.includes(locale)) notFound()

    return (
        <html lang={locale}>
            <body className={inter.className}>
                <TanstackQueryProvider>
                    <QueryParamProvider>{children}</QueryParamProvider>
                </TanstackQueryProvider>
            </body>
        </html>
    )
}

export default RootLayout
