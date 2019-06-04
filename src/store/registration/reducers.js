import { REGISTER_NEW_USER } from './actions'

const defaultState = {
  errors: []
}

export const registrationReducer = (state = defaultState, action) => {
  switch (action.type) {
    case REGISTER_NEW_USER:
      return {
        errors: action.errors
      }
      
    default: return state
  }
}
