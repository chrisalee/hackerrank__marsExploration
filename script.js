/*
 * Complete the 'marsExploration' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts STRING s as parameter.
 */

function marsExploration(s) {
  let numLettersChanged = 0;
  // break apart into groups of three
  let groupings = [];
  for(let i = 0; i < s.length; i+=3){
    let group = [s[i], s[i+1], s[i+2]];
    groupings.push(group);
  }
  // console.log(groupings);
  // check each group to see if has correct letter in each spot, else add to numLettersChanged
  for(let group of groupings) {
    if(group[0] !== 'S') {
      numLettersChanged++;
    }
    if(group[1] !== 'O') {
      numLettersChanged++;
    }
    if(group[2] !== 'S') {
      numLettersChanged++;
    }
  }
  return numLettersChanged;
}

///////////////////////////////////////
function marsExploration(s) {
  let count = 0;
  for (let i = 0; i < s.length; i += 3) {
    s[i] !== "S" ? count++ : "";
    s[i + 1] !== "O" ? count++ : "";
    s[i + 2] !== "S" ? count++ : "";
  }
  return count;
}
