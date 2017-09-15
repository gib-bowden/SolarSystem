(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";

const solarSystem = require("./solarSystem");

const planetsContainer = document.getElementById("planets-container");

solarSystem.plantes.forEach( (planet) => {
    solarSystem.outputTo(planet, planetsContainer);
});
},{"./solarSystem":3}],2:[function(require,module,exports){
"use strict"; 

const planet = {
    name: "Mercury",
    discovered: "Prehistory",
    mass: "3.3011x10^23 kg",
    volume: "6.083x10^10",
    orbit: "57 million km",
    atmosphere: ["oxygen", "sodium", "hydrogen", "helium", "potassium"],
    satellites: null,
    probes: ["Mariner 10", "MESSENGER"]
};

module.exports = planet; 

},{}],3:[function(require,module,exports){
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
},{"./mercury.js":2,"./venus.js":4}],4:[function(require,module,exports){
"use strict"; 

const planet = {
    name: "Venus",
    discovered: "Prehistory",
    mass: "4.8675 x 10^24 kg",
    volume: "9.2843 x 10^11 km^3",
    orbit: "108 million km",
    atmosphere: ["carbon dioxide", "nitrogen"],
    satellites: null,
    probes: ["Venera", "Mariner", "Vega 1", "Vega 2", "Magellan", "Venus Express", "Akatsuki", "IKAROS"]
};

module.exports = planet; 

},{}]},{},[1]);
