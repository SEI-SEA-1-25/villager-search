import { Component } from 'react'
import axios from 'axios'
import DisplayCards from './Components/DisplayCards'


export default class App extends Component {

  state = {
    villagers: [],
    textValue: '',
    userSearch: []
  }

handleSearch () {
  const results = this.state.villagers.filter(result =>
  result.name["name-USen"].toLowerCase().includes(this.state.textValue.toLowerCase())
  )
  
  this.setState({
    userSearch: results
  })
 
}

handleSubmit = (e) => {
  e.preventDefault()
  this.handleSearch()
}

handleChange = (e) => {
  this.setState({
    textValue: e.target.value
  })
  console.log(this.state.textValue)
}

 componentDidMount = async () => {
  const villagers = await axios.get('http://acnhapi.com/v1/villagers/')
  const villagerData = villagers.data
  const villagerArray = Object.values(villagerData)
  this.setState({
    villagers: villagerArray
  })

 
  }
  render(){
     
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input
          type="text"
          value={this.state.textValue}
          onChange={this.handleChange}
         />
          <input type="submit" value="Find My Villager"/>
        </form>
        <DisplayCards 
        villagers={this.state.villagers}
        userSearch={this.state.userSearch}
        />

      </div>
    )
  }
}