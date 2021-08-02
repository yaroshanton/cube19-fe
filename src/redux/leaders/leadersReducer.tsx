import { createReducer } from '@reduxjs/toolkit';
import { ILeader } from './interfaces/leder.types';
import { fetchLeadersSuccess, editLeadersAction } from './leadersActions';

const initState: ILeader[] = [];

export const leaders = createReducer(initState, {
	[fetchLeadersSuccess.type]: (_, { payload }) => payload,
	[editLeadersAction.type]: (state, { payload }) =>
		state.map(leader => (leader.name === payload.name ? { ...leader, score: payload.score } : leader)),
});
