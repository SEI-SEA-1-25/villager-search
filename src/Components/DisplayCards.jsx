import { Component } from 'react'



export default class DisplayCards extends Component {

    // state = {
    //     names: [],
    //     image: []
    //   }
    

    // handleFetch = async () =>{
        
    //     const villagers = await axios.get('http://acnhapi.com/v1/villagers/')
    //     const villagerData = villagers.data
    //     const villagerArray = Object.values(villagerData)
    //     this.setState({
    //       names: villagerArray
    //     })
    //     const villagersNames= this.state.names.map((names, index) =>{
    //         return<h2>{names.name["name-USen"]}</h2>
    //       })
    //       console.log()
        
    // }
 
    
    render (){
     
        return (
            <div>
              
                {this.props.userSearch.map((item, i) => (
                  <div key={i}>
                  <h1>{item.name["name-USen"]}</h1>
                  <img src={item["image_uri"]} alt="No Image available"/>
                  </div>
                  ))}
            
            
                 

                  {/* {this.props.villagers.map((villager, i) => (
                //     <div key={i}>
                //     <img alt={villager.name["name-USen"]} src={villager["image_uri"]} />
                //     <p>{villager.name["name-USen"]}</p>
                //     </div>
                // ))}  */}

            </div>
        )
    }
}