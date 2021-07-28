import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import { useSelector } from 'react-redux';

import leadersSelectors from '../../../redux/leaders/leadersSelectors';

import UserImage from './img/user.png';
import PencilImage from './img/pencil.png';

import './ListItem.scss';

const ListItem = () => {
	const leaders: any = useSelector(leadersSelectors.getOtherScoreLeaders);

	return (
		<div className="wrapper-list-item">
			{leaders &&
				leaders.map((leader: any, index: number) => (
					<li key={uuidv4()} className="list-item">
						<div className="list-item__place">{index + 1}st</div>
						<img src={UserImage} alt="user" className="list-item__image" />
						<div className="list-item__score">{leader.score ? leader.score : 0}</div>
						<div className="list-item__name ">{leader.name}</div>
						<div className="list-item__changes">No change</div>
						<img src={PencilImage} alt="pencil" className="list-item__edit cursor-pointer" />
					</li>
				))}
		</div>
	);
};

export default ListItem;
