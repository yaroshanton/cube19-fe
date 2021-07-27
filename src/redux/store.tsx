import { configureStore } from '@reduxjs/toolkit';

// Reducers
import { leaders } from './leaders/leadersReducer';

const store = configureStore({
  reducer: {
    leaders: leaders,
  },
  devTools: process.env.NODE_ENV === 'development',
});

// eslint-disable-next-line import/no-anonymous-default-export

export type StoreType = ReturnType<typeof store.getState>

export default store;