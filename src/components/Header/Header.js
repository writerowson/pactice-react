import React from 'react';
import './Header.css'
const Header = () => {
    return (
        <div className='header '>
            <div className="row">
                <div className="col-md-2">Logo</div>
                <div className="col-md-10 d-flex menu">
                    <li className="items me-4 p-2">About</li>
                    <li className="items me-4 p-2">Menu</li>
                    <li className="items me-4 p-2">Blog</li>
                    <li className="items me-4 p-2">Subscribe</li>
                </div>
            </div>

        </div>
    );
};

export default Header;