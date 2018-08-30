// Code your solution here:
function driversWithRevenueOver(list, rev) {
  return list.filter(function (driver) {
  if (driver.revenue > rev) {
    return driver
    }
  } );
}

function driverNamesWithRevenueOver(list, rev) {
  return driversWithRevenueOver(list, rev)
  .map(function (driver) {
      return driver.name;
    });
}

function exactMatch(list, attr) {
  return list.filter(function (driver) {
    let drive = '';

    for (const key in attr) {
      drive = driver[key] === attr[key];
    }
    return drive
  });
}

function exactMatchToList(list, attr) {
  return exactMatch(list, attr)
  .map(function (driver) {
    return driver.name;
  });
}
