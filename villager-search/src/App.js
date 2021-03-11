import { Component } from "react";

class App extends Component {
  state = {
    villagers: [],
  }
  componentDidMount() {
    fetch("http://acnhapi.com/v1/villagers/")
      .then((response) => response.json())
      .then((data) => {
        const villagers = Object.values(data);
        this.setState({
          villagers: villagers,
        })
      });
  }


  render() {
    return (
      this.state.villagers.map((villager, i) => (
        <div>
          <p>{villager.name['name-USen']}</p>
          <img src={villager.image_url} alt=
          {'photo of:' + villager.name['name-USen']} />
        </div>
      ))


    )
  }
}

export default App;