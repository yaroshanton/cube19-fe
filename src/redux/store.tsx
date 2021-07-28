import { configureStore } from '@reduxjs/toolkit';

// Reducers
import { leaders } from './leaders/leadersReducer';
import { isModalLeadersOpen } from './modalLeaders/modalLeadersReducer';

const store = configureStore({
	reducer: {
		leaders,
		isModalLeadersOpen,
	},
	devTools: process.env.NODE_ENV === 'development',
});

// eslint-disable-next-line import/no-anonymous-default-export

export type StoreType = ReturnType<typeof store.getState>;

export default store;
