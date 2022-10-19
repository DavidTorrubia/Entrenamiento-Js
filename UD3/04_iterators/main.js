'use strict'

const assert = require('assert').strict;

var pilots = [
  {
    id: 2,
    name: "Wedge Antilles",
    faction: "Rebels",
    years: 10
  },
  {
    id: 8,
    name: "Ciena Ree",
    faction: "Empire",
    years: 20
  },
  {
    id: 40,
    name: "Iden Versio",
    faction: "Empire",
    years: 30
  },
  {
    id: 66,
    name: "Thane Kyrell",
    faction: "Rebels",
    years: 35
  }
];

function iterateSimple(pilots) {
  for (var i = 0; i < pilots.length; i++) {
    console.log("Name: " + pilots[i].name + " | Faction: " + pilots[i].faction + " | Years: " + pilots[i].years)
  }
}
function iterateForEach(pilots) {
  pilots.forEach(element => {  console.log("Name: " + element.name + " | Faction: " + element.faction + " | Years: " + element.years)});
}
function mapIds(pilots) {
  return pilots.map(x => x.id)
}
function rebels(pilots) {
  return pilots.filter( x => x.faction === "Rebels")
}
function totalFaction(faction, pilots) {
  return pilots.filter(x => x.faction === faction).length
}
function avgYears(faction, pilots) {
  return pilots
    .filter(x => x.faction === faction)
    .reduce((a, b) => a + b.years, 0) 
    / pilots.filter(x => x.faction === faction).length
}
// use console.log
iterateSimple(pilots)
iterateForEach(pilots)
try {
  assert.deepStrictEqual(mapIds(pilots), [2,8,40,66])
  console.log("Prueba 1 - completada")
  assert.deepStrictEqual(rebels(pilots), [pilots[0], pilots[3]])
  console.log("Prueba 2 - completada")
  assert.deepStrictEqual(totalFaction('Rebels', pilots), 2)
  console.log("Prueba 3 - completada")
  assert.deepStrictEqual(avgYears('Rebels', pilots), 22.5)
  console.log("Prueba 4 - completada")
  assert.deepStrictEqual(avgYears('Empire', pilots), 25)
  console.log("Prueba 5 - completada")
} catch (error) {
  console.error(error)
}