import { type AxiosError } from 'axios'

import { type TRequestType, type TResponseType } from './resources'

const axiosRequestHandler =
    <TParam, TResponse, TError = AxiosError>(request: TRequestType<TParam, TResponse>) =>
    async (params?: TParam): TResponseType<TResponse, TError> => {
        try {
            const response = await request(params)
            return { code: 'success', data: response.data }
        } catch (e) {
            return { code: 'error', error: e as TError }
        }
    }

export default axiosRequestHandler
