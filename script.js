// function should filter the results by user's input of city name typed in the search bar
function filterByCity(targetCity, listingCityArray) {
  // make a results array to store all the indices
  let matchingIndices = [];
  // do a loop  all the items in the listingCityArray
  for (let i = 0; i < listingCityArray.length; i++) {
    // while looping, check each item/city is the same as the targetCity (avoid caps, .toLowerCase())
    if (listingCityArray[i].toLowerCase() === targetCity.toLowerCase()) {
      // if they are the same, store the index of the current city in the results array
      matchingIndices.push(i);
    }
    // return the results
  }
  return matchingIndices;
}
// filterByCityTest();

// this function takes the slider option for min and max price and filter the price
function filterByPrice(minPrice, maxPrice, listingPriceArray) {
  // Note: Comment out the following line when you start working on this function!
  // make results array to store all indices
  let matchingIndices = [];
  // go through/loop through all items in listingPriceArray
  // Set up a for loop to go through each item in listingPriceArray.
  for (let i = 0; i < listingPriceArray.length; i++) {
    if (listingPriceArray[i] >= minPrice && listingPriceArray[i] <= maxPrice) {
      matchingIndices.push(i);
    }
  }
  // return the matchingIndices
  return matchingIndices;
}
// filterByPriceTest();

// return an array of index numbers between those prices
// return [...listingPriceArray.keys()];

// LevelUp!
function filterByTypes(targetTypes, listingTypeArray) {
  // // Note: Comment out the following line when you attempt the LevelUp!
  // let matchingIndices = [];
  // for (let i = 0; i < listingTypeArray.length; i++) {
  //   if (targetTypes.includes(listingTypeArray[i])) {
  //     matchingIndices.push(i);
  //   }
  //   return matchingIndices;
  // }
  return [...listingTypeArray.keys()];
}
