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
  villagerSearch()
  handleChange = (e) => {
    this.setState({
      search: e.target.value
    })
  }
  handleSubmit = (e) => {
    e.preventDefault()

  }
  render () {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input 
            type="text" 
            placeholder="search by name"
            onChange={this.handleChange}
            value={this.state.search}
          />
          <input type="submit"/>

        </form>
        <DisplayCards villagerData={this.state.villagerData}/>
      </div>
    )
  }
}
