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
        {this.state.villagers.map((villager) => (
          <p>{villager.name['name-USen']}</p>
        ))}
      </div>
    )
  }
}

export default App;
