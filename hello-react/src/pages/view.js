import React from 'react';

const databaseURL = "https://fir-test-984ca.firebaseio.com";

class App3 extends React.Component {
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
                <table>
                <tbody>
                    <td>
                    <tr><input type="radio" name="chk_gender" value="1"/>{book.title}</tr>
                    </td>
                </tbody>
                </table>
                <br/>
              </div>
          );
        })}
      </div>
    );
  }
}

export default App3;