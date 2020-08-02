'use strict';

const numberOfFilms =+prompt('Сколько фильмов вы уже просмотрели?',  ' ');

const personalMovieDB ={
    count: numberOfFilms,
    movies: {},
    actors:{},
    genre:[],
    private: false
};

const a = prompt('Один из последних просмотренных вами фильмов?', ' '),
      b = prompt('Насколько оцените его?', ' ');
      //с = prompt('Один из последних просмотренных вами фильмов?', ' '),
     // d = prompt('Насколько оцените его?', ' ');
personalMovieDB.movies[a] = b;
//personalMovieDB.movies[c] = d,

console.log(personalMovieDB);





