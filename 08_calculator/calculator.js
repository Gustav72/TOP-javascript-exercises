const add = function(x, y) {

  if(x === undefined && y === undefined) return 0;
  else if(x === undefined) return y;
  else if(y === undefined) return x;
  else return x + y;
	
};

const subtract = function(x, y) {
	
  if(x === undefined && y === undefined) return 0;
  else if(x === undefined) return -y;
  else if(y === undefined) return x;
  else return x - y;
	
};

const sum = function(x) {
  let num = 0;
  for(let i = 0; i < x.length; i++) {
    num = num + x[i];
  }
	return num;
};

const multiply = function(x) {
  let num = 1;
  for(let i = 0; i < x.length; i++) {
    num = num * x[i];
  }
	return num;
};

const power = function(x, y) {
	
  if(x === undefined && y === undefined) return 0;
  else if(x === undefined) return 0;
  else if(y === undefined) return 1;
  else return Math.pow(x, y);
	
};

const factorial = function(x) {
	let num = 1;
  for (let i = 1; i < x + 1; i++){
    num = num * i;
   }
  return num;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
