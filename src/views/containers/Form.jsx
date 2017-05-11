import React from 'react';
import { Field, reduxForm } from 'redux-form';

class TestForm extends React.Component {
  render() {
    const { handleSubmit } = this.props;
    return (
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor=title>TestForm</label>
          <Field name=title component=input type=text/>
        </div>
        <button type=submit>Submit</button>
      </form>
    );
  }
}

// Decorate the form component
TestForm = reduxForm({
  form: 'Test' // a unique name for this form
})(TestForm);

export default TestForm;
