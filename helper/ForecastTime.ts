// Returns an array of forecast time
const getForecastTimeArray = (forecasts: any[] | undefined): string[] => {
  let forecastTimeArray: string[] = [];
  if (forecasts) {
    forecasts.map((forecast) => {
      const date = new Date(forecast.DateTime);
      const am_pmArray = date.toLocaleTimeString().split(" ");
      const am_pm = am_pmArray[1];
      const hour = date.getHours();
      const minute = String(date.getMinutes()).padStart(2, "0");
      const forecastTime = `${hour}:${minute} ${am_pm}`;
      forecastTimeArray.push(forecastTime);
    });
  }

  return forecastTimeArray;
};

export default getForecastTimeArray
