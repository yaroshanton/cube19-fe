import { StoreType } from '../store';
import { ILeader } from './interfaces/leder.types';

const getAlLeaders = (state: StoreType): ILeader[] => [...state.leaders];

const sortedAllLeaders = (state: StoreType) =>
	getAlLeaders(state)
		.sort((a: any, b: any) => a.score - b.score)
		.reverse()
		.map((leader: ILeader, index: number) => {
			leader = { ...leader, ...{ position: index + 1 } };

			return leader;
		});

const getTopScoreLeaders = (state: StoreType) => sortedAllLeaders(state).slice(0, 4);

export default { getAlLeaders, sortedAllLeaders, getTopScoreLeaders };
