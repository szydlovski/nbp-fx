function formatSingleTableResponse(data) {
  return {
    number: data.no,
    date: new Date(data.effectiveDate),
    rates: data.rates.map(({code, mid}) => ({
      code,
      rate: mid
    }))
  }
}

function formatMultiTableResponse(data) {
  return data.map(formatSingleTableResponse)
}

module.exports = {
  formatSingleTableResponse,
  formatMultiTableResponse
}