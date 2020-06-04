import React, {Component} from 'react';


class CreatureForm extends Component{
    render(){
        return(
            <>
            <h1>Creature Form</h1>
            <input value = {this.props.newCreature.name} onChange={this.props.updateName} type="text" placeholder="Creature Name" />
            <input value = {this.props.newCreature.origin} onChange={this.props.updateOrigin} type="text" placeholder="Origin" />
            <button onClick={this.props.onCreateCreature}>Create New Creature</button>
            </>
        );
    }
}

export default CreatureForm;