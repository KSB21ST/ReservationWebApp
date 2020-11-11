// import React, { Component } from 'react';
// import { Link, Route, Switch, BrowserRouter as Router } from "react-router-dom";
// // import 'App.css';
// import book from './pages/book'
// // import test from './pages/test'
// // import product from './pages/product'


// function App() {
//   return (
//     <Router>
//       <header>
//         <Link to="/info">
//           <button>책 정보</button>
//         </Link>
//         {/* <Link to="/about">
//           <button>상품정보</button>
//         </Link>
//         <Link to="/test">
//           <button>테스트</button>
//         </Link> */}
//       </header>
//       <hr />
//       <main>
//         <Switch>
//           <Route exact path="/info" component={book} />
//           {/* <Route path="/about" component={product} />
//           <Route component={test} /> */}
//         </Switch>
//       </main>
//     </Router>
//   );
// }

// export default App;

import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import book0 from './img/book0.jpg';

const databaseURL = "https://fir-test-984ca.firebaseio.com";

class Books extends React.Component {
  constructor() {
    super();
    this.state = {
        books: {},
        isToggleOn: true
    };
    this.handleClick = this.handleClick.bind(this);
  }

  _get() {
      fetch(`${databaseURL}/books.json`).then(res => {
      if(res.status !== 200) {
          throw new Error(res.statusText);
      }
      return res.json();
      }).then(books => this.setState({books: books}));
  }

  shouldComponentUpdate(nextProps, nextState) {
      return nextState.books !== this.state.books
  }

  componentDidMount() {
      this._get();
  }

  handleClick() {
    this.setState(state => ({
      isToggleOn: !state.isToggleOn
    }));
    console.log("this");
  }

  render() {
    return (
      <div>
        {Object.keys(this.state.books).map(id => {
          const book = this.state.books[id];
          return (
              <div key={id}>
                  <Card>
                    <CardContent>
                      <Typography variant="h5">
                        <img src={"book"+id} />
                        {book.subject}
                        {this.state.isToggleOn ? 'ON' : 'OFF'}
                      </Typography>
                      <Typography variant="h7">
                        {book.title}
                      </Typography>
                      <Typography color="textSecondary" gutterBottom>
                        {book.writer}
                      </Typography>
                    </CardContent>
                  </Card>
                  <br/>
              </div>
          );
        })}
      </div>
    );
  }
}

export default Books;
