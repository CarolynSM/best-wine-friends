var foodAndFlavorsUrl = "http://best-wine-friends.herokuapp.com/food-flavors";
var wineUrl = "http://best-wine-friends.herokuapp.com/wine";
var mainIngredient = document.querySelector("#main-ingredient");
var flavorProfile = document.querySelector("#flavor-profile");
var foodAndFlavors = [];
var button = document.querySelector(".submit");
var pairingDiv = document.querySelector(".wine-pairing");
var mainImg = document.querySelector(".main-dish-img");

fetch(foodAndFlavorsUrl)
  .then(response => {
    return response.json();
  })
  .then(response => {
    console.log(response);
    response.forEach(ingredient => {
      var option = document.createElement("option");
      option.id = ingredient.imgSrc;
      option.innerHTML = ingredient.ingredient;
      mainIngredient.appendChild(option);
      foodAndFlavors.push(ingredient);
    });
  });

mainIngredient.addEventListener("change", function(event) {
  flavorProfile.options.length = 0;
  var currentIngredient = mainIngredient.options[mainIngredient.selectedIndex].value;
  for(var i=0; i<foodAndFlavors.length; i++) {
    if(currentIngredient == foodAndFlavors[i].ingredient) {
      foodAndFlavors[i].flavors.forEach(flavor => {
        var option = document.createElement("option");
        option.id = flavor.flavorId;
        option.innerHTML = flavor.profile;
        flavorProfile.appendChild(option);
      });
    }
  }
});
