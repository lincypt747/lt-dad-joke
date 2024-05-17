require('dotenv').config();


//APIKey
const apiKey = process.env.API_KEY;

//options
const options = {
    method: 'GET',
    headers: {
        'X-Api-Key': apiKey,
    }
}
//url to get joke
const url = 'https://api.api-ninjas.com/v1/dadjokes';

module.exports = {
    getJoke,
};

async function getJoke(req, res) {
    const response = await fetch(url, options);
    res.json(await response.json());
}