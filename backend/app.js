var express = require("express");
var cors = require("cors");
var foodFile = require("./food");
var food = foodFile.food;
var flavorsFile = require("./flavors.js");
var flavors = flavorsFile.flavors;
var wineFile = require("./wine.js");
var wine = wineFile.wine;
var app = express();
var bodyParser = require("body-parser");

app.use(cors());
app.use(bodyParser.json());

function matchFlavorToFood(flavors, foodId) {
  return flavors.filter(item => {
    return item.ingredientId == foodId;
  });
}

function mergeFoodAndFlavors(food, flavors) {
  return food.map(foodItem => {
    return {
      id: foodItem.id,
      ingredient: foodItem.ingredient,
      flavors: matchFlavorToFood(flavors, foodItem.id),
      imgSrc: foodItem.imgSrc
    };
  });
}

app.get("/food", (request, response) => {
  response.json(food);
});

app.get("/wine",  (request, response) => {
  response.json(wine);
});

app.get("/flavors", (request, response) => {
  response.json(flavors);
});

app.get("/food-flavors", function(request, response) {
  response.json(mergeFoodAndFlavors(food, flavors));
});

app.post("/wine", (request, response) => {
  wine.push(request);
});

app.listen(process.env.PORT || 3000);

module.exports = {
  matchFlavorToFood,
  mergeFoodAndFlavors,
};
