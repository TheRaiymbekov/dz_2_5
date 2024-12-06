export const ADD_TASK = 'ADD_TASK';
export const REMOVE_TASK = 'REMOVE_TASK';
export const UPDATE_USER = 'UPDATE_USER';
export const SET_FILTER = 'SET_FILTER';

export const addTask = (user) => ({ type: ADD_TASK, payload: user });
export const removeTask = (id) => ({ type: REMOVE_TASK, payload: id });
export const updateUser = (user) => ({ type: UPDATE_USER, payload: user });
export const setFilter = (filter) => ({ type: SET_FILTER, payload: filter });