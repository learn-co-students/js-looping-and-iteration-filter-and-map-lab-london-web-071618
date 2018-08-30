// Code your solution here:
const driversWithRevenueOver = (drivers, value) => {
    return drivers.filter (driver => driver.revenue > value)
}


const driverNamesWithRevenueOver = (drivers, value) => {
    return driversWithRevenueOver(drivers, value)
   .map (driver => driver.name)
 }


const exactMatch = (drivers, obj) => {
    return drivers.filter (driver => {
      return Object.keys(obj)
        .filter(key => driver[key] === obj[key])
        .length > 0
     })
}


const exactMatchToList = (drivers, obj) => {
  return exactMatch(drivers, obj)
  .map (driver => driver.name)
}
