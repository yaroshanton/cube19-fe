import { createReducer } from '@reduxjs/toolkit';
import { ILeader } from './interfaces/leder.types';
import { fetchLeadersSuccess, editLeadersAction, addLeadersAction } from './actionTypes';
import { createLeaderOperation, editLeaderOperation, getLeadersOperations } from './leadersOperations';

const initState: ILeader[] = [];

export const leaders = createReducer(initState, {
	[fetchLeadersSuccess.type]: getLeadersOperations,
	[editLeadersAction.type]: editLeaderOperation,
	[addLeadersAction.type]: createLeaderOperation,
});
