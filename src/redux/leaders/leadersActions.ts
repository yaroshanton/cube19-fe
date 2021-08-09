import axios from 'axios';
import { Dispatch } from 'redux';

import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { baseUrl } from './api/api-links';

import { ILeader, IInitialLeader } from './interfaces/leder.types';
import { fetchLeadersRequest, fetchLeadersSuccess, fetchLeadersError, addLeadersAction } from './actionTypes';

export const fetchLeaders = () => async (dispatch: Dispatch) => {
	dispatch(fetchLeadersRequest());

	try {
		const { data } = await axios.get(`${baseUrl}`);

		const leader = data.map((item: ILeader, index: number) => {
			return {
				id: index,
				name: item.name,
				score: item.score ? item.score : 0,
			};
		});

		dispatch({ type: [fetchLeadersSuccess.type], payload: leader });
	} catch (error) {
		toast.error('🦄 Request error, reloading the page!', {
			autoClose: 2000,
		});

		dispatch({ type: [fetchLeadersError.type], payload: error.message });
	}
};

export const createLeader = (leader: IInitialLeader) => (dispatch: Dispatch) => {
	dispatch({ type: [addLeadersAction.type], payload: leader });
};
