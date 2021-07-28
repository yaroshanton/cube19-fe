import { createReducer } from '@reduxjs/toolkit';
import { modalAddLeadersOpenAction } from './modalAddLeadersActions';

export const isModalAddLeadersOpen = createReducer(false, {
	[modalAddLeadersOpenAction.type]: state => !state,
});
