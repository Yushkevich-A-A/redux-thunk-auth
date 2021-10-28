import React from 'react';
import PropTypes from 'prop-types';

import './News.css';
import Post from './Post/Post';

function News(props) {
    return (
        <div className='news'>
            <Post {...props}/>
        </div>
    )
}

News.propTypes = {
    item: PropTypes.object.isRequired,
};

export default News;

