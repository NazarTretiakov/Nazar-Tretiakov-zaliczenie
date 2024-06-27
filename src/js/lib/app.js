export default async () => {
    document.getElementById('search-button').addEventListener('click', () => {
        const title = document.getElementById('search-input').value;

        if (title) {
            fetchMovieDetails(title);
        }
    });

    function fetchMovieDetails(title) {
        const apiKey = 'df05aec3';
        const url = `https://www.omdbapi.com/?t=${encodeURIComponent(title)}&apikey=${apiKey}`;

        fetch(url)
            .then(response => response.json())

            .then(data => {
                if (data.Response === "True") {
                    displayMovieDetails(data);
                } else {
                    alert(data.Error);
                }
            })

            .catch(error => console.error('Error:', error));
    }

    function displayMovieDetails(movie) {
        const detailsDiv = document.getElementById('movie-details');

        detailsDiv.innerHTML = `
        <h2>${movie.Title} (${movie.Year})</h2>
        <p><strong>Director:</strong> ${movie.Director}</p>
        <p><strong>Plot:</strong> ${movie.Plot}</p>
        <p><strong>Rating:</strong> ${movie.imdbRating}</p>
        `;
    }
}
