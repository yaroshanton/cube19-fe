import { useSelector } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';

import { ILeader } from '../../redux/leaders/interfaces/leder.types';
import { getTopScoreLeaders } from '../../redux/leaders/leadersSelectors';

import profileImg from '../../assets/images/profile-img.png';
import leaderImg from '../../assets/images/bg-leadboard.png';

import './HighestScorers.scss';

const HighestScorers = () => {
	const leaders: ILeader[] = useSelector(getTopScoreLeaders);

	return (
		<div className="wrapper">
			<div className="highest-scores">
				<h2>All time Highest Scorers</h2>
				<ul className="highest-scores-list">
					{leaders.map(leader => (
						<li key={uuidv4()} className="highest-scores__item">
							<img src={profileImg} alt="leader" className="highest-scores__item__img" />
							<h3>{leader.name}</h3>
							<p>{leader.score}</p>
						</li>
					))}
				</ul>
			</div>
			<div className="highest-scores-image">
				<img src={leaderImg} alt="leader-img-bg" />
			</div>
		</div>
	);
};

export default HighestScorers;
