import { Component } from 'react'

class DisplayCards extends Component {
    render() {
        return (
            <div>
                {this.props.villagers.map((villager, i) => (
                    <div key={i}>
                        <p>{villager.name["name-USen"]}</p>
                        <img alt={villager.name["name-USen"]} src={villager["image_uri"]} />
                    </div>
                ))}
            </div>
        )
    }
}

export default DisplayCards;