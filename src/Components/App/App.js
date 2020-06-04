import React, { Component } from 'react';
import '../App/App.css';
import Header from '../Header/Header';
import Creaturelist from '../CreatureList/CreatureList';
import CurrentNewCreature from '../CurrentNewCreature/CurrentNewCreature';
import CreatureForm from '../CreatureForm/CreatureForm'



class App extends Component {
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
onCreateCreature = () => {
  let newCreature = this.state.newCreature;
  console.log('About to create a new creature', this.state.newCreature);

  let oldCreatures = this.state.creatures;
  this.setState({
    creatures: [...oldCreatures, newCreature],
    newCreature: {
      name: '',
      origin: ''
    }
  });
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
  render() {
    return (
      <>
      <Header />
      <CurrentNewCreature newCreatureProp={this.state.newCreature} />
      <CreatureForm updateName={this.updateName} 
                          updateOrigin={this.updateOrigin}
                          onCreateCreature={this.onCreateCreature}
                          newCreature={this.state.newCreature} />
      <Creaturelist newCreature={this.state.newCreature}
                    creatures={this.state.creatures} />
      </>
    );
  }
}

export default App;
