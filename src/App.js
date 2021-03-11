import { Component } from 'react'
import DisplayCards from './DisplayCards'


export default class App extends Component {

  state = {
    villagers: [],
    search: '',
  }

  dynamicSearch = () => {
    return this.state.villagers.filter((villager) => villager.name['name-USen']
    .toLowerCase()
    .includes(this.state.search.toLowerCase())
    )
  }
  
  componentDidMount() {
    fetch("http://acnhapi.com/v1/villagers/")
    .then((response) => response.json())
    .then((data) => {
      const villagers = Object.values(data);
      this.setState({
        villagers: villagers
      })
    });
  }

  handleChange = (e) => {
    this.setState({
      search: e.target.value
    })
  }
  
  render() {
    return (
      <div>
        <input type='text' onChange={this.handleChange} />
        <DisplayCards villagers={this.dynamicSearch()} />
      </div>
    )
  }
}