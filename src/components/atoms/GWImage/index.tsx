import Image, { type ImageProps } from 'next/image'

const GWImage = ({ src, alt, ...rest }: ImageProps) => {
    /**
     * @Desc: onErrorHandler function is a fallback for image loading errors
     * If an image fails to load, it replaces the source with a broken image placeholder
     */
    const onErrorHandler = (error: React.SyntheticEvent<HTMLImageElement, Event>) =>
        (error.currentTarget.src = '/images/common/broken-image.png')

    return <Image src={src} alt={alt} onError={onErrorHandler} {...rest} />
}

export { GWImage }
