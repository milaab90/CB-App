import React from 'react';
import Container from '@material-ui/core/Container';
import Header from './components/Header';
import Topbar from './components/Topbar';
import Sidebar from './components/Sidebar';
import Cards from './components/Cards';

function App() {
  return (
    <div className="App">
      <Header />
      <div className="middleWrapper">
        <Sidebar />
        <section className="contentSection">
          <Topbar />
          <Container>
            <Cards />
          </Container>
        </section>
      </div>
    </div>
  );
}

export default App;
