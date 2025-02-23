const movies = require("./data")

// Exercise 1: Get the array of all directors.
function getAllDirectors(movies) {
  let result =[] 
   movies.map((eachMovie)=>{
    return result.push(eachMovie.director)
   }) 
  // console.log("EXERCICE 1 ->", result);
  return result;
}
getAllDirectors(movies)
// Exercise 2: Get the films of a certain director
function getMoviesFromDirector(movies, director) {
 
 return movies.filter(movie=>movie.director==director)
}
getMoviesFromDirector(movies,"Frank Darabont")
//console.log(getMoviesFromDirector(movies,"Frank Darabont"));



// Exercise 3: Calculate the average of the films of a given director.
function moviesAverageOfDirector(movies, director) {
  let average;
  let mov= movies.filter(movie=>movie.director==director).map(movies=>movies.score)
  average=mov.reduce((num1, actualNum1)=>(num1+actualNum1)/mov.length)
  return average
}
moviesAverageOfDirector(movies,"Frank Darabont" )
console.log(moviesAverageOfDirector(movies,"Frank Darabont" ));

// Exercise 4:  Alphabetic order by title 
function orderAlphabetically(array) {
  
}

// Exercise 5: Order by year, ascending
function orderByYear() {

}

// Exercise 6: Calculate the average of the movies in a category
function moviesAverageByCategory() {

}

// Exercise 7: Modify the duration of movies to minutes
function hoursToMinutes() {

}

// Exercise 8: Get the best film of a year
function bestFilmOfYear() {
  
}



// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = {
    getAllDirectors,
    getMoviesFromDirector,
    moviesAverageOfDirector,
    orderAlphabetically,
    orderByYear,
    moviesAverageByCategory,
    hoursToMinutes,
    bestFilmOfYear,
  };
}
console.log("first commit");
