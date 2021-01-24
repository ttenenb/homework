export interface Weather{
  name: string;
  description: string;
  icon: string;
}

export interface WeatherServer{
  name: string;
  main: {
    temp:number
  }
  weather: [
    {
      description: string,
      icon: string;
    }
  ]
}
