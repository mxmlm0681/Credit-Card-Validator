import paySystem from "../js/PaySystem";

test.each([
  ["Mastercard", "5404362761210413", "mastercard"],
  ["Visa", "4847606820328444", "visa"],
  ["Visa", "98701234567", false],
])("Payment system card %s", (_, input, expected) => {
  expect(paySystem(input)).toBe(expected);
});
