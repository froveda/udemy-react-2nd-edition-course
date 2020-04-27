import selectTotalExpenses from '../../selectors/expenses-total';
import expenses from '../fixtures/expenses';

test('should return 0 if no expenses', () => {
  const total = selectTotalExpenses([]);
  expect(total).toBe(0);
});

test('should correctly add up one expense', () => {
  const expense = expenses[0];
  const total = selectTotalExpenses([expense]);
  expect(total).toBe(expense.amount);
});

test('should correctly add up multiple expense', () => {
  const total = selectTotalExpenses(expenses);
  expect(total).toBe(114195);
});
