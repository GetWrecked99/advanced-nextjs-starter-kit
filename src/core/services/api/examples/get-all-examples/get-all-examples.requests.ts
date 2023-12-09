import { axiosInterceptor, axiosRequestHandler } from '@core/services/axios'
import { type TExampleType } from '@core/types/api/example'

import type TParams from './params.types'

const getAllExamplesQueryFn = axiosRequestHandler<TParams, TExampleType[]>((params) =>
    axiosInterceptor.get('api/v1/example', { params })
)

export default getAllExamplesQueryFn
