import { Component } from "react";
import DisplayCards from './DisplayCards';

class App extends Component {
  state = {
    villagers: [],
    // search:
  }


  componentDidMount() {
    fetch('http://acnhapi.com/v1/villagers')
      .then((response) => response.json())
      .then((data) => {
        const villagers = Object.values(data);
        this.setState({
          villagers: villagers
        })
      });
  }
    // arrow function auto binds for you ( i think) 
  handleChange = (event) => {
    this.setState({
      search: event.target.value
  })
  }

  dynamicSearch = () => {
    return this.state.villagers.filter((villager) => {
      villager.name['name-USen'].toLowerCase().include(this.state.search.search.toLowerCase());
    })
  }

  render() {
    return (
      <div>
      <input type="text" onChange={this.handleChange} />
        <DisplayCards villagers={this.dynamicSearch()} />
      </div>
    )
  }
}

export default App;

