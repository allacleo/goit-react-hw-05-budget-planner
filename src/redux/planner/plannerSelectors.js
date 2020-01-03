import { createSelector } from 'reselect';

const getBudget = state => state.budget;

const getAllExpenses = state => state.expenses;

const getExpensesTotal = createSelector(getAllExpenses, expenses =>
  expenses.reduce((total, expense) => total + expense.amount, 0),
);

const getBalance = state => getBudget(state) - getExpensesTotal(state);

export default {
    getBudget,
    getAllExpenses,
    getBalance,
    getExpensesTotal,
};