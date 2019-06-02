import { POST_USER } from './actions'

const defaultState = {
  errors: [],
  user: {
    email: '',
    password: ''
  }
}

export const authReducer = (state = defaultState, action) => {
  switch (action.type) {
    case POST_USER:
      return {
        ...state,
        user: action.payload
      }

    default: return state
  }
}
