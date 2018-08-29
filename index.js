// Code your solution here:

function driversWithRevenueOver(collection, revenue) {
  return collection.filter(function(driver) {
    return driver.revenue > revenue
  })
}

function driverNamesWithRevenueOver(collection, revenue) {
  let filteredDrivers = driversWithRevenueOver(collection, revenue);
  return filteredDrivers.map(driver => driver.name)
}

function exactMatch(collection, obj) {
  let objKey = Object.keys(obj)
  return collection.filter(function(driver) {
    return driver[objKey] === obj[objKey]
  })
}

function exactMatch(collection, obj) {
  let objKey = Object.keys(obj)
  return collection.filter(function(driver) {
    return driver[objKey] === obj[objKey]
  })
}

function exactMatchToList(collection, obj) {
  return exactMatch(collection, obj).map(driver => driver.name)
}
