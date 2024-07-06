const PLAYERS = [
    "Spiderman",
    "Captain America",
    "Wonderwoman",
    "Popcorn",
    "Gemwoman",
    "Bolt",
    "Antwoman",
    "Mask",
    "Tiger",
    "Captain",
    "Catwoman",
    "Fish",
    "Hulk",
    "Ninja",
    "Black Cat",
    "Volverine",
    "Thor",
    "Slayer",
    "Vader",
    "Slingo"
];

// Initialize players with image and strength
const initPlayers = (players) => {
    return players.map((player, index) => ({
        name: player,
        strength: getRandomStrength(),
        image: "images/super-" + (index + 1) + ".png",
        type: index % 2 === 0 ? 'hero' : 'villain'
    }));
};

// Getting random strength
const getRandomStrength = () => {
    // Return a random integer (1,100]
    return Math.ceil(Math.random() * 100);
};

// Build HTML for players
const buildPlayersHTML = (players, type) => {
    return players
        .filter(player => player.type === type)
        .map(player => `
            <div class="player">
                <img src="${player.image}" alt="${player.name}">
                <div class="name">${player.name}</div>
                <div class="strength">${player.strength}</div>
            </div>
        `)
        .join('');
};


// Display players in HTML
const viewPlayers = (players) => {
    const heroesHTML = buildPlayersHTML(players, 'hero');
    const villainsHTML = buildPlayersHTML(players, 'villain');

    document.getElementById('heroes').innerHTML = heroesHTML;
    document.getElementById('villains').innerHTML = villainsHTML;
};

window.onload = () => {
    const players = initPlayers(PLAYERS);
    viewPlayers(players);
};
