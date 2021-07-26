import { createAction } from '@reduxjs/toolkit';

export const fetchLeadersRequest = createAction(
  'leaders/fetchLeadersRequest',
);
export const fetchLeadersSuccess = createAction(
  'leaders/fetchLeadersSuccess',
);
export const fetchLeadersError = createAction(
  'leaders/fetchLeadersError',
);
