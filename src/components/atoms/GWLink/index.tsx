import Link from 'next/link'

import { type IGWLinkProps } from './resources'

const GWLink = ({ children, ref, prefetch = false, ...rest }: IGWLinkProps) => {
    /**
     * @Desc:  When prefetch is set to false, prefetching will still occur on hover.
     * Pages using Static Generation will preload JSON files with the data for faster page transitions (Increases the performance)
     */
    return (
        <Link prefetch={prefetch} {...rest} ref={ref}>
            {children}
        </Link>
    )
}

export { GWLink }
