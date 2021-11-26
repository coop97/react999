import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

function JSReferInfo({link, id, title, desc1, desc2, syntax, definition}) {
    return (
        <li>
            <Link to = {{pathname: "js-refer-detail", state: {link, id, title, desc1, desc2, syntax, definition}}}>
                <span className="num">{id}</span>
                <span className="attr">{title}</span>
                <span className="desc">{desc2}</span>
                <span className="Inline">{syntax}</span>
            </Link>
        </li>
    )
} 

JSReferInfo.propTypes = {
    id: PropTypes.number.isRequired,
    link: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    desc1: PropTypes.string.isRequired,
    desc2: PropTypes.string.isRequired,
    syntax: PropTypes.string,
    definition: PropTypes.array.isRequired,
}

export default JSReferInfo;