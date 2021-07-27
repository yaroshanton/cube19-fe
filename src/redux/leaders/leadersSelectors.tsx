import { StoreType } from '../store';
import { ILeader } from './interfaces/leder.types';

// export const leaders = (state: any) => state.leaders
const leadersSelectors = (state: StoreType): ILeader[] =>
	state.leaders.map((leader: ILeader) => {
		// leader.score = !!leader?.score ? leader.score : 0;
		if (!leader.score) {
			leader = { ...leader, ...{ score: 0 } };
		}
		return leader;
	});
// const leadersArr = [...leaders];
// console.log(leaders);

// const leaders:any = useSelector(leadersSelectors.leaders)
// const leadersArr = [...leaders]

// const slicedScoreLeaders = leaders.sort(function(a:any, b:any){
//   return a.score-b.score
// }).slice(0,4).reverse();

// eslint-disable-next-line import/no-anonymous-default-export
export default { leadersSelectors };
