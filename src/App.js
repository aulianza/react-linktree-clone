import React from 'react';
import styled from "@emotion/styled";

import Header from './components/Header';
import Links from './components/Links';
import Footer from './components/Footer';

import data from './data.json';

const App = () => {
  const { header, links } = data;

  return (
    <StyledApp>
      <Header header={header} />
      <Links links={links} />
      <Footer />
    </StyledApp>
  );
};

export default App;

const StyledApp = styled.div`
  img {
    display: block;
    margin: 0 auto;
    max-width: 100%;
    height: auto;
  }

  a {
    text-decoration: none;
  }

  ul {
    padding: 0;
    list-style: none;
  }
`;
