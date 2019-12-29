import React, { Component } from "react";
import axios from "axios";
import { stat } from "fs";
class AddFormula extends Component {
  state = {
    name: "",
    code: ""
  };
  // componentDidMount() {
  //   const AllFormulas = window.$FormulaShow;
  //   axios.get(AllFormulas).then(res => this.setState(res.data));
  // }

  handleSubmit = event => {
    event.preventDefault();
    const formula = {
      name: this.state.name,
      code: this.state.code
    };
    const formulaAddPost = window.$FormulaAdd;
    axios.post(formulaAddPost, formula).then(res => console.log(res.data));
  };

  onNameChange = e => {
    this.setState({
      name: e.target.value
    });
  };

  onCodeChange = e => {
    this.setState({
      code: e.target.value
    });
  };

  render() {
    const FormulaAdd = window.$FormulaAdd;

    return (
      <form onSubmit={this.handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="formula name"
          onChange={this.onNameChange}
        />
        <input
          type="text"
          name="code"
          placeholder="formula code"
          onChange={this.onCodeChange}
        />
        <input type="submit" />
      </form>
    );
  }
}

export default AddFormula;
