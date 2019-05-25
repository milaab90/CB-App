import React from 'react';
import Container from '@material-ui/core/Container';
import SearchBox from './SearchBox';

const Topbar = () => {
    return(
        <section className="topbar">
            <Container>
                <div className="topbar__wrapper">
                    <p className="topbar__label">Processos</p>
                    <SearchBox />
                </div>
            </Container>
        </section>
    )
}

export default Topbar;