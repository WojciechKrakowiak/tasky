import React, { FunctionComponent } from 'react';
import Layout from 'components/Layout';
import Cards from 'components/Cards';
import { ThemeProvider } from 'styled-components';
import theme from 'app/theme';
import { BrowserRouter as Router, Switch, Route, useParams } from 'react-router-dom';
import Modal from 'components/Modal';
import { IoIosToday } from 'react-icons/io';

const App: FunctionComponent = () => (
  <Router>
    <ThemeProvider theme={theme}>
      <Layout>
        <Cards />
      </Layout>
      <Switch>
        <Route path="/showTask/:id">
          <ShowTask />
        </Route>
      </Switch>
    </ThemeProvider>
  </Router>
);

const ShowTask: FunctionComponent = () => {
  const { id } = useParams();
  return <Modal id={id} title="Title" subtitle="subtitle" HeaderIcon={IoIosToday} />;
};

export default App;
