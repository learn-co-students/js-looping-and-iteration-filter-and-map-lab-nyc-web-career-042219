import { DH_NOT_SUITABLE_GENERATOR } from "constants";

function driversWithRevenueOver(drivers, revenue) {
    let newArray = drivers.filter(function(driver){
        return driver.revenue > revenue
    })
    return newArray
}


function driverNamesWithRevenueOver(drivers, revenue) {
    let newArray = drivers.filter(function(driver){
        return driver.revenue > revenue
    })
    const nameArray = newArray.map(driver => {
        return driver.name;
    });
    return nameArray
}

function exactMatch(drivers, object) {
    return drivers.filter(function(driver) {
      for(let key in object) {
        return driver[key] == object[key]
      }
    })
  }
  
  function exactMatchToList(drivers, object) {
    return exactMatch(drivers, object).map(driver => driver.name);
  }