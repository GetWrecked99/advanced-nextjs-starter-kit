import React from 'react'

import { calculateTime } from './resources'

const useCountDown = (initialSeconds: number, callBackFn: () => void) => {
    const [time, setTime] = React.useState(calculateTime(initialSeconds))

    React.useEffect(() => {
        const totalSeconds = time.hours * 3600 + time.minutes * 60 + time.seconds

        // If time is up, execute callback function
        if (totalSeconds <= 0) {
            callBackFn()
            return
        }

        // Update time every second using setInterval
        const customInterval = setInterval(() => {
            setTime((prevTime) => {
                const remainingSeconds = prevTime.hours * 3600 + prevTime.minutes * 60 + prevTime.seconds - 1
                return calculateTime(remainingSeconds)
            })
        }, 1000)

        // Cleanup interval on unmount or dependency change
        return () => clearInterval(customInterval)
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [time])

    // Function to reset the timer to initial value
    const resetCountDown = () => setTime(calculateTime(initialSeconds))

    return { time, resetCountDown }
}

export default useCountDown
