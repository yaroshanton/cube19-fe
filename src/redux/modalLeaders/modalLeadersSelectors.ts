import { StoreType } from '../store';

export const modalEditLeadersOpenSelector = (state: StoreType) => state.isModalEditLeadersOpen;
export const modalAddLeadersOpenSelector = (state: StoreType) => state.isModalAddLeadersOpen;
