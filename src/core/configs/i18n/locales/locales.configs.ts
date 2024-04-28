const LOCALES = ['en', 'de'] as const

const DEFAULT_LOCALE = LOCALES[0]

const LOCALE_PREFIX: 'always' | 'as-needed' | 'never' = 'as-needed'

export { LOCALES, DEFAULT_LOCALE, LOCALE_PREFIX }
