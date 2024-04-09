
const { sum } = require('./app.js');
const { fromYenToPound } = require('./app.js');
const { fromDollarToYen } = require('./app.js');
const { fromEuroToDollar } = require('./app.js');

test('adds 14 + 9 to equal 23', () => {
    let total = sum(14, 9);
    expect(total).toBe(23);
});

test("One euro should be 1.07 dollars", function() {
    const dollars = fromEuroToDollar(3.5);
    const expected = 3.5 * 1.07;
    expect(dollars).toBeCloseTo(expected);
})

test("One dollar shloud be 156.5 yens", function(){
    const yen = fromDollarToYen(3.5);
    const expected = 3.5 * 156.5;
    expect(yen).toBeCloseTo(expected);
})

test("One yen shloud be 0.87 pounds", function(){
    const pound = fromYenToPound(3.5);
    const expected = 3.5 * 0.87;
    expect(pound).toBeCloseTo(expected);
})