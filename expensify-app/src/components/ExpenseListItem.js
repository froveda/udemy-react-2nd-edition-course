import React from 'react';
import { Link } from 'react-router-dom';

const ExpenseListItem = ({ id, description, amount, createdAt }) => (
  <div>
    <Link to={`/edit/${id}`}>
      <h3>Description: {description}</h3>
    </Link>
    <ul>
      <li>Amount: {amount}</li>
      <li>Created at: {createdAt}</li>
    </ul>
  </div>
);

export default ExpenseListItem;
