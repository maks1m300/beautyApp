import { Main } from "./components/Main";

import { ConfigProvider } from "antd";
import { getAntdTheme } from "./utils";
import { useTelegramTheme } from "./redux/hooks/themeHook";
import { useEffect } from "react";

import dayjs from "dayjs";
import ruRU from "antd/locale/ru_RU";

import "dayjs/locale/ru";
import "./App.css";
import "react-widgets/styles.css";
import { useUser } from "./redux";

dayjs.locale("ru");

function App() {
  const telegramTheme = useTelegramTheme();
  const antdTheme = getAntdTheme(telegramTheme);

  const { userName } = useUser();

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
    <ConfigProvider theme={antdTheme} locale={ruRU}>
      <div className="app" style={{ backgroundColor: telegramTheme.bg_color }}>
        <Main />
      </div>
    </ConfigProvider>
  );
}

export default App;
