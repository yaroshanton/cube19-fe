import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import { useSelector } from 'react-redux';
import leaderImg from '../../images/bg-leadboard.png';
import profileImg from '../../images/profile-img.png';

import leadersSelectors from '../../redux/leaders/leadersSelectors';
import './HighestScorers.scss';

const HighestScorers = () => {
	const leaders: any = useSelector(leadersSelectors.getTopScoreLeaders);

	return (
		<div className="wrapper">
			<div className="highest-scores">
				<h2>All time Highest Scorers</h2>
				<ul className="highest-scores-list">
					{leaders &&
						leaders.map((leader: any) => (
							<li key={uuidv4()} className="highest-scores__item">
								<img src={profileImg} alt="leader" width="84" />
								<h3>{leader.name}</h3>
								<p>{leader.score ? leader.score : 0}</p>
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
