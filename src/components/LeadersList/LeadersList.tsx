import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import './LeadersList.scss';

import { ILeader } from '../../redux/leaders/interfaces/leder.types';

import ListItem from '../ListItem/ListItem';
import ModalEditLeaders from '../modalEditLeaders/modalEditLeaders';
import ModalAddLeaders from '../modalAddLeaders/modalAddLeaders';

import { sortedAllLeaders, sortedAllOldLeaders } from '../../redux/leaders/leadersSelectors';
import { fetchLeaders } from '../../redux/leaders/leadersActions';
import { modalEditLeadersOpenAction, modalAddLeadersOpenAction } from '../../redux/modalLeaders/modalLeadersActions';
import { addOldLeadersAction } from '../../redux/leaders/actionTypes';
import {
	modalEditLeadersOpenSelector,
	modalAddLeadersOpenSelector,
} from '../../redux/modalLeaders/modalLeadersSelectors';

const LeadersList = () => {
	const dispatch = useDispatch();

	const [oneLeader, setOneLeader] = useState<ILeader>({ name: '', score: 0, position: 0, change: 0 });
	const [historyDay, setHistoryDay] = useState(0);
	const [toggleViewHistory, setToggleViewHistory] = useState(false);

	const leaders = useSelector(sortedAllLeaders);
	const oldLeaders = useSelector(sortedAllOldLeaders);

	const isModalEditLeadersOpen = useSelector(modalEditLeadersOpenSelector);
	const isModalAddLeadersOpen = useSelector(modalAddLeadersOpenSelector);

	const onToggleModalAdd = () => dispatch(modalAddLeadersOpenAction());

	const handleUpdateOneLeader = (leader: ILeader) => {
		dispatch(modalEditLeadersOpenAction());
		setOneLeader(leader);
	};

	const handleAddNewDay = () => {
		dispatch(fetchLeaders());
		dispatch({ type: [addOldLeadersAction.type], payload: leaders });
		setHistoryDay(historyDay + 1);
		setToggleViewHistory(false);
	};

	const handlePrevDay = () => {
		if (oldLeaders.length === historyDay) {
			dispatch({ type: [addOldLeadersAction.type], payload: leaders });
		}
		setHistoryDay(historyDay - 1);
		setToggleViewHistory(true);
	};

	const handleNextDay = () => {
		setHistoryDay(historyDay + 1);
	};

	const defendenceLeaders = (leadersArr: ILeader[], oldLeadersArr: ILeader[][]) => {
		leadersArr.map((leader: ILeader) => {
			return oldLeadersArr.map((oldLeader: ILeader[]) => {
				return oldLeader.map(objLeader => {
					if (leader.name === objLeader.name) {
						leader.change = objLeader.position - leader.position;
					}
					return leader.change;
				});
			});
		});
	};

	defendenceLeaders(leaders, oldLeaders);

	return (
		<>
			<div className="table">
				<div className="table-header">
					<div className="table-header__text">Leaders table for this period</div>
					<button type="button" className="table-button__new-day" onClick={handleAddNewDay}>
						New Day
					</button>
					<button
						type="button"
						className="table-button__prev-day"
						disabled={historyDay === 0}
						onClick={handlePrevDay}
					>
						Prev Day
					</button>
					<button
						type="button"
						className="table-button__next-day"
						disabled={historyDay === oldLeaders.length - 1}
						onClick={handleNextDay}
					>
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
					<ListItem
						leaders={!toggleViewHistory ? leaders : oldLeaders[historyDay]}
						updateOneLeader={handleUpdateOneLeader}
					/>

					{isModalEditLeadersOpen && <ModalEditLeaders data={oneLeader} />}
					{isModalAddLeadersOpen && <ModalAddLeaders />}
				</div>
			</div>
		</>
	);
};

export default LeadersList;
