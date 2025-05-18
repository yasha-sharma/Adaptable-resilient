'use strict';

// const bookings = [];

// const creatingBooking = function (
//   flightnumber,
//   passengerno = 1,
//   price = 199 * passengerno
// ) {
//   //   passengerno = passengerno || 1;
//   //   price = price || 199;
//   const booking = {
//     flightnumber,
//     passengerno,
//     price,
//   };
//   console.log(booking);
//   bookings.push(booking);
//   //   console.log(bookings);
// };

// creatingBooking('LH123');
// creatingBooking('LH123', 2, 250);
// creatingBooking('LH123', 5);

// const flight = 'LH123';
// const jonas = {
//   name: 'Jonas Schneid',
//   passport: 2863487905834095,
// };

// const checkIn = function (flightnum, passenger) {
//   flightnum = 'l1999';
//   passenger.name = 'Mr.' + passenger.name;

//   if (passenger.passport === 2863487905834095) {
//     alert('CheckIn allowed');
//   } else {
//     alert('passenger not allowed');
//   }
// };

// // checkIn(flight, jonas);
// // console.log(flight);
// // console.log(jonas);

// const newpassport = function (person) {
//   person.passport = Math.trunc(Math.random() * 1000000);
// };

// newpassport(jonas);
// checkIn(flight, jonas);

// const oneword = function (str) {
//   return str.replace(/ /g, '').toLowerCase();
// };

// const toUpper = function (str) {
//   const [first, ...other] = str.split(' ');

//   return [first.toUpperCase(), ...other].join(' ');
// };

// const transformer = function (str, fn) {
//   console.log(`this is the original string: ${str}`);
//   console.log(`This is transformed string: ${fn(str)}`);
//   console.log(`transformed by: ${fn.name}`);
// };

// transformer('Javascript is the best!', oneword);
// transformer('Javascript is the best!', toUpper);

// const high = function (Hi) {
//   console.log('Hi 🖐️');
// };

// document.body.addEventListener('click', high);

// const greet = function (greeting) {
//   return function (name) {
//     console.log(`${greeting} ${name}`);
//   };
// };
// greet('hello')('Yasha');
// const greetnew = greet('hi');
// greetnew('yasha');

// const greetarr = greeting => name => console.log(`${greeting} ${name}`);

// greetarr('hey')('Yasha');

// const lufthansa = {
//   airline: 'Lufthansa',
//   iataCode: 'LH',
//   bookings: [],
//   //   book: function () {},
//   book(flightno, name) {
//     console.log(
//       `${name} booked a seat on ${this.airline} flight no ${this.iataCode}${flightno}`
//     );
//     this.bookings.push({ flight: `${this.iataCode}${flightno}`, name });
//   },
// };
// lufthansa.book(123, 'Yasha Sharma');
// lufthansa.book(456, 'Mayank Sharma');
// console.log(lufthansa);

// const eurowings = {
//   airline: 'Eurowings',
//   iataCode: 'EH',
//   bookings: [],
// };

// const book = lufthansa.book;

// book.call(eurowings, 344, 'Mary Cooper');
// console.log(eurowings);

// const flightdata = [345, 'George cooper'];
// book.apply(eurowings, flightdata);

// const bookEW = book.bind(eurowings);
// bookEW(23, 'sakshi sharma');

// const bookLH = book.bind(lufthansa);
// bookLH(233, 'sarth sharma');

// const book23 = book.bind(eurowings, 23);
// book23('Yasha Sharma');
// book23('Mayank Sharma');

// lufthansa.plane = 300;
// lufthansa.buyplanes = function (plane) {
//   console.log(this);
//   this.plane++;
//   console.log(this.plane);
// };
// document
//   .querySelector('.buy')
//   .addEventListener('click', lufthansa.buyplanes.bind(lufthansa));

// //partial application(means preset values)

// // const addTax = (rate, value) => value + value * rate;
// // console.log(addTax(0.1, 200));

// // const addVAT = addTax.bind(null, 0.23);

// // console.log(addVAT(100));

// const addtax = function (rate) {
//   return function (value) {
//     return value + value * rate;
//   };
// };

// const addVAT = addtax(0.23);

// console.log(addVAT(100));

// const poll = {
//   question: 'What is your favourite programming language?',
//   options: ['0: JavaScript', '1: Python', '2: Rust', '3: C++'],
//   answers: new Array(4).fill(0),
//   registerNewAnswer() {
//     const reply = Number(prompt(
//       'What is your favourite programming language? \n 0: JavaScript \n 1: Python \n 2: Rust \n 3: C++ \n (Write option number)'
//     ));
//     console.log(reply);
//     if (this.reply === Number && this.reply === 1) {
//       this.answers[reply]++;
//       console.log(this.answers);
//     } else {
//       prompt(
//         'What is your favourite programming language? \n 0: JavaScript \n 1: Python \n 2: Rust \n 3: C++ \n (Write option number)'
//       );
//     }
//   },
//   displayResults(type) {
//     if (type ===)
//     console.log(this.answers);
//   },
//   // This generates [0, 0, 0, 0]. More in the next section! answers: new Array(4).fill(0),
// };

// const registerNewAnswer = poll.registerNewAnswer;
// const registerNewAnswernew = registerNewAnswer.bind(poll);
// document.querySelector('.poll').addEventListener('click', registerNewAnswernew);

const poll = {
  question: 'What is your favourite programming language?',
  options: ['0: JavaScript', '1: Python', '2: Rust', '3: C++'],
  answers: new Array(4).fill(0),
  registerNewAnswer() {
    const answer = Number(
      prompt(
        `${this.question}\n${this.options.join('\n')}\n(Write option number)`
      )
    );
    typeof answer === Number &&
      this.answer < this.answers.length &&
      this.answers[answer]++;
    this.displayResults();
    this.displayResults('string');
  },
  displayResults(type = 'array') {
    if (type === 'array') {
      console.log(this.answers);
    } else if (type === 'string') {
      console.log(`Poll results are ${this.answers.join(', ')}`);
    }
  },
};
document
  .querySelector('.poll')
  .addEventListener('click', poll.registerNewAnswer.bind(poll));

poll.displayResults.call({ answers: [5, 2, 3] }, 'string');
poll.displayResults.call({ answers: [1, 5, 3, 9, 6, 1] });

(function () {
  const header = document.querySelector('h1');
  header.style.color = 'red';
  document.querySelector('body').addEventListener('click', function () {
    header.style.color = 'blue';
  });
})();
