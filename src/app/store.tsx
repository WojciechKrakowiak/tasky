import { createStore } from 'redux';
import { tasksReducer } from './reducers';
import initialState from './initialState';

export const store = createStore(tasksReducer, initialState);

export type AppDispatch = typeof store.dispatch;
