export interface Movies {
  id: string;
  title: string;
  comments: number;
  rating: number;
  description: string;
}
// The reduce function in JavaScript is useful when you need to accumulate values from an array into a single result
// #for 1. Summing Values (Total Calculation)
/* 
const numbers = [10, 20, 30, 40];
const sum = numbers.reduce((acc, num) => acc + num, 0);
console.log(sum); // Output: 100
*/
//  #2. Counting Occurrences
/* 
const fruits = ["apple", "banana", "apple", "orange", "banana", "apple"];
const fruitCount = fruits.reduce((acc, fruit) => {
  acc[fruit] = (acc[fruit] || 0) + 1;
  return acc;
}, {});
console.log(fruitCount);
Output: { apple: 3, banana: 2, orange: 1 
*/
// #3. Flattening an Array
/* 
const nestedArray = [[1, 2], [3, 4], [5, 6]];
const flatArray = nestedArray.reduce((acc, arr) => acc.concat(arr), []);
console.log(flatArray); // Output: [1, 2, 3, 4, 5, 6]

*/
// #4. Finding Maximum/Minimum
/* 
const scores = [85, 92, 88, 79, 95];
const highestScore = scores.reduce((max, score) => (score > max ? score : max), scores[0]);
console.log(highestScore); // Output: 95

*/
export const getTotalComments = (movies: Movies[]) => {
  //  accumulator, currentValue;
  return movies.reduce((acc, movie) => acc + movie.comments, 0);
};

export const getAverageRating = (movies: Movies[]) => {
  return movies.reduce((acc, movie) => acc + movie.rating, 0) / movies.length;
};

export const movies = [
  {
    id: "1",
    title: "Inception",
    comments: 124,
    rating: 4.7,
    description: "A mind-bending thriller by Christopher Nolan.",
    commentsList: ["Great movie!", "Mind-blowing!", "A true masterpiece."],
  },
  {
    id: "2",
    title: "Interstellar",
    comments: 98,
    rating: 4.8,
    description: "A space exploration film by Christopher Nolan.",
    commentsList: [
      "Amazing visual effects!",
      "Loved the soundtrack.",
      "A bit confusing but great.",
    ],
  },
  {
    id: "3",
    title: "The Dark Knight",
    comments: 255,
    rating: 4.9,
    description: "The iconic Batman film directed by Christopher Nolan.",
    commentsList: [
      "The best Batman movie!",
      "Heath Ledger was outstanding.",
      "Iconic movie.",
    ],
  },
];
