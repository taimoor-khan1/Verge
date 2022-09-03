import {configureStore} from '@reduxjs/toolkit';
import UserTypeReducer from './slices/userType';

const reducer = {
  UserType: UserTypeReducer,
};

export const store = configureStore({
  reducer: reducer,
  devTools: true,
});
