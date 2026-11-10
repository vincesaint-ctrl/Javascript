//alert("Hello world from external javascript");
console.log( "Hello world");
console.log("My name is Vincent")
console.log("100")
console.log("10+30")

let firstname = prompt("your first name:")
let school = prompt("your school name:")

alert("My name is " + firstname  + " I school at " + school)

for (a=1; a<=30; a++){
    console.log(a)
    if(a%3===0 && a%5===0){
        console.log("chai and mandazi")
    }
    else if (a%3===0){
        console.log("chai")
    }
    else if (a%5===0){
        console.log( "mandazi")
    }
    else{
        console.log(a)
    }
}



const goal = 5000;
let month = 1;
let saving = 100;
let total = 0;

// Add each month's saving until the goal is reached or the safety limit is passed.
while (total < goal) {
  if (month > 24) {
    console.log('Safety stop: the goal was not reached within 24 months.');
    break;
  }

  total += saving;
  const message = saving >= 500 ? ' - Big month!' : '';
  console.log(`Month ${month}: saved KES ${saving}, total KES ${total}${message}`);

  if (total >= goal) {
    console.log(`Goal reached in month ${month} with KES ${total}!`);
    break;
  }

  month++;
  saving += 50;
}



{
  const marks = [78, 45, -5, 92, 60, 101, 55, 38];
  let validCount = 0;
  let passes = 0;
  let fails = 0;
  let total = 0;
  let highest = -Infinity;
  let highestStudent = 0;
  let lowest = Infinity;
  let lowestStudent = 0;

  // Grade each valid mark, skip invalid entries, and track class results.
  for (let i = 0; i < marks.length; i++) {
    const mark = marks[i];

    if (mark < 0 || mark > 100) {
      console.log('Student ' + (i + 1) + ': invalid mark, skipped');
      continue;
    }

    validCount++;
    total += mark;

    let grade;
    if (mark >= 80) {
      grade = 'A';
    } else if (mark >= 70) {
      grade = 'B';
    } else if (mark >= 60) {
      grade = 'C';
    } else if (mark >= 50) {
      grade = 'D';
    } else {
      grade = 'E';
    }

    const result = mark >= 50 ? 'Pass' : 'Fail';
    console.log('Student ' + (i + 1) + ': ' + mark + ' - Grade ' + grade + ' (' + result + ')');

    if (mark >= 50) {
      passes++;
    } else {
      fails++;
    }

    if (mark > highest) {
      highest = mark;
      highestStudent = i + 1;
    }
    if (mark < lowest) {
      lowest = mark;
      lowestStudent = i + 1;
    }
  }

  console.log('--------------------');
  console.log('Valid marks: ' + validCount);
  console.log('Passed: ' + passes);
  console.log('Failed: ' + fails);
  console.log('Average: ' + (total / validCount).toFixed(1));
  console.log('Highest: ' + highest + ' (Student ' + highestStudent + ')');
  console.log('Lowest: ' + lowest + ' (Student ' + lowestStudent + ')');
}
