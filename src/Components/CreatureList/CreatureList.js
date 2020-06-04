import React, {Component} from 'react';



class Creaturelist extends Component{

   
    render(){
       
        return(
            <>
            <ul>
              {this.props.creatures.map(creatureObject => <li key={creatureObject.name}>The {creatureObject.name} is from {creatureObject.origin}</li>)}
            </ul>
            </>
        );
    }
}

export default Creaturelist;