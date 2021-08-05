import axios from 'axios';
import { Dispatch } from 'redux';
import { baseUrl } from './api/api-links';

// Types
import { IInitialLeader } from './interfaces/leder.types';
import { fetchLeadersRequest, fetchLeadersSuccess, fetchLeadersError, addLeadersAction } from './leadersActions';

export const fetchLeaders = () => async (dispatch: Dispatch) => {
	dispatch(fetchLeadersRequest());

	try {
		const { data } = await axios.get(`${baseUrl}`);

		const leader = data.map((item: IInitialLeader, index: number) => {
			return {
				id: index,
				name: item.name,
				score: item.score ? item.score : 0,
			};
		});

		dispatch({ type: [fetchLeadersSuccess.type], payload: leader });
	} catch (error) {
		// Delete alert.
		// eslint-disable-next-line no-alert
		alert(`Ошибка запроса, перезагружаю страницу!`);
		dispatch({ type: [fetchLeadersError.type], payload: error.message });
		window.location.reload();
	}
};

export const createLeader = (leader: IInitialLeader) => (dispatch: Dispatch) => {
	dispatch({ type: [addLeadersAction.type], payload: leader });
};
