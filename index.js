// Code your solution here:

function driversWithRevenueOver(arrayDrivers, revenue) {
  return arrayDrivers.filter (driverEntry => {return driverEntry["revenue"] > revenue})
}

function driverNamesWithRevenueOver(arrayDrivers, revenue) {
  matchingDrivers = driversWithRevenueOver(arrayDrivers, revenue)
  return matchingDrivers.map (driverEntry => {return driverEntry["name"]})
}

function exactMatch(arrayDrivers, nameHash) {
  function matchKey() {
    for (let key in nameHash) {
    return key
    }
  }
  let matchkeyVar = matchKey()
  return arrayDrivers.filter (driverEntry => {return driverEntry[matchkeyVar] === nameHash[matchkeyVar]})

}


function exactMatchToList(arrayDrivers, matchHash) {
  newArray = exactMatch(arrayDrivers, matchHash)
  return newArray.map (hashEntry => {return hashEntry["name"]})
}
