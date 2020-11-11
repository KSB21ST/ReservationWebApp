import React, { Component } from 'react';
import { Link, Route, Switch, BrowserRouter as Router } from "react-router-dom";
// import './App.css';
import book from './pages/book';
import sign from './pages/sign';
import view from './pages/view';


function App() {
  return (
    <Router>
      <header>
        <Link to="/">
          <button>책 정보</button>
        </Link>
        <Link to="/sign">
          <button>sign</button>
        </Link>
        <Link to="/view">
          <button>view</button>
        </Link>
      </header>
      <hr />
      <main>
        <Route exact path="/" component={book} />
        <Switch>
          <Route path="/sign" component={sign} />
          <Route path="/view" component={view} />
        </Switch>
      </main>
    </Router>
  );
}

export default App;