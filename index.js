// Code your solution here:

function driversWithRevenueOver(drivers, limit){
    
    return drivers.filter(driver => driver.revenue > limit);

    
}

function driverNamesWithRevenueOver(drivers, limit){
    let driversOverLimit = [];
    driversOverLimit = drivers.filter(driver => driver.revenue > limit);
    return driversOverLimit.map(driver => driver.name);
}

function exactMatch(drivers, obj){

    let property = Object.keys(obj);
    const driverMatches = drivers.filter(function (driver){
    return driver[property] === obj[property]
  })
  return driverMatches
}

function exactMatchToList(drivers, obj){
    let property = Object.keys(obj);
    const driverMatches = drivers.filter(function (driver){
    return driver[property] === obj[property]
  })
  
  return driverMatches.map(driver => driver.name)
}
