// Code your solution here:
function driversWithRevenueOver(drivers, driverRevenue) {
  return drivers.filter( (driver) => driver["revenue"] > driverRevenue)
}

function driverNamesWithRevenueOver(drivers, driverRevenue) {
  return driversWithRevenueOver(drivers, driverRevenue).map(
     (driver) => driver.name)
}

function exactMatch(drivers, obj) {
  const key = Object.keys(obj)[0]
  return drivers.filter(driver => driver[key] === obj[key])
}

function exactMatchToList(drivers, obj) {
  return exactMatch(drivers, obj).map(driver => driver.name)
}