import {Component} from 'react'

export default class DisplayCards extends Component {
    dynamicSearch = () => {
        return this.state.villagers.filter((villager) =>
          villager.name["name-USen"]
            .toLowerCase()
            .includes(this.state.search.toLowerCase())
        );
      };

    render() {
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