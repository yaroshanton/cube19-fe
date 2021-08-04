import { ILeader } from './interfaces/leder.types';

export const getLeadersOperations = (state: ILeader[], { payload }: { payload: ILeader[] }) => {
	return payload;
};

export const createLeaderOperation = (state: ILeader[], { payload }: { payload: ILeader }) => {
	return [...state, payload];
};

export const editLeaderOperation = (state: ILeader[], { payload }: { payload: ILeader }) => {
	return state.map(leader => (leader.name === payload.name ? { ...leader, score: payload.score } : leader));
};
