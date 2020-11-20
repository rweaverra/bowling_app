import React, { useState } from 'react';
import { startGame } from './../../lib/routes.js';


function Start () {
  const [name, setName] = useState('');
  const [isStarted, setIsStarted] = useState(false);

  const handleChange = (event) => {
    setName(event.target.value)
 }

  const submitStart = () => {
    event.preventDefault();
     setIsStarted(true);
      startGame(name, (err, result) => {
        if(err) {
          console.log(err)
        } else {

  }
})
  }

   return (
     <div>
        {isStarted ?
           <div><h3>{name}</h3></div> :
            <form  onSubmit={submitStart}>
            <label>
                Name:
                <input type="text" name="name" value={name} onChange={handleChange}/>
                </label>
              <button>start!!</button>
            </form>

           }
     </div>
   )

}

export default Start;