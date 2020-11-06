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


