const getImageName = (): string => {
  let imageNameArray: string[] = [];

  const weatherText = 
    window.localStorage.getItem("weatherText") ;

  console.log(weatherText)

  if (
    weatherText === "Cloudy" ||
    weatherText === "Mostly cloudy" ||
    weatherText === "Partly cloudy" ||
    weatherText === "Some clouds"
  ) {
    imageNameArray = [
      "cloudy/cloudy-1",
      "cloudy/cloudy-2",
      "cloudy/cloudy-3",
      "cloudy/cloudy-4",
      "cloudy/cloudy-5",
    ];
  }

  if (weatherText=== "Rainy" || weatherText === "Light rain") {
    imageNameArray = [
      "raindrops/raindrops-1",
      "raindrops/raindrops-2",
      "raindrops/raindrops-3",
      "raindrops/raindrops-4",
      "raindrops/raindrops-5",
    ];
  }

  if (
    weatherText === "Sunny" ||
    weatherText === "Partly sunny"
  ) {
    imageNameArray = [
      "sunshine/sunshine-1",
      "sunshine/sunshine-2",
      "sunshine/sunshine-3",
      "sunshine/sunshine-4",
      "sunshine/sunshine-5",
    ];
  }

  if (weatherText === "Snow") {
    imageNameArray = [
      "snowing/snowing-1",
      "snowing/snowing-2",
      "snowing/snowing-3",
      "snowing/snowing-4",
      "snowing/snowing-5",
    ];
  }

  if (weatherText === "Mist") {
    imageNameArray = [
      "misty/misty-1",
      "misty/misty-2",
      "misty/misty-3",
      "misty/misty-4",
      "misty/misty-5",
    ];
  }

  if (weatherText === "Thunderstorm") {
    imageNameArray = [
      "thunderstorm/thunderstorm-1",
      "thunderstorm/thunderstorm-2",
      "thunderstorm/thunderstorm-3",
      "thunderstorm/thunderstorm-4",
      "thunderstorm/thunderstorm-5",
    ];
  }

  if (weatherText === "Overcast") {
    imageNameArray = [
      "overcast/overcast-1",
      "overcast/overcast-2",
      "overcast/overcast-3",
      "overcast/overcast-4",
      "overcast/overcast-5",
    ];
  }

  if (weatherText === "Thundershower") {
    imageNameArray = [
      "thundershower/thundershower-1",
      "thundershower/thundershower-2",
      "thundershower/thundershower-3",
      "thundershower/thundershower-4",
      "thundershower/thundershower-5",
    ];
  }

  const imageNameIndex = Math.floor(Math.random() * imageNameArray.length);
  return `/images/${imageNameArray[imageNameIndex]}.jpg`;
};

export default getImageName;
