// hooks/useTelegramTheme.ts
import { useEffect, useState } from 'react';
import WebApp from '@twa-dev/sdk';

export interface TelegramTheme {
  accent_text_color: string;
  bg_color: string;
  button_color: string;
  button_text_color: string;
  destructive_text_color: string;
  header_bg_color: string;
  hint_color: string;
  link_color: string;
  secondary_bg_color: string;
  section_bg_color: string;
  section_header_text_color: string;
  subtitle_text_color: string;
  text_color: string;
  isDark?: boolean;
}

export const useTelegramTheme = (): TelegramTheme => {
  const [theme, setTheme] = useState<TelegramTheme>(WebApp.themeParams as TelegramTheme);

  useEffect(() => {
    const handleThemeChange = () => {
      setTheme(WebApp.themeParams as TelegramTheme);
    };

    WebApp.onEvent('themeChanged', handleThemeChange);
    
    return () => {
      WebApp.offEvent('themeChanged', handleThemeChange);
    };
  }, [WebApp.themeParams]);

  console.log(theme.text_color,'123123123123123')

  return {
    ...theme,
    isDark: theme.bg_color === '#212121', 
  };
};