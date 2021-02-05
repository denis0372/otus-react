import { conditionsControl } from '../components/Conditions/conditionsControl'
import { combineReducers } from 'redux'; 
import { loginSlice } from '@/components/Login/slice'

export const reducer = combineReducers({
  conditionsControl,
  login: loginSlice.reducer, 
  }) 

  
export type AppState = ReturnType<typeof reducer>; 