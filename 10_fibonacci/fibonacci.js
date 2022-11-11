const fibonacci = function(num) {
    
    if(num < 0) return "OOPS";

    let a = 0;
    let b = 1;
    let next;

    for(let i = 0; i < num; i++)
    {
        next = a + b;
        a = b;
        b = next;
    }

    return a;

};

// Do not edit below this line
module.exports = fibonacci;
