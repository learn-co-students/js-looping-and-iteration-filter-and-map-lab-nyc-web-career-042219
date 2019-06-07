// Code your solution here:
function driversWithRevenueOver(drivers, revenue) {
  return drivers.filter(driver => driver.revenue > revenue);
}
function driverNamesWithRevenueOver(drivers, revenue) {
  return driversWithRevenueOver(drivers, revenue).map(driver => {
    return driver.name;
  });
}
function exactMatch(drivers, driverObj) {
  return drivers.filter(function (driver) {
    for (const key in driverObj) {
      return driverObj[key] === driver[key];
    }
  });
}
function exactMatchToList(drivers, driverObj) {
  return exactMatch(drivers, driverObj).map(driver => {
    return driver.name;
  });
}
