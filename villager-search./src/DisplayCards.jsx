import { Component } from "react";

class DisplayCards extends Component {
  render() {
    return (
      this.state.villagers.map((villager, i) => (
        <div key={i} id={'villager-' + i} className='villager-container'>
          <p>{villager.name['name-USen']}</p>
          <img src={villager.image_url} alt= {'photo of: ' + villager.name
          ['name-USen']} />
        </div>
      ))
    )
  }
}

export default DisplayCards;
