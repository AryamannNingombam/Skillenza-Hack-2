import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import authReducer from '../features/auth/Auth';
export const store = configureStore({
  reducer: {
    counter: counterReducer,
    auth : authReducer
  },
});
