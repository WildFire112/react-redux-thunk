import { IS_LOGGED_IN, LOG_OUT, LOG_IN } from './actions'

const defaultState = {
  name: '',
  idName: '',
  status: '',
  email: '',
  _id: '',
  isLoggedIn: false
}

export const userReducer = (state = defaultState, action) => {
  switch (action.type) {
    case IS_LOGGED_IN:
      if (!localStorage.getItem('cool-jwt'))
        return state
      return {
        ...state,
        isLoggedIn: true
      }
    case LOG_OUT:
      localStorage.removeItem('cool-jwt')
      return defaultState
    case LOG_IN:
      return {
        name: action.user.name,
        idName: action.user.idName,
        status: action.user.status,
        email: action.user.email,
        _id: action.user._id,
        isLoggedIn: true
      }
    default:
      return state
  }
}
