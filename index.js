// Code your solution here:
function driversWithRevenueOver(drivers, amount){
  const result = drivers.filter(driver => driver.revenue > amount);
  return result
}

function driverNamesWithRevenueOver(drivers, amount){
  const result = drivers.filter(driver => driver.revenue > amount);
  const answer = result.map(x => x.name);
  return answer
}

function exactMatch(drivers,match){
  let call = Object.keys(match)
  const result = drivers.filter(driver => driver[call] === match[call]);
  return result
}

function exactMatchToList(drivers,match) {
  let result = exactMatch(drivers, match)
  return result.map(x => x.name)
}
