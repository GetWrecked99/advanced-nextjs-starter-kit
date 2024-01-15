type TParamsType = {
    [key: string]: string
}

type TSearchParamsType = {
    [key: string]: string | string[]
}

interface IPagesProps<P = TParamsType, S = TSearchParamsType> {
    params: P
    searchParams: S
}

export default IPagesProps
