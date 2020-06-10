/*
*
*
*       Complete the handler logic below
*       
*       
*/
function firstCharIndex(str) {
  let regex = /[a-zA-Z]/;
  return str.search(regex);
}

function ConvertHandler() {
  
  this.getNum = function(input) {
    let num = input.slice(0, firstCharIndex(input));
    if (num.length === 0) { return 1 }
    if (num.match(/\//g) && num.match(/\//g).length > 1) { return 'invalid number'} // number of '/' should be <= 1
    return num;
  };
  
  this.getUnit = function(input) {
    var validInput = ['gal','l','mi','km','lbs','kg','GAL','L','MI','KM','LBS','KG'];
    let unit = input.slice(firstCharIndex(input))
    if (validInput.indexOf(unit) < 0) { return 'invalid unit'}
    return unit;
  };
  
  this.getReturnUnit = function(initUnit) {
    let from = ['gal','l','mi','km','lbs','kg'];
    let to   = ['l','gal','km','mi','kg','lbs'];
    let i = from.indexOf(initUnit.toLowerCase());
    let result = to[i];
    return result;
  };

  this.spellOutUnit = function(unit) {
    let input = ['gal', 'l', 'mi', 'km', 'lbs', 'kg'];
    let expect = ['gallon', 'liter', 'mile', 'kilometer', 'pound', 'kilogram'];
    let i = input.indexOf(unit);
    
    
    return expect[i];
  };
  
  this.convert = function(initNum, initUnit) {
    const galToL = 3.78541;
    const lbsToKg = 0.453592;
    const miToKm = 1.60934;
    var result;    
    switch(initUnit.toLowerCase()) {
      case 'gal':
        result = initNum * galToL;
        break;
      case 'l':
        result = initNum / galToL;
        break;
      case 'mi':
        result = initNum * miToKm;
        break;
      case 'km':
        result = initNum / miToKm;
        break;
      case 'lbs':
        result = initNum * lbsToKg;
        break;
      case 'kg':
        result = initNum / lbsToKg;
        break;
    }
    
    return result;
  };
  
  this.getString = function(initNum, initUnit, returnNum, returnUnit) {
    // 1 kilograms converts to 2.20462 pounds
    // 33 gallons converts to 124.91853 liters
    var result = `${initNum} ${this.spellOutUnit(initUnit)} converts to ${returnNum} ${this.spellOutUnit(returnUnit)}`
    return result;
  };
  
}

module.exports = ConvertHandler;
