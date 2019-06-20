
import React from 'react';

function Home(props){

  return(
    <div>
      <button onClick={props.changeText}> Change The Message</button>
      {props.test}
    </div>
  )
}
export default Home;
