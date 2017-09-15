"use strict";

const solarSystem = require("./solarSystem");

const planetsContainer = document.getElementById("planets-container");

solarSystem.planets.forEach((planet) => {
    solarSystem.outputTo(planet, planetsContainer);
});