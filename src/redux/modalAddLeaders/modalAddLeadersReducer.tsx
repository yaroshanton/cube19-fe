import { createReducer } from '@reduxjs/toolkit';
import { modalAddLeadersOpenAction } from './modalAddLeadersActions';

// TODO: Create only one redux service for modals

export const isModalAddLeadersOpen = createReducer(false, {
	[modalAddLeadersOpenAction.type]: state => !state,
});
