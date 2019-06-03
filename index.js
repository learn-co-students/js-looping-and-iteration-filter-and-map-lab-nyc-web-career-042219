// Code your solution here:
function driversWithRevenueOver(driver_array,revenue){
    return driver_array.filter(driver => driver.revenue > revenue);

}
function driverNamesWithRevenueOver(driver_array,rev){
    return driversWithRevenueOver(driver_array,rev).map(driver => driver.name);
}
function exactMatch(objects,matcher){
    return objects.filter(function(object){
        let matches = false
        for (const key in matcher){
        matches = object[key] === matcher[key]
    }
    return matches
    })
    
}
function exactMatchToList(objects,matcher){
    return exactMatch(objects,matcher)
    .map(function(driver){
        return driver.name
    })
}
