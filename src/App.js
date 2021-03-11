import { Component } from 'react'
import DisplayCards from './component/DisplayCards';


class App extends Component {
  state = {
    villagers: [],
  }
  componentDidMount() {
    fetch('http://acnhapi.com/v1/villagers')
    .then((response) => response.json())
    .then((data) => {
      const villagers = Object.values(data);
      this.setState({
        villagers: villagers,
      })

    })
  }


  render(){
    return (
        <DisplayCards villagers={this.state.villagers} />
        )
    
  }
}

export default App;
