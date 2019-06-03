// Code your solution here:
function driversWithRevenueOver(drivers, revenue) {
  return drivers.filter(driver => driver.revenue > revenue)
}

function driverNamesWithRevenueOver(drivers, revenue) {
  return driversWithRevenueOver(drivers,revenue).map(driver => driver.name)
}

function exactMatch(drivers, obj) {
  return drivers.filter(function(driver) {
    for(let key in obj) {
      return driver[key] == obj[key]
    }
  })
}

function exactMatchToList(drivers, obj) {
  return exactMatch(drivers, obj).map(driver => driver.name);
}