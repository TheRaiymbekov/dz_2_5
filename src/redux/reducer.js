import { combineReducers } from 'redux';
import { ADD_TASK, REMOVE_TASK, UPDATE_USER, SET_FILTER } from './action';

const initialUsers = [];

const usersReducer = (state = initialUsers, action) => {
    switch (action.type) {
        case ADD_TASK:
            return [...state, action.payload];
        case REMOVE_TASK:
            return state.filter((user) => user.id !== action.payload);
        case UPDATE_USER:
            return state.map((user) =>
                user.id === action.payload.id ? action.payload : user
            );
        default:
            return state;
    }
};

const filterReducer = (state = 'ALL', action) => {
    switch (action.type) {
        case SET_FILTER:
            return action.payload;
        default:
            return state;
    }
};

export const rootReducer = combineReducers({
    users: usersReducer,
    filter: filterReducer,
});