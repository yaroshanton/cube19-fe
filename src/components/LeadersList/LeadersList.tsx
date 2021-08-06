import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import './LeadersList.scss';

import { ILeader } from '../../redux/leaders/interfaces/leder.types';
import { StoreType } from '../../redux/store';

import ListItem from '../ListItem';
import ModalEditLeaders from '../modalEditLeaders';
import ModalAddLeaders from '../modalAddLeaders/modalAddLeaders';

import { sortedAllLeaders } from '../../redux/leaders/leadersSelectors';
import { modalEditLeadersOpenAction } from '../../redux/modalLeaders/modalLeadersActions';
import {
	modalEditLeadersOpenSelector,
	modalAddLeadersOpenSelector,
} from '../../redux/modalLeaders/modalLeadersSelectors';

const LeadersList = () => {
	const dispatch = useDispatch();

	const [oneLeader, setOneLeader] = useState<ILeader>({ name: '', score: 0, id: 0, position: 0, change: 0 });
	const [oldLeaders, setOldLeaders] = useState<ILeader[]>([]);

	const leaders = useSelector(sortedAllLeaders);
	const isModalEditLeadersOpen = useSelector((state: StoreType) => modalEditLeadersOpenSelector(state));
	const isModalAddLeadersOpen = useSelector((state: StoreType) => modalAddLeadersOpenSelector(state));

	const handleClick = (leader: ILeader) => {
		dispatch(modalEditLeadersOpenAction());
		setOneLeader(leader);
	};

	const handleAddOldLeaders = (): void => {
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

			{isModalEditLeadersOpen && <ModalEditLeaders data={oneLeader} handleAddOldLeaders={handleAddOldLeaders} />}
			{isModalAddLeadersOpen && <ModalAddLeaders handleAddOldLeaders={handleAddOldLeaders} />}
		</div>
	);
};

export default LeadersList;
