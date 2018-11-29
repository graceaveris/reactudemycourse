import React from 'react';
import './Person.css';

const person = ( props ) => {
	return (
		<div className="Person">
		   <p onClick={props.click}>I'm {props.name} and I am {props.age} years old. I wish i was {Math.floor(Math.random() * 100)}</p>
		   <p>{props.children}</p>
		   <input type="text" onChange={props.changed} />
		</div> 
    )
}

export default person; 