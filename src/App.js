import React from "react";
import Navigator from "./Navigator";
import Home from "./Home";
import YourWeather from "./YourWeather";

class App extends React.Component {
  render() {
    return (
      <div>
        <Navigator />
        <Home />
        <YourWeather />
      </div>
    );
  }
}
export default App;

// api.openweathermap.org/data/2.5/weather?q=Sydney&APPID=48f41c1f76a9895f24b2d957edfb5111
