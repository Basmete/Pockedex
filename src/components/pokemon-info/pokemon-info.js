import React, { Component } from 'react';
import './pokemon-info.scss'
import CatchStatus from '../catch-status';

export default class PokemonInfo extends Component {

  render () {
    const { name, id, isCatched, time, yearMonthDay } = this.props;
    const srcImage = `../../../pokemons/${id}.png`;
    const bgRed = isCatched ? 'bg-red' : null;
    
    return (
      <div className="col-xl-9 col-lg-8 col-md-6">
        <div className="pokemon-card pokemon-info-card">
          <div className="card text-white bg-success">
          <div className="card-header text-center">{name.toUpperCase()}</div>
            <div className={`card-body ${bgRed}`}>
              <div className="card-image">
                <img src={srcImage}></img>
              </div>
              <h4 className="card-title"> ID {id}</h4>
              <CatchStatus catchStatus={isCatched} yearMonthDay={yearMonthDay} time={time}/>
            </div>
          </div>
        </div>
      </div>
    );
  }
};

