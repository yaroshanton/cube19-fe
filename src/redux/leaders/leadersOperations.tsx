import axios from 'axios';

import { Dispatch } from 'redux';
import { ILeader } from './interfaces/leder.types';
import { fetchLeadersRequest, fetchLeadersSuccess, fetchLeadersError, addLeadersAction } from './leadersActions';

const fetchLeaders = () => async (dispatch: any) => {
	dispatch(fetchLeadersRequest());

	try {
		const { data } = await axios.get('http://coding-test.cube19.io/frontend/v1/starting-state');

		const leader: ILeader = data.map((item: any, index: number) => {
			return {
				id: index,
				name: item.name,
				score: item.score ? item.score : 0,
			};
		});

		dispatch({ type: [fetchLeadersSuccess.type], payload: leader });
	} catch (error) {
		// eslint-disable-next-line no-alert
		alert(`Ошибка запроса, перезагружаю страницу!`);
		dispatch({ type: [fetchLeadersError.type], payload: error.message });
		window.location.reload();
	}
};

const createLeader = (leader: ILeader) => (dispatch: Dispatch) => {
	dispatch({ type: [addLeadersAction.type], payload: leader });
};

// eslint-disable-next-line import/no-anonymous-default-export
export default { fetchLeaders, createLeader };
