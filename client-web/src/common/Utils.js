export const sleepPromise = time => new Promise((resolve) => {
  setTimeout(
    resolve,
    time
  )
})
