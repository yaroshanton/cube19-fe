/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */

import React from 'react';
import './LeadersTable.scss';
import { useDispatch, useSelector } from 'react-redux';
import { modalAddLeadersOpenAction } from '../../redux/modalAddLeaders/modalAddLeadersActions';
import { modalAddLeadersOpenSelector } from '../../redux/modalAddLeaders/modalAddLeadersSelectors';
import LeadersList from './LeadersList/LeadersList';
import ModalAddLeaders from '../modalAddLeaders/modalAddLeaders';

const LeadersTable = () => {
	const dispatch: any = useDispatch();
	const modalState = () => dispatch(modalAddLeadersOpenAction());
	const modalOpen = useSelector(state => modalAddLeadersOpenSelector(state));

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
