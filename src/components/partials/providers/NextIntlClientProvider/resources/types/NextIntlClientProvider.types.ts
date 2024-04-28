import { type PropsWithChildren } from 'react'
import { type AbstractIntlMessages } from 'next-intl'

import { type TLocalesType } from '@core/configs/i18n'
import { type TTimezoneType } from '@core/types/i18n'

interface INextIntlClientProviderProps extends PropsWithChildren {
    locale: TLocalesType
    messages: AbstractIntlMessages
    timezone?: TTimezoneType
    now: Date
}

export default INextIntlClientProviderProps
