import React, { Component } from "react";
import { prettyTime, filterTime } from "../../clientUtils";

class ReservationsList extends Component {
  state = {
    reservations: []
  };

  componentDidMount() {
    fetch("reservations")
      .then(res => res.json())
      .then(reservations => this.setState({ reservations }));
  }

  /*
  {
    id: 2,
    name: 'Paul Hollywood',
    date: 2019-12-25T19:00:00.000Z,
    createdAt: 2019-07-14T18:32:01.540Z,
    phoneNumber: '+15306931524'
  }
  */

  render() {
    let filteredArray = filterTime(this.state.reservations);
    filteredArray = filteredArray.sort((a, b) => ((a.date, b.date) ? -1 : 1));

    return (
      <div className="App">
        <h1>Reservations</h1>
        {filteredArray.map(reservation => (
          <ul key={reservation.id}>
            <li>
              <em>{reservation.name}</em> has a reservation on{" "}
              {prettyTime(reservation.date)}
            </li>
          </ul>
        ))}
      </div>
    );
  }
}

export default ReservationsList;
