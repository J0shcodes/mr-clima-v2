const getImageName = (): string => {
  let imageNameArray: string[] = [];

  const weatherInfo = JSON.parse(
    window.localStorage.getItem("weatherInfo") || "{}"
  );

  if (
    weatherInfo.WeatherText === "Cloudy" ||
    weatherInfo.WeatherText === "Mostly cloudy" ||
    weatherInfo.WeatherText === "Partly cloudy"
  ) {
    imageNameArray = [
      "cloudy/cloudy-1",
      "cloudy/cloudy-2",
      "cloudy/cloudy-3",
      "cloudy/cloudy-4",
      "cloudy/cloudy-5",
    ];
  }

  if (weatherInfo.WeatherText === "Rainy") {
    imageNameArray = [
      "raindrops/raindrops-1",
      "raindrops/raindrops-2",
      "raindrops/raindrops-3",
      "raindrops/raindrops-4",
      "raindrops/raindrops-5",
    ];
  }

  if (
    weatherInfo.WeatherText === "Sunny" ||
    weatherInfo.WeatherText === "Partly sunny"
  ) {
    imageNameArray = [
      "sunshine/sunshine-1",
      "sunshine/sunshine-2",
      "sunshine/sunshine-3",
      "sunshine/sunshine-4",
      "sunshine/sunshine-5",
    ];
  }

  if (weatherInfo.WeatherText === "Snow") {
    imageNameArray = [
      "snowing/snowing-1",
      "snowing/snowing-2",
      "snowing/snowing-3",
      "snowing/snowing-4",
      "snowing/snowing-5",
    ];
  }

  if (weatherInfo.WeatherText === "Mist") {
    imageNameArray = [
      "misty/misty-1",
      "misty/misty-2",
      "misty/misty-3",
      "misty/misty-4",
      "misty/misty-5",
    ];
  }

  if (weatherInfo.WeatherText === "Thunderstorm") {
    imageNameArray = [
      "thunderstorm/thunderstorm-1",
      "thunderstorm/thunderstorm-2",
      "thunderstorm/thunderstorm-3",
      "thunderstorm/thunderstorm-4",
      "thunderstorm/thunderstorm-5",
    ];
  }

  const imageNameIndex = Math.floor(Math.random() * imageNameArray.length);
  return `/images/${imageNameArray[imageNameIndex]}.jpg`;
};

export default getImageName;
