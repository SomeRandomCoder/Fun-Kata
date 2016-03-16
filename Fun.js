exports.converting = function(str){

  "8 burgers, drank 17 beers and 11 fanta's"

var step1 = str.split(", ").join(",").replace ( /[^\d-\,]/g, ',' );
var step2 = step1.split(',').join(' ').split("").join("");
var step3 = step2.split(" ").join("");

console.log(step3);
  return step3;
};
