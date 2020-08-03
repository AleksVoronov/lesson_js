//'use strict';



let numberOfFilms;
function start() {
     numberOfFilms = +prompt('Сколько фильмов вы уже просмотрели?', ' ');
    while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
         numberOfFilms = +prompt('Сколько фильмов вы уже просмотрели?', ' ');
    }
}
start();
const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    private: false
};

function rememberMyFilms() {
    for (let i = 0; i < 2; i++) {
        const a = prompt('Один из последних просмотренных вами фильмов?', ' '),
            b = prompt('Насколько оцените его?', ' ');
        if (
            a != null && b != null && a != '' && b != '' && a.length < 50 && b.length < 50
        ) {
            personalMovieDB.movies[a] = b;
            console.log('done');
        } else {
            console.log('error');
            --i;
        }

    };
}
rememberMyFilms();


function detectedPersonalLevel() {
    if (personalMovieDB.count < 10) {
        console.log('Просмотрено мало фильмов');
    } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
        console.log('Вы класический зритель');
    } else if (personalMovieDB.count <= 30) {
        console.log('Вы киноман');
    } else {
        console.log('error');
    }
}
detectedPersonalLevel();

function showMyDB(hidden) {
    if (!hidden) {
        console.log(personalMovieDB);
    }
}
showMyDB(personalMovieDB.private);

/*function writeYouGeners() {
    for (let i = 1; i <= 3; i++) {

        personalMovieDB.genres[i - 1] = promt(`Ваш любимый жанр под номаром ${i}`);

    }
}
writeYouGeners(personalMovieDB.genres);*/