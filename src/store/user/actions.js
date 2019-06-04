import axios from 'axios'
export const IS_LOGGED_IN = 'IS_LOGGED_IN'
export const LOG_OUT = 'LOG_OUT'
export const LOG_IN = 'LOG_IN'

export const checkLogin = (user, errors) => ({
  type: IS_LOGGED_IN,
  data: user,
  errors
})

export const logout = () => ({
  type: LOG_OUT
})

export const login = (user) => ({
  type: LOG_IN,
  data: user
})

export const isLoggedIn = () => {
  return (dispatch) => {
    const jwt = localStorage.getItem('cool-jwt')
    return axios.get('/api/user', {
      headers: {
        'auth-token': jwt
      }
    })
      .then(res => {
        dispatch(checkLogin(res.data, {}))
      })
      .catch(err => {
        dispatch(checkLogin({},{msg: err.response.data}))
      })

  }
}