// Data needed for a later exercise
// const flights =
//   '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// const italianFoods = new Set([
//   'pasta',
//   'gnocchi',
//   'tomatoes',
//   'olive oil',
//   'garlic',
//   'basil',
// ]);

// const mexicanFoods = new Set([
//   'tortillas',
//   'beans',
//   'rice',
//   'tomatoes',
//   'avocado',
//   'garlic',
// ]);

// // Data needed for first part of the section
// const restaurant = {
//   name: 'Classico Italiano',
//   location: 'Via Angelo Tavanti 23, Firenze, Italy',
//   categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
//   starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
//   mainMenu: ['Pizza', 'Pasta', 'Risotto'],

//   openingHours: {
//     thu: {
//       open: 12,
//       close: 22,
//     },
//     fri: {
//       open: 11,
//       close: 23,
//     },
//     sat: {
//       open: 0, // Open 24 hours
//       close: 24,
//     },
//   },
// };

// const books = ['english', 'hindi', 'german'];

// console.log(books);

// const [firstbook, secondbook] = books;
// console.log(firstbook, secondbook);

// const [, , thirdbook] = books;
// console.log(thirdbook);

// const ratings = [
//   ['rating', 4.19],
//   ['ratingsCount', 144584],
// ];

// const [[, rating], [, ratingsCount]] = ratings;
// console.log(rating, ratingsCount);

// const ratingStars = [63405, 1808];

// const [fiveStarRatings = 0, oneStarRatings = 0, threeStarRatings = 0] =
//   ratingStars;
// console.log(fiveStarRatings, oneStarRatings, threeStarRatings);

const game = {
  team1: 'Bayern Munich',
  team2: 'Borrussia Dortmund',
  players: [
    [
      'Neuer',
      'Pavard',
      'Martinez',
      'Alaba',
      'Davies',
      'Kimmich',
      'Goretzka',
      'Coman',
      'Muller',
      'Gnarby',
      'Lewandowski',
    ],
    [
      'Burki',
      'Schulz',
      'Hummels',
      'Akanji',
      'Hakimi',
      'Weigl',
      'Witsel',
      'Hazard',
      'Brandt',
      'Sancho',
      'Gotze',
    ],
  ],
  score: '4:0',
  scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
  date: 'Nov 9th, 2037',
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};

// 1. Create one player array for each team (variables'players1'and 'players2')

const [players1, players2] = game.players;
console.log(players1, players2);

//2. Thefirstplayerinanyplayerarrayisthegoalkeeperandtheothersarefield players.
//  For Bayern Munich (team 1) create one variable ('gk') with the goalkeeper's name, and one array
//   ('fieldPlayers') with all the remaining 10 field players

const [gk, ...fieldPlayers] = players1;
console.log(gk, fieldPlayers);

// const [gp, ...fieldPlayers2] = players2;
// console.log(gp, fieldPlayers2);
// 3. Createanarray'allPlayers'containingallplayersofbothteams(22 players)
const allPlayers = [...players1, ...players2];
console.log(allPlayers);

// 4. Duringthegame,BayernMunich(team1)used3substituteplayers.
// So create a new array ('players1Final') containing all the original team1 players plus 'Thiago', 'Coutinho' and 'Perisic'.

const players1Final = [...players1, 'Thiago', 'Coutinho', 'Perisic'];
console.log(players1Final);

// 5. Based on the game.odds object,create one variable for each odd(called 'team1', 'draw' and 'team2').
const { team1, x: draw, team2 } = game.odds;
console.log(team1, draw, team2);

// 6. Write a function('printGoals')that receives an arbitrary numberofplayer names (not an array) and
//prints each of them to the console, along with the number of goals that were scored in total
//(number of player names passed in)
// Test data for 6.: First, use players 'Davies', 'Muller', 'Lewandowski' and 'Kimmich'.
// Then, call the function again with players from game.scored

const printGoals = function (...n) {
  console.log(`${n.length} goals scored`);
};

printGoals('Davies', 'Muller', 'Lewandowski', 'Kimmich');
printGoals(...game.scored);

// 7. The team with the lower odd is more likely to win.
//Print to the console which team is more likely to win, without using an if/else statement or the ternary operator.

team1 < team2 && console.log('team 1 is more likely to winyy');
team1 > team2 && console.log('team 2 is more likely to win');
