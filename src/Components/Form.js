import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import {
  setUserData
} from '../Actions/action';


class Form extends Component {
  constructor(props) {
    super(props)

    this.state = {
      FN: '',
      LN: '',
      email: ''
    }
  }

  handleChangeTitle = (event) => {
    this.setState({ FN: event.target.value })
  }

  handleChangeNewsBody = (event) => {
    this.setState({ LN: event.target.value })
  }

  handleChangeCategory = (event) => {
    this.setState({ email: event.target.value })
  }

  handleSubmit = () => {
    const obj = {
      FN: this.state.FN,
      LN: this.state.LN,
      email: this.state.email
    };
    this.props.dispatch(setUserData(obj));
    this.props.history.push("/list");
  }

  render() {
    const { FN, LN, email } = this.state;
    return (
      <div className="container">
        <form>
          <div className="form-group">
            <label>First Name</label>
            <input type="text"
              className="form-control"
              value={FN}
              onChange={this.handleChangeTitle}
              id="FN"
            />
          </div>
          <div className="form-group">
            <label>Last Name</label>
            <input type="text"
              className="form-control"
              value={LN}
              onChange={this.handleChangeNewsBody}
              id="LN"
            />
          </div>
          <div className="form-group">
            <label>Email</label>
            <input type="text"
              className="form-control"
              value={email}
              onChange={this.handleChangeCategory}
              id="email"
            />
          </div>
          <button type="submit" className="btn btn-success" onClick={this.handleSubmit}>Submit</button>
        </form>
      </div>
    )
  }
}

Form.propTypes = {
  dispatch: PropTypes.func
}

const mapStateToProps = ({ userStore }) => {
  const { userResponse } = userStore;
  return {
    userResponse
  }
};

export default connect(mapStateToProps)(Form);
