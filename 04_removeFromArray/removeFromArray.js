const removeFromArray = function(array, ...remove) {
    let result = array.filter(arg => !remove.includes(arg))
    return result
};

// Do not edit below this line
module.exports = removeFromArray;
