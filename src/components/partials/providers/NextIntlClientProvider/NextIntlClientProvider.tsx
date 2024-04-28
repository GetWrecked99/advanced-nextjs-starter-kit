'use client'

import { NextIntlClientProvider as Provider } from 'next-intl'

import { type INextIntlClientProviderProps } from './resources'

const NextIntlClientProvider = ({ children, locale, messages }: INextIntlClientProviderProps) => {
    /**
     * @Author: Get Wrecked
     * @Date: 2024-04-28 09:11:46
     * @Desc: Passing these props because we are using NextIntlClientProvider in a client component. It does not automatically get these from a server component.
     * Make sure to use this wrapper only in this situation : https://next-intl-docs.vercel.app/docs/environments/server-client-components#option-3-providing-individual-messages
     */

    return (
        <Provider locale={locale} messages={messages}>
            {children}
        </Provider>
    )
}

export default NextIntlClientProvider
