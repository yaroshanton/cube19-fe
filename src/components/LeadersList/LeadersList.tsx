import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import './LeadersList.scss';

import { ILeader } from '../../redux/leaders/interfaces/leder.types';

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
	const [oldLeaders, setOldLeaders] = useState<ILeader[][]>([]);

	const leaders = useSelector(sortedAllLeaders);
	const isModalEditLeadersOpen = useSelector(modalEditLeadersOpenSelector);
	const isModalAddLeadersOpen = useSelector(modalAddLeadersOpenSelector);

	const handleClick = (leader: ILeader) => {
		dispatch(modalEditLeadersOpenAction());
		setOneLeader(leader);
	};

	useEffect(() => {
		setOldLeaders([...oldLeaders, [...leaders]]);
	}, [leaders]);

	const handleAddOldLeaders = (): void => {
		console.log(2);
	};

	const defendenceLeaders = (leadersArr: ILeader[], oldLeadersArr: ILeader[][]) => {
		leadersArr.map((leader: ILeader) => {
			return oldLeadersArr.map((oldLeader: ILeader[]) => {
				return oldLeader.map(oLeader => {
					if (leader.id === oLeader.id) {
						leader.change = oLeader.position - leader.position;
					}
					return leader.change;
				});
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
