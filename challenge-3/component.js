import React from 'react';

// finish writing the DogList functional component here
const DogList = props => {
  return (
    <ul>
      {props.dogs.map(dog=> <li>{dog.name}</li>)}
    </ul>
  )
}

export default DogList;
