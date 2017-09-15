"use strict";

const earth = require("./earth.js");
const jupiter = require("./jupiter.js");
const mars = require("./mars.js");
const mercury = require("./mercury.js");
const neptune = require("./neptune.js");
const saturn = require("./saturn.js");
const uranus = require("./uranus.js");
const venus = require("./venus.js");

const outputTo = (object, domElement) => {
    domElement.innerHTML += 
    `<div>
        <h3>Name: ${object.name}</h3>
        <p>Discovered date: ${object.discovered.date}</p>
        <p>Discovered by: ${object.discovered.by}</p>
        <p>Mass: ${object.mass}</p>
        <p>Volume: ${object.volume}</p>
        <p>Orbit: ${object.orbit}</p>
        <p>Atmosphere: ${object.atmosphere.join(", ")}</p>
        <p>Satellites: ${object.satellites.join(", ")}</p>
        <p>Probes: ${object.probes.join(", ")}</p>
    </div>`;
};

const solarSystem = {
    planets: [earth, jupiter, mars, mercury, neptune, saturn, uranus, venus],
    outputTo
};

module.exports = solarSystem; 