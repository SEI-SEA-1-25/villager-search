import { Component } from 'react'
import DisplayCards from './DisplayCards'

export default class Villager extends Component {
    state = {
        name: []
    }

    handleChange = (event) => {
        setSearch(event.currentTarget.value)
    }

    // componentDidMount() {
    //     fetch("http://acnhapi.com/v1/villagers/")
    //         .then((response) => response.json())
    //         .then((data) => {
    //             const iGuessThisIsAnArrayOfObjectsNowHuh = Object.values(data);
    //             console.log(iGuessThisIsAnArrayOfObjectsNowHuh);
    //         });
    // }

    handleSubmit = async (event) => {
        event.preventDefault()

        const response = await fetch(`http://acnhapi.com/v1/villagers/${this.state.name}`)
        const json = await response.json()
        const villagerArray = Object.values(json)
        const nameObj = villagerArray[0]

        // console.log(nameObj)

        this.setState({
            id: nameObj.id,
            name: nameObj.name['name-USen']
        })
        // console.log(nameObj.name['name-USen'])
    }

    render() {
        const villagerName = this.state.name.map((fav, idx) => {
            return <DisplayCards
                key={idx}
                idx={idx}
                name={fav}
            />
        })
        return (
            <div>
                <h1>Animal Crossing Villagers</h1>

                <form onClick={this.handleSubmit}  >
                    <label>villager search:</label>
                    <input
                        id="villager"
                        type="text"
                        onChange={this.handleChange}
                    />
                    <input type="submit" value="search" />
                </form>
                <h1>Favorite Villagers:</h1>
                <ul>
                    {villagerName}
                </ul>
            </div>
        )
    }
}