import { Component } from 'react'
import DisplayCards from './DisplayCards'


export default class App extends Component {

  state = {
    names: [],
    searchValue: '',
    vilager: ''
  }

  findVillager = () => {
    return this.state.names.filter((villager) => villager.name['name-USen']
    .toLowerCase()
    .includes(this.state.searchValue.toLowerCase())
    )
  }

  handleChange = (e) => {
    this.setState({
      searchValue: e.target.value
    })
  }

  componentDidMount() {
    fetch("http://acnhapi.com/v1/villagers/")
    .then((response) => response.json())
    .then((data) => {
      const animalObjectArray = Object.values(data);
      console.log(animalObjectArray);
      this.setState({
        names: animalObjectArray
      })
    });
  }

  render() {
    const villagerNames = this.state.names.map((villager, index) => {
      return <li key={`${index}`}>{villager.name['name-USen']}</li>
    })
    return (
      <div>
        <h1>Hello World!</h1>
          <input
            type="text"
            placeholder="Find a villager!"
            onChange={this.handleChange}
            value={this.state.searchValue}
          />
          <DisplayCards />
        <ul>
          {villagerNames}
        </ul>
      </div>
    )
  }
}