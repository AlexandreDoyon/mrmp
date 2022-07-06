export interface SetTheme {
  SetThemeColor: React.Dispatch<React.SetStateAction<string>>;
  SetThemeMode: React.Dispatch<React.SetStateAction<string>>;
}

export interface Theme {
  ThemeColor: string;
  ThemeMode: string;
}
