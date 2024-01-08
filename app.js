document.addEventListener('DOMContentLoaded', () => {
    const moviesContainer = document.getElementById('movies');

    // Assume you have an API endpoint to fetch movie data
    fetch('https://api.example.com/movies')
        .then(response => response.json())
        .then(data => {
            data.forEach(movie => {
                const movieElement = createMovieElement(movie);
                moviesContainer.appendChild(movieElement);
            });
        })
        .catch(error => console.error('Error fetching movies:', error));

    function createMovieElement(movie) {
        const movieElement = document.createElement('div');
        movieElement.className = 'movie';

        const imageElement = document.createElement('img');
        imageElement.src = movie.posterUrl;
        imageElement.alt = movie.title;

        // You can add more details like title, description, etc.

        movieElement.appendChild(imageElement);

        // Add click event to play the movie
        movieElement.addEventListener('click', () => {
            // You would typically navigate to a details page or play the video here
            console.log(`Playing ${movie.title}`);
        });

        return movieElement;
    }
});
