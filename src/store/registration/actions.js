import axios from 'axios'
import { login } from '../user/actions'
export const REGISTER_NEW_USER = 'REGISTER_NEW_USER'


const fetchUser = errors => ({
  type: REGISTER_NEW_USER,
  errors
})

export const registerNewUser = userData => {
  return (dispatch) => {
    return axios.post('/api/auth/register', {
      name: userData.name,
      email: userData.email,
      password: userData.password,
      repeatPassword: userData.repeatPassword,
      idName: userData.idName
    })
      .then(res => {
        localStorage.setItem('cool-jwt', res.data.token)
        dispatch(fetchUser([]))
        dispatch(login(res.data.user))
      })
      .catch(err => {
        dispatch(fetchUser(err.response.data.errors))
      })

  }
}
