export const getTimezone = (timezoneOffset: number) => {
    const localTime = new Date(Date.now() + timezoneOffset * 1000);

    const options: Intl.DateTimeFormatOptions = {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric",
    };

    const localDateStr = localTime.toLocaleDateString("en-US", options);
    //   console.log("Local Date & Day:", localDateStr);

    return localDateStr;
};

export const formatTime = (dtTxt: string): string => {
    const date = new Date(dtTxt);
    return date.toLocaleString("en-US", {
        hour: "numeric",
        hour12: true
    });
};

export const getHourlyForecast = (weatherData: any) => {
    return weatherData?.forecast?.list.slice(0, 5).map((item: any) => ({
        time: formatTime(item.dt_txt),
        temp: item.main.temp
    }));
};