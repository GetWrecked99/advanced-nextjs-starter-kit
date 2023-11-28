import { type AxiosError, type AxiosResponse } from 'axios'

type TRequestType<TParam, TResponse> = (params?: TParam) => Promise<AxiosResponse<TResponse>>

type TSuccessResponseType<TValue> = {
    code: 'success'
    data: TValue
}

type TErrorResponseType<TError = AxiosError> = {
    code: 'error'
    error: TError
}

type TResponseType<TValue, TError> = Promise<TSuccessResponseType<TValue> | TErrorResponseType<TError>>

export type { TRequestType, TResponseType }
