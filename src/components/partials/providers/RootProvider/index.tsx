'use client'

import { useState } from 'react'
import { NextIntlClientProvider } from 'next-intl'
import NextAdapterApp from 'next-query-params/app'
import { QueryParamProvider } from 'use-query-params'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'

import { type IRootProviderProps } from './resources'

const RootProvider = ({ children, locale, messages }: IRootProviderProps) => {
    const [queryClient] = useState(
        () =>
            new QueryClient({
                defaultOptions: {
                    queries: {
                        staleTime: 60 * 1000,
                        refetchOnWindowFocus: false,
                        retry: false
                    }
                }
            })
    )

    return (
        <QueryClientProvider client={queryClient}>
            <NextIntlClientProvider locale={locale} messages={messages}>
                <QueryParamProvider adapter={NextAdapterApp}>{children}</QueryParamProvider>
                <ReactQueryDevtools initialIsOpen={false} buttonPosition='bottom-left' />
            </NextIntlClientProvider>
        </QueryClientProvider>
    )
}

export { RootProvider }
