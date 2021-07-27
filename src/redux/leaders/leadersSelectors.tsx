// export const leaders = (state: any) => state.leaders
const leaders = (state: any) => state.leaders.map((leader:any) => {
   leader.score = !!leader.score ? leader.score : 0;
   return leader;
})
  // const leadersArr = [...leaders];
// console.log(leaders);

// const leaders:any = useSelector(leadersSelectors.leaders)
// const leadersArr = [...leaders]

// const slicedScoreLeaders = leaders.sort(function(a:any, b:any){
//   return a.score-b.score
// }).slice(0,4).reverse();

// eslint-disable-next-line import/no-anonymous-default-export
export default {leaders}