import { createReducer } from '@reduxjs/toolkit';
import { modalEditLeadersOpenAction, modalAddLeadersOpenAction } from './modalLeadersActions';

export const isModalEditLeadersOpen = createReducer(false, {
	[modalEditLeadersOpenAction.type]: state => !state,
});

export const isModalAddLeadersOpen = createReducer(false, {
	[modalAddLeadersOpenAction.type]: state => !state,
});
