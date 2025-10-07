import WebApp from "@twa-dev/sdk";

import { Header } from "./components/Header";
import { Main } from "./components/Main";

import "./App.css";
import "react-widgets/styles.css";

function App() {
  console.log(WebApp.initData);

  return (
    <div className="app">
      <Header />
      <Main />
    </div>
  );
}

export default App;
