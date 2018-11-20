import PropTypes from 'prop-types';
import React, {Component} from 'react';

export default class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: ''
    }

    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleChange = this.handleChange.bind(this)
  }

  handleSubmit(e) {
    e.preventDefault();
    this.context.router.push({pathname: `/${this.state.username}`});
  }

  handleChange(e) {
    this.setState({
      username: e.target.value
    })
  }

  render() {
    return (
      <section className="container home">
        <form
          className="form-inline"
          onSubmit={this.handleSubmit}
        >
          <div className="form-group">
            <div className="input-group">
              <input
                type="text"
                placeholder="Enter a GitHub user..."
                className="form-control"
                value={this.state.username}
                onChange={this.handleChange}
              />
            </div>
          </div>
          <button type="submit" className="btn btn-primary">
            Go
          </button>
        </form>
      </section>
    );
  }
}

Home.contextTypes = {
  router: PropTypes.object.isRequired,
}
