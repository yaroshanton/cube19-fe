import { StoreType } from '../store';
import { ILeader } from './interfaces/leder.types';

const getAlLeaders = (state: StoreType): ILeader[] =>
	state.leaders.map((leader: ILeader) => {
		if (!leader.score) {
			// eslint-disable-next-line no-param-reassign
			leader = { ...leader, ...{ score: 0 } };
		}
		return leader;
	});

const sortedAllLeaders = (state: StoreType) => getAlLeaders(state).sort((a: any, b: any) => a.score - b.score);

const getTopScoreLeaders = (state: StoreType) => sortedAllLeaders(state).reverse().slice(0, 4);

const getOtherScoreLeaders = (state: StoreType) => sortedAllLeaders(state).reverse();

export default { getAlLeaders, sortedAllLeaders, getTopScoreLeaders, getOtherScoreLeaders };
