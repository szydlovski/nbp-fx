const supportedCurrencies = require('./supportedCurrencies.json');

function formatCurrencyCode(code) {
	return code.toUpperCase().trim();
}

function isCurrencySupported(code) {
	code = formatCurrencyCode(code);
	return supportedCurrencies.includes(code);
}

function getSupportedCurrencies() {
	return [...supportedCurrencies];
}

module.exports = {
  formatCurrencyCode,
  isCurrencySupported,
  getSupportedCurrencies
}