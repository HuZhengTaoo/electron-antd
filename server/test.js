const axios = require("axios");
axios
  .get('https://www.futunn.com/new-quote/quote-basic?security_id=202553&market_type=2&_=1613797986126')
  .then(res => { console.log(res)})