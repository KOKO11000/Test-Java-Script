export default measureSolveTime = (fn) => {
    let start = Date.now()
    fn()
    let timer =  Date.now() - start
    let timeSeconds = Math.floor(timer/1000)
    return timeSeconds
}