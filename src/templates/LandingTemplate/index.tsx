import { useTranslations } from 'next-intl'

const LandingTemplate = () => {
    /**
     * @Author: Get Wrecked
     * @Date: 2024-04-28 11:27:13
     * @Desc: Based on https://next-intl-docs.vercel.app/docs/environments/server-client-components#using-internationalization-in-server-components
     */
    const t = useTranslations('LandingTemplate')

    return (
        <div className='h-screen grid place-items-center bg-cyan-200'>
            <span className='text-2xl font-bold text-gray-600'>{t('welcome', { user: 'Get Wrecked' })}</span>
        </div>
    )
}

export { LandingTemplate }
