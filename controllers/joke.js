//url to get joke
const url = 'https://api.api-ninjas.com/v1/dadjokes';

module.exports = {
    getJoke,
};

async function getJoke(req, res) {
    //options
    const options = {
        method: 'GET',
        headers: {
            'X-Api-Key': process.env.API_KEY,
        }
    }
    const response = await fetch(url, options);
    res.json(await response.json());
}