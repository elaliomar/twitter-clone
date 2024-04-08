import {createSlice} from '@reduxjs/toolkit';

type UserState = {
  userId: string | null;
  userEmail: string | null;
};

const initialState: UserState = {
  userId: '',
  userEmail: '',
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.userId = action.payload;
    },
    signOut: state => {
      state.userId = null;
    },
    setEmail: (state, action) => {
      state.userEmail = action.payload;
    },
  },
});

export const {setUser, signOut, setEmail} = authSlice.actions;

export default authSlice.reducer;
