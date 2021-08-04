import React from 'react';
import { useSelector } from 'react-redux';
import { ILeader } from '../../redux/leaders/interfaces/leder.types';

import leaderImg from '../../images/bg-leadboard.png';
import profileImg from '../../images/profile-img.png';
import { getTopScoreLeaders } from '../../redux/leaders/leadersSelectors';
import './HighestScorers.scss';

const HighestScorers = () => {
	const leaders: ILeader[] = useSelector(getTopScoreLeaders);

	return (
		<div className="wrapper">
			<div className="highest-scores">
				<h2>All time Highest Scorers</h2>
				<ul className="highest-scores-list">
					{leaders &&
						leaders.map(leader => (
							<li key={leader.id} className="highest-scores__item">
								{/* TODO: Delete inline styles */}
								<img src={profileImg} alt="leader" width="84" />
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
