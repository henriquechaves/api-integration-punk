import React from 'react';
import PropTypes from 'prop-types';

// Import Components
import ListItem from './ListItem';

function List(props) {
  return (
        <div className="row">
            {props.list.map(item =>
                <ListItem item={item} key={item.id} />
      )}
        </div>
  );
}

List.propTypes = {
  list: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
    tagline: PropTypes.string,
    description: PropTypes.string,
    image_url: PropTypes.string,
  })).isRequired,
};

export default List;
