import { type AxiosError } from 'axios'

import { type TAxiosRequestConfigType, type TRequestType, type TResponseType } from './resources'

/**
 * @author GetWrecked99
 * @date 2023-12-10 15:42:25
 * @description Middleware for standardizing Axios requests and responses:
 * - Ensures uniform response structure (success or error).
 * - Centralizes error handling for consistent application-wide management.
 * - Simplifies request handling by encapsulating Axios logic.
 * - Allows configurable Axios request parameters.
 * - Enhances code maintainability and readability via strong typing.
 * @example axiosRequestHandler<TParamsType, TExampleType[]>((config) => axiosInterceptor.get('api/v1/example', config)
 */

const axiosRequestHandler =
    <TParam, TResponse, TError = AxiosError>(request: TRequestType<TParam, TResponse>) =>
    async (config?: TAxiosRequestConfigType<TParam>): TResponseType<TResponse, TError> => {
        try {
            const response = await request(config)
            return { code: 'success', data: response.data }
        } catch (e) {
            return { code: 'error', error: e as TError }
        }
    }

export default axiosRequestHandler
