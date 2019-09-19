
const driversWithRevenueOver = (drivers, revenue) => {
    return drivers.filter(driver => {
        return driver.revenue > revenue;
    });
}

const driverNamesWithRevenueOver = (drivers, revenue) => {
    return driversWithRevenueOver(drivers, revenue).map(driver => {
        return driver.name;
    })
}

const exactMatch = (drivers, match) => {
    return drivers.filter(driver => {
        let matches = false;

        for (const key in match) {
            matches = driver[key] === match[key]
        }
        return matches;
    })
}

const exactMatchToList = (drivers, match) => {
    return exactMatch(drivers, match).map(driver => {
        return driver.name;
    });
}