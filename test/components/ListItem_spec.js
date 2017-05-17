import React from 'react';
import ListItem from '../../client/components/ListItem';

describe('<ListItem ... />', () => {
	const customItem = {
		id: 1,
		name: 'Item Name',
		tagline: 'Item TagLine',
		description: 'Item description',
		image_url: 'item_image_url.png',
	};

	it('Test setting the props...', () => {
		const wrapper = mount(<ListItem item={customItem} />);

		expect(wrapper.find('.card')).to.have.length(1);
		expect(wrapper.find('.card-title').text()).to.equal(customItem.name);
		expect(wrapper.find('.card-text').text()).to.equal(customItem.tagline);
		expect(wrapper.find('img').prop('src')).to.equal(customItem.image_url);
		expect(wrapper.find('Link').prop('to')).to.equal('/itens/' + customItem.id);
	});
});
