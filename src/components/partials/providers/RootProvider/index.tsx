'use client'

import NextAdapterApp from 'next-query-params/app'
import { QueryParamProvider } from 'use-query-params'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'

import { type TWrapperWithChildrenType } from '@core/types/common/wrapper-with-children'

// Create a new query client
const queryClient = new QueryClient({
    defaultOptions: {
        queries: {
            retry: false,
            refetchOnWindowFocus: false
        }
    }
})

const RootProvider = ({ children }: TWrapperWithChildrenType) => {
    return (
        <QueryClientProvider client={queryClient}>
            <QueryParamProvider adapter={NextAdapterApp}>{children}</QueryParamProvider>
            <ReactQueryDevtools initialIsOpen={false} buttonPosition='bottom-left' />
        </QueryClientProvider>
    )
}

export { RootProvider }
