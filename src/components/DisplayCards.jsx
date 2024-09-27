import { Component } from 'react'

export default class DisplayCards extends Component {

    render () {
        return (
            this.props.villagerData.map((villagerPlaceholder, index) => {
                return (
                    <div key={index}>
                        <p>{villagerPlaceholder.name["name-USen"]}</p>
                        <img src={villagerPlaceholder["image_uri"]} alt=""/>
                    </div>
                )
            })  

        )
    }                    

}