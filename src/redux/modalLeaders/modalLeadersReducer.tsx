import { createReducer } from '@reduxjs/toolkit';
import { modalLeadersOpenAction } from './modalLeadersActions';

export const isModalLeadersOpen = createReducer(false, {
	[modalLeadersOpenAction.type]: state => !state,
});
