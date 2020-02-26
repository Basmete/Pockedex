export const fetchPokemons = () => {
  return {
    type:'FETCH_POKEMONS',
    request: {
      method: 'GET',
      url: 'http://localhost:3004/pokemons'
    }
  };
};

export const catchPokemon = (id) => {
  let date = new Date();
  let yearMonthDay = date.getDate() + "." + (date.getMonth() + 1) + "." + date.getFullYear();
  let time = date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds();
  return {
    type:'CATCH_POKEMON',
    request: {
      method: 'PATCH',
      url: `http://localhost:3004/pokemons/${id}`,
      data: {
        isCatched: true,
        yearMonthDay,
        time
      }
    }
  };
};

