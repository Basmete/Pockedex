import React, { Component } from "react";
import "./sidebar.scss";

const SideBar = () => {
  return (
    <div className="col-xl-3 col-lg-4 col-md-6">
      <div className="jumbotron sideBar">
        <h1 className="display-3 sideBar-header">Welcome to POCKEDEX App!</h1>
        <p className="lead">
          This is an app that allows you to catсh some pockemons in you own collection.
        </p>
        <hr className="my-4"></hr>
        <p>
          Use Catch button to catch pockemon.
          Use Navigaton to redirect to "Caught pockemons" page or "Home" page.
          Click on the top of pockemon card to redirect to personal pockemon card.
        </p>
        <p>PRESS HOME BUTTON TO BEGIN</p>
      </div>
    </div>
  );
};

export default SideBar;
