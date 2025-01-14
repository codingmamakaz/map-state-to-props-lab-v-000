import React, { Component } from 'react';
import { connect } from 'react-redux'


class Users extends Component {
  render() {
    return (
      <div>
        <ul>
          {this.props.users.map((user) => (
            <li key={user.id}>
                {user.username}
            </li>
            ))}
        </ul>
        {this.props.users.length}
      </div>
    )
  }
}


const mapStateToProps = (state) => {
  return { users : state.users}
}

export default connect(mapStateToProps)(Users);

