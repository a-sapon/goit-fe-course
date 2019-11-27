const credits = 23580;
const pricePerDroid = 3000;
let totalPrice = 0;

let droidAmount = prompt('How many droids would you like to purchase?');

if (droidAmount === null) {
  console.log('Customer cancelled');
} else {
  droidAmount = Number(droidAmount);
  totalPrice = droidAmount * pricePerDroid;

  if (totalPrice > credits) {
    console.log("Sorry you don't enough funds");
  } else {
    console.log(
      `Thank you! You purchased ${droidAmount} droid(s). You have ${credits -
        totalPrice} credits left on your account.`
    );
  }
}