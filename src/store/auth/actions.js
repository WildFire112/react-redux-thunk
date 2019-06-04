import axios from 'axios'
import { login } from '../user/actions'
export const POST_USER = 'POST_USER'

export const checkUser = errors => ({
  type: POST_USER,
  errors
})

export const postUser = userData => {
  return (dispatch) => {
    return axios.post('/api/auth/login', {
      email: userData.email,
      password: userData.password,
    })
      .then(res => {
        localStorage.setItem('cool-jwt', res.data.token)
        dispatch(checkUser([]))
        dispatch(login(res.data.user))
      })
      .catch(err => {
        dispatch(checkUser(err.response.data.errors))
      })

  }
}
