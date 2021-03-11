import { Component } from 'react'
import DisplayCards from './components/DisplayCards.jsx'

export default class App extends Component {
    state = {
        villagers: []
    }
    async componentDidMount() {
        const URL = "http://acnhapi.com/v1/villagers/"
        const response = await fetch(URL)
        const data = await response.json()
            console.log(data);
                const iGuessThisIsAnArrayOfObjectsNowHuh = Object.values(data);
                this.setState({ villagers: iGuessThisIsAnArrayOfObjectsNowHuh })
                console.log(iGuessThisIsAnArrayOfObjectsNowHuh);
    }
    
    render() {
        return (
            <DisplayCards villagers={this.state.villagers} />
        )
    }
}