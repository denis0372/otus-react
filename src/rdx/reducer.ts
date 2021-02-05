import { conditionsControl } from './conditionsControl'
import { combineReducers } from 'redux'; 
import { loginSlice } from './login'

export const reducer = combineReducers({
  conditionsControl,
  login: loginSlice.reducer, 
  }) 

  
export type AppState = ReturnType<typeof reducer>; 