function task3() {
  let message = '';
  const askPassword = prompt('Please enter your password');
  const ADMIN_PASSWORD = 'adminpass';

  // if (askPassword === null) {
  //   message = 'User cancelled';
  // } else if (askPassword === ADMIN_PASSWORD) {
  //   message = 'Welcome!';
  // } else {
  //   message = 'Access denied. Wrong password';
  // }

  switch (askPassword) {
    case null:
      message = 'User cancelled';
      break;
    case ADMIN_PASSWORD:
      message = 'Welcome!';
      break;
    default:
      message = 'Access denied. Wrong password';
  }

  alert(message);
}