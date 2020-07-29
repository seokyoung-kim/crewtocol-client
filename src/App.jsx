import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Route, Switch, Redirect } from 'react-router-dom';

import ScrollToTop from './components/common/ScrollToTop'
// pages
import MainPage from './pages/MainPage';
import WritePage from './pages/WritePage';
import DetailPage from './pages/DetailPage';
import EditPage from './pages/EditPage';
import AboutPage from './pages/AboutPage';

const App = () => {
  return (
    <>
      <Helmet>
        <title>Crewtocol</title>
      </Helmet>
      <ScrollToTop />
      <Switch>
        <Route path="/about" component={AboutPage} />
        <Route path="/community" component={MainPage} />
        <Route path="/detail/:id" component={DetailPage} />
        <Route path="/login" component={MainPage} />
        <Route path="/write" component={WritePage} />
        <Route path="/edit/:id" component={EditPage} />
        <Route exact path={['/']} component={MainPage} />
        <Redirect from="*" to="/" />
      </Switch>
    </>
  );
};

export default App;
