import validateNum from "../js/ValidateNum";

test.each([
  ["true for valid num", "5404362761210413", true],
  ["false for invalid num", "54043627612104", false],
])("Validate number card %s", (_, input, expected) => {
  expect(validateNum(input)).toBe(expected);
});
