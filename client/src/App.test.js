import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import ReservationsList from "./components/reservations/ReservationsList";
import Enzyme, { shallow } from "enzyme";
import EnzymeAdapter from "enzyme-adapter-react-16";

Enzyme.configure({ adapter: new EnzymeAdapter() });

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it("should reder a <div/>", () => {
  const wrapper = shallow(<App />);
  expect(wrapper.find("div").length).toEqual(1);
});

it("should reder a <div/>", () => {
  const wrapper = shallow(<App />);
  expect(wrapper.find("ReservationsList").length).toEqual(1);
});
