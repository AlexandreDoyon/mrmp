import React, { createContext, useState } from "react";

interface ThemeContextProps {
  children: React.ReactNode;
}

const ThemeContext = createContext({});

const ThemeContextProvider: React.FC<ThemeContextProps> = ({
  children,
}: ThemeContextProps) => {
  const [themeColor, setThemeColor] = useState("theme-violet");
  const [themeMode, setThemeMode] = useState("theme-dark");

  return (
    <ThemeContext.Provider
      value={{
        ThemeColor: themeColor,
        SetThemeColor: setThemeColor,
        ThemeMode: themeMode,
        SetThemeMode: setThemeMode,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
};

export { ThemeContext, ThemeContextProvider };
