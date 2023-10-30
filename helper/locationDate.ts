const setLocationDate = (localeDate: string): string => {
  const today = new Date(localeDate);

  const month = today.toLocaleString("en-US", { month: "short" });
  const year = today.toLocaleString("en-US", { year: "numeric" });
  const day = today.toLocaleString("en-US", { day: "numeric" });
  const dayOfTheWeek = today.toLocaleString("en-US", { weekday: "long" });

  const locationDate = `${dayOfTheWeek} | ${day} ${month} ${year}`;
  return locationDate;
};

export default setLocationDate;
