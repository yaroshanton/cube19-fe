import { createReducer } from '@reduxjs/toolkit';
import { ILeader } from './interfaces/leder.types';
import { fetchLeadersSuccess } from './leadersActions';

const initState: ILeader[] = [];

export const leaders = createReducer(initState, {
	[fetchLeadersSuccess.type]: (_, { payload }) => payload,
});
