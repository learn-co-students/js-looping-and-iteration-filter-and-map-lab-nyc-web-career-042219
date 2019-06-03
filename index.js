const drivers = [];
const extendedDrivers = [];

function driversWithRevenueOver(arr, num){
    return arr.filter(elem => elem.revenue>num);
};

function driverNamesWithRevenueOver(arr, num){
    let result = driversWithRevenueOver(arr, num);
    return result.map(elem => elem.name);
};

function exactMatch(arr, obj){
    const k = Object.keys(obj)[0]; //Object.keys returns arr
    const v = obj[k];
    return arr.filter(elem => elem[k]===v);
};

function exactMatchToList(arr, obj){
    let result = exactMatch(arr, obj);
    return result.map(elem => elem.name);
};