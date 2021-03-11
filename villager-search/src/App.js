import {Component} from 'react'
import DisplayCards from './components/DisplayCards.jsx'

export default class App extends Component{
  state = {
    villagers: [],
    search: ''
  }
  // componentDidMount() {
  //   fetch('http://acnhapi.com/v1/villagers/')
  //   .then((response) => response.json())
  //   .then((data) => {
  //     this.setState({ villagers: Object.values(data) })
  //   })
  // }

  async componentDidMount() {
    const response = await fetch(`http://acnhapi.com/v1/villagers/`)
    const data = await response.json()
    console.log(data)
    const villagers = Object.values(data)
    this.setState({
      villagers
    })
  }

  handleChange = (e) => {
    this.setState({
      search: e.target.value
    })
  }

  render() {
    return(
      <div>
        <input type="text" onChange={this.handleChange}/>
        <DisplayCards villagers={this.state.villagers} />
      </div>
    )
  }
}

