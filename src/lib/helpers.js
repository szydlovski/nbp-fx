function isNumber(value) {
	return typeof value === 'number' && isFinite(value);
}

function addDays(date, days) {
	const result = new Date(date);
	result.setDate(result.getDate() + days);
	return result;
}

function isSameDay(date1, date2) {
	return (
		date1.getFullYear() === date2.getFullYear() &&
		date1.getMonth() === date2.getMonth() &&
		date1.getDate() === date2.getDate()
	);
}

function daysBetween(date1, date2) {
	return Math.round((date2 - date1) / (1000 * 60 * 60 * 24));
}

function formFXDate(date) {
	return `${date.getFullYear()}-${(date.getMonth()+1).toString().padStart(2, '0')}-${date.getDate().toString().padStart(2, '0')}`;
}

module.exports = {
	addDays,
	isSameDay,
	daysBetween,
	isNumber,
	formFXDate
};
