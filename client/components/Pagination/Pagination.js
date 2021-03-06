import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Paginator from 'paginator';

import Page from './Page';

import styles from '../../assets/css/pagination.css';

export default class Pagination extends Component {
  static propTypes = {
    totalItemsCount: PropTypes.number.isRequired,
    onChange: PropTypes.func.isRequired,
    activePage: PropTypes.number,
    itemsCountPerPage: PropTypes.number,
    pageRangeDisplayed: PropTypes.number,
    prevPageText: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.element,
    ]),
    nextPageText: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.element,
    ]),
    lastPageText: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.element,
    ]),
    firstPageText: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.element,
    ]),
    innerClass: PropTypes.string,
    activeClass: PropTypes.string,
    disabledClass: PropTypes.string,
    hideDisabled: PropTypes.bool,
  }

  static defaultProps = {
    itemsCountPerPage: 10,
    pageRangeDisplayed: 3,
    activePage: 1,
    prevPageText: '⟨',
    firstPageText: '«',
    nextPageText: '⟩',
    lastPageText: '»',
    innerClass: 'pagination',
  }

  buildPages() {
    const pages = [];
    const {
      itemsCountPerPage,
      pageRangeDisplayed,
      activePage,
      prevPageText,
      nextPageText,
      firstPageText,
      totalItemsCount,
      onChange,
      activeClass,
      disabledClass,
      hideDisabled,
    } = this.props;
    // LastPageText, // only for this app

    const paginationInfo = new Paginator(itemsCountPerPage, pageRangeDisplayed)
    .build(totalItemsCount, activePage);

    if (paginationInfo.first_page !== paginationInfo.last_page) {
      for (let i = paginationInfo.first_page; i <= paginationInfo.last_page; i++) {
        pages.push(
                    <Page
                        isActive={i === activePage}
                        key={i}
                        pageNumber={i}
                        pageText={`${i}`}
                        onClick={onChange}
                        activeClass={activeClass}
                    />
        );
      }
    }

    hideDisabled && !paginationInfo.has_previous_page || pages.unshift(
            <Page
                key={`prev${paginationInfo.previous_page}`}
                pageNumber={paginationInfo.previous_page}
                onClick={onChange}
                pageText={prevPageText}
                isDisabled={!paginationInfo.has_previous_page}
                disabledClass={disabledClass}
            />
    );

    hideDisabled && !paginationInfo.has_previous_page || pages.unshift(
            <Page
                key={'first'}
                pageNumber={1}
                onClick={onChange}
                pageText={firstPageText}
                isDisabled={paginationInfo.current_page === paginationInfo.first_page}
                disabledClass={disabledClass}
            />
    );

    hideDisabled && !paginationInfo.has_next_page || pages.push(
            <Page
                key={`next${paginationInfo.next_page}`}
                pageNumber={paginationInfo.next_page}
                onClick={onChange}
                pageText={nextPageText}
                isDisabled={!paginationInfo.has_next_page}
                disabledClass={disabledClass}
            />
    );

    // Only for this app
    // (hideDisabled && !paginationInfo.has_next_page) || pages.push(
    //   <Page
    //     Key={'last'}
    //     PageNumber={paginationInfo.total_pages}
    //     OnClick={onChange}
    //     PageText={lastPageText}
    //     IsDisabled={paginationInfo.current_page === paginationInfo.total_pages}
    //     DisabledClass={disabledClass}
    //   />
    // );

    return pages;
  }

  render() {
    const pages = this.buildPages();


    return (
            <div className={`container ${styles.margintop}`}>
                <div className="row">
                    <div className="col-lg-12 text-center">
                        <ul className={`${this.props.innerClass} justify-content-center`}>{pages}</ul>
                    </div>
                </div>
            </div>
    );
  }
}
