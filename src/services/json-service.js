export default class JsonService {

  _apiBase = 'http://localhost:3004';

  async getResource(url = '') {
    const res = await fetch(`${this._apiBase}${url}`);

    if (!res.ok) {
      throw new Error(`Could not fetch ${url}` + `, received ${res.status}`)
    }
    let sas = await res.json();
    return sas;
  }

  async getAllPokemons() {
    const res = await this.getResource(`/pokemons/`);
    return res;
  }
  
  async getPokemon(id) {
    const pokemon = await this.getResource(`/pokemons/${id}`);
    return pokemon;
  }

}

