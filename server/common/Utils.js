export const isToday = timestamp => {
  return (new Date(timestamp)).toDateString() === (new Date()).toDateString()
}
