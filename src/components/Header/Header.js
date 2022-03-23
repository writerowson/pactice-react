import React from 'react';
import './Header.css'
const Header = () => {
    return (
        <div className='header row'>
            <div className="col-md-2">Logo</div>
            <div className="col-md-10 d-flex">
                <li className="items">About</li>
                <li className="items">Menu</li>
                <li className="items">Blog</li>
                <li className="items">Subscribe</li>
            </div>

        </div>
    );
};

export default Header;