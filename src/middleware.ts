import { type NextRequest } from 'next/server'
import createMiddleware from 'next-intl/middleware'

import { DEFAULT_LOCALE, LOCALES, PATHNAMES } from '@core/configs/i18n'

const middleware = (request: NextRequest) => {
    // Create and call the next-intl middleware
    const intlMiddleware = createMiddleware({
        locales: LOCALES,
        defaultLocale: DEFAULT_LOCALE,
        localePrefix: 'always',
        pathnames: PATHNAMES
    })
    const response = intlMiddleware(request)

    // Alter the response
    response.headers.set('x-url', request.nextUrl.pathname)

    return response
}

export default middleware

export const config = {
    matcher: ['/((?!_next/static|_next/image|api|images|icons|fonts|favicon.ico).*)']
}
