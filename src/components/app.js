import { h } from "preact";

// Code-splitting is automated for `routes` directory
import Home from "../routes/home";

const App = () => (
  <div id="app">
    <Home />
  </div>
);

export default App;
