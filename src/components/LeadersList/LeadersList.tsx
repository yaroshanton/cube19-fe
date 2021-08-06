import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import ListItem from '../ListItem';
import './LeadersList.scss';

import { ILeader } from '../../redux/leaders/interfaces/leder.types';
import { StoreType } from '../../redux/store';

import ModalEditLeaders from '../modalEditLeaders';

import { sortedAllLeaders } from '../../redux/leaders/leadersSelectors';
import { modalEditLeadersOpenAction } from '../../redux/modalLeaders/modalLeadersActions';
import { modalEditLeadersOpenSelector } from '../../redux/modalLeaders/modalLeadersSelectors';

const LeadersList = () => {
	// TODO: Check how ew can write code
	const [oneLeader, setOneLeader] = useState<ILeader>({ name: '', score: 0, id: 0, position: 0, change: 0 });
	const dispatch = useDispatch();
	const leaders = useSelector(sortedAllLeaders);
	const [oldLeaders, setOldLeaders] = useState<ILeader[]>([]);
	const isModalEditLeadersOpen = useSelector((state: StoreType) => modalEditLeadersOpenSelector(state));

	const handleClick = (leader: ILeader) => {
		dispatch(modalEditLeadersOpenAction());
		setOneLeader(leader);
		setOldLeaders([...leaders]);
	};

	const defendenceLeaders = (leadersArr: ILeader[], oldLeadersArr: ILeader[]) => {
		leadersArr.map((leader: ILeader) => {
			return oldLeadersArr.map((oldLeader: ILeader) => {
				if (leader.id === oldLeader.id) {
					leader.change = oldLeader.position - leader.position;
				}
				return leader.change;
			});
		});
	};

	defendenceLeaders(leaders, oldLeaders);

	return (
		<div className="leader-list">
			<ListItem leaders={leaders} handleClick={handleClick} />

			{isModalEditLeadersOpen && <ModalEditLeaders data={oneLeader} />}
		</div>
	);
};

export default LeadersList;
