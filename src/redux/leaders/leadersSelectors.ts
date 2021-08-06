import { StoreType } from '../store';
// import { IInitialLeader } from './interfaces/leder.types';

// TODO: Check return state.leaders
export const getAlLeaders = (state: StoreType) => [...state.leaders];

export const sortedAllLeaders = (state: StoreType) =>
	getAlLeaders(state)
		.sort((a, b) => b.score - a.score)
		.map((leader, index: number) => {
			leader = { ...leader, ...{ position: index + 1, change: 0 } };

			return leader;
		});

export const getTopScoreLeaders = (state: StoreType) => sortedAllLeaders(state).slice(0, 4);
