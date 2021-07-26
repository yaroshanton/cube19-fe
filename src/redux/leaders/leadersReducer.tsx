import { createReducer } from '@reduxjs/toolkit';
import { fetchLeadersSuccess } from './leadersActions';

export const leaders = createReducer([], {
  [fetchLeadersSuccess.type]: (_, { payload }) => payload,
});
