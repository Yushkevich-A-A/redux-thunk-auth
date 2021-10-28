import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import News from './News/News';

import './NewsList.css';

function NewsList(props) {
    const { list } = props;
    return (
        <div className='news-list'>
            {
                list.map( item => <Link to={`/news/${item.id}`} key={item.id}><News item={item}/></Link>)
            }
        </div>
    )
}

NewsList.propTypes = {
    list: PropTypes.array.isRequired,
};

export default NewsList;

