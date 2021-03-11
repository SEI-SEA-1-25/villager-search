import {Component} from 'react'

export default class DisplayCards extends Component {
    render(){
        return (
            <div>
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