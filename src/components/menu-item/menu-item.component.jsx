import React from 'react';
import { useMatch, useNavigate } from 'react-router-dom';

import './menu-item.styles.scss';

const MenuItem = ({ title, imageUrl, size, linkUrl }) => {
    const navigate = useNavigate();
    const navMenuItem = () => {
        navigate(`${linkUrl}`);
    }

   return (<div className={`${size} menu-item`} onClick={navMenuItem}>
        <div className="background-image"
            style={{
                backgroundImage: `url(${imageUrl})`
            }} />
        <div className='content'>
            <div className='title'>{title.toUpperCase()}</div>
            <span className='subtitle'>SHOP NOW</span>
        </div>
    </div >)
};

export default (MenuItem);
