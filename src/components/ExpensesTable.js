import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import Button from '../components/shared/Button';
import T from 'prop-types';
import selectors from '../redux/planner/plannerSelectors';
import {removeExpense} from '../redux/planner/plannerActions';

const Table = styled.table`
  border-collapse: collapse;
  text-align: center;
  width: 100%;

  tr {
    border-bottom: 1px solid #212121;
  }

  td,
  th {
    padding-top: 8px;
    padding-bottom: 8px;
  }
`;

const ExpensesTable = ({ items = [], onRemove }) => (
  <Table>
    <thead>
      <tr>
        <th>Expense name</th>
        <th>Expense amount</th>
        <th />
      </tr>
    </thead>
    <tbody>
      {items.map(({ id, name, amount }) => (
        <tr key={id}>
          <td>{name}</td>
          <td>{amount}</td>
          <td>
            <Button label="Delete" onClick={() => onRemove(id)} />
          </td>
        </tr>
      ))}
    </tbody>
  </Table>
);

ExpensesTable.propTypes = {
  items: T.arrayOf(T.shape({
    id: T.string,
    name: T.string,
    amount: T.number,
  })).isRequired,
  onRemove: T.func.isRequired,
};



const mapStateToProps = state => {
  return {
    items: selectors.getAllExpenses(state),
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onRemove: id => dispatch(removeExpense(id)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ExpensesTable);
