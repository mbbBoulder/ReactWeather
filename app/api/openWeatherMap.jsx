var axios = require('axios');

const OPEN_WEATHER_MAP_URL = 'http://api.openweathermap.org/data/2.5/weather?appid=257e4798abfd670eac76ac9f302f0b64&units=imperial';
// 257e4798abfd670eac76ac9f302f0b64
module.exports = {
  getTemp: function (location) {
    var encodedLocation = encodeURIComponent(location);
    var requestUrl = `${OPEN_WEATHER_MAP_URL}&q=${encodedLocation}`;
    debugger;

    return axios.get(requestUrl).then(function (res) {
      debugger;
      if (res.data.cod && res.data.message) {
        throw new Error(res.data.message);
      } else {
        return res.data.main.temp;
      }
    }, function (e) {
      debugger;
      throw new Error(e);
    });
  }
}
