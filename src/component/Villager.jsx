import { Component } from "react";
import Display from "./Display";

export default class Villager extends Component {
  state = {
    name: [],
  };

  handleSubmit = async (event) => {
    event.preventDefault();

    const response = await fetch(
      `http://acnhapi.com/v1/villagers/${this.state.name}`
    );
    const json = await response.json();
    const villagerArray = Object.values(json);
    const villagerName = villagerArray[0];

    this.setState({
      id: villagerName.id,
      name: villagerName.name["name-USen"],
    });
  };

  render() {
    const name = this.state.name.map((fav, idx) => {
      return <Display key={idx} idx={idx} name={fav} />;
    });
    return (
      <div>
        <h1>Animal Crossing</h1>

        <form onClick={this.handleSubmit}>
          <label>Search:</label>
          <input id="villager" type="text" onChange={this.handleChange} />
          <input type="submit" value="search" />
        </form>
        <h1>Favorites:</h1>
        <ul>{name}</ul>
      </div>
    );
  }
}
