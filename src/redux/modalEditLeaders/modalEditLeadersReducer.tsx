import { createReducer } from '@reduxjs/toolkit';
import { modalEditLeadersOpen } from './modalEditLeadersActions';

export const isModalEditLeadersOpen = createReducer(false, {
	[modalEditLeadersOpen.type]: state => !state,
});
