import axios from 'axios';
import { Dispatch } from 'redux';
import {
  fetchLeadersRequest,
  fetchLeadersSuccess,
  fetchLeadersError,
} from './leadersActions';

export const fetchLeaders = () => async (dispatch: Dispatch) => {
  dispatch(fetchLeadersRequest());

  try {
    const data = await axios.get('http://coding-test.cube19.io/frontend/v1/starting-state');

    dispatch(fetchLeadersSuccess(data));
  } catch (error) {
    dispatch(fetchLeadersError());
  }
};
