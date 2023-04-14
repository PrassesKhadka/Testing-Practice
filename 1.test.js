const {test}=require('@jest/globals')
// import capitalize from './1.js'
const capitalize=require('./1.js')

test('checks if the returned strings 1st letter is in capital',()=>{
    expect(capitalize('prasses')).toBe('Prasses');    
})