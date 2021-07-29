/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */

import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { useSelector, useDispatch } from 'react-redux';

import ModalEditLeaders from '../../modalEditLeaders';

import leadersSelectors from '../../../redux/leaders/leadersSelectors';
import { modalEditLeadersOpenAction } from '../../../redux/modalEditLeaders/modalEditLeadersActions';
import { modalEditLeadersOpenSelector } from '../../../redux/modalEditLeaders/modalEditLeadersSelectors';

import UserImage from './img/user.png';
import PencilImage from './img/pencil.png';

import './ListItem.scss';

const ListItem = () => {
	const dispatch: any = useDispatch();

	const [oneLeader, setOneLeader] = useState({});
	const leaders: any = useSelector(leadersSelectors.getOtherScoreLeaders);
	const isModalEditLeadersOpen = useSelector(state => modalEditLeadersOpenSelector(state));
	const onToggleModal: any = () => dispatch(modalEditLeadersOpenAction());

	const handleClick = (leader: any) => {
		onToggleModal();
		setOneLeader(leader);
	};

	// eslint-disable-next-line no-console
	console.log(oneLeader);
	return (
		<div className="wrapper-list-item">
			{leaders &&
				leaders.map((leader: any, index: number) => (
					<li key={uuidv4()} className="list-item">
						<div className="list-item__place">{index + 1}st</div>
						<img src={UserImage} alt="user" className="list-item__image" />
						<div className="list-item__score">{leader.score}</div>
						<div className="list-item__name ">{leader.name}</div>
						<div className="list-item__changes">No change</div>
						<img
							src={PencilImage}
							alt="pencil"
							className="list-item__edit cursor-pointer"
							onClick={() => handleClick(leader)}
						/>
					</li>
				))}
			{isModalEditLeadersOpen && <ModalEditLeaders key={onToggleModal} />}
		</div>
	);
};

export default ListItem;
