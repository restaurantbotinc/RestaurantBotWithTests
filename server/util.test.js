const parser = require("./util");

test("Checks that parser outputs an object", () => {
  expect(typeof parser("Res for Paul Hollywood at July 18, 2019 23:00")).toBe(
    "object"
  );
});

test("Checks for correct output", () => {
  expect(
    parser("Res for Katharine Francis at July 13, 2019 19:00").name
  ).toEqual("Katharine Francis");
});
