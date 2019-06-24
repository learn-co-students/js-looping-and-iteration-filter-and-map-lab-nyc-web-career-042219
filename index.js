// Code your solution here:

function driversWithRevenueOver(drivers, revenue) {
  return drivers.filter(driver => driver.revenue > revenue);
}

function driverNamesWithRevenueOver(drivers, revenue) {
  return driversWithRevenueOver(drivers, revenue).map(driver => driver.name);
}

function exactMatch(drivers, obj) {
  let result = drivers.slice();
  for (const condition in obj) {
    result = result.filter(driver => driver[condition] == obj[condition]);
  }
  return result;
}

function exactMatchToList(drivers, obj) {
  return exactMatch(drivers, obj).map(driver => driver.name);
}
