import { type AxiosError, type AxiosRequestConfig, type AxiosResponse } from 'axios'

interface TAxiosRequestConfigType<TParam> extends Omit<AxiosRequestConfig, 'params'> {
    params?: TParam
}

type TSuccessResponseType<TValue> = {
    code: 'success'
    data: TValue
}

type TErrorResponseType<TError = AxiosError> = {
    code: 'error'
    error: TError
}

type TRequestType<TParam, TResponse> = (config?: TAxiosRequestConfigType<TParam>) => Promise<AxiosResponse<TResponse>>

type TResponseType<TValue, TError> = Promise<TSuccessResponseType<TValue> | TErrorResponseType<TError>>

export type { TAxiosRequestConfigType, TRequestType, TResponseType }
