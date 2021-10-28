import React from 'react';
import PropTypes from 'prop-types';

import './Post.css';

function Post(props) {
    const { item } = props;

    return (
        <>
            <img className='post-img' src={item.image} alt="" />
            <div className="description">
                <div className="title">{item.title}</div>
                <div className="content">{item.content}</div>
            </div>
        </>
    )
}

Post.propTypes = {
    item: PropTypes.object.isRequired,
};

export default Post;

