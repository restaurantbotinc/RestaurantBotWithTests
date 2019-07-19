import React from "react";
import Enzyme, { shallow } from "enzyme";
import ReservationList from "./ReservationsList";

import Adapter from "enzyme-adapter-react-16";

Enzyme.configure({ adapter: new Adapter() });

// describe("ReservationList", () => {
//   xit("should render a <div />", () => {
//     const wrapper = shallow(<ReservationList className="App" />);
//     // const classWrapper = wrapper.hasClass("App");
//     // return classWrapper;
//     expect(wrapper.find("div").length).toEqual(1);
//   });
// });
