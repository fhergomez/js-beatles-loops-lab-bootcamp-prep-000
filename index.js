
function theBeatlesPlay (musicians, instruments) {
 var array = [];
 for (let i = 0,l = musicians.length;i < l;i++){
   array.push(`${musicians[i]} plays ${instruments[i]}`);
 }
 return array;
}

function johnLennonFacts (arrayFacts) {
  var array = [];
  var i = 0;
  while (i < arrayFacts.length) {
    array.push(`${arrayFacts[i]}!!!`);
    i++;
  }
  return array;
}

function iLoveTheBeatles (number) {
  let array = [];
  let i = 0;
  do {
    i++
  } while (i < number) {
    array.push("I love the Beatltes!");
  }
  return array;
}
