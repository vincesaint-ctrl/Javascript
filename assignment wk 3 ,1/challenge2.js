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
