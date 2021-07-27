import React from 'react';
import './LeadersTable.scss';
import LeadersList from './LeadersList/LeadersList';

const LeadersTable = () => {
	return (
		<div className="table">
			<div className="table-header">
				<div className="table-header__text">Leaders table for this period</div>
				<div className="table-header__button cursor-pointer">+ Add new score</div>
			</div>
			<LeadersList />
		</div>
	);
};

export default LeadersTable;
