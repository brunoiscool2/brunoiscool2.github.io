document.addEventListener('DOMContentLoaded', function() {
    let gamesData = []; // Store games data for filtering
    
    fetch('/assets/js/games.json')
        .then(response => response.json())
        .then(data => {
            gamesData = data.games; // Store the data
            renderGames(gamesData); // Initial render
            
            // Add event listener for search
            document.getElementById('searchBar').addEventListener('input', filterGames);
        })
        .catch(error => console.error('Error loading games:', error));

    function renderGames(games) {
        const gamesContainer = document.getElementById('games-container');
        gamesContainer.innerHTML = ''; // Clear previous results
        
        games.forEach(game => {
            const gameElement = document.createElement('div');
            gameElement.className = 'game-box';
            gameElement.innerHTML = `
                <a href="${game.url}">
                    <img src="${game.image}" alt="${game.name}" width="200" height="200">
                    <div class="game-title">${game.name}</div>
                </a>
            `;
            gamesContainer.appendChild(gameElement);
        });
    }

    function filterGames() {
        const input = document.getElementById('searchBar').value.toLowerCase();
        const filteredGames = gamesData.filter(game => 
            game.name.toLowerCase().includes(input)
        );
        renderGames(filteredGames);
    }
});