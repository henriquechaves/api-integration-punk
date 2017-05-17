import * as app from '../../client/reducers/AppReducer';
import reducer from '../../client/reducers/index';
import configureStore from '../../client/store';
import * as actions from './AppActions';
import config from '../../server/config';

describe('Actions with their async', () => {
  let state;
  let store;

  beforeEach(() => {
    store = configureStore();
    state = store.getState();
  });

  describe('edge/boundary test', () => {
    describe('test item id=1 (first of the config page)', () => {
      beforeEach(() => {
        store.dispatch(actions.fetchItem(1));
      });
      describe('', () => {
        it('eventually get list length', () => {
          const item = app.getItem(store.getState(), 1);
          expect(
            Promise.resolve(app.getList(store.getState()))
          ).to.eventually.have.length(1);
        });
      });
    });
    describe('test item id='+config.ITEMS_PER_PAGE+' (last of the config page)', () => {
      beforeEach(() => {
        store.dispatch(actions.fetchItem(config.ITEMS_PER_PAGE));
      });
      describe('', () => {
        it('eventually get list length', () => {
          const item = app.getItem(store.getState(), config.ITEMS_PER_PAGE);
          expect(
            Promise.resolve(app.getList(store.getState()))
          ).to.eventually.have.length(1);
        });
      });
    });
  });

  describe('fetch list test', () => {
    beforeEach(() => {
      store.dispatch(actions.fetchList());
    });
    describe('test list', () => {
      it('eventually get list length', () => {
        return expect(
          Promise.resolve(app.getList(store.getState()))
        ).to.eventually.have.length(config.ITEMS_PER_PAGE);
      });
    });
  });

  describe('fetch search test', () => {
    beforeEach(() => {
      store.dispatch(actions.fetchSearchList(''));
    });
    describe('test the search list', () => {
      it('eventually get list length (must be all of items per page)', () => {
        expect(
          Promise.resolve(app.getList(store.getState()))
        ).to.eventually.have.length(config.ITEMS_PER_PAGE);
      });
    });
  });

  describe('fetch search string test', () => {
    beforeEach(() => {
      store.dispatch(actions.fetchSearchList('some string'));
    });
    describe('now, test search string', () => {
      it('eventually get the search string', () => {
        expect(
          Promise.resolve(app.getSearchString(store.getState()))
        ).to.eventually.equal('some string');
      });
    });
  });

});
