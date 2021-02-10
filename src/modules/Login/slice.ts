import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export enum CheckState {
  initiated,
  succeed,
  failed,
}

export const initialState: {
  username: string;
  status?: CheckState;
} = {
  username: "",
  status: CheckState.initiated,
};

export const loginSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    login: (state, { payload }: PayloadAction<string>) => { 
      return { 
        username: payload, 
        status: CheckState.succeed 
      };
    },
    logout: () => {
      return {
        username: "",
        status: CheckState.failed,
      }
    },
  },
});

export const { reducer, actions } = loginSlice; 
