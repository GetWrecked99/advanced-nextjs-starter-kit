import { unstable_setRequestLocale } from 'next-intl/server'

import { LandingTemplate } from '@templates/LandingTemplate'

import { type TLocalesType } from '@core/configs/i18n'
import { type IPagesProps } from '@core/types/common/pages'

const LandingPage = ({ params: { locale } }: IPagesProps<{ locale: TLocalesType }>) => {
    unstable_setRequestLocale(locale)

    return <LandingTemplate />
}

export default LandingPage
