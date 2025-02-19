const movies = require('./movies.json');

/**
 * Get the first ten movies and return an array
 * @returns {Array}
 */
function getFirstTenMovies(){
    let titles = [];
    let count = 0;
        movies.find(object =>{
            if(count < 10){titles[count] = object.title;}count++;
        });
    return titles;
}

/**
 * Get the movies when the genre is drama and return an array
 * @param  {String} genre
 * @returns {Array}
 */
 function getMoviesWithGenre(genre){
    let result = [];
    let i = 0;
    //search in movies
    movies.find(object =>{
        //if there is equality we assign to result
        if(object.genre === genre){
            result[i] = object.title;
            i++;
        }
    });

    //return the array
    return result;
}

function main(){
    const firstTenMovies = getFirstTenMovies();
    const dramaMovies = getMoviesWithGenre('Drama');
    console.log(`Only first ten movies:`, firstTenMovies);
    console.log(`Only Drama movies:`, dramaMovies);
}

main();