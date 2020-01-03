import { SAVE_BUDGET, ADD_EXPENSE, REMOVE_EXPENSE } from './plannerTypes';

export const budgetReducer = (state = 0, { type, payload }) => {
  switch (type) {
    case SAVE_BUDGET:
      return payload.value;

    default:
      return state;
  }
};

export const expenseReducer = (state = [], { type, payload }) => {
  switch (type) {
    case ADD_EXPENSE:
      return [...state, payload.expense];

    case REMOVE_EXPENSE:
      return state.filter(expense => expense.id !== payload.id);

    default:
      return state;
  }
};