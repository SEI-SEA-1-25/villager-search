import { Component } from 'react'

class DisplayCards extends Component {
    render() {
        return (
            <div>
                <h1>{this.props.wallah}</h1>
                {this.props.villagers.map((villager, i) => (
                    <div key={i}>
                        <img alt={villager.name["name-USen"]} src={villager["image_uri"]} />
                        <p>{villager.name["name-USen"]}</p>
                    </div>
                ))}
            </div>
        )
    }
}

export default DisplayCards;