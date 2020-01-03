import React from "react";
import styled from "styled-components";

import BudgetForm from "../components/BudgetForm";
import ExpenseForm from "../components/ExpenseForm";
import ExpensesTable from "../components/ExpensesTable";
import Values from "../components/Values";

const Container = styled.div`
  display: grid;
  grid-template-columns: 340px 1fr;
  align-items: flex-start;
  grid-gap: 24px;
  max-width: 960px;
  padding-left: 16px;
  padding-right: 16px;
  margin-left: auto;
  margin-right: auto;
`;

const App = ({expenses}) => (
  <Container>
      <BudgetForm />
      <Values />
      <ExpenseForm />
      <ExpensesTable />
  </Container>

);

App.defaultProps = {
    expenses: [],
};

// App.propTypes = {
//     expenses: Text.arrayOf(T.object).isRequired,
// };

export default App;

