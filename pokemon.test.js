const axios = require('axios');

// Test Case 1, Endpoint 1: Retrieve a Pokemon by ID
// Verifies pokemon 1 is bulbasaur and its height & weight
test('Retrieve a Pokemon by ID', async () => {
    const pokemonId = 1;
    const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemonId}`);
    const pokemon = response.data;

    expect(pokemon.id).toBe(pokemonId);
    expect(pokemon.name).toBe('bulbasaur');
    expect(pokemon.weight).toBe(69);
    expect(pokemon.height).toBe(7);
});

// Test Case 2, Endpoint 2: Retrieve a Move by ID
// Validates the Move's ID, Name, and Accuracy
test('Retrieve a Move by ID', async () => {
    const moveId = 1;
    const response = await axios.get(`https://pokeapi.co/api/v2/move/${moveId}`);
    const move = response.data;

    expect(move.id).toBe(moveId);
    expect(move.name).toBe('pound');
    expect(move.accuracy).toBe(100);
});

// Test Case 3, Endpoint 3: List all Pokemon
// Fetches list of pokemon, validates that Pokemon 6 (index 5) is Charizard
test('List all Pokemon', async () => {
    const response = await axios.get('https://pokeapi.co/api/v2/pokemon');
    const pokemonList = response.data.results;

    expect(pokemonList).toBeDefined();
    expect(Array.isArray(pokemonList)).toBe(true);
    expect(pokemonList[5].name).toBe('charizard');
});

// Test Case 4, Endpoint 4: List all Abilities
// Expects an array and validates first result is the move Stench
test('List all Abilities', async () => {
    const response = await axios.get('https://pokeapi.co/api/v2/ability');
    const abilitiesList = response.data.results;

    expect(abilitiesList).toBeDefined();
    expect(Array.isArray(abilitiesList)).toBe(true);
    expect(abilitiesList[0].name).toBe('stench');
});

// Test Case 5, Endpoint 5: List all Types
// Fetches array and validates that the first Pokemon type is normal
test('List all Types', async () => {
    const response = await axios.get('https://pokeapi.co/api/v2/type');
    const typesList = response.data.results;

    expect(typesList).toBeDefined();
    expect(Array.isArray(typesList)).toBe(true);
    expect(typesList[0].name).toBe('normal');
});
