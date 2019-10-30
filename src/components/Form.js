import React from "react";

class Form extends React.Component {
  state = {
    firstName: "John",
    lastName: "Henry",
    submitedData: []
  };

  handleFirstNameChange = event => {
    this.setState({
      firstName: event.target.value
    });
  };

  handleLastNameChange = event => {
    this.setState({
      lastName: event.target.value
    });
  };

  handleSubmit = event => {
    event.preventDefault();
    let formData = {
      firstName: this.state.firstName,
      lastName: this.state.lastName
    };
    let dataArray = this.state.submitedData.concat(formData);
    this.setState({ submittedData: dataArray });
  };
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          type="text"
          onChange={event => this.handleFirstNameChange(event)}
          value={this.state.firstName}
        />
        <input
          type="text"
          onChange={event => this.handleLastNameChange(event)}
          value={this.state.lastName}
        />
        <input type="submit" />
      </form>
    );
  }
}

export default Form;
