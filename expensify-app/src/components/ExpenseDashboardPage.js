import React from 'react';
import ConnectedExpenseList from './ExpenseList';
import ExpensesSummary from './ExpensesSummary';
import ExpenseListFilters from './ExpenseListFilters';

const ExpenseDashboardPage = () => (
  <div>
    <ExpensesSummary />
    <ExpenseListFilters />
    <ConnectedExpenseList />
  </div>
);
export default ExpenseDashboardPage;