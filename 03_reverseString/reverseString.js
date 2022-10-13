const reverseString = function(string) {

    let reverse = [];
    for(let i = 0; i < string.length; i++) {
        reverse.unshift(string.charAt(i));
    }
    reverse = reverse.join('');
    return reverse;

};

// Do not edit below this line
module.exports = reverseString;
