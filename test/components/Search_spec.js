import React from 'react';
import connectedSearch, { Search } from '../../client/components/Search';
import _ from 'lodash';

describe('<Search ... />', () => {
	describe('Test render', () => {
    const searchString = 'some string';
    const wrapper = shallow(<Search search={searchString} dispatch={()=>''} />);
    it('the component was rendered', () => {
      expect(wrapper.find('form')).to.have.length(1);
      expect(wrapper.find('.input-group')).to.have.length(1);
      expect(wrapper.find('.input-group').children()).to.have.length(2);
      expect(wrapper.find('.input-group').children().find('button')).to.have.length(1);
      expect(wrapper.find('.input-group').children().find('button').props().type).to.be.equal('submit');
    });
    it('the onSubmit function exists', () => {
      expect(_.isFunction(wrapper.find('form').props().onSubmit)).to.be.true;
    });
  });
});

describe('<connectedSearch ... />', () => {
  const searchString = 'some string';
  const preventDefault = spy();
  const wrapper = mount(<Search search={searchString} dispatch={()=>''} />);
	describe('Test onClick button', () => {
    it('the button was clicked', () => {
      expect(wrapper.find('button').simulate('click', {preventDefault})).to.have.been.called;
    });
  });
  describe('Test onSubmit function', () => {
    it('the onSubmit function was called', () => {
      expect(wrapper.find('form').simulate('submit', {preventDefault})).to.have.been.called;
    });
  });
});
