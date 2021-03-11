import { Component } from 'react'
import DisplayCards from './components/DisplayCards'

export default class App extends Component {
  // constructor(props) {
  //   super(props)
  //   this.state = {
  //     search: '',
  //     villagerData: []
  //   }

  // }

  state = {
    search: '',
    villagerData: []
  }
  componentDidMount = async () => {
    const response = await fetch('http://acnhapi.com/v1/villagers/')
    const data = await response.json()
    this.setState({
      villagerData: Object.values(data)
        })
    console.log(data)
  }
  // componentDidMount() {
  //   fetch("http://acnhapi.com/v1/villagers/")
  //     .then((response) => response.json())
  //     .then((data) => {
  //       const iGuessThisIsAnArrayOfObjectsNowHuh = Object.values(data);
  //       console.log(iGuessThisIsAnArrayOfObjectsNowHuh);
  //     });
  // }
  villagerSearch() {
    return this.state.villagerData.filter((villager) => {
     return villager.name['name-USen'].toLowerCase().includes(this.state.search.toLowerCase())
    })
  }
  handleChange = (e) => {
    this.setState({
      search: e.target.value
    })
    // console.log(e.target.value)
  }
  // handleSubmit = (e) => {
  //   e.preventDefault()
  //   this.setState((prevState) => {
  //     return {
  //       villagerData: [...prevState.villagerData, {villager: this.state.search}]
  //     }
  //   }, () => this.setState({search: ''}))
  //   this.villagerSearch()
  // }
  render () {
    return (
      <div>
        {/* to make this work, maybe take the form and submit out? */}
        {/* <form onSubmit={this.handleSubmit}>
          <input 
            type="text" 
            placeholder="search by name"
            onChange={this.handleChange}
            value={this.state.search}
          />
          <input type="submit"/>

        </form> */}
        <input 
            type="text" 
            placeholder="search by name"
            onChange={this.handleChange}
            value={this.state.search}
          />
        <DisplayCards villagerData={this.villagerSearch()}/>
      </div>
    )
  }
}
