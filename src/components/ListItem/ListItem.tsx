/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */

import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { ILeader } from '../../redux/leaders/interfaces/leder.types';

import ModalEditLeaders from '../modalEditLeaders';

import { sortedAllLeaders } from '../../redux/leaders/leadersSelectors';
import { modalEditLeadersOpenAction } from '../../redux/modalEditLeaders/modalEditLeadersActions';
import { modalEditLeadersOpenSelector } from '../../redux/modalEditLeaders/modalEditLeadersSelectors';

import UserImage from '../../assets/images/user.png';
import PencilImage from '../../assets/images/pencil.png';

import './ListItem.scss';

const ListItem = () => {
	// TODO: Check how ew can write code
	const [oneLeader, setOneLeader] = useState<ILeader>({ name: '', score: 0, id: 0, position: 0 });
	const dispatch = useDispatch();
	const leaders = useSelector(sortedAllLeaders);
	const isModalEditLeadersOpen = useSelector(state => modalEditLeadersOpenSelector(state));

	const handleClick = (leader: ILeader) => {
		dispatch(modalEditLeadersOpenAction());
		setOneLeader(leader);
	};

	return (
		<div className="wrapper-list-item">
			{leaders &&
				leaders.map((leader: ILeader) => {
					return (
						<li key={leader.id} className="list-item">
							<div className="list-item__place">{leader.position}st</div>
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
					);
				})}

			{isModalEditLeadersOpen && <ModalEditLeaders data={oneLeader} />}
		</div>
	);
};

export default ListItem;
