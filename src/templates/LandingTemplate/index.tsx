import { useTranslations } from 'next-intl'

const LandingTemplate = () => {
    const t = useTranslations('LandingTemplate')

    return (
        <div className='h-screen grid place-items-center bg-cyan-200'>
            <span className='text-2xl font-bold text-gray-600'>{t('welcome', { user: 'Get Wrecked' })}</span>
        </div>
    )
}

export { LandingTemplate }
