import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import T from 'prop-types';
import selectors from '../redux/planner/plannerSelectors';

import Value from '../components/Value';

const Container = styled.section`
  display: inline-flex;
  justify-content: space-between;
  align-items: center;
`;


const Values = ({ budget = 0, expenses = 0, balance = 0 }) => (
  <Container>
    <Value label="Budget" value={budget} isPositive />
    <Value label="Expenses" value={expenses} />
    <Value label="Balance" value={balance} isPositive={balance >= 0} />
  </Container>
);

Values.propTypes = {
  budget: T.number.isRequired,
  expenses: T.number.isRequired,
  balance: T.number.isRequired,
};

const mapStateToProps = state => {
  return {
    budget: selectors.getBudget(state),
    expenses: selectors.getExpensesTotal(state),
    balance: selectors.getBalance(state),
  };
};

export default connect(mapStateToProps)(Values);
 