'use strict';

function task5() {
  const deliveryCountry = prompt(
    "Please enter your country where you'd like to receive your delivery."
  );
  let message = '';
  let price = 0;

  switch (deliveryCountry && deliveryCountry.toLocaleLowerCase()) {
    case null:
      message = "You didn't choose anything!";
      break;
    case 'china':
      price = 100;
      message = `Delivery to ${deliveryCountry} costs ${price} credits`;
      break;
    case 'chile':
      price = 250;
      message = `Delivery to ${deliveryCountry} costs ${price} credits`;
      break;
    case 'australia':
      price = 170;
      message = `Delivery to ${deliveryCountry} costs ${price} credits`;
      break;
    case 'india':
      price = 80;
      message = `Delivery to ${deliveryCountry} costs ${price} credits`;
      break;
    case 'jamaica':
      price = 120;
      message = `Delivery to ${deliveryCountry} costs ${price} credits`;
      break;
    default:
      message = 'Sorry. Delivery is not available in your country.';
  }

  alert(message);
}