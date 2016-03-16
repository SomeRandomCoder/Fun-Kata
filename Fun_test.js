var assert= require("assert");
var EFT = require("./Fun.js");

describe("converting",function() {
  it("remove all punctuation from the string and place it in an array", function() {
    var result = EFT.converting("8 burgers, drank 17 beers and 11 fanta's");
    assert.deepEqual(result, ['8', '17', '11']);

  })

})



// describe("burgerTotal",function() {
//   it("should calculate the total price for all the burgers ate the previous night", function() {
//     var result = EFT.burgerTotalcal("8 burgers, drank 17 beers and 11 fanta's");
//     assert.equal(result, "296");
//
//   })
//
// })
