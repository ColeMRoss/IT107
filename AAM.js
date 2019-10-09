var ColeObject = {
  firstName: "Cole",
  lastName: "Ross",
  age: 18,
  likesTravel: false,
  favoriteShows: ["The 100", "Game Of Thrones", "Once Upon a Time", "The Vampire Diaries", "The Originals", "Legacies"]
};

var TempArray = [61, 79, 68, 71, 900];
var months = ['Jan', 'March', 'April', 'June'];

var weatherObject = {
  temperature: ["1000", "100"],
  conditions: ["cloudy", "sunny",],
  sunriseTime: "6:00pm",
  sunsetTime: "6:30pm",
}



var highTemperatures = [55, 57, 53, 47, 56, 50];
var lowTemperatures = [33, 30, 29, 35, 31, 32];





var todaysWeather = {
  temperature: {
    high: 55,
    low: 32
  },
  conditions: "sunny",
  astronomy: {
    sunrise: "7:43 AM",
    sunset: "5:09 PM"
  }
}




var weatherForecast = [
  {
    day: "Today",
    temperature: {
      high: 55,
      low: 32
    },
    conditions: "sunny",
    astronomy: {
      sunrise: "7:43 AM",
      sunset: "5:09 PM"
    }
  },
  {
    day: "Saturday",
    temperature: {
      high: 50,
      low: 29
    },
    conditions: "cloudy",
    astronomy: {
      sunrise: "7:44 AM",
      sunset: "5:08 PM"
    }
  },
  {
    day: "Sunday",
    temperature: {
      high: 47,
      low: 35
    },
    conditions: "chance of rain",
    astronomy: {
      sunrise: "7:45 AM",
      sunset: "5:07 PM"
    }
  }
];

console.log (weather.day)







console.log(TempArray);
console.log(months);




console.log("My Favorite temperature Is " + TempArray[4] + " degrees");
console.log(ColeObject.firstName);
console.log(ColeObject.lastName);
console.log(ColeObject.age);
console.log(ColeObject.likesTravel);
console.log(ColeObject.favoriteShows);
console.log(ColeObject.favoriteShows[0]);


TempArray.push(1);
months.splice(1, 0, 'Feb');
months.splice(4, 1, 'May');


console.log(weatherObject);
console.log(weatherObject.temperature);
console.log(weatherObject.conditions);
console.log(weatherObject.sunriseTime);
console.log(weatherObject.sunsetTime);
console.log("It is currently " + weatherObject.conditions[1] + " and " + weatherObject.temperature[1] + " degrees");

console.log(highTemperatures[0]);
console.log(lowTemperatures[5]);
console.log(highTemperatures.reduce((a, b) => a + b, 0) / highTemperatures.length);
console.log(lowTemperatures.reduce((a, b) => a + b, 0) / lowTemperatures.length);


console.log(todaysWeather.temperature.high + " " + todaysWeather.conditions + " " + todaysWeather.astronomy.sunrise);



