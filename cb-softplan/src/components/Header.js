import React from 'react';
import Logo from './Logo';
import UserAvatar from './UserAvatar';

const Header = () => {
    return(
        <nav className="headerNav">
            <div className="headerNav__wrapper">
                <Logo />
                <UserAvatar />
            </div>
        </nav>
    )
}

export default Header;