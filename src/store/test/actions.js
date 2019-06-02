import axios from 'axios'
export const FETCH_DATA = 'FETCH_DATA'

export const fetchData = data => ({
  type: FETCH_DATA,
  data
})

export const fetchGithubData = () => {
  return (dispatch) => {
    return axios.get('https://api.github.com/users/KrunalLathiya')
    .then(res => {
      dispatch(fetchData(res.data))
    })
    .catch(err => {
      throw(err)
    })
  }
}
