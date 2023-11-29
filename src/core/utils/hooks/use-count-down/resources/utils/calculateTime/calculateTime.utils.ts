const calculateTime = (remainingSeconds: number) => ({
    hours: Math.floor(remainingSeconds / 3600),
    minutes: Math.floor((remainingSeconds % 3600) / 60),
    seconds: Math.floor(remainingSeconds % 60)
})

export default calculateTime
