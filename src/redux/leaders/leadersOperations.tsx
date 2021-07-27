import axios from 'axios';
import {
  fetchLeadersRequest,
  fetchLeadersSuccess,
  fetchLeadersError,
} from './leadersActions';

const fetchLeaders = () => async (dispatch: any) => {
  dispatch(fetchLeadersRequest());

  try {  
    const {data} = await axios.get('http://coding-test.cube19.io/frontend/v1/starting-state');
  
    dispatch({ type: [fetchLeadersSuccess.type], payload: data })
  } catch (error) {
    dispatch({ type: [fetchLeadersError.type], payload: error.message })
  }
};

// eslint-disable-next-line import/no-anonymous-default-export
export default {fetchLeaders};