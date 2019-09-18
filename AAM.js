var ColeObject = {
    firstName: "Cole",
    lastName: "Ross",
    age: 18,
    likesTravel: false,
    favoriteShows: ["The 100", "Game Of Thrones", "Once Upon a Time", "The Vampire Diaries", "The Originals", "Legacies"]   
  };

  var TempArray = [61, 79, 68, 71, 900];
  var months = ['Jan', 'March', 'April', 'June'];
  
 
 
 
  console.log(TempArray);
  console.log(months);
  console.log(ColeObject);
  console.log ("My Favorite temperature Is " + TempArray[4] + " degrees");
  
  TempArray.push (1);
  months.splice(1, 0, 'Feb');
  months.splice(4, 1, 'May');