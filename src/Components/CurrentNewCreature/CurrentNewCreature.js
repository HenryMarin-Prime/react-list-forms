import React, {Component} from 'react';


class CurrentNewCreature extends Component{

    render(){
        return(
            <>
            <h2>Mythical Creature</h2>
        <p>You just added creature {this.props.newCreatureProp.name} that originated from {this.props.newCreatureProp.origin}</p>
            </>
        );
    }
}

export default CurrentNewCreature;