module.exports = function multiply(first, second) {
  // your solution
  let arr = [];
  let number = [];
  let rank = 0;

  if ((first.length < 3) && (second.length < 3)) {
    return String(first*second);
  }

  let arrFirst = first.split('').reverse();
  let arrSecond = second.split('').reverse();

  for(let i = 0; i<arrFirst.length; i++){
    arr[i] = [];
    for (let j = 0; j<arrSecond.length; j++) {
      arr[i][j+i] = arrFirst[i]*arrSecond[j];
    }

    let long = arrFirst.length + arrSecond.length;

    for (let j = 0; j<long-1; j++) {
      if (arr[i][j] == undefined) {
        arr[i][j] = 0;
      }
    }
  }

  for (let i = 0; i<arr[1].length; i++) {
    number[i] = [];
    for (let j = 0; j < arr.length; j++) {
    number[i][j] = arr[j][i];
    }
  }

  for (let i = 0; i<arr[1].length; i++) {
    number[i] = number[i].reduce((summ,curent) => summ + curent);
    number[i] = number[i] + rank;
   if (number[i] > 2) {
    rank = parseInt(number[i]/10);
    if (i < arr[1].length-1) {
    number[i] = number[i] - (parseInt(number[i]/10))*10;
    }
   }
  }

  number.reverse();
  arr = number.join('');

  return arr;
}
