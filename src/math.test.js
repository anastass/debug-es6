import {add, mul, sub, div} from './math';

test("Adding 1 + 1 equals 2", () => {
    expect(add(1, 1)).toBe(2)
})

test("Multiplying 1 * 1 equals 1", () => {
    expect(mul(1, 1)).toBe(1)
})

test("Subtracting 1 - 1 equals 0", () => {
    expect(sub(1, 1)).toBe(0)
})

test("Dividing 1 / 1 equals 1", () => {
    expect(div(1, 1)).toBe(1)
})

// NOTE: .toThrow() did not handle exception generated by the div function
test("Dividing 1 / 0 return NaN", () => {
    expect(div(1, 0)).toBe(NaN)
})