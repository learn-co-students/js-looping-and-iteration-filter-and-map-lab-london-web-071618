// Code your solution here:
function driversWithRevenueOver(drivers, revenue) {
    return drivers.filter(function (driver) { return driver['revenue'] >= revenue } )
}

function driverNamesWithRevenueOver(drivers, revenue) {
    return drivers.filter(function (driver) { return driver['revenue'] >= revenue } )
    .map(function (driver) { return driver.name})
}

function exactMatch(extendedDrivers, obj) {
    for (let key in obj) {
        const value = obj[key]
        const keys = key
        return extendedDrivers.filter(function (driver) { 
            return value === driver[keys]
        })
    }
}

function exactMatchToList(extendedDrivers, obj) {
    for (let key in obj) {
        const value = obj[key]
        const keys = key
        return extendedDrivers.filter(function (driver) { 
            return value === driver[keys]
        }).map(function (driver) { 
           return driver.name
        })
    }
}


// function exactMatch(extendedDrivers, obj) {
//     return extendedDrivers.filter(function (driver) { 
//         for (let key in obj) {
//             const value = obj[key]
//             if (driver[key] !== value) {
//                 return false
//             }
//         }
//         return true
//     })
// }

// function exactMatchToList(extendedDrivers, obj) {
//     const container = []
//     return extendedDrivers.filter(function (driver) { 
//         for (let name in obj) {
//             const value = obj[name]
//             if (driver[name] === value) {
//                 return container.push(driver[name])
//             }
//         }
//     })
// }