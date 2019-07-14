const dateFormat = require("dateformat");
const restaurant = require("./restaurant");

let id = 0;

const parser = str => {
  //"Reservations for NAME at DATE @ TIME"
  str = str.replace(/[.,\/#!$%\^&\*;@{}=\-_`~()]/g, "").split(" "); //['reservations', 'for'...]
  const name = str.slice(2, 4).join(" ");
  const dateTime = str.slice(5).join(" ");
  const createdAt = new Date();

  //"Res for Paul Hollywood at July 18, 2019 23:00"

  let date = dateFormat(dateTime, "isoDateTime");
  console.log("Formated date:", date);
  //2019-07-13T19:00:00-0400

  date = new Date(date);

  const restaurantOpen = parseInt(restaurant.openingTime);
  const restaurantClose = parseInt(restaurant.closingTime);

  console.log("Restaurant Open/Close: ", restaurantOpen, date.getHours());

  if (
    date.getHours() < restaurantOpen ||
    date.getHours() > restaurantClose - 1
  ) {
    return null;
  }
  id++;
  return { id, name, date, createdAt };
};

module.exports = parser;
