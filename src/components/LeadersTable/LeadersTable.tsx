/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */

import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { StoreType } from '../../redux/store';

import LeadersList from '../LeadersList';
import ModalAddLeaders from '../modalAddLeaders/modalAddLeaders';
import './LeadersTable.scss';

import { modalAddLeadersOpenAction } from '../../redux/modalLeaders/modalLeadersActions';
import { modalAddLeadersOpenSelector } from '../../redux/modalLeaders/modalLeadersSelectors';

const LeadersTable = () => {
	const dispatch = useDispatch();
	const modalState = () => dispatch(modalAddLeadersOpenAction());
	const modalOpen = useSelector((state: StoreType) => modalAddLeadersOpenSelector(state));

	return (
		<div className="table">
			<div className="table-header">
				<div className="table-header__text">Leaders table for this period</div>
				<div
					className="table-header__button cursor-pointer"
					role="button"
					tabIndex={0}
					onClick={modalState}
					onKeyDown={modalState}
				>
					+ Add new score
				</div>
			</div>
			<LeadersList />
			{modalOpen && <ModalAddLeaders />}
		</div>
	);
};

export default LeadersTable;
