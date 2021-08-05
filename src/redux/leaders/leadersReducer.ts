import { createReducer } from '@reduxjs/toolkit';
import { ILeader } from './interfaces/leder.types';
import { fetchLeadersSuccess, editLeadersAction, addLeadersAction } from './leadersActions';
import { createLeaderOperation, editLeaderOperation, getLeadersOperations } from './operations';

const initState: ILeader[] = [];

export const leaders = createReducer(initState, {
	[fetchLeadersSuccess.type]: getLeadersOperations,
	[editLeadersAction.type]: editLeaderOperation,
	[addLeadersAction.type]: (state, action) => createLeaderOperation(state, action),
});
