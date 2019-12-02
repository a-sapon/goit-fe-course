'use strict';

const Transaction = {
  DEPOSIT: 'deposit',
  WITHDRAW: 'withdraw',
};

const templateTransaction = {
  id: 0,
  type: Transaction.DEPOSIT,
  amount: 0
}

const account = {
  // Текущий баланс счета
  balance: 0,

  // История транзакций
  transactions: [],

  /*
   * Метод создает и возвращает объект транзакции.
   * Принимает сумму и тип транзакции.
   */
  createTransaction(amount, type) {
    const newTransaction = Object.assign({}, templateTransaction);
    newTransaction.type = type;
    newTransaction.amount = amount;
    newTransaction.id = this.transactions.length;
    this.transactions.push(newTransaction);
    // this.balance += type === Transaction.DEPOSIT ? amount : -amount;
    type === Transaction.DEPOSIT ? this.balance += amount : this.balance -= amount;

    return newTransaction;
  },

  /*
   * Метод отвечающий за добавление суммы к балансу.
   * Принимает сумму танзакции.
   * Вызывает createTransaction для создания объекта транзакции
   * после чего добавляет его в историю транзакций
   */
  deposit(amount) {
    this.createTransaction(amount, Transaction.DEPOSIT);
  },

  /*
   * Метод отвечающий за снятие суммы с баланса.
   * Принимает сумму танзакции.
   * Вызывает createTransaction для создания объекта транзакции
   * после чего добавляет его в историю транзакций.
   *
   * Если amount больше чем текущий баланс, выводи сообщение
   * о том, что снятие такой суммы не возможно, недостаточно средств.
   */
  withdraw(amount) {
    this.createTransaction(amount, Transaction.WITHDRAW);
  },

  /*
   * Метод возвращает текущий баланс
   */
  getBalance() {
    return this.balance;
  },

  /*
   * Метод ищет и возвращает объект транзации по id
   */
  getTransactionDetails(id) {
    for (const object of account.transactions) {
      if (object.id === id) {
        return object;
      }
    }
  },

  /*
   * Метод возвращает количество средств
   * определенного типа транзакции из всей истории транзакций
   */
  getTransactionTotal(type) {
    let sum = 0;
    for (const object of account.transactions) {
      if (object.type === type) {
        sum += object.amount;
      }
    }
    return sum;
  }
};

account.deposit(100);
account.deposit(100);
account.deposit(100);
account.withdraw(50);
account.withdraw(50);
console.log('Ваш текущий баланс:', account.getBalance());
console.log(account)
console.log(account.getTransactionDetails(3))
console.log(account.getTransactionTotal(Transaction.DEPOSIT));
console.log(account.getTransactionTotal(Transaction.WITHDRAW));