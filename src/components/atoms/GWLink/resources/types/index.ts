import { type LinkProps } from 'next/link'

import { type TAnchorElementType } from '@core/types/html'

interface IGWLinkProps extends Omit<TAnchorElementType, 'href' | 'ref'>, LinkProps {
    ref: React.RefObject<HTMLAnchorElement>
}

export type { IGWLinkProps }
