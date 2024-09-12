const axios = require('axios');

export const baseapi=async(endpoint)=>{
const options = {
  method: 'GET',
  url: `https://genius-song-lyrics1.p.rapidapi.com/song/${endpoint}/`,
  params: {id: '2396871'},
  headers: {
    'x-rapidapi-key': 'b38b5442c4msh950db61d34cc089p13cd9fjsn59cf6ad8ae1f',
    'x-rapidapi-host': 'genius-song-lyrics1.p.rapidapi.com'
  }
};

try {
	const response = await axios.request(options);
	console.log(response.data);
} catch (error) {
	console.error(error);
}
}