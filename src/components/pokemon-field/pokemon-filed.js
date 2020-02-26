import React, { Component } from "react";
import PokemonCard from "../pokemon-card";

import "./pokemon-filed.scss";

class PokemonField extends Component {
  state = {
    counter: 11
  };

  increment = () => {
    this.setState({
      counter: (this.state.counter += 10)
    });
  };

  render() {
    const { pokemonsObjects } = this.props;
    const counter = this.state.counter;

    const elements = pokemonsObjects.map(item => {
      if (item.id < counter) {
        return <PokemonCard {...item} key={item.id} />;
      }
    });

    return (
      <div className="col-xl-9 col-lg-8 col-md-6 pokemon-field bg-light ">
        <div className="pockemons-deck d-flex align-items-stretch">
            {elements}
            <div onClick={this.increment} className="next_page_button">
              <ul className="pagination pagination-lg">
                <li className="page-item">
                  <a className="page-link">
                    &raquo;
                  </a>
                </li>
              </ul>
            </div>
        </div>
      </div>
    );
  }
}

export default PokemonField;
