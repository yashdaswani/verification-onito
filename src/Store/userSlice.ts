// userSlice.ts
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface User {
  name: string;
  age: number;
  sex: string;
  mobile: string;
  idType: string;
  idNumber: string;
  address?: string;
  state?: string;
  city?: string;
  country?: string;
  pincode?: string;
}

interface UserState {
  users: User[];
}

const initialState: UserState = {
  users: [],
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    addUser: (state, action: PayloadAction<User>) => {
      state.users.push(action.payload);
    },
  },
});

export const { addUser } = userSlice.actions;
export default userSlice.reducer;
