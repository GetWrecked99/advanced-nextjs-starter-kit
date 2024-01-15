import { createLocalizedPathnamesNavigation } from 'next-intl/navigation'
import { LOCALE_PREFIX, LOCALES, PATHNAMES } from '..'

const { Link, redirect, usePathname, useRouter, getPathname } = createLocalizedPathnamesNavigation({
    locales: LOCALES,
    localePrefix: LOCALE_PREFIX,
    pathnames: PATHNAMES
})

export { Link, redirect, usePathname, useRouter, getPathname }
