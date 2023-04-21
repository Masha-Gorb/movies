import "@testing-library/jest-dom";
import {add} from "@/pages/addFoo";


describe("Calculator", () => {

  it("adds numbers", () => {
    const number1 = 3;
    const number2 = 5;
    const result = add(number1, number2)

    expect(result).toEqual(8);
  });

});