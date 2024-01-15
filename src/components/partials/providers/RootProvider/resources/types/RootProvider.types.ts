import { type ReactNode } from 'react'
import { type AbstractIntlMessages } from 'next-intl'

import { type TLocalesType } from '@core/configs/i18n'
import { type TTimezoneType } from '@core/types/i18n'

interface IRootProviderProps {
    children: ReactNode
    locale: TLocalesType
    messages: AbstractIntlMessages
    timezone?: TTimezoneType
    now: Date
}

export default IRootProviderProps
