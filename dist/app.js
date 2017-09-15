(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";

const planet = {
    name: "Earth",
    discovered: {
        date: "Human origin",
        by: []
    },
    mass: "5.9724 x 10^24 kg",
    volume: "1.0832 x 10^12 km^3",
    orbit: "150 million km",
    atmosphere: ["Nitrogen", "Oxygen", "Water", "Argon", "Carbon dioxide"],
    satellites: ["Luna"],
    probes: []
};

module.exports = planet; 
},{}],2:[function(require,module,exports){
"use strict";

const planet = {
    name: "Jupiter",
    discovered: {
        date: 1610,
        by: ["Galileo Galilei"]
    },
    mass: "1.8986 x 10^27 kg",
    volume: "1.4313 x 10^15 km^3",
    orbit: "778 million km",
    atmosphere: ["Hydrogen", "Helium", "Methane", "Ammonia"],
    satellites: ['Io', 'Europa', 'Ganymede', 'Callisto', 'Amalthea', 'Himalia', 'Elara', 'Pasiphae', 'Sinope', 'Lysithea', 'Carme', 'Ananke', 'Leda', 'Thebe', 'Adrastea', 'Metis', 'Callirrhoe', 'Themisto', 'Megaclite', 'Taygete', 'Chaldene', 'Harpalyke', 'Kalyke', 'Iocaste', 'Erinome', 'Isonoe', 'Praxidike', 'Autonoe', 'Thyone', 'Hermippe', 'Aitne', 'Eurydome', 'Euanthe', 'Euporie', 'Orthosie', 'Sponde', 'Kale', 'Pasithee', 'Hegemone', 'Mneme', 'Aoede', 'Thelxinoe', 'Arche', 'Kallichore', 'Helike', 'Carpo', 'Eukelade', 'Cyllene', 'Kore', 'Herse', 'Dia'],
    probes: ["Pioneer 10", "Pioneer 11", 'Voyager 1', 'Voyager 2', 'Ulysses', 'Galileo', 'Cassini', 'New Horizons', 'Juno']
};

module.exports = planet; 
},{}],3:[function(require,module,exports){
"use strict";

const solarSystem = require("./solarSystem");

const planetsContainer = document.getElementById("planets-container");

solarSystem.planets.forEach((planet) => {
    solarSystem.outputTo(planet, planetsContainer);
});
},{"./solarSystem":8}],4:[function(require,module,exports){
"use strict";

const planet = {
    name: "Mars",
    discovered: {
        date: 1610,
        by: ["Galileo Galilei"]
    },
    mass: "6.4171 x 10^23 kg",
    volume: "1.6318 x 10^11 km^3",
    orbit: "228 million km",
    atmosphere: ['CO2', 'Argon', 'Nitrogen', 'Oxygen', 'CO'],
    satellites: ['Phobos', 'Deimos'],
    probes: ['Viking 1',' Viking 2', 'Mars Global Surveyor', 'Mars Pathfinder', 'Sojourner', '2001 Mars Odyssey', 'Mars Express', 'Spirit', 'Opportunity', 'Mars Reconnaissance Orbiter', 'Phoenix', 'Dawn', 'Curiosity', 'Mars Orbiter Mission', 'MAVEN', 'ExoMars TGO', 'Schiaparelli']
};

module.exports = planet; 
},{}],5:[function(require,module,exports){
"use strict"; 

const planet = {
    name: "Mercury",
    discovered: {
        date: 1610,
        by: ["Galileo Galilei"]
    },
    mass: "3.3011x10^23 kg",
    volume: "6.083x10^10",
    orbit: "57 million km",
    atmosphere: ["Oxygen", "Sodium", "Hydrogen", "Helium", "Potassium"],
    satellites: [],
    probes: ["Mariner 10", "MESSENGER"]
};

module.exports = planet; 
},{}],6:[function(require,module,exports){
"use strict";

const planet = {
    name: "Neptune",
    discovered: {
        date: 1846,
        by: ['Johann Galle', 'Urbain Le Verrier']
    },
    mass: "1.0243 x 10^26 kg",
    volume: "6.254 x 10^13 km^3",
    orbit: "4.5 billion km",
    atmosphere: ["Hydrogen", "Helium", "Methane"],
    satellites: ['Naiad', 'Thalassa', 'Despina', 'Galatea', 'Larissa', 'Proteus', 'Triton', 'Nereid', 'Halimede', 'Sao', 'Laomedeia', 'Psamathe', 'Neso'],
    probes: ["Voyager 2"]
};

module.exports = planet; 
},{}],7:[function(require,module,exports){
"use strict";

const planet = {
    name: "Saturn",
    discovered: {
        date: 1610,
        by: ["Galileo Galilei"]
    },
    mass: "5.6836 x 10^26 kg",
    volume: "8.2713 x 10^14 km^3",
    orbit: "1.4 billion km",
    atmosphere: ['Hydrogen', 'Helium', 'Methane'],
    satellites: ['Mimas', 'Enceladus', 'Tethys', 'Dione', 'Rhea', 'Titan', 'Hyperion', 'Iapetus', 'Phoebe', 'Janus', 'Epimetheus', 'Helene', 'Telesto', 'Calypso', 'Atlas', 'Prometheus', 'Pandora', 'Pan', 'Ymir', 'Paaliaq', 'Tarvos', 'Ijiraq', 'Suttungr', 'Kiviuq', 'Mundilfari', 'Albiorix', 'Skathi', 'Erriapus', 'Siarnaq', 'Thrymr', 'Narvi', 'Methone', 'Pallene', 'Polydeuces', 'Daphnis', 'Aegir', 'Bebhionn', 'Bergelmir', 'Bestla', 'Farbauti', 'Fenrir', 'Fornjot', 'Hati', 'Hyrrokkin', 'Kari', 'Loge', 'Skoll', 'Surtur', 'Anthe', 'Jarnsaxa', 'Greip', 'Tarqeq', 'Aegaeon'],
    probes: ['Pioneer 11', 'Voyager 1', 'Voyager 2', 'Cassini']
};

module.exports = planet; 
},{}],8:[function(require,module,exports){
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
},{"./earth.js":1,"./jupiter.js":2,"./mars.js":4,"./mercury.js":5,"./neptune.js":6,"./saturn.js":7,"./uranus.js":9,"./venus.js":10}],9:[function(require,module,exports){
"use strict";

const planet = {
    name: "Uranus",
    discovered: {
        date: 1781,
        by: ['William Herschel']
    },
    mass: "8.6810 x 10^25 kg",
    volume: "6.833 x 10^13 km^3",
    orbit: "2.9 billion km",
    atmosphere: ['Hydrogen', 'Helium', 'Methane'],
    satellites: [],
    probes: ['Voyager 2']
};

module.exports = planet; 
},{}],10:[function(require,module,exports){
"use strict"; 

const planet = {
    name: "Venus",
    discovered: {
        date: 1610,
        by: ["Galileo Galilei"]
    },
    mass: "4.8675 x 10^24 kg",
    volume: "9.2843 x 10^11 km^3",
    orbit: "108 million km",
    atmosphere: ["carbon dioxide", "nitrogen"],
    satellites: "none",
    probes: ["Venera", "Mariner", "Vega 1", "Vega 2", "Magellan", "Venus Express", "Akatsuki", "IKAROS"]
};

module.exports = planet; 

},{}]},{},[3]);
