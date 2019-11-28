function task2() {
  const total = 100;
  const ordered = 50;

  // if (ordered > total) {
  //   console.log(`На складе недостаточно твоаров!`);
  // } else {
  //   console.log(`Заказ оформлен, с вами свяжется менеджер.`);
  // }

  const message =
    ordered > total
      ? `На складе недостаточно твоаров!`
      : `Заказ оформлен, с вами свяжется менеджер.`;

  console.log(message);
}