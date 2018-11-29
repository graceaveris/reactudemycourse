import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';


//controls class properties from a base level for easy manipulation
//if state is changed, then react automatically rerenders the dom

class App extends Component {
  state = {
    persons: [
      { name: 'Pol', age: 50 },
      { name: 'Grace', age: 28 },
      { name: 'Fish', age: 0 }
  ]
}



switchNameHandler = (newName) => {
  // console.log('was clic ked');
  // DONT DO THIS! this.state.persons[0].name = 'DICKHEAD' ;
    this.setState( { 
      persons: [
         { name: 'Pol', age: 1000000000 },
         { name: newName, age: 28 },
         { name: 'Fish', age: 0 }
    ]
  })
}



nameChangedHandler = (event) => {
    this.setState( { 
      persons: [
         { name: 'Pol', age: 50 },
         { name: event.target.value, age: 28 },
         { name: 'Fish', age: 0 }
    ]
  })

}






// The render block
 
  render() {
    const style = {
    
      backgroundColor: 'lightblue',
      font: 'inherit',
      border: '4px solid blue',
      padding: '8px',
      cursor: 'progress'

     };


    return (
      <div className="App">
      
       <h1>Hi, I am a react app hello</h1>
       <p>Yup i guess we are working ok then</p>
      
       <button 
       style={style}
       onClick={this.switchNameHandler.bind(this,'Cool New Name')}>Switch Name

       </button>

       <Person 
       name={this.state.persons[0].name}
       age={this.state.persons[0].age} click={this.switchNameHandler}/>

       <Person 
       name={this.state.persons[1].name}
       age={this.state.persons[1].age} />

       <Person 
       name={this.state.persons[2].name}
       age={this.state.persons[2].age}
       click={this.switchNameHandler.bind(this,'Even cooler New Name')}
       changed={this.nameChangedHandler}
       />


     
      </div>
    );

    // Below is the literal translation of the 'sugar coated' html version above. The above
    //looks like htm but isnt.
    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Wow a new way of rendering!!'))
  }
}

export default App;
 

 //words that cant be used
 //class = className
 //onclick = onClick