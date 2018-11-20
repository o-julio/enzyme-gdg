import PropTypes from 'prop-types';
import React, {Component} from 'react';

export default class RepoFilter extends Component {
  constructor(props) {
    super(props);

    this.handleKeyUp = this.handleKeyUp.bind(this)
  }

  handleKeyUp(e) {
    const {onUpdate} = this.props

    onUpdate(e.target.value)
  }

  render() {
    return (
    <section className="border-bottom">
      <input
        type="text"
        placeholder="Filter repositories..."
        className="form-control"
        onKeyUp={this.handleKeyUp}
      />
    </section>);
  }
}

RepoFilter.propTypes = {
  onUpdate: PropTypes.func.isRequired
};
