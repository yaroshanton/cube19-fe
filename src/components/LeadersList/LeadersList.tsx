import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import './LeadersList.scss';

import { ILeader } from '../../redux/leaders/interfaces/leder.types';

import ListItem from '../ListItem/ListItem';
import ModalEditLeaders from '../modalEditLeaders/modalEditLeaders';
import ModalAddLeaders from '../modalAddLeaders/modalAddLeaders';

import { sortedAllLeaders } from '../../redux/leaders/leadersSelectors';
import { fetchLeaders } from '../../redux/leaders/leadersActions';
import { modalEditLeadersOpenAction, modalAddLeadersOpenAction } from '../../redux/modalLeaders/modalLeadersActions';
import {
	modalEditLeadersOpenSelector,
	modalAddLeadersOpenSelector,
} from '../../redux/modalLeaders/modalLeadersSelectors';

const LeadersList = () => {
	const dispatch = useDispatch();

	const [oneLeader, setOneLeader] = useState<ILeader>({ name: '', score: 0, id: 0, position: 0, change: 0 });
	const [oldLeaders, setOldLeaders] = useState<ILeader[][]>([]);

	const leaders = useSelector(sortedAllLeaders);

	const isModalEditLeadersOpen = useSelector(modalEditLeadersOpenSelector);
	const isModalAddLeadersOpen = useSelector(modalAddLeadersOpenSelector);

	const onToggleModalAdd = () => dispatch(modalAddLeadersOpenAction());

	const handleUpdateOneLeader = (leader: ILeader) => {
		dispatch(modalEditLeadersOpenAction());
		setOneLeader(leader);
	};

	useEffect(() => {
		if (leaders.length > 1) {
			setOldLeaders([...oldLeaders, leaders]);
		}
	}, [leaders]);

	const handleAddNewDay = () => {
		dispatch(fetchLeaders());
	};

	// const defendenceLeaders = (leadersArr: ILeader[], oldLeadersArr: ILeader[][]) => {
	// 	leadersArr.map((leader: ILeader) => {
	// 		return oldLeadersArr.map((oldLeader: ILeader[]) => {
	// 			return oldLeader.map(oLeader => {
	// 				if (leader.name === oLeader.name) {
	// 					leader.change = oLeader.position - leader.position;
	// 				}
	// 				return leader.change;
	// 			});
	// 		});
	// 	});
	// };

	// defendenceLeaders(leaders, oldLeaders);
	const int = 0;
	return (
		<>
			<div className="table">
				<div className="table-header">
					<div className="table-header__text">Leaders table for this period</div>
					<button type="button" className="table-button__new-day" onClick={handleAddNewDay}>
						New Day
					</button>
					<button type="button" className="table-button__prev-day">
						Prev Day
					</button>
					<button type="button" className="table-button__next-day">
						Next Day
					</button>
					<div
						className="table-header__button cursor-pointer"
						role="button"
						tabIndex={0}
						onClick={onToggleModalAdd}
						onKeyDown={onToggleModalAdd}
					>
						+ Add new score
					</div>
				</div>

				<div className="leader-list">
					<ListItem leaders={oldLeaders[int]} updateOneLeader={handleUpdateOneLeader} />

					{isModalEditLeadersOpen && <ModalEditLeaders data={oneLeader} />}
					{isModalAddLeadersOpen && <ModalAddLeaders />}
				</div>
			</div>
		</>
	);
};

export default LeadersList;
