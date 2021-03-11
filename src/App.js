import { Component } from 'react';
import DisplayCards from './components/DisplayCards'

class App extends Component {

  state = {
    villagers: [],
    particularVillagerSearch: "",
    particularVillagerResult: ""
  }

  componentDidMount() {
    fetch('http://acnhapi.com/v1/villagers/')
    .then((response) => response.json())
    .then((data) => {
      const villagers = Object.values(data);
      this.setState({
          villagers: villagers
      })
    })
  }

  handleChange = (e) => {
    this.setState({ 
      particularVillagerSearch: e.target.value 
    }, () => {
      console.log('You searched for', this.state.particularVillagerSearch)
    })
  }

    dynamicSearch = () => {
      return this.state.villagers.filter((villager) => {
        return villager.name['name-USen'].toLowerCase().includes(this.state.particularVillagerSearch)
      })
    }

  render() {
    return (
      <div>
          <input type="text" onChange={this.handleChange} />
        <DisplayCards villagers={this.dynamicSearch()}/>
      </div>
    )
  }
}

export default App;
