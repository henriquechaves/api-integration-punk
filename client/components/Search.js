import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import sanitizeHtml from 'sanitize-html';

// Import Actions
import { fetchSearchList } from '../actions/AppActions';

// Import Reducers
import { getSearchString } from '../reducers/AppReducer';

// Import Actions
import styles from '../assets/css/search.css';

export class Search extends Component {
  constructor(props) {
    super(props);
    this.state = { search: props.search };
  }

  // Useful if the search need be deleted from outside
  componentWillReceiveProps(nextProps) {
    this.setState({ search: nextProps.search });
  }

  handleChange = (e) => {
    this.setState({ search: e.target.value });
  }

  handleSearch = (e) => {
    e.preventDefault();
    const search = sanitizeHtml(this.refs.search.value);

    this.props.dispatch(fetchSearchList(search));
  }

  render() {
    return (
            <form onSubmit={this.handleSearch} className="form-inline text-right" role="search">
                <div className="input-group text-right">
                    <input
                      value={this.state.search}
                      onChange={this.handleChange}
                      type="text"
                      className={`form-control ${styles.inputSearch}`}
                      placeholder="Search for..."
                      ref="search"
                    />
                    <span className="input-group-btn">
                        <button className={`btn ${styles.btnSearch}`} type="submit">
              Go!
            </button>
                    </span>
                </div>
            </form>
    );
  }
}

function mapStateToProps(state) {
  return { search: getSearchString(state) };
}

Search.propTypes = {
  search: PropTypes.string,
  dispatch: PropTypes.func.isRequired,
};

export default connect(mapStateToProps)(Search);
