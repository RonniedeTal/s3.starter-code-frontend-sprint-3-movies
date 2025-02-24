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

// Exercise 3: Calculate the average of the films of a given director.
function moviesAverageOfDirector(movies, director) {
  let average;
  let mov= movies.filter(movie=>movie.director==director).map(movies=>movies.score)
  average=mov.reduce((num1, actualNum1)=>(num1+actualNum1)/mov.length)
  return average
}
moviesAverageOfDirector(movies,"Frank Darabont" )
// console.log(moviesAverageOfDirector(movies,"Frank Darabont" ));

// Exercise 4:  Alphabetic order by title 
function orderAlphabetically(movies) {
  let sortedTitle= movies.map(movie=>movie.title)
  // console.log(sortedTitle);
  
  return sortedTitle.sort().slice(0, 20)
}
orderAlphabetically(movies)
// Exercise 5: Order by year, ascending
function orderByYear(movies) {
 let arrYear= movies.map(movie=>movie)
 arrYear.sort((a, b)=>{
  if(a.year!==b.year){
    return a.year-b.year
  }
  if (a.title < b.title) return -1; 
  if (a.title > b.title) return 1;
  return 0;
 })
 return arrYear
}
orderByYear(movies)

// Exercise 6: Calculate the average of the movies in a category
function moviesAverageByCategory(movies, genre) {
let averageByGenre;
let genreFiltered = movies.filter(movie=>movie.genre==genre).map(movie=>movie.score)
averageByGenre=genreFiltered.reduce((acc, actualGen)=>(Math.round(acc+actualGen)))
let media=Number((averageByGenre/genreFiltered.length).toFixed(2))
return media
}
moviesAverageByCategory(movies, 'Drama')


// Exercise 7: Modify the duration of movies to minutes

function hoursToMinutes(movies) {
  let arr=[]
  let movieMapped=movies.map((eachMovie)=>{
  let splited=eachMovie.duration.split("")
  splited.splice(splited.indexOf("h"))
  let hour=Number(splited)*60
  let splitedMin=eachMovie.duration.split("")
   splitedMin.splice(splitedMin.indexOf("m")), splitedMin.splice(0,3)
    
    let min=Number(splitedMin.join(""))
    let totalMinutes=hour+min
    // console.log(totalMinutes);
    return {
      ...eachMovie,
      duration:totalMinutes
    }

  })

  arr.push(...movieMapped)
  return arr
}
hoursToMinutes(movies)






// function hoursToMinutes(movies) {
// let hoursMinutes;
// let horas;
// let minutos;
// let minutosANumeros;
// let splicedObject;
// let subSplicedObject;
// let moviesMapped=movies.map((eachMovie)=>{
//   // console.log(eachMovie.duration.split(""));
//   let deletedSpace=eachMovie.duration.split("")
//   splicedObject=deletedSpace.splice(deletedSpace.indexOf("h"))
//   // console.log(deletedSpace);
  
//   subSplicedObject=splicedObject.splice(splicedObject.indexOf("m")-2, 2)
//   minutos=subSplicedObject.join("")
//   if(minutos.includes("h")){
//     return "h"==0
//   }
//   minutosANumeros=Number(minutos)
//   horas=Number(deletedSpace)*60
//   // console.log(horas);
//   hoursMinutes=horas+minutosANumeros
//   console.log(hoursMinutes);
//   // eachMovie.duration
//   // console.log(splicedObject);
 
//   return eachMovie.duration=hoursMinutes
  
  
// })


// // let splitContent= moviesMapped.split(" ")
// // console.log(splitContent);

// console.log(moviesMapped);
// }

// hoursToMinutes(movies)
// Exercise 8: Get the best film of a year
bestFilmOfYear(movies, 1995)
function bestFilmOfYear(movies, year) {
  let bestMovie=[]
  let filteredMovies=movies.filter(movie=>movie.year==year).reduce((prev, actual)=>{
    return actual.score>prev.score?actual:prev
  })
 
    bestMovie.push(filteredMovies)
  
  return bestMovie
}
bestFilmOfYear(movies, 1995)


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
