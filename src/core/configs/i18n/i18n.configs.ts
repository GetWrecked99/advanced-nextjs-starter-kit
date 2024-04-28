import { notFound } from 'next/navigation'
import { IntlErrorCode } from 'next-intl'
import { getRequestConfig } from 'next-intl/server'
import { DEFAULT_LOCALE, LOCALES, type TLocalesType } from '.'

/**
 * @author GetWrecked99
 * @date 2023-12-25 08:51:04
 * @description Based on : https://next-intl-docs.vercel.app/docs/getting-started/app-router
 */

export default getRequestConfig(async ({ locale }) => {
    // Validate that the incoming `locale` parameter is valid
    if (!LOCALES.includes(locale as TLocalesType)) notFound()

    return {
        messages: (
            await (locale === DEFAULT_LOCALE // When using Turbo pack, this will enable Hot Module Replacement (HMR) for DEFAULT_LOCALE
                ? import(`@public/locales/${DEFAULT_LOCALE}.json`)
                : import(`@public/locales/${locale}.json`))
        ).default,
        onError(error) {
            if (error.code === IntlErrorCode.MISSING_MESSAGE) {
                console.error('// Missing translations are expected and should only log an error: ', error)
            } else {
                console.error('Other errors indicate a bug in the app and should be reported: ', error)
            }
        },
        getMessageFallback({ namespace, key, error }) {
            const path = [namespace, key].filter((part) => part != null).join('.')

            if (error.code === IntlErrorCode.MISSING_MESSAGE) {
                return path + ' is not yet translated'
            } else {
                return 'Dear developer, please fix this message: ' + path
            }
        }
    }
})
