import React from 'react';
// import logo from './logo.svg';
import { Layout, Navigation, Header, Drawer, Content } from 'react-mdl';
import { Link } from 'react-router-dom';
import Main from './components/router';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="demo-big-content">
            <Layout>
            
            <Header className="header" title={<Link style={{textDecoration: 'none', color: 'white'}} to="/">Robert Allen</Link>} scroll>
                    <Navigation>
                        <Link className="page-scroll" to="/about">About Me</Link>
                        <Link className="page-scroll" to="/resume">Resume</Link>
                        {/* <Link className="page-scroll" to="/technologies">Technologies Used</Link> */}
                        <Link className="page-scroll" to="/projects">Projects</Link>
                        <Link className="page-scroll" to="/contact">Contact</Link>
                    </Navigation>
                </Header>
                {/* <Drawer title="Title">
                    <Navigation>
                        <Link to="/about">About Me</Link>
                        <Link to="/resume">Resume</Link>
                        <Link to="/projects">Projects</Link>
                        <Link to="/contact">Contact</Link>
                    </Navigation>
                </Drawer> */}
                <Content>
                    <div className="page-content">
                      <Main/>
                    </div>
                </Content>
            </Layout>
        </div>
      </header>
    </div>
  );
}

export default App;
