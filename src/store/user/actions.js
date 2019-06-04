export const IS_LOGGED_IN = 'IS_LOGGED_IN'
export const LOG_OUT = 'LOG_OUT'
export const LOG_IN = 'LOG_IN'

export const isLoggedIn = () => ({
  type: IS_LOGGED_IN
})

export const logout = () => ({
  type: LOG_OUT
})

export const login = (user) => ({
  type: LOG_IN,
  user
})