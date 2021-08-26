import { ILeader } from './interfaces/leder.types';
import { StoreType } from '../store';

export const getAllLeaders = (state: StoreType) => [...state.leaders];
export const getAllOldLeaders = (state: StoreType) => [...state.oldLeaders];

export const sortedAllLeaders = (state: StoreType) =>
	getAllLeaders(state)
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

export const getTopScoreLeaders = (state: StoreType) => {
	const allLeadersHistory = getAllOldLeaders(state)
		.flat(2)
		.sort((a, b) => b.score - a.score);

	const uniqNames = [...new Set(allLeadersHistory.map(leader => leader.name))];
	const topScoreLeaders: ILeader[] = [];

	allLeadersHistory.map((leader: ILeader) => {
		if (uniqNames.includes(leader.name)) {
			topScoreLeaders.push(leader);
			const nameIndex = uniqNames.indexOf(leader.name);
			uniqNames.splice(nameIndex, 1);
		}

		return leader;
	});

	return topScoreLeaders.slice(0, 4);
};
