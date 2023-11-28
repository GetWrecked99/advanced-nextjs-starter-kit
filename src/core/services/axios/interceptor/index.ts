import axios from 'axios'

import { clearCookieStorage, getCookieStorageItem } from '@core/services/storages/cookies-storage'

const axiosInterceptorInstance = axios.create({
    baseURL: process.env.NEXT_PUBLIC_BASEURL
})

// Response interceptor
axiosInterceptorInstance.interceptors.response.use(
    (response) => {
        // Modify the response data here
        return response
    },
    (error) => {
        // Handle response errors here
        try {
            if (error.response.status === 401) {
                clearCookieStorage() // Clear current user cookies
                window.location.href = '/' // Navigates the user to the auth page (login page or ...)
            }
            const expectedError = error.response && error.response.state >= 400 && error.response.status < 500

            // if error doesn't expected, can handle it below here
            if (!expectedError) {
                // console.error(error)
                try {
                    // console.error(error)
                } catch (error) {
                    // console.error(error)
                }
            }
        } catch (error) {
            // console.error(error)
        }
        return Promise.reject(error)
    }
)

// Request interceptor
axiosInterceptorInstance.interceptors.request.use(
    (config) => {
        // Modify the request config here (add headers, authentication tokens)
        const accessToken = getCookieStorageItem('token')

        // If token is present add it to request's Authorization Header
        if (accessToken) {
            if (config.headers) config.headers.Authorization = accessToken
        }
        return config
    },
    (error) => {
        // Handle request errors here
        return Promise.reject(error)
    }
)

export { axiosInterceptorInstance }
