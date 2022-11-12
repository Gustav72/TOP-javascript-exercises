const findTheOldest = function(people) {

    let total = 0
    let OldestPerson = {}
    people.reduce((prev, curr) => {
      if ((curr.yearOfDeath - curr.yearOfBirth) > total) {
        total = (curr.yearOfDeath - curr.yearOfBirth);
        OldestPerson = curr;
      }
      return prev;
    })
    return OldestPerson;

  //  const res = people.reduce((prevVal,curVal) => {
  //   return prevVal.yearOfDeath-prevVal.yearOfBirth < curVal.yearOfDeath-curVal.yearOfBirth ? curVal: prevVal;
  // })
};

// Do not edit below this line
module.exports = findTheOldest;
