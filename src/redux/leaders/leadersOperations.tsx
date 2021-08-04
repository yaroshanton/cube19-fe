import axios from 'axios';
import { Dispatch } from 'redux';

// Types
import { ILeader } from './interfaces/leder.types';
import { fetchLeadersRequest, fetchLeadersSuccess, fetchLeadersError, addLeadersAction } from './leadersActions';

// TODO: Rename file to actions
// TODO: Delete tsx and create ts files
export const fetchLeaders = () => async (dispatch: Dispatch) => {
	dispatch(fetchLeadersRequest());

	try {
		// TODO: Create file with api links
		const { data } = await axios.get('http://coding-test.cube19.io/frontend/v1/starting-state');

		// TODO: delete any
		const leader: ILeader = data.map((item: any, index: number) => {
			return {
				id: index,
				name: item.name,
				score: item.score ? item.score : 0,
			};
		});

		dispatch({ type: [fetchLeadersSuccess.type], payload: leader });
	} catch (error) {
		// Delete alert. Connect toaster lib
		// eslint-disable-next-line no-alert
		alert(`Ошибка запроса, перезагружаю страницу!`);
		dispatch({ type: [fetchLeadersError.type], payload: error.message });
		// TODO: Delete this trash
		window.location.reload();
	}
};

export const createLeader = (leader: ILeader) => (dispatch: Dispatch) => {
	dispatch({ type: [addLeadersAction.type], payload: leader });
};
