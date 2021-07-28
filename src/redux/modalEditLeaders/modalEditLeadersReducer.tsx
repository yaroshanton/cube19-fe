import { createReducer } from '@reduxjs/toolkit';
import { modalEditLeadersOpenAction } from './modalEditLeadersActions';

export const isModalEditLeadersOpen = createReducer(false, {
	[modalEditLeadersOpenAction.type]: state => !state,
});
