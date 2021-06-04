const {
	throwUnexpectedError,
} = require('./errors.js');
const axios = require('axios').default;

const baseURL = 'http://api.nbp.pl/api/exchangerates';

async function performCall(endpoint) {
	const url = `${baseURL}/${endpoint}`;
	try {
		const response = await axios.get(url, {responseType: 'json'});
		return response.data;
	} catch (error) {
		throwUnexpectedError(error);
	}
}

module.exports = {
  performCall
}