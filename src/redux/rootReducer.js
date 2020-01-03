import { combineReducers } from 'redux';
import { budgetReducer, expenseReducer } from './planner/plannerReducers';

export default combineReducers({
  budget: budgetReducer,
  expenses: expenseReducer,
});