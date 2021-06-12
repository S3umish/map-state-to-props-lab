import React, { Component } from 'react';

// add any needed imports here
import { connect } from 'react-redux'
class Users extends Component {

  render() {
    
    return (
      <div>
        <h3>TotalUsers = {this.props.users.length} </h3>
        
        <ul>

        Users !!
          { this.props.users.map(user => <li>{user.username},{user.hometown} </li>) }
        
    
          {/* Write code here that displays the usernames of all users in the Redux store */}
          {/* In addition, display the total number of users curently in the store */}
        </ul>
      </div>
    )
  }
}

//add mapStateToProps here

const mapStateToProps = state => {
  return {
    
    users: state.users
  }
}

// connect this component to Redux
export default  connect(mapStateToProps)(Users)
