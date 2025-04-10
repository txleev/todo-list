import { combineReducers } from '@reduxjs/toolkit';
import todoReducer from './todoSlice';

const rootReducer = combineReducers({
  todos: todoReducer,
});

export default rootReducer;
