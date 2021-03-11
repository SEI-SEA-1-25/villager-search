import { Component } from 'react';
import DisplayCards from './components/DisplayCards'

class App extends Component {

  state = {
    villagers: []
  }

  componentDidMount() {
    fetch('http://acnhapi.com/v1/villagers/')
    .then((response) => response.json())
    .then((data) => {
      this.setState({
          villagers: Object.values(data)
      })
    })
  }

  render() {
    return (
      <div>
        <DisplayCards villagers={this.state.villagers}/>
      </div>
    )
  }
}

export default App;
