'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

// Data
const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: 'Steven Thomas Williams',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: 'Sarah Smith',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];

// Elements
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');

const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');

const displayMovements = function (movements) {
  containerMovements.innerHTML = '';

  movements.forEach(function (mov, i) {
    const type = mov > 0 ? 'deposit' : 'withdrawal';

    const html = `<div class="movements__row">
          <div class="movements__type movements__type--${type}">
            ${i + 1} ${type}
          </div>
          <div class="movements__value">${mov}€</div>
        </div>
      `;

    containerMovements.insertAdjacentHTML('afterbegin', html);
  });
};

displayMovements(account1.movements);

const calcdisplayMovements = function (movement) {
  const balance = movement.reduce((acc, cur) => (acc += cur), 0);
  labelBalance.textContent = `${balance}€`;
};

calcdisplayMovements(account1.movements);

const calcdisplaySummary = function (movement) {
  const income = movement
    .filter(mov => mov > 0)
    .reduce((acc, mov) => acc + mov, 0);

  labelSumIn.textContent = `${income}€`;

  const outcome = movement
    .filter(mov => mov < 0)
    .reduce((acc, mov) => acc + mov, 0);

  labelSumOut.textContent = `${Math.abs(outcome)}€`;

  const interest = movement
    .filter(mov => mov > 0)
    .map(deposit => (deposit * 1.2) / 100)
    .filter(function (int, i, arr) {
      console.log(arr);
      return int >= 1;
    })
    .reduce((acc, int) => acc + int, 0);

  labelSumInterest.textContent = `${interest}€`;
};

calcdisplaySummary(account1.movements);

const CreateUserNames = function () {
  accounts.forEach(function (acc) {
    acc.username = acc.owner
      .toLowerCase()
      .split(' ')
      .map(function (word) {
        return word[0];
      })
      .join('');
  });
};

CreateUserNames(accounts);
console.log(accounts);

// const user = 'Steven Thomas Williams'; //stw

// const CreateUserNames = function () {
//   const username = user
//     .toLowerCase()
//     .split(' ')
//     .map(function (word) {
//       return word[0];
//     })
//     .join('');

//   return username;
// };

// CreateUserNames(user);

// /////////////////////////////////////////////////
// /////////////////////////////////////////////////
// // LECTURES

// const currencies = new Map([
//   ['USD', 'United States dollar'],
//   ['EUR', 'Euro'],
//   ['GBP', 'Pound sterling'],
// ]);

//

/////////////////////////////////////////////////

// const arr = ['a', 'b', 'c', 'd', 'e'];

// console.log(arr.splice(1, 2));
// console.log(arr);

// const arr2 = ['j', 'k', 'l', 'm'];

// console.log(arr2.reverse());

// const letters = ['a', 'b', 'c', 'd', 'e'];

// console.log(arr.concat(arr2));

// console.log(letters.join('-'));

// const arr3 = [1, 2, 3, 4, 5];

// console.log(arr3[1]);
// console.log(arr3.at(0));
// console.log(arr3[arr3.length - 1]);
// console.log(arr3.at(-1));

// for (const [i, movement] of movements.entries()) {
//   if (movement > 0) {
//     console.log(`you deposited ${i + 1}: ${movement}`);
//   } else {
//     console.log(`you withdraw ${i + 1}: ${Math.abs(movement)}`);
//   }
// }

// movements.forEach(function (movement, i, array) {
//   if (movement > 0) {
//     console.log(`you deposited ${i + 1}: ${movement}`);
//   } else {
//     console.log(`you withdraw ${i + 1}: ${Math.abs(movement)}`);
//   }
// });

// const currentMap = new Map();

// currentMap.set('USD', 'United Nations of America');
// currentMap.set('GBP', 'Great Britain Pound');

// console.log(currentMap);
// console.log(currentMap.get('USD'));

// currentMap.forEach(function (value, key, map) {
//   console.log(`this is key ${key} and its value ${value}`);
// });

// const currentSet = new Set(['USD', 'GBP', 'USD']);
// console.log(currentSet);

// currentSet.forEach(function (value, key, map) {
//   console.log(`this is key ${key} and its value ${value}`);
// });

// const Julia_data = [3, 5, 2, 12, 7];
// const Kate_data = [4, 1, 15, 8, 3];

// const Julia_data = [9, 16, 6, 8, 3];
// const Kate_data = [10, 5, 6, 1, 4];

// For now, they are just interested in knowing whether a dog is an adult or a puppy.
// A dog is an adult if it is at least 3 years old, and it's a puppy if it's less than 3 years old.
// 1. Juliafoundoutthattheownersofthefirstandthelasttwodogsactuallyhave cats, not dogs!
//  So create a shallow copy of Julia's array, and remove the cat ages from that copied array
// (because it's a bad practice to mutate function parameters)
// 2. CreateanarraywithbothJulia's(corrected)andKate'sdata
// 3. Foreachremainingdog,logtotheconsolewhetherit'sanadult("Dognumber1
// is an adult, and is 5 years old") or a puppy ("Dog number 2 is still a puppy   ")
// 4. Runthefunctionforbothtestdatasets

// const checkDogs = function (dogsJulia, dogsKate) {
//   console.log(Julia_data);
//   const Julia_data_new = Julia_data.slice(1, 3);
//   // Julia_data.slice(1, -2);
//   console.log(Julia_data_new);

//   const final_data = Julia_data_new.concat(Kate_data);
//   console.log(final_data);

//   final_data.forEach(function (value, i) {
//     const str =
//       value >= 3
//         ? console.log(
//             `Dog number ${i + 1} is an adult, and is ${value} years old`
//           )
//         : console.log(`Dog number ${i + 1} is still a puppy`);
//   });
// };

// 1. Calculatethedogageinhumanyearsusingthefollowingformula:
// ifthedogis <= 2 years old, humanAge = 2 * dogAge. If the dog is > 2 years old, humanAge = 16 + dogAge * 4
// 2. Excludealldogsthatarelessthan18humanyearsold(whichisthesameas keeping dogs that are at least 18 years old)
// 3. Calculatetheaveragehumanageofalladultdogs(youshouldalreadyknow from other challenges how we calculate averages 😉)
// 4. Runthefunctionforbothtestdatasets

// checkDogs(Julia_data, Kate_data);

// const calcAverageHumanAge = function (dogAge) {
//   const humanAge = dogAge.map(age => (age <= 2 ? age * 2 : 16 + age * 4));
//   console.log(humanAge);

//   const dog18 = humanAge.filter(age => age >= 18);
//   console.log(dog18);

//   const avgAge =
//     dog18.reduce((acc, currage) => acc + currage, 0) / dog18.length;
//   return avgAge;
// };

// const avg1 = calcAverageHumanAge([5, 2, 4, 1, 15, 8, 3]);
// console.log(avg1);

// const avg2 = calcAverageHumanAge([16, 6, 10, 5, 6, 1, 4]);
// console.log(avg2);

// const calcAverageHumanAge = dogAge =>
//   dogAge
//     .map(age => (age <= 2 ? age * 2 : 16 + age * 4))
//     .filter(age => age >= 18)
//     .reduce((acc, currage, i, arr) => acc + currage / arr.length, 0);
// const avg1 = calcAverageHumanAge([5, 2, 4, 1, 15, 8, 3]);
// console.log(avg1);

// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
// console.log(movements);
// const euroToUsd = 1.1;

// const movementUSD = movements.map(function (mov) {
//   return mov * euroToUsd;
// });
// console.log(movementUSD);

// const movementUSDarrow = movements.map(movarr => movarr * euroToUsd);
// console.log(movementUSDarrow);

// const movementUSDfor = [];
// for (const mov of movements) {
//   movementUSDfor.push(mov * euroToUsd);
// }
// console.log(movementUSDfor);

// const movementsDescription = movements.map(
//   (movem, i) =>
//     `You ${movem > 0 ? 'deposited' : 'withdraw'} ${i + 1}: ${Math.abs(movem)}`
// );

// console.log(movementsDescription);

// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

// const withdrawal = movements.filter(function (mov) {
//   return mov < 0;
// });

// console.log(withdrawal);

// const deposit = movements.filter(function (mov) {
//   return mov > 0;
// });

// console.log(deposit);

// const depositFor = [];

// for (const move of movements) {
//   if (move > 0) depositFor.push(move);
// }
// console.log(depositFor);

// const balance = movements.reduce(function (acc, curr) {
//   return (acc += curr);
// }, 0);
// console.log(balance);

// const balance = movements.reduce((acc, curr) => (acc += curr), 0);
// console.log(balance);

// let balance2 = 0;
// for (const bal of movements) {
//   balance2 += bal;
// }
// console.log(balance2);

// const max = movements.reduce(function (acc, cur) {
//   if (acc > cur) return acc;
//   else return cur;
// }, movements[0]);

// console.log(max);

// const euroToUsd = 1.1;
// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

// const totalbalanceUSD = movements
//   .filter(mov => mov > 0)
//   .map(mov => mov * euroToUsd)
//   .reduce((acc, mov) => (acc += mov), 0);
// console.log(totalbalanceUSD);
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

const firstWithdrawal = movements.find(mov => mov < 0);
console.log(movements);
console.log(firstWithdrawal);

const account = accounts.find(acc => acc.owner === 'Jessica Davis');
console.log(account);
