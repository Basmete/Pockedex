import React, { Component } from "react";
import "./pokemon-card.scss";
import { Link } from "react-router-dom";

import { catchPokemon } from '../../actions/catch-action';
import { connect } from "react-redux";
import CatchStatus from "../catch-status";

class PokemonCard extends Component {


  onBthHandler = () => {
    this.props.catchPokemon(this.props.id);
  };



  render() {
    const { name, isCatched, id, yearMonthDay, time } = this.props;
    const srcImage = `../../../pokemons/${id}.png`;
    const bgRed = isCatched ? 'bg-red' : null;

    return (

      <div className="card text-white bg-success wrep">
        <Link to={`/pokemons/${id}`}><div onClick={this.headerClick} className="card-header text-center">{name.toUpperCase()}</div></Link>
        <div className={`card-body ${bgRed}`}>
          <div className="card-image">
            <img src={srcImage}></img>
          </div>
          <h4 className="card-title"> ID {id}</h4>
          <div className="d-flex">
            {isCatched ? <button type="button" className="btn btn-primary disabled">
              Catch
            </button> : <button onClick={this.onBthHandler} type="button" className="btn btn-primary">
              Catch
            </button>}
            <CatchStatus catchStatus={isCatched} yearMonthDay={yearMonthDay} time={time}/>
          </div>
        </div>
      </div>
    );
  }
}

export default connect(null, {catchPokemon})(PokemonCard);
