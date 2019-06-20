
import React from 'react';

function Home(props){

  return(
    <div>
      <button onClick={props.changeText}> Change The Message</button>
      <button onClick={props.changeText2}> Change The Message 2</button>
      {props.test}
    </div>
  )
}
export default Home;
