// returns an array of metric temperatures from forecasts

const getMetricTemperatureArray = (forecasts: any[] | undefined): string[] => {
  let metricTemperatureArray: string[] = [];

  if (forecasts) {
    forecasts.map((forecast) => {
      const metricTemperature = (forecast.Temperature.Value - 32) * 5/9
      console.log(metricTemperature)
      metricTemperatureArray.push(metricTemperature.toFixed(1));
    });
  }

  return metricTemperatureArray;
};

export default getMetricTemperatureArray;
