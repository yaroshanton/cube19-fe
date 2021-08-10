import { ILeader } from './interfaces/leder.types';
import { StoreType } from '../store';

export const getAlLeaders = (state: StoreType) => [...state.leaders];
export const getAllOldLeaders = (state: StoreType) => [...state.oldLeaders];

export const sortedAllLeaders = (state: StoreType) =>
	getAlLeaders(state)
		.sort((a, b) => b.score - a.score)
		.map((leader, index: number) => {
			leader = { ...leader, ...{ position: index + 1, change: 0 } };

			return leader;
		});

export const sortedAllOldLeaders = (state: StoreType) =>
	getAllOldLeaders(state).map((leaders: ILeader[]) => {
		[...leaders]
			.sort((a, b) => b.score - a.score)
			.map((oneLeader, index: number) => {
				oneLeader = { ...oneLeader, ...{ position: index + 1, change: 0 } };

				return oneLeader;
			});
		return leaders;
	});

export const getTopScoreLeaders = (state: StoreType) => sortedAllLeaders(state).slice(0, 4);
