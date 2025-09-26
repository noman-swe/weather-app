export interface WeatherFormInputs {
  place: string;
}
export type WeatherProps = {
  isResponse: boolean;
  setWeatherData: React.Dispatch<
    React.SetStateAction<{ current: any; forecast: any } | null>
  >;
};

export type WeatherInfoProps = {
  weatherData: {
    current: any;
    forecast: any;
  } | null;
  setWeatherData: React.Dispatch<
    React.SetStateAction<{
      current: any;
      forecast: any;
    } | null>
  >;
};
