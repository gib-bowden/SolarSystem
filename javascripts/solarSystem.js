"use strict";

const mercury = require("./mercury.js");
const venus = require("./venus.js");

const outputTo = (object, domElement) => {
    domElement.innerHTML += 
    `<div>
        <h3>Name: ${object.name}</h3>
        <p>Discovered: ${object.discovered}</p>
        <p>Mass: ${object.mass}</p>
        <p>Volume: ${object.volume}</p>
        <p>Orbit: ${object.orbit}</p>
        <p>Atmosphere: ${object.atmosphere}</p>
        <p>Satellites: ${object.satellites}</p>
        <p>Probes: ${object.probes}</p>
    </div>`;
};

const solarSystem = {
    plantes: [mercury, venus],
    outputTo
};

module.exports = solarSystem; 