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
    console.log(`Student ${i + 1}: invalid mark, skipped`);
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
  console.log(`Student ${i + 1}: ${mark} - Grade ${grade} (${result})`);

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
console.log(`Valid marks: ${validCount}`);
console.log(`Passed: ${passes}`);
console.log(`Failed: ${fails}`);
console.log(`Average: ${(total / validCount).toFixed(1)}`);
console.log(`Highest: ${highest} (Student ${highestStudent})`);
console.log(`Lowest: ${lowest} (Student ${lowestStudent})`);
