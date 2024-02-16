const currentDate = new Date()
export const currentYYYYMMDD = currentDate.toISOString().split('T')[0]
export const currentHHMM = `${currentDate.getHours()}:${currentDate.getMinutes() + 5}`
export const regexDate =
  /^\d{4}(\/|-|\.)(0[1-9]|[12][0-9]|3[01])(\/|-|\.)(0[1-9]|1[0-2])$/
export const regexTime = /^([0-1]?[0-9]|2[0-3]):[0-5][0-9]$/
