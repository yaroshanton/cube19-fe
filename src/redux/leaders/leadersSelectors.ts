import { StoreType } from '../store';
import { ILeader } from './interfaces/leder.types';

// TODO: Check return state.leaders
export const getAlLeaders = (state: StoreType): ILeader[] => [...state.leaders];

export const sortedAllLeaders = (state: StoreType): ILeader[] =>
	getAlLeaders(state)
		.sort((a, b) => b.score - a.score)
		.map((leader, index: number) => {
			leader = { ...leader, ...{ position: index + 1, change: 0 } };

			return leader;
		});

export const getTopScoreLeaders = (state: StoreType) => sortedAllLeaders(state).slice(0, 4);
