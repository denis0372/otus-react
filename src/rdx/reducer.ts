import { combineReducers } from 'redux'; 
import { loginSlice } from '@/components/Login/slice'
import { conditionsControl } from 'components/Conditions/reducer'

export const reducer = combineReducers({
  conditionsControl,
  login: loginSlice.reducer, 
  }) 

  
export type AppState = ReturnType<typeof reducer>; 