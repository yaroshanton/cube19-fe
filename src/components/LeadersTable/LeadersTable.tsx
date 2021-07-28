/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */

import React from 'react';
import './LeadersTable.scss';
import { useDispatch, useSelector } from 'react-redux';
<<<<<<< HEAD
import { modalEditLeadersOpenAction } from '../../redux/modalEditLeaders/modalEditLeadersActions';
import { modalEditLeadersOpenSelector } from '../../redux/modalEditLeaders/modalEditLeadersSelectors';
=======
import { modalAddLeadersOpenAction } from '../../redux/modalAddLeaders/modalAddLeadersActions';
import { modalAddLeadersOpenSelector } from '../../redux/modalAddLeaders/modalAddLeadersSelectors';
>>>>>>> 3f076cc... [FIX] - modal
import LeadersList from './LeadersList/LeadersList';
import ModalAddLeaders from '../modalAddLeaders/modalAddLeaders';

const LeadersTable = () => {
	const dispatch: any = useDispatch();
<<<<<<< HEAD
	const modalState = () => dispatch(modalEditLeadersOpenAction());
	const modalOpen = useSelector(state => modalEditLeadersOpenSelector(state));
=======
	const modalState = () => dispatch(modalAddLeadersOpenAction());
	const modalOpen = useSelector(state => modalAddLeadersOpenSelector(state));
>>>>>>> 3f076cc... [FIX] - modal

	return (
		<div className="table">
			<div className="table-header">
				<div className="table-header__text">Leaders table for this period</div>
				<div className="table-header__button cursor-pointer" role="button" tabIndex={0} onClick={modalState}>
					+ Add new score
				</div>
			</div>
			<LeadersList />
			{modalOpen && <ModalAddLeaders />}
		</div>
	);
};

export default LeadersTable;
