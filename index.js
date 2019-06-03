// Code your solution here:
function driversWithRevenueOver(drivers, revenue){
    return drivers.filter (function(driver){
        return driver.revenue > revenue
    })
}

function driverNamesWithRevenueOver(driver, revenue){
    return driversWithRevenueOver(driver, revenue).map(function(driver){
        return driver.name;
    })
}

function exactMatch(drivers, object){
    return drivers.filter (function(driver){
        for (let key in object){
            return driver[key] === object[key]
        }
    })
}

function exactMatchToList(drivers, object){
    return exactMatch(drivers, object).map(function(driver){
        return driver.name;
    })
}




//   function exactMatch (drivers, matcher) {
//     return drivers.filter(function (driver) {
//       let matches = false;
  
//       for (const key in matcher) {
//         matches = driver[key] === matcher[key];
//       }
  
//       return matches;
//     });
//   }
  
//   function exactMatchToList (drivers, matcher) {
//     return exactMatch(drivers, matcher)
//       .map(function (driver) {
//         return driver.name;
//       });
//   }