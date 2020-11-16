import React from 'react';

import { BrowserRouter, Route } from 'react-router-dom';

import Layout from '../Components/Layout';

import Home from '../Pages/Home';

// import { Container } from './styles';

const Routers: React.FC = () => {
  return (
    <BrowserRouter>
        <Layout>
          <Route path="/" exact component={Home}/>
        </Layout>
    </BrowserRouter>
  );
}

export default Routers;