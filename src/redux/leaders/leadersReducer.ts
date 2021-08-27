import { createReducer } from '@reduxjs/toolkit';
import { ILeader } from './interfaces/leder.types';
import { fetchLeadersSuccess, editLeadersAction, addLeadersAction, addOldLeadersAction } from './actionTypes';
import {
	createLeaderOperation,
	editLeaderOperation,
	getLeadersOperations,
	addOldLeadersOperation,
} from './leadersOperations';

const initState: ILeader[] = [];

export const leaders = createReducer(initState, {
	[fetchLeadersSuccess.type]: getLeadersOperations,
	[editLeadersAction.type]: editLeaderOperation,
	[addLeadersAction.type]: createLeaderOperation,
});

const initStateOldLeaders: ILeader[][] = [];

export const oldLeaders = createReducer(initStateOldLeaders, {
	[addOldLeadersAction.type]: addOldLeadersOperation,
});
