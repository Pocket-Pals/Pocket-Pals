import { useEffect, useState } from "react";
import axios from "axios";

export default function test() {
  const [weather, setWeather] = useState();
  const [test, setTest] = useState("test");
  async function getWeather() {
    const location = "vancouver";
    const units = "metric";
    const apiKey = process.env.NEXT_PUBLIC_WEATHER_API;
    const lang = "en";
    const response = await axios.get(
      `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=${units}&lang=${lang}&appid=${apiKey}`
    );
    console.log(response.data);
    setWeather(response.data);
  }

  useEffect(() => {
    getWeather();
  }, []);

  return (
    <>
      <h1>Test</h1>
      <h2>{weather?.name}</h2>
      <h3>{weather?.main.temp}</h3>
      <h3>{weather?.weather[0].description}</h3>
    </>
  );
}

// export async function getServerSideProps() {
//   const location = "vancouver";
//   const units = "metric";
//   const apiKey = process.env.NEXT_PUBLIC_WEATHER_API;
//   const lang = "en";
//   const response = await axios.get(
//     `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=${units}&lang=${lang}&appid=${apiKey}`
//   );
//   console.log(response.data);
//   return {
//     props: {
//       data: response.data,
//     },
//   };
// }
