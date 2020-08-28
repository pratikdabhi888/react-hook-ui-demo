import React from 'react';
import './App.css';
import {Provider} from 'react-redux';
import store from './redux/store';
import UsersList from './Routes/UsersList/UsersList';
import NavBar from './components/Navbar/NavBar';
import {Route,  BrowserRouter as Router, Switch} from 'react-router-dom';
import Articles from "./Routes/Articles/Articles";

function App() {
  return (
    <Provider store={store}>
      <Router>
            <NavBar/>
            <Switch>
              <Route path="/home">
                <Articles/>
              </Route>
              <Route path="/friends">
                <UsersList/>
              </Route>
              <Route path="/">
                <Articles />
              </Route>
            </Switch>
      </Router>
    </Provider>
  );
}

export default App;
