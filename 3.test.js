const calc=require('./3.js')

test('to test calc object gives the necessary calculations',()=>{
    expect(calc.add(2,3)).toBe(5);
    expect(calc.subtract(2,3)).toBe(-1);
    expect(calc.divide(9,3)).toBe(3);
    expect(calc.multiply(2,3)).toBe(6);
})