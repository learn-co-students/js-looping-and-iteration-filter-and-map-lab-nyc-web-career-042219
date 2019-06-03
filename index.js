// Code your solution here:
function driversWithRevenueOver(drivers, revenue) {
    const result = drivers.filter(driver => driver.revenue > revenue);
    return result;
}

function driverNamesWithRevenueOver(drivers, revenue) {
    const filtered = driversWithRevenueOver(drivers, revenue);
    const result = filtered.map(obj => obj.name);
    return result;
}

function exactMatch(drivers, obj) {
    const k = Object.keys(obj)[0];
    const v = Object.values(obj)[0];
    const result = drivers.filter(driver => driver[k] === v);
    return result;
}

function exactMatchToList(drivers, obj) {
    const filtered = exactMatch(drivers, obj);
    const result = filtered.map(obj => obj.name);
    return result;
}