// A caesarCipher function that takes a string and a 
// shift factor and returns it with each character 
// “shifted”. Read more about how a Caesar cipher 
// works on this website.

// Don’t forget to test wrapping from z to a.
// Don’t forget to test keeping the same case.
// Don’t forget to test punctuation!
// For this one, you may want to split the final 
// function into a few smaller functions. One concept 
// of Testing is that you don’t need to explicitly 
// test every function you write… Just the public ones.
// So in this case you only need tests for the final 
// caesarCipher function. If it works as expected you 
// can rest assured that your smaller helper functions 
// are doing what they’re supposed to.

//Eg:Result for abz will be -> bca
//To test:aAa->bBb
//1.check uppercase and lower case
//2.check not a string

const alphabet='abcdefghijklmnopqrstuvwxyz'
const cipher='bcdefghijklmnopqrstuvwxyza'

function toCheckUpperCase(char) {
    //char !=char.toLowerCase() because:
    //@ return true both on .toUpperCase() and .toLowerCase()
    //when char ='@' @==char.toUpperCase() returns true
    //but returns false on !=char.toLowerCase()
    //Thus solves the error on the passing of special characters

    if (char == char.toUpperCase() && char != char.toLowerCase()) {
        return true;
    }
    else
    {
        return false;
    }
}

function toCheckLowerCase(char) {
    if (char == char.toLowerCase() && char !=char.toUpperCase()) {
        return true;
    }
    else
    {
        return false;
    }
}

function isString(string)
{
    if (typeof(string)=='string')
        return true;
    else    
        return false;
}

function cipherFunc(char)
{
    let index=alphabet.indexOf(char)
    return cipher[index]
}

//Function to cipher the character
function convert(char)
{
    //If character is Upper-case
    if(toCheckUpperCase(char))
    {
        let char1=char.toLowerCase()
        let char2=cipherFunc(char1)
        return char2.toUpperCase();
    }
    //If character is Lower-case
    else if(toCheckLowerCase(char))
    {
        return cipherFunc(char)
    }
    //If character is:!,@,#,$,%...
    else
    {
        return char;
    }
}
function caesarCipher(string) {
    let converted_string=''
    for (let i = 0; i < string.length; i++) {
        let char=string[i]
        //A new declared string
        let new_char=convert(char)
        converted_string+=new_char
    }
    return converted_string
}
module.exports = caesarCipher
















