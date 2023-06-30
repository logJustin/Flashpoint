const axios = require('axios');

// Test Case 1, Endpoint 1: Retrieve a Pokemon by ID
// I chose to automate this test case because it is important to ensure that the API is 
// able to retrieve a Pokemon by its unique ID. 
test('Retrieve a Pokemon by ID', async () => {
    const pokemonId = 1;
    const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemonId}`);
    const pokemon = response.data;

    expect(pokemon.id).toBe(pokemonId);
});

// Test Case 2, Endpoint 2: Retrieve a Move by ID
// I chose to automate this test case because it is important to ensure that the API
//  is able to retrieve a Move by its unique ID. 
test('Retrieve a Move by ID', async () => {
    const moveId = 1;
    const response = await axios.get(`https://pokeapi.co/api/v2/move/${moveId}`);
    const move = response.data;

    expect(move.id).toBe(moveId);
});

// Test Case 3, Endpoint 3: List all Pokemon
// I chose to automate this test case because it is important to ensure that 
// the API is able to list all the Pokemons.
test('List all Pokemon', async () => {
    const response = await axios.get('https://pokeapi.co/api/v2/pokemon');
    const pokemonList = response.data.results;
    console.log(pokemonList)
    expect(pokemonList).toBeDefined();
    expect(Array.isArray(pokemonList)).toBe(true);
});

// Test Case 4, Endpoint 4: List all Abilities
// I chose to automate this test case because it is important to ensure that the API is
// able to list all the Abilities.
test('List all Abilities', async () => {
    const response = await axios.get('https://pokeapi.co/api/v2/ability');
    const abilitiesList = response.data.results;

    expect(abilitiesList).toBeDefined();
    expect(Array.isArray(abilitiesList)).toBe(true);
});

// Test Case 5, Endpoint 5: List all Types
// I chose to automate this test case because 
// it is important to ensure that the API is able to list all the Types.
test('List all Types', async () => {
    const response = await axios.get('https://pokeapi.co/api/v2/type');
    const typesList = response.data.results;

    expect(typesList).toBeDefined();
    expect(Array.isArray(typesList)).toBe(true);
});
