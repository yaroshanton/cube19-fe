import { useDispatch } from 'react-redux';

import LeadersList from '../LeadersList';

import './LeadersTable.scss';

import { modalAddLeadersOpenAction } from '../../redux/modalLeaders/modalLeadersActions';

const LeadersTable = () => {
	const dispatch = useDispatch();
	const onToggleModal = () => dispatch(modalAddLeadersOpenAction());

	return (
		<div className="table">
			<div className="table-header">
				<div className="table-header__text">Leaders table for this period</div>
				<button type="button" className="table-button__left">
					{' '}
				</button>
				<button type="button" className="table-button__right">
					{' '}
				</button>
				<div
					className="table-header__button cursor-pointer"
					role="button"
					tabIndex={0}
					onClick={onToggleModal}
					onKeyDown={onToggleModal}
				>
					+ Add new score
				</div>
			</div>

			<LeadersList />
		</div>
	);
};

export default LeadersTable;
