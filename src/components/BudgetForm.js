import React, { Component } from 'react';
import { connect } from 'react-redux';
import T from 'prop-types';
import Form from '../components/shared/Form';
import Label from '../components/shared/Label';
import Input from '../components/shared/Input';
import Button from '../components/shared/Button';

import { saveBudget } from '../redux/planner/plannerActions';

const labelStyles = `
  margin-bottom: 16px;  
`;

class BudgetForm extends Component {
  static propTypes = {
    onSave: T.func.isRequired,
  };
  
  state = {
    budget: 0,
  };

  handleChange = e => {
    this.setState({
      budget: e.target.value,
    });
  };

  handleSubmit = e => {
    e.preventDefault();

    this.props.onSave(this.state.budget);
    this.setState({ budget: 0 });
  };

  render() {
    return (
      <Form onSubmit={this.handleSubmit}>
        <Label customStyles={labelStyles}>
          Enter your total budget
          <Input
            type="number"
            value={this.state.budget}
            onChange={this.handleChange}
          />
        </Label>

        <Button label="Save" type="submit" />
      </Form>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  onSave: value => dispatch(saveBudget(value)),
});

export default connect(null, mapDispatchToProps)(BudgetForm);