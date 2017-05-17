// import { expect } from 'chai';
import chai from 'chai';
import expectPromised from 'chai-as-promised';
import { sinon, spy } from 'sinon';
import { mount, render, shallow } from 'enzyme';

chai.use(expectPromised);

global.spy = spy;
global.sinon = sinon;
global.expect = chai.expect;

global.expectPromised = expectPromised;

global.mount = mount;
global.render = render;
global.shallow = shallow;

function donothing() {
  return null;
}

require.extensions['.css'] = donothing;
require.extensions['.less'] = donothing;
require.extensions['.scss'] = donothing;
require.extensions['.jpg'] = donothing;
require.extensions['.jpeg'] = donothing;
require.extensions['.png'] = donothing;
