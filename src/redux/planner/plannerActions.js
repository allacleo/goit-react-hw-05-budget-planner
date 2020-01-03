import shortid from 'shortid';

import { SAVE_BUDGET, ADD_EXPENSE, REMOVE_EXPENSE } from './plannerTypes';


export const saveBudget = value => {
    return {
      type: SAVE_BUDGET,
      payload: {
        value: Number(value),
      },
    };
  };
  
  export const addExpense = ({ name, amount }) => {
    return {
      type: ADD_EXPENSE,
      payload: {
        expense: {
          id: shortid.generate(),
          name,
          amount: Number(amount),
        },
      },
    };
  };
  
  export const removeExpense = id => {
    return {
      type: REMOVE_EXPENSE,
      payload: {
        id,
      },
    };
  };
