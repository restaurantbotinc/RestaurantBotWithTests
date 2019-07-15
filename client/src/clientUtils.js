import humanDate from "human-date";
import dateFormat from "dateformat";

export const prettyTime = date => {
  return humanDate.prettyPrint(date, { showTime: true });
};

/*
{
    id: 2,
    name: 'Paul Hollywood',
    date: 2019-12-25T19:00:00.000Z,
    createdAt: 2019-07-14T18:32:01.540Z,
    phoneNumber: '+15306931524'
  }
*/

export const filterTime = dateArray => {
  console.log(dateArray);
  return dateArray.filter(
    obj => obj.date > dateFormat(Date.now(), "isoDateTime")
  );
};
