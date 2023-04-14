const caesarCipher=require('./4.js');

test('',()=>{
    expect(caesarCipher('abg')).toBe('bch')
    expect(caesarCipher('ABZ')).toBe('BCA')
    expect(caesarCipher('aBzD')).toBe('bCaE')
    expect(caesarCipher('aB#t')).toBe('bC#u')
    //expect(caesarCipher('2435vxdvd')).toBe('not a string')
})