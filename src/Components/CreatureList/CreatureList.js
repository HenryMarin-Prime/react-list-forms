import React, {Component} from 'react';


class Creaturelist extends Component{
    state={
        creatures:[
            {name:'Unicorn', origin:'Europe'},
            {name:'Sphinx', origin:'Persia'},
            {name:'Kappa', origin:'Greece'},
            {name:'Dragon', origin:'Everywhere'},
            {name:'Henry', origin:'Nonia'},
        ],
        newCreature:{
            name:'',
            origin:''
        }
    }
    onCreateCreature =()=>{
        let newCreature = this.state.newCreature;
        let oldCreatures = this.state.creatures;
        console.log('Clicked create creature', newCreature);
        this.setState({
            creatures:[...oldCreatures,newCreature],
            newCreature:{
                name:'',
                origin:''
            }
        })    
        }

    updateName = (event)=>{
        let newName = event.target.value
        console.log('updateName', newName);
        this.setState({
            newCreature:{
                ...this.state.newName,
                name:newName
            }
        });
    }
    updateOrigin = (event)=>{
        let newOrigin = event.target.value
        console.log('updateOrigin', newOrigin);
        this.setState({
            newCreature:{
                ...this.state.newCreature,
                origin:newOrigin
            }
        });
    }

    
    render(){
       
        return(
            <>
            <ul>
              {this.state.creatures.map(creatureObject => <li key={creatureObject.name}>The {creatureObject.name} is from {creatureObject.origin}</li>)}
            </ul>

            <input value = {this.state.newCreature.name} onChange={this.updateName} type="text" placeholder="Creature Name" />
            <input value = {this.state.newCreature.origin} onChange={this.updateOrigin} type="text" placeholder="Origin" />
            <button onClick={this.onCreateCreature}>Create new create</button>
            </>
        );
    }
}

export default Creaturelist;