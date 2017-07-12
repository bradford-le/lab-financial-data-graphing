function getBitCoinvalue(value) {
  $.ajax({
    url: "http://api.coindesk.com/v1/bpi/historical/close.json" + value,
    method: "GET",
    success: function (response) {
      console.log(response);
    },
    error: function (err) {
      console.log(err);
    },
  })
}