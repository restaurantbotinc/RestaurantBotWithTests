const dateFormat = require("dateformat");
const restaurant = require("./restaurant");

let id = 0;

const parser = str => {
  //"Reservations for NAME at DATE @ TIME"
  str = str.replace(/[.,\/#!$%\^&\*;@{}=\-_`~()]/g, "").split(" "); //['reservations', 'for'...]
  const name = str.slice(2, 4).join(" ");
  const dateTime = str.slice(5).join(" ");
  const createdAt = new Date();

  let date = dateFormat(dateTime, "isoDateTime");
  date = new Date(date);
  let offsetDate = date.setHours(date.getHours() - 4);

  const restaurantOpen = parseInt(restaurant.openingTime);
  const restaurantClose = parseInt(restaurant.closingTime);

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
