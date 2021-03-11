import { Component } from 'react';

class App extends Component {

  componentDidMount() {
    fetch('http://acnhapi.com/v1/villagers/')
    .then((response) => response.json())
    .then((data) => {
      console.log(data)
    })
  }

  render() {
    return(
      <div>
        <h1>Hello, World!</h1>
      </div>
    )
  }
}

export default App;
