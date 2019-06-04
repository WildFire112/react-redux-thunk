import { POST_USER } from './actions'

const defaultState = {
  errors: []
}

export const authReducer = (state = defaultState, action) => {
  switch (action.type) {
    case POST_USER:
      return {
        ...state,
        errors: action.errors
      }

    default: return state
  }
}

