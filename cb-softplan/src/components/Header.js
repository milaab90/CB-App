import React from 'react';
import Container from '@material-ui/core/Container';
import Logo from './Logo';
import UserAvatar from './UserAvatar';

const Header = () => {
    return(
        <nav className="headerNav">
            <Container>
                <div className="headerNav__wrapper">
                    <Logo />
                    <UserAvatar />
                </div>
            </Container>
        </nav>
    )
}

export default Header;