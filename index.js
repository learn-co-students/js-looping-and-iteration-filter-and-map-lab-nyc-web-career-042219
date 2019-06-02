// Code your solution here:
function driversWithRevenueOver(obj, num){
	return obj.filter(function(el){
		return el.revenue > num;
	});
}

function  driverNamesWithRevenueOver(obj, num){
	return driversWithRevenueOver(obj, num).map(function(el){
		return el.name;
	});
	
}


function exactMatch(drivers, obj_attr){
	return drivers.filter(function(el){
		for (const key in obj_attr) {
			return obj_attr[key] === el[key]
		}
	});
}

function  exactMatchToList(drivers, obj_attr){
	return exactMatch(drivers, obj_attr).map(function(el){
		for (const key in el) {
			return el[key];
		}
	});
}