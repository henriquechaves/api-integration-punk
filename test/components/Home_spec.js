import React from 'react';
import { Provider } from 'react-redux';
import { Router, browserHistory } from 'react-router';

import { configureStore } from '../../client/store';
import connectedHome, { Home } from '../../client/components/Home';
import List from '../../client/components/List';
import Pagination from '../../client/components/Pagination/Pagination';

const props = {
  list: [{
      id: 1,
      name: 'Item Name 1',
      tagline: 'Item TagLine 1',
      description: 'Item description 1',
      image_url: 'item_image_url1.png',
    }, {
      id: 2,
      name: 'Item Name 2',
      tagline: 'Item TagLine 2',
      description: 'Item description 2',
      image_url: 'item_image_url2.png',
    }, {
      id: 3,
      name: 'Item Name 3',
      tagline: 'Item TagLine 3',
      description: 'Item description 3',
      image_url: 'item_image_url3.png',
    },
  ],
  activePage: 2,
  search: 'some search',
  dispatch: () => '',
}

describe('<Home ... />', () => {
  it('Test Shallow render of unconnected Home', () => {
    const wrapper = shallow(
      <Home
        list={props.list}
        activePage={props.activePage}
        search={props.search}
        dispatch={props.dispatch}
      />
    );
    expect(wrapper.find('.container-fluid')).to.have.length(1);

    expect(wrapper.children().find('.search')).to.have.length(1);
    expect(wrapper.find(List)).to.have.length(1);
    expect(wrapper.find(Pagination)).to.have.length(1);
    expect(wrapper.children()).to.have.length(3);

    expect(wrapper.children().find('.search').text()).to.equal('Showing results for: \'' + props.search + '\' - clear');
    expect(wrapper.find(List).props().list).to.have.length(props.list.length);
    expect(wrapper.find(Pagination).props().activePage).to.equal(props.activePage);
    expect(wrapper.find('.container-fluid').text()).to.equal('Showing results for: \''+props.search+'\' - clear<List /><Pagination />');
  });

});

describe('<connectedHome ... />', () => {
  const fakeStore = state => {
    return {
      default: () => {},
      subscribe: () => {},
      dispatch: () => {},
      getState: () => {
        return {...state}
      }
    }
  }
  const initialState = props;
  // const store = configureStore(initialState);
  const store = fakeStore(initialState);

  it('Test Mount render of connected Home (TODO)', () => {
    const wrapper = mount(
      <Provider store={store}>
        <connectedHome />
      </Provider>
    );

  });
});
