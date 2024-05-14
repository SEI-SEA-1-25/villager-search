import { Component } from 'react'

export default class DisplayCards extends Component {
  render() {
    return (
      this.props.villagers.map((villager, i) => (
        <div key={i} id={'villager-' + i} className='villager-container'>
          <p>{villager.name['name-USen']}</p>
          <img src={villager.image_uri} alt={'photo of : ' + villager.name['name-USen']} />
        </div>
      ))
    )
  }
}