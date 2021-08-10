import { configureStore } from '@reduxjs/toolkit';

// Reducers
import { leaders, oldLeaders } from './leaders/leadersReducer';
import { isModalEditLeadersOpen, isModalAddLeadersOpen } from './modalLeaders/modalLeadersReducer';

const store = configureStore({
	reducer: {
		leaders,
		oldLeaders,
		isModalEditLeadersOpen,
		isModalAddLeadersOpen,
	},
	devTools: process.env.NODE_ENV === 'development',
});

export type StoreType = ReturnType<typeof store.getState>;

export default store;
