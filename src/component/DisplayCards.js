import { Component} from 'react'




class DisplayCards extends Component {
    render(){
        return(
        this.props.villagers.map((villager, i) => (
            <div key={i} id={'villager-' + i} classnme='villager-conatiner'>
              <p>{villager.name['name-USen']}</p>
              <img src={villager.image_uri} alt={'photo of: ' + villager.name['name-USen']} />
            </div>
        ))
        )
    }



}

export default DisplayCards;