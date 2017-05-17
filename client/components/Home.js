import React, { Component } from 'react';
import PropTypes from 'prop-types';
//Conectando as propriedades do componente com histórico do redux
import { connect } from 'react-redux';

// Import Components
import List from './List';
import Pagination from './Pagination/Pagination';

// Import Actions
import { fetchList, fetchSearchList, fireSearch } from '../actions/AppActions';

// Import Reducers
import { getActivePage, getList, getSearchString } from '../reducers/AppReducer';

import config from '../../server/config';

// Import Style
import styles from '../assets/css/home.css';

export class Home extends Component {
  // Assim que o componente é montado no DOM ele chama essa função
  componentDidMount() {
    //Busca os dados na API - ver função fech
    this.fetch(this.props.activePage);
  }

  // Paginação dos itens
  handleChangePage = (activePage) => {
    this.fetch(activePage);
  }

  handleClearSearch = () => {
    //Atualiza o state
    this.props.dispatch(fireSearch(''));
    this.props.dispatch(fetchList(1, config.ITEMS_PER_PAGE));
  }

  fetch(activePage) {
    if (this.props.search === '') {
      this.props.dispatch(fetchList(activePage, config.ITEMS_PER_PAGE));
    } else {
      this.props.dispatch(fetchSearchList(this.props.search, activePage, config.ITEMS_PER_PAGE));
    }
  }

  serverFailure = () => {
    return (
      <div className="container-fluid">
        <div className="container">
          <div className="row">
            The server is unavailable temporarily.
          </div>
        </div>
      </div>
    );
  }

  searchResult(resultSearch) {
    return (
      <div className="container search">
        <div className={`row ${styles.searchRow}`}>
          <div className={`col-md-12 rounded text-center ${styles.searchInfo}`}>
            <span>{resultSearch} - </span>
            <button
              onClick={this.handleClearSearch}
              className={`btn ${styles.btnClear}`}
            >
              clear
            </button>
          </div>
        </div>
      </div>
    );
  }

  render() {
    if (typeof this.props.list === 'undefined' || typeof this.props.list.map !== 'function') {
      return this.serverFailure();
    }

    // Believe two pages ahead always exists, without problems
    let total = (this.props.activePage * config.ITEMS_PER_PAGE)
              + (2 * config.ITEMS_PER_PAGE);

    // Now verify if this is the very last one
    if (this.props.list.length < config.ITEMS_PER_PAGE) {
      total -= (2 * config.ITEMS_PER_PAGE);
    }

    const resultSearch = this.props.search !== '' ? `Showing results for: '${this.props.search}'` : '';

    return (
            <div className="container-fluid ">
                {resultSearch !== '' && this.searchResult(resultSearch)}
                <div className="container">
                    <List list={this.props.list} />
                </div>
                {total > config.ITEMS_PER_PAGE && <Pagination
                    itemsCountPerPage={config.ITEMS_PER_PAGE}
                    totalItemsCount={total}
                    activePage={this.props.activePage}
                    onChange={this.handleChangePage}
                    activeClass="active"
                                                  />}
            </div>
    );
  }
}

// Actions required to provide data for this component to render in sever side.
Home.need = [() => {
  return fetchList(1, config.ITEMS_PER_PAGE);
}];

// Retrieve data from store as props
function mapStateToProps(state) {
  return {
    list: getList(state),
    activePage: getActivePage(state),
    search: getSearchString(state),
  };
}

// Padroniza o que o componente faz
Home.propTypes = {
  list: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
    tagline: PropTypes.string,
    description: PropTypes.string,
    image_url: PropTypes.string,
  })).isRequired,
  activePage: PropTypes.number.isRequired,
  search: PropTypes.string,
  dispatch: PropTypes.func.isRequired,
};

// 
Home.contextTypes = { router: PropTypes.object };

export default connect(mapStateToProps)(Home);
