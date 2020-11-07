import axios from 'axios';


export const postScore = (data, callback) => {
  console.log('inside postscore');
  axios.post('http://localhost:3000/roll', {
    roll: data
  })
   .then((response) => {
     callback(null, response);
   })
   .catch((error) => {
     callback(error, null)
   });
}

export const startGame = (name, callback) => {
  console.log('inside startGame')
  axios.post('http://localhost:3000/start', {
    name: name
  })
  .then((response) => {
    callback(null, response);
  })
  .catch((error) => {
    callback(error, null)
  })
}


