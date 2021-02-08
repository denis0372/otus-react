import { combineReducers } from 'redux'; 
import { loginSlice } from '@/components/Login/slice'
import { conditionsSlice } from '@/components/Conditions/slice'

export const reducer = combineReducers({
  conditions: conditionsSlice.reducer,
  login: loginSlice.reducer, 
}) 

  
export type AppState = ReturnType<typeof reducer>; 