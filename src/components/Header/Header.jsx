import React from 'react';

const Header = () => {
    return (
        <nav className='navbar navbar-expand-lg navbar-light'>
            <div className='container-fluid'>
                <a className='navbar-brand' href='#'>
                    <img
                        src='https://novoresume.com/images/media_kit/colorful-logo.png'
                        alt=''
                        height='45'
                    />
                </a>
                <button
                    className='navbar-toggler'
                    type='button'
                    data-bs-toggle='collapse'
                    data-bs-target='#navbarSupportedContent'
                    aria-controls='navbarSupportedContent'
                    aria-expanded='false'
                    aria-label='Toggle navigation'
                >
                    <span className='navbar-toggler-icon'></span>
                </button>
                <div
                    className='collapse navbar-collapse'
                    id='navbarSupportedContent'
                >
                    <ul className='navbar-nav ms-auto mb-2 mb-lg-0 text-center'>
                        <li className='nav-item'>
                            <a className='nav-link' href='#'>
                                Resume Templates
                            </a>
                        </li>
                        <li className='nav-item'>
                            <a className='nav-link' href='#'>
                                CV Templates
                            </a>
                        </li>
                        <li className='nav-item'>
                            <a className='nav-link' href='#'>
                                Cover Letters
                            </a>
                        </li>
                        <li className='nav-item'>
                            <a className='nav-link' href='#'>
                                Career Blog
                            </a>
                        </li>
                        <li className='nav-item'>
                            <a className='nav-link' href='#'>
                                Pricing
                            </a>
                        </li>
                        <li className='nav-item'>
                            <a className='nav-link' href='#'>
                                EN US
                            </a>
                        </li>
                        <li className='nav-item'>
                            <a className='nav-link' href='#'>
                                <button className='btn btn-primary'>
                                    My Documents
                                </button>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Header;
