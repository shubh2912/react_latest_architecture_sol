import React, { Component } from 'react';
import { connect } from 'react-redux';



class DisplayUsers extends Component {

    handleClick = () => {
        this.props.history.push("/");
    }

    render() {
        const { userResponse } = this.props;
        return (

            <div className="container">
                <table className="table table-hover table-striped table-bordered">
                    <thead>
                        <tr>
                            <th>Firstname</th>
                            <th>Lastname</th>
                            <th>Email</th>
                        </tr>
                    </thead>
                    <tbody>
                        {userResponse.map((item, Key) => (<tr key={Key}>
                            <td>{item.FN}</td>
                            <td>{item.LN}</td>
                            <td>{item.email}</td>
                        </tr>))}
                    </tbody>
                </table>
                <br />
                <button className="btn btn-success" onClick={this.handleClick}>Back</button>
            </div>
        )
    }
}


const mapStateToProps = ({ userStore }) => {
    const { userResponse } = userStore;
    return {
        userResponse
    }
};

export default connect(mapStateToProps)(DisplayUsers);
