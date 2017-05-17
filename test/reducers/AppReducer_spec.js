import * as app from '../../client/reducers/AppReducer';
import reducer from '../../client/reducers/index';

describe('reducers', () => {
  let state;

  describe('items', () => {
    const entry = {
      id: 4,
      name: 'Item Name 4',
      tagline: 'Item TagLine 4',
      description: 'Item description 4',
      image_url: 'item_image_url4.png',
    };
    const entries = [{
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
    ];
    describe('when items are received', () => {

      beforeEach(() => {
        state = reducer({}, {
          type: 'ADD_ENTRIES',
          entries: entries,
        });
      });

      it('contains the items from the action before', () => {
        expect(app.getItem(state, entries[0].id)).to.equal(entries[0]);
        expect(app.getItem(state, entries[1].id)).to.equal(entries[1]);
        expect(app.getItem(state, entries[2].id)).to.equal(entries[2]);
      });

      it ('contains no other items', () => {
        expect(app.getItem(state, 4)).to.equal(undefined);
      });

      it('get all of the items', () => {
        expect(app.getList(state)).to.have.length(3);
        expect(app.getList(state)).to.equal(entries);
      });

    });
    describe('when one item is received', () => {
      beforeEach(() => {
        state = reducer({}, {
          type: 'ADD_ENTRY',
          entry: entry,
        });
      });

      it('contains the item from the action before', () => {
        expect(app.getItem(state, entry.id)).to.equal(entry);
      });

      it ('contains no other items', () => {
        expect(app.getItem(state, 1)).to.equal(undefined);
      });

      it('get all of the items', () => {
        expect(app.getList(state)).to.have.length(1);
      });

    });
  });

  describe('search', () => {
    describe('when search is set to empty', () => {
      beforeEach(() => {
        state = reducer({}, {
          type: 'FIRE_SEARCH',
          search: '',
        });
      });
      it ('search is empty', () => {
        expect(app.getSearchString(state)).to.equal('');
      });
    });
    describe('when search is set to some string', () => {
      beforeEach(() => {
        state = reducer({}, {
          type: 'FIRE_SEARCH',
          search: 'some string',
        });
      });
      it ('search is set to some string' , () => {
        expect(app.getSearchString(state)).to.equal('some string');
      });
    });
  });

  describe('page', () => {
    describe('when page is set to 1', () => {
      beforeEach(() => {
        state = reducer({}, {
          type: 'CHANGE_PAGE',
          activePage: 1,
        });
      });
      it ('page is 1', () => {
        expect(app.getActivePage(state)).to.equal(1);
      });
    });
    describe('when page is set to 2', () => {
      beforeEach(() => {
        state = reducer({}, {
          type: 'CHANGE_PAGE',
          activePage: 2,
        });
      });
      it ('page is set to 2' , () => {
        expect(app.getActivePage(state)).to.equal(2);
      });
    });
    describe('when page is set to 10', () => {
      beforeEach(() => {
        state = reducer({}, {
          type: 'CHANGE_PAGE',
          activePage: 10,
        });
      });
      it ('page is set to 10' , () => {
        expect(app.getActivePage(state)).to.equal(10);
      });
    });
  });

});
