'use client'

import { type PropsWithChildren, Suspense } from 'react'
import NextAdapterApp from 'next-query-params/app'
import { QueryParamProvider as Provider } from 'use-query-params'

const QueryParamProvider = ({ children }: PropsWithChildren) => {
    /**
     * @Author: Get Wrecked
     * @Date: 2024-04-28 11:39:52
     * @Desc: Based on https://nextjs.org/docs/messages/deopted-into-client-rendering,
     * During static rendering, the entire page was deopted into client-side rendering by useSearchParams as there was no Suspense boundary that caught it.
     * If a route is statically rendered, calling useSearchParams() will cause the tree up to the closest Suspense boundary to be client-side rendered.
     */

    return (
        <Suspense>
            <Provider adapter={NextAdapterApp}>{children}</Provider>
        </Suspense>
    )
}

export default QueryParamProvider
