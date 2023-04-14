const reverseString=require('./2.js')

test('to check if the returned string is in reverse order',()=>{
    expect(reverseString('prasses')).toBe('sessarp')
})