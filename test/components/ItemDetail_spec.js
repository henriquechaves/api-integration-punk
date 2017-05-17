import React from 'react';
import { Provider } from 'react-redux';
import { configureStore } from '../../client/store';
import connectedItemDetail, { ItemDetail } from '../../client/components/ItemDetail';

// Import single dispatch actions, without middleware test
import { addEntry } from '../../client/actions/AppActions';

// Import Selectors
import { getItem } from '../../client/reducers/AppReducer';

const customItem = {
  id: 1,
  name: 'Item Name',
  tagline: 'Item TagLine',
  description: 'Item description',
  image_url: 'item_image_url.png',
};

describe('<ItemDetail ... />', () => {
  it('Test Shallow render of unconnected ItemDetail', () => {
    const wrapper = mount(<ItemDetail item={customItem} />);

    expect(wrapper.find('.container')).to.have.length(1);
		expect(wrapper.find('.h1').text()).to.equal(customItem.name);
		expect(wrapper.find('.h3').text()).to.equal(customItem.tagline);
    expect(wrapper.find('.h5').text()).to.equal(customItem.description);
		expect(wrapper.find('img').prop('src')).to.equal(customItem.image_url);
		expect(wrapper.find('Link').prop('to')).to.equal('/');
  });

});

describe('<connectedItemDetail ... />', () => {
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
  const initialState = customItem;
  // const store = configureStore(initialState);
  const store = fakeStore(initialState);

  it('Test Mount of connected ItemDetail (TODO)', () => {
    const wrapper = mount(
      <Provider store={store}>
        <connectedItemDetail />
      </Provider>
    );
  });

});
