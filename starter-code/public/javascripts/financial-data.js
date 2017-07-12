/*jshint esversion: 6*/

function getBitCoinvalue() {
  $.ajax({
    url: "http://api.coindesk.com/v1/bpi/historical/close.json",
    method: "GET",
    success: function (response) {
      console.log(response);
      document.write(response)
    },
    error: function (err) {
      console.log(err);
    },
  });
}
