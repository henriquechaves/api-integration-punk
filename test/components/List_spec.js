import React from 'react';
import List from '../../client/components/List';
import ListItem from '../../client/components/ListItem';

describe('<List ... />', () => {
	const list = [{
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
	},];


	it('Setting the props...', () => {
		const wrapper = shallow(<List list={list} />);
		expect(wrapper.find('.row').children()).to.have.length(list.length);
		expect(wrapper.find(ListItem)).to.have.length(list.length);
	});
});
