import { combineReducers } from "redux";
import { authReducer } from "./auth/reducers";
import { registrationReducer } from "./registration/reducers";
import { githubReducer } from "./test/redusers";


export default combineReducers({
  auth: authReducer,
  registration: registrationReducer,
  github: githubReducer
})
