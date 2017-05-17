import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router';

// Import Style
import styles from '../assets/css/listItem.css';

function ListItem(props) {
  return (
        <div className={`col-md-4 ${styles.listCard}`}>
            <div className={`card ${styles.myCard}`}>
                <img className={`card-img-top mx-auto d-block img-responsive ${styles.imgCard}`} src={props.item.image_url} alt={props.item.name} />
                <div className="card-block">
                    <h4 className="card-title">{props.item.name}</h4>
                    <p className="card-text">{props.item.tagline}</p>
                    <Link className="btn btn-warning" to={`/itens/${props.item.id}`} >
            View Details
          </Link>
                </div>
            </div>
        </div>
  );
}

ListItem.propTypes = {
  item: PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
    tagline: PropTypes.string,
    description: PropTypes.string,
    image_url: PropTypes.string,
  }).isRequired,
};

export default ListItem;
