import PropTypes from 'prop-types';
import React, { Component } from 'react';
import Profile from './components/Profile'
import RepoFilter from './components/RepoFilter'
import RepoList from './components/RepoList'

export default class User extends Component {
  constructor() {
    super()

    this.state = {filter: ''}

    this.handleFilterUpdate = this.handleFilterUpdate.bind(this)
  }

  handleFilterUpdate(filter) {
    this.setState({
      filter
    })
  }

  render() {
    const {username} = this.props.params
    const {filter} = this.state
    return (
      <div className="container">
        <div className="row">
          <div className="col-sm-3">
            <Profile username={username} />
          </div>
          <div className="col-sm-9">
            <h3>Repositories</h3>
            <RepoFilter onUpdate={this.handleFilterUpdate} />
            <RepoList filter={filter} username={username} />
          </div>
        </div>
      </div>
    );
  }
}

User.propTypes = {
  params: PropTypes.shape({
    username: PropTypes.string,
  }),
}
