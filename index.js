// Code your solution here:

function driversWithRevenueOver(drivers, revenue) {
  let newDrivers = drivers.filter(driver => driver.revenue > revenue)
  return newDrivers;
}

function driverNamesWithRevenueOver(drivers, revenue) {
  let newDrivers = driversWithRevenueOver(drivers, revenue)
  let driverNames = newDrivers.map(driver => driver.name)
  return driverNames;
}

function exactMatch(drivers, obj) {
  let matches = drivers.filter(function(driver) {
    for (const key in obj) {
      return driver[key] === obj[key];
    }
  })
  return matches;
}

function exactMatchToList(drivers, obj) {
  let matches = exactMatch(drivers, obj);
  let matchList = matches.map(driver => driver.name);
  return matchList;
}
