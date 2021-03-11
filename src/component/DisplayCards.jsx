import { Component } from 'react'

export default class DisplayCards extends Component {
    render() {
        return (
            this.props.villagers.map((villager, i) => (
                <div key={i} >
                    <p>{villager.name['name-USen']} </p>
                    <img src={villager.image_uri} alt={'image of: ' + villager.name['name-USen']} />
                </div>
            ))
        )
    }
}
