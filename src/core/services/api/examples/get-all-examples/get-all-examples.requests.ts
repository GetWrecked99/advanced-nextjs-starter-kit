import { axiosInterceptor, axiosRequestHandler } from '@core/services/axios'
import { type TExampleType } from '@core/types/api/example'

import type TParamsType from './params.types'

const getAllExamplesQueryFn = axiosRequestHandler<TParamsType, TExampleType[]>((config) =>
    axiosInterceptor.get('api/v1/example', config)
)

export default getAllExamplesQueryFn
