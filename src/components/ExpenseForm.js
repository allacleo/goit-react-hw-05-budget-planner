import React, { Component } from 'react';
import T from 'prop-types';
import { connect } from 'react-redux';
import Form from '../components/shared/Form';
import Label from '../components/shared/Label';
import Input from '../components/shared/Input';
import Button from '../components/shared/Button';

import { addExpense } from '../redux/planner/plannerActions';

const labelStyles = `
  margin-bottom: 16px;  
`;

 class ExpenseForm extends Component {
  static propTypes = {
    onSave: T.func.isRequired,
  };

  state = {
    name: '',
    amount: 0,
  };

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  handleSubmit = e => {
    e.preventDefault();

    this.props.onSave({ ...this.state });
    this.setState({ name: '', amount: 0 });
  };

  render() {
    return (
      <Form onSubmit={this.handleSubmit}>
        <Label customStyles={labelStyles}>
          Enter expense name
          <Input
            type="text"
            name="name"
            value={this.state.name}
            onChange={this.handleChange}
          />
        </Label>
        <Label customStyles={labelStyles}>
          Enter expense amount
          <Input
            type="number"
            name="amount"
            value={this.state.amount}
            onChange={this.handleChange}
          />
        </Label>

        <Button label="Add" type="submit" />
      </Form>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  onSave: expense => dispatch(addExpense(expense)),
});

export default connect(null, mapDispatchToProps)(ExpenseForm);