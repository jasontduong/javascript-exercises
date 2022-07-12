const leapYears = function(year) {
    let modulos4 = year % 4;
    let modulos100 = year % 100;
    let modulos400 = year % 400;
    if ((modulos4 === 0) && ((modulos100 > 0) || modulos400 === 0) ) {
        return true
    }
    else return false;
     
};

// Do not edit below this line
module.exports = leapYears;
