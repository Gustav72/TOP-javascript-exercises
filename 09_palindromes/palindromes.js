const palindromes = function (...word) {

for (let arg of word) {
    forward = arg.toLowerCase().replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g,"").replace(/\s+/g, '');
    let reverse = forward.split("").reverse().join("");
    console.log(forward)
    console.log(reverse)
    if (reverse !== forward) return false;
}
return true;

};

// Do not edit below this line
module.exports = palindromes;
