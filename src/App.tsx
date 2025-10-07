import { Header } from "./components/Header";
import { Main } from "./components/Main";

import "./App.css";
import "react-widgets/styles.css";

import { ConfigProvider } from "antd";
import { getAntdTheme } from "./utils";
import { useTelegramTheme } from "./redux/hooks/themeHook";
import { useEffect } from "react";

function App() {
  const telegramTheme = useTelegramTheme();
  const antdTheme = getAntdTheme(telegramTheme);
  
  useEffect(() => {
    document.body.style.backgroundColor = telegramTheme.bg_color;
    document.body.style.color = telegramTheme.text_color;
    document.body.style.transition =
      "background-color 0.3s ease, color 0.3s ease";

    return () => {
      document.body.style.backgroundColor = "";
      document.body.style.color = "";
    };
  }, [telegramTheme.bg_color, telegramTheme.text_color]);

  return (
    <ConfigProvider theme={antdTheme}>
      <div className="app" style={{ backgroundColor: telegramTheme.bg_color }}>
        <Header />
        <Main />
      </div>
    </ConfigProvider>
  );
}

export default App;
