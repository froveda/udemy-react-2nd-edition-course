import expensesReducer from '../../reducers/expenses';
import expenses from '../fixtures/expenses';

test('should set default state', () => {
  const state = expensesReducer(undefined, { type: '@@INIT' });
  expect(state).toEqual([]);
});

// REMOVE_EXPENSE
test('should remove expense by id', () => {
  const action = {
    type: 'REMOVE_EXPENSE',
    id: expenses[1].id
  };
  const state = expensesReducer(expenses, action);
  expect(state).toEqual([expenses[0], expenses[2]]);
});

test('should not remove expenses if id is not found', () => {
  const action = {
    type: 'REMOVE_EXPENSE',
    id: '-1'
  };
  const state = expensesReducer(expenses, action);
  expect(state).toEqual(expenses);
});

// ADD_EXPENSE
test('should add an expense', () => {
  const expense = {
    id: '4',
    description: 'New Expense',
    note: '',
    amount: 2000,
    createdAt: 0
  }
  const action = {
    type: 'ADD_EXPENSE',
    expense
  };
  const state = expensesReducer(expenses, action);
  expect(state).toEqual([...expenses, expense]);
});

// EDIT_EXPENSE
test('should edit an expense', () => {
  const description = 'New description';
  const action = {
    type: 'EDIT_EXPENSE',
    id: expenses[0].id,
    updates: {
      description
    }
  };
  const state = expensesReducer(expenses, action);
  expect(state[0].description).toBe(description);
});

test('should not edit expense if expense not found', () => {
  const description = 'New description';
  const action = {
    type: 'EDIT_EXPENSE',
    id: '-1',
    updates: {
      description
    }
  };
  const state = expensesReducer(expenses, action);
  expect(state).toEqual(expenses);
});

test('should set expenses', () => {
  const action = {
    type: 'SET_EXPENSES',
    expenses: [expenses[0]]
  };

  const state = expensesReducer(expenses, action);
  expect(state).toEqual([expenses[0]]);
});