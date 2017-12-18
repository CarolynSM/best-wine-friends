var assert = require("assert");
var app = require("../app");

describe("app", ()=> {
  describe("#matchFlavorToFood", ()=> {
    var flavors = [
      {
        flavorId: 1,
        ingredientId: 1,
        profile: "Earthy and Savory",
        description: "root vegetables, mushrooms, lentils"
      }, {
        flavorId: 14,
        ingredientId: 5,
        profile: "Complex",
        description: "cumin, harissa, chili, blue cheese..."
      }];
    var foodId = 1;
    it("returns the flavors for the corresponding foodId", ()=> {
      assert.deepEqual(app.matchFlavorToFood(flavors, foodId), [{
        flavorId: 1,
        ingredientId: 1,
        profile: "Earthy and Savory",
        description: "root vegetables, mushrooms, lentils"
      }]);
    });
  });
  describe("#matchWineToFlavor", ()=> {
    var wine = [
      {
        wine: "Cava",
        pairings: [6]
      }, {
        wine: "Riesling",
        pairings: [3]
      }, {
        wine: "Sauvignon Blanc",
        pairings: [4, 6, 7]
      }
    ];
    var flavorId = 6;
    it("returns the wins that pair with the flavorId", ()=> {
      assert.deepEqual(app.matchWineToFlavor(wine, flavorId), [{
        wine: "Cava", 
        pairings: [ 6 ]
      },{
        wine: "Sauvignon Blanc",
        pairings: [ 4, 6, 7 ]
      }]);
    });
  });
});
